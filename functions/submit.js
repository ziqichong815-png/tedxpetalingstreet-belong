/**
 * Cloudflare Pages Function — POST /submit
 *
 * Required environment variables (set in Cloudflare Pages dashboard):
 *   NOTION_API_KEY      — Your Notion integration token (secret_...)
 *   NOTION_DATABASE_ID  — 37ef0671bf648042bad3000bcaa19809
 */

const NOTION_VERSION = '2022-06-28';
const NOTION_API     = 'https://api.notion.com/v1/pages';

const CORS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: CORS });
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const json = (body, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { ...CORS, 'Content-Type': 'application/json' },
    });

  // ── Parse body ──────────────────────────────────────────────
  let data;
  try {
    data = await request.json();
  } catch {
    return json({ success: false, error: 'Invalid JSON' }, 400);
  }

  const {
    name            = '',
    community       = '',
    brand           = '',
    reason          = '',
    partnershipTypes = [],
    knowContact     = false,
    contactName     = '',
    contactPhone    = '',
    contactEmail    = '',
    willingToIntro  = false,
  } = data;

  if (!name || !brand) {
    return json({ success: false, error: 'Missing required fields' }, 400);
  }

  // ── Build Notion page properties ────────────────────────────
  // Property names must match the database schema exactly,
  // including trailing spaces in '你的姓名  '.
  const properties = {
    // Title (page identifier in Notion)
    'Question 1': {
      title: [{ text: { content: `${brand} — referred by ${name}`.slice(0, 2000) } }],
    },

    // Referrer details
    '你的姓名  ': {
      rich_text: [{ text: { content: name } }],
    },
    '你是来自哪个小组？': {
      multi_select: community ? [{ name: community }] : [],
    },

    // Brand details
    '你想推荐的品牌/公司名称': {
      rich_text: [{ text: { content: brand } }],
    },

    // Partnership types
    '你觉得他们可能会对哪些合作形式感兴趣？': {
      multi_select: partnershipTypes.map(t => ({ name: t })),
    },

    // Contact knowledge
    '你是否认识品牌内的负责人？': {
      checkbox: knowContact,
    },
    '你是否认识品牌内的负责人？ (1)': {
      multi_select: [{ name: knowContact ? 'Yes' : 'No' }],
    },
    '我不认识，我只是推荐而已': {
      checkbox: !knowContact,
    },

    // Willingness to intro
    '你愿意协助我们进行介绍吗？': {
      multi_select: knowContact
        ? [{ name: willingToIntro ? 'YES' : 'Prefer TEDx to approach directly' }]
        : [],
    },
  };

  // Contact phone (text field)
  if (contactPhone) {
    properties['可以提供他的电话嘛'] = {
      rich_text: [{ text: { content: contactPhone } }],
    };
  }

  // Contact email (email field — only include when non-empty)
  if (contactEmail) {
    properties['联系人电邮'] = { email: contactEmail };
  }

  // ── Page body (reason + contact name as blocks) ─────────────
  const children = [];

  if (reason) {
    children.push({
      object: 'block',
      type: 'paragraph',
      paragraph: {
        rich_text: [{
          type: 'text',
          text: { content: `Why they belong here:\n\n${reason}` },
        }],
      },
    });
  }

  if (contactName) {
    children.push({
      object: 'block',
      type: 'paragraph',
      paragraph: {
        rich_text: [{
          type: 'text',
          text: { content: `Contact person: ${contactName}` },
        }],
      },
    });
  }

  // ── Call Notion API ──────────────────────────────────────────
  let notionRes;
  try {
    notionRes = await fetch(NOTION_API, {
      method: 'POST',
      headers: {
        Authorization:    `Bearer ${env.NOTION_API_KEY}`,
        'Notion-Version': NOTION_VERSION,
        'Content-Type':   'application/json',
      },
      body: JSON.stringify({
        parent:   { database_id: env.NOTION_DATABASE_ID },
        properties,
        children,
      }),
    });
  } catch (err) {
    console.error('[TEDx] Notion fetch error:', err);
    return json({ success: false, error: 'Network error reaching Notion' }, 502);
  }

  if (!notionRes.ok) {
    const errBody = await notionRes.text();
    console.error('[TEDx] Notion API error:', notionRes.status, errBody);
    return json({ success: false, error: 'Notion API error' }, 502);
  }

  return json({ success: true });
}
