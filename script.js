/* ================================================================
   TEDxPetalingStreet — belong.tedxpetalingstreet.com
   script.js  |  Bilingual (ZH default / EN toggle)
================================================================ */

'use strict';

// ────────────────────────────────────────────────────────────────
// TRANSLATIONS
// ────────────────────────────────────────────────────────────────
const i18n = {
  zh: {
    // Nav
    'nav.cta': '推荐品牌',

    // Nav / Sticky
    'sticky.cta':   '推荐一个品牌 →',

    // Hero
    'hero.label':   'ROOTS · 追本溯源',
    'hero.line1':   '你认识一个',
    'hero.line2':   '<em>属于这里的品牌吗？</em>',
    'hero.tagline': 'Ideas Change Everything',
    'hero.meta':    'TEDxPetalingStreet 2026 · 10月10日（周六）<br class="mob-br">吉隆坡马华大厦',
    'hero.cta':     '推荐一个品牌',

    // Stats
    'stat.0.label': '年策展历程',
    'stat.1.label': '位讲者登台',
    'stat.2.label': '位现场观众',
    'stat.3.label': '次视频播放',

    // About
    'about.tag':          '关于我们',
    'about.badge':        '大中华圈以外 · 首个中文 TEDx 活动',
    'about.emotional':    '如果你曾坐在台下，被某位讲者的一句话触动过；<br>如果你曾在这里认识一群相信改变的人；<br>那么这一页，或许正是为你而设。',
    'about.h1':           '让想法被看见',
    'about.h2':           '<em>——从2013年起</em>',
    'about.p1':           'TEDxPetalingStreet 是大中华圈以外首个中文TEDx活动。十二年来，我们汇聚马来西亚最有好奇心的一群人——学生、创作者、专业人士与变革者——围绕一个共同的信念：<strong>想法，是改变的起点。</strong>',
    'about.p2':           '我们不只是一场年会，更是一整年的思想运动。从舞台出发，在每一次对话中延续。',
    'about.quote':        '最好的合作，往往来自人与人之间的连接。',
    'about.card.tag':     '2026年主题',
    'about.card.themeZh': '追本溯源',
    'about.card.body':    '今年，我们回到源头——探索想法从何而来、如何扎根，又怎样一步步成长为影响世界的力量。',
    'about.card.date':    '10月10日，2026年（周六）',
    'about.card.venue':   '马华大厦 · Wisma MCA，吉隆坡',
    'about.card.scale':   '16位讲者 · 逾1,600位观众',

    // Belongs
    'belongs.tag':  '合作伙伴',
    'belongs.h1':   '哪些品牌',
    'belongs.h2':   '<em>属于这个舞台？</em>',
    'belongs.sub':  '我们不是在找最大的预算，<br>而是在找相信<strong>「想法改变一切」</strong>的品牌。',
    'belongs.echo': '',

    // Partnership cards
    'card.0.title': '年会赞助',
    'card.0.cn':    'Annual Conference Sponsorship',
    'card.0.body':  '成为马来西亚最具影响力的中文思想年会的主要合作伙伴——在台上、镜头里，留下你们品牌的印记。',
    'card.1.title': '社群活动',
    'card.1.cn':    'Community Events',
    'card.1.body':  '全年共同策划亲密的聚会——迎新之夜、感恩晚宴、想法沙龙……每一个相遇，都是连接的开始。',
    'card.2.title': '场地赞助',
    'card.2.cn':    'Venue Sponsorship',
    'card.2.body':  '提供让1,600位好奇者汇聚的空间——你的品牌，将融入当天每一个珍贵时刻。',
    'card.3.title': '产品赞助',
    'card.3.cn':    'Product Sponsorship',
    'card.3.body':  '将你的产品交到马来西亚最具思辨力的受众手中——他们不只是消费者，更是会主动分享的传播者。',
    'card.4.title': '餐饮赞助',
    'card.4.cn':    'Food &amp; Beverage',
    'card.4.body':  '成为演讲间隙那些最真实对话的背景——往往是这里，最好的故事开始流动。',
    'card.5.title': '媒体合作',
    'card.5.cn':    'Media Partnership',
    'card.5.body':  '共同放大想法的声音——在活动前、活动中，以及活动结束后，持续讲述那些值得被听见的故事。',

    // Bridge
    'bridge.quote':  '「每一次好的合作，<br>都始于一个人说：<em>我认识一个人。</em>」',
    'bridge.echo':   '',
    'bridge.prompt': '那个人，可以是你。',
    'bridge.cta':    '推荐一个品牌',

    // Form header
    'form.tag':   '推荐品牌',
    'form.h1':    '你现在心里',
    'form.h2':    '<em>有没有浮现一个品牌？</em>',
    'form.echo':  '',
    'form.sub':   '不需要完整的提案。只要告诉我们你信任的品牌，以及你为什么觉得它属于这里。我们会亲自跟进。',

    // Form fields — step 1
    'form.step1':       '01 — 关于你自己',
    'form.name':        '你的名字',
    'form.namePh':      '我们怎么称呼你？',
    'form.connection':  '你与TEDx的关系',
    'form.connectionPh':'我是...',

    'form.opt.community.0': '观众',
    'form.opt.community.1': '历届参与者 / 校友',
    'form.opt.community.2': '演讲嘉宾',
    'form.opt.community.3': '志工',
    'form.opt.community.4': '核心团队成员',
    'form.opt.community.5': '社群成员',

    // Form fields — step 2
    'form.step2':       '02 — 你想推荐的品牌',
    'form.brand':       '品牌 / 公司名称',
    'form.brandPh':     '你想推荐谁？',
    'form.reason':      '你为什么觉得他们属于这里？',
    'form.reasonPh':    '告诉我们你了解的——他们的理念、受众、故事。没有标准答案。',
    'form.partnerType': '你觉得他们会对哪种合作形式感兴趣？',
    'form.partnerHint': '可多选，不确定也没关系。',

    'form.opt.partner.0': '年会赞助',
    'form.opt.partner.1': '社群活动',
    'form.opt.partner.2': '场地赞助',
    'form.opt.partner.3': '产品赞助',
    'form.opt.partner.4': '餐饮赞助',
    'form.opt.partner.5': '媒体合作',
    'form.opt.partner.6': '还不确定',

    // Form fields — step 3
    'form.step3':       '03 — 联系方式',
    'form.knowContact': '你认识这个品牌里的负责人吗？',
    'form.knowYes':     '认识，我知道谁负责',
    'form.knowNo':      '不认识——我只是想推荐',
    'form.cname':       '联系人姓名',
    'form.cnamePh':     '你认识的那位负责人',
    'form.cphone':      '联系人电话',
    'form.cphonePh':    '+60 1X XXX XXXX',
    'form.cemail':      '联系人电邮',
    'form.cemailPh':    'brand@example.com',
    'form.willing':     '你愿意帮忙引荐吗？',
    'form.willingYes':  '愿意，可以帮忙介绍双方认识',
    'form.willingNo':   '希望TEDx直接联系就好',

    // What happens next
    'whatNext.title': '提交后会发生什么？',
    'whatNext.step1': '我们的合作团队将在48小时内查看你的推荐。',
    'whatNext.step2': '我们会为这个品牌准备专属提案——不是群发的模板，而是真诚的邀约。',
    'whatNext.step3': '如果你愿意，我们会邀请你一起参与引荐过程。',

    // Submit
    'form.submit':  '提交推荐',
    'form.sending': '发送中…',
    'form.note':    '你的推荐将直接送达TEDxPetalingStreet合作团队。我们会以诚意联系这个品牌。',

    // Validation messages
    'val.name':      '请输入你的名字。',
    'val.community': '请选择你与TEDx的关系。',
    'val.brand':     '请输入你想推荐的品牌或公司名称。',
    'val.reason':    '请告诉我们为什么你觉得这个品牌适合这里。',
    'val.error':     '提交失败，请稍后再试，或直接发邮件至 partner@tedxpetalingstreet.com',

    // Success
    'success.title': '谢谢你的推荐，我们会好好跟进。',
    'success.echo':  '感谢你的信任。你的连接，可能正是改变的起点。',
    'success.body':  '我们会亲自联系这个品牌——不是群发，而是真诚的邀约。如果你愿意引荐，我们也会与你保持联系。',
    'success.another': '继续推荐另一个品牌 →',

    // Footer
    'footer.tagline': '想法，改变一切',
    'footer.legal':   'TEDxPetalingStreet 是经TED授权，由本地团队独立主办的活动。演讲者的观点代表其个人立场。',
  },

  en: {
    // Nav / Sticky
    'nav.cta':    'Refer Now',
    'sticky.cta': 'Refer a Brand →',

    // Hero
    'hero.label':   '2026 · ROOTS · 追本溯源',
    'hero.line1':   'Know a brand',
    'hero.line2':   '<em>that belongs here?</em>',
    'hero.tagline': '你认识适合这里的品牌吗？',
    'hero.meta':    'TEDxPetalingStreet 2026 · 10 October (Saturday)<br class="mob-br">Wisma MCA, Kuala Lumpur',
    'hero.cta':     'Refer a Brand',

    // Stats
    'stat.0.label': 'years of curation',
    'stat.1.label': 'speakers on stage',
    'stat.2.label': 'live attendees',
    'stat.3.label': 'video views',

    // About
    'about.tag':          'About',
    'about.badge':        'First Chinese-language TEDx · Outside Greater China',
    'about.emotional':    'If you\'ve ever sat in the audience and felt something shift;<br>if you\'ve met people here who believe in the power of ideas;<br>then this page was written for you.',
    'about.h1':           'Ideas that change',
    'about.h2':           '<em>everything</em> — since 2013',
    'about.p1':           'TEDxPetalingStreet is the first Chinese-language TEDx event outside Greater China. For twelve consecutive years, we have gathered Malaysia\'s most curious minds — students, creators, professionals, and changemakers — around a single belief: <strong>ideas are the seeds of change.</strong>',
    'about.p2':           'We are not a one-day event. We are a year-round movement that begins on stage and continues in every conversation it sparks.',
    'about.quote':        'The best partnerships start with someone who knows both sides.',
    'about.card.tag':     '2026 Theme',
    'about.card.themeZh': '追本溯源',
    'about.card.body':    'This year, we return to the source — exploring where ideas come from, how they take root, and how they grow into movements that shape the world around us.',
    'about.card.date':    '10 October 2026 (Saturday)',
    'about.card.venue':   'Wisma MCA · 马华大厦, Kuala Lumpur',
    'about.card.scale':   '16 speakers · 1,600+ attendees',

    // Belongs
    'belongs.tag':  'Partnership',
    'belongs.h1':   'Who belongs',
    'belongs.h2':   '<em>at TEDx?</em>',
    'belongs.sub':  'We\'re not looking for the biggest budget.<br>We\'re looking for brands that believe <strong>ideas change everything.</strong>',
    'belongs.echo': '我们寻找的，不是最大的预算——<br>而是相信「想法改变一切」的品牌。',

    // Partnership cards
    'card.0.title': 'Annual Conference Sponsorship',
    'card.0.cn':    '年会赞助',
    'card.0.body':  'Be a primary partner of Malaysia\'s flagship Chinese-language idea conference — on stage, on screen, and in every memory we make.',
    'card.1.title': 'Community Events',
    'card.1.cn':    '社群活动',
    'card.1.body':  'Co-create intimate gatherings throughout the year — orientation nights, appreciation dinners, and idea salons that bring people together.',
    'card.2.title': 'Venue Sponsorship',
    'card.2.cn':    '场地赞助',
    'card.2.body':  'Host the space where 1,600 minds gather to explore ideas that matter — your brand, woven into every moment of the day.',
    'card.3.title': 'Product Sponsorship',
    'card.3.cn':    '产品赞助',
    'card.3.body':  'Put your product in the hands of Malaysia\'s most curious and engaged audience — people who discover, discuss, and share what they love.',
    'card.4.title': 'Food & Beverage',
    'card.4.cn':    '餐饮赞助',
    'card.4.body':  'Fuel the conversations that happen between talks — the most human, most memorable part of every great event.',
    'card.5.title': 'Media Partnership',
    'card.5.cn':    '媒体合作',
    'card.5.body':  'Amplify the ideas together — extending the conversation before, during, and long after the event through shared storytelling.',

    // Bridge
    'bridge.quote':  '"Every great partnership<br>started with one person who said:<br><em>I know someone.</em>"',
    'bridge.echo':   '每一次好的合作，都始于一个人说：「我认识一个人。」',
    'bridge.prompt': 'That person could be you.',
    'bridge.cta':    'Make a referral',

    // Form header
    'form.tag':   'Make a Referral',
    'form.h1':    'Think of a brand',
    'form.h2':    '<em>right now.</em>',
    'form.echo':  '你现在心里有没有浮现一个品牌？',
    'form.sub':   'No sales pitch needed. Just tell us about a brand you trust — their name, their values, why you think they belong here. We\'ll handle the rest, personally.',

    // Form fields — step 1
    'form.step1':       '01 — ABOUT YOU',
    'form.name':        'Your Name',
    'form.namePh':      'How should we address you?',
    'form.connection':  'Your Connection to TEDx',
    'form.connectionPh':'I am a...',

    'form.opt.community.0': 'Attendee',
    'form.opt.community.1': 'Alumni / Past Participant',
    'form.opt.community.2': 'Speaker',
    'form.opt.community.3': 'Volunteer',
    'form.opt.community.4': 'Core Team Member',
    'form.opt.community.5': 'Community Member',

    // Form fields — step 2
    'form.step2':       '02 — THE BRAND YOU\'RE RECOMMENDING',
    'form.brand':       'Brand / Company Name',
    'form.brandPh':     'Who would you like to refer?',
    'form.reason':      'Why do you think they belong here?',
    'form.reasonPh':    'Tell us what you know — their values, their audience, their story. There\'s no wrong answer.',
    'form.partnerType': 'What kind of partnership might interest them?',
    'form.partnerHint': 'Select all that apply, or skip if you\'re not sure.',

    'form.opt.partner.0': 'Annual Conference Sponsorship',
    'form.opt.partner.1': 'Community Events',
    'form.opt.partner.2': 'Venue Sponsorship',
    'form.opt.partner.3': 'Product Sponsorship',
    'form.opt.partner.4': 'Food & Beverage',
    'form.opt.partner.5': 'Media Partnership',
    'form.opt.partner.6': 'Not sure yet',

    // Form fields — step 3
    'form.step3':       '03 — CONTACT DETAILS',
    'form.knowContact': 'Do you know someone at this brand?',
    'form.knowYes':     'Yes — I know who to contact',
    'form.knowNo':      'No — I\'m just making a recommendation',
    'form.cname':       'Contact Person\'s Name',
    'form.cnamePh':     'The person you know there',
    'form.cphone':      'Contact Phone',
    'form.cphonePh':    '+60 1X XXX XXXX',
    'form.cemail':      'Contact Email',
    'form.cemailPh':    'brand@example.com',
    'form.willing':     'Are you open to making an introduction?',
    'form.willingYes':  'Yes — I\'m happy to connect both sides',
    'form.willingNo':   'Prefer TEDx to reach out directly',

    // What happens next
    'whatNext.title': 'What happens after you submit?',
    'whatNext.step1': 'Our Partnership team reviews your referral within 48 hours.',
    'whatNext.step2': 'We prepare a curated proposal tailored to the brand — not a cold email.',
    'whatNext.step3': 'If you\'re open to it, we\'ll loop you in on the introduction.',

    // Submit
    'form.submit':  'Send my referral',
    'form.sending': 'Sending…',
    'form.note':    'Your referral goes directly to the TEDxPetalingStreet Partnership team. We\'ll reach out to the brand with care.',

    // Validation messages
    'val.name':      'Please enter your name.',
    'val.community': 'Please select your connection to TEDx.',
    'val.brand':     'Please enter the brand or company name.',
    'val.reason':    'Please share why this brand belongs here.',
    'val.error':     'Something went wrong. Please try again or email us at partner@tedxpetalingstreet.com',

    // Success
    'success.title':   'Thank you — your referral is in good hands.',
    'success.echo':    '感谢你的推荐。我们会以诚意联系这个品牌。',
    'success.body':    'We\'ll reach out to the brand personally — a curated introduction, not a mass email. If you\'re open to connecting both sides, we\'ll be in touch with you too.',
    'success.another': 'Refer another brand →',

    // Footer
    'footer.tagline': 'Ideas Change Everything · 想法，改变一切',
    'footer.legal':   'TEDxPetalingStreet is independently organized under a license granted by TED. The ideas expressed by speakers are their own.',
  }
};

// ────────────────────────────────────────────────────────────────
// LANGUAGE ENGINE
// ────────────────────────────────────────────────────────────────
let currentLang = localStorage.getItem('tedx-lang') || 'zh';

function t(key) {
  return i18n[currentLang][key] ?? i18n.zh[key] ?? key;
}

function applyTranslations() {
  const lang = currentLang;

  // Update <html lang>
  document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : 'en';

  // innerHTML elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t(key);
    el.innerHTML = val;

    // Hide echo/empty elements
    const isEchoEl = el.classList.contains('hero-tagline') ||
                     el.classList.contains('belongs-echo') ||
                     el.classList.contains('bridge-echo') ||
                     el.classList.contains('refer-echo');
    if (isEchoEl) {
      el.style.display = val ? '' : 'none';
    }
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPh);
  });

  // Select option text (textContent only — no HTML in options)
  document.querySelectorAll('[data-i18n-opt]').forEach(el => {
    el.textContent = t(el.dataset.i18nOpt);
  });

  // Language switcher button states
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', active);
  });

  // Meta title
  document.title = lang === 'zh'
    ? '推荐一个品牌 · TEDxPetalingStreet 2026'
    : 'Refer a Brand · TEDxPetalingStreet 2026';
}

// ────────────────────────────────────────────────────────────────
// LANGUAGE SWITCHER
// ────────────────────────────────────────────────────────────────
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    if (lang === currentLang) return;
    currentLang = lang;
    localStorage.setItem('tedx-lang', lang);
    applyTranslations();
  });
});

// Apply on load
applyTranslations();

// ────────────────────────────────────────────────────────────────
// Sticky mobile CTA — appears after hero leaves view
// ────────────────────────────────────────────────────────────────
const stickyRefer = document.getElementById('stickyRefer');
const heroSection = document.getElementById('hero');

if (stickyRefer && heroSection) {
  const heroObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // Show sticky bar when hero is NOT intersecting (user has scrolled past it)
      const show = !entry.isIntersecting;
      stickyRefer.classList.toggle('is-visible', show);
      stickyRefer.setAttribute('aria-hidden', String(!show));
    });
  }, { threshold: 0.1 });

  heroObserver.observe(heroSection);

  // Hide sticky bar when user reaches the form
  const formSection = document.getElementById('refer');
  if (formSection) {
    const formObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          stickyRefer.classList.remove('is-visible');
          stickyRefer.setAttribute('aria-hidden', 'true');
        }
      });
    }, { threshold: 0.3 });
    formObserver.observe(formSection);
  }
}

// ────────────────────────────────────────────────────────────────
// Navigation: add scrolled class after 50px
// ────────────────────────────────────────────────────────────────
const nav = document.getElementById('nav');

function onNavScroll() {
  nav.classList.toggle('is-scrolled', window.scrollY > 50);
}

window.addEventListener('scroll', onNavScroll, { passive: true });
onNavScroll();

// ────────────────────────────────────────────────────────────────
// Smooth anchor links
// ────────────────────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ────────────────────────────────────────────────────────────────
// Scroll reveal — sections
// ────────────────────────────────────────────────────────────────
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-revealed');
      sectionObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal-section').forEach(el => {
  sectionObserver.observe(el);
});

// ────────────────────────────────────────────────────────────────
// Scroll reveal — cards (staggered)
// ────────────────────────────────────────────────────────────────
const cardObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = parseInt(entry.target.dataset.stagger || 0);
      setTimeout(() => {
        entry.target.classList.add('is-revealed');
      }, delay);
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal-card').forEach((el, i) => {
  el.dataset.stagger = i * 80;
  cardObserver.observe(el);
});

// ────────────────────────────────────────────────────────────────
// Stats count-up animation
// ────────────────────────────────────────────────────────────────
function animateCount(el, target, duration) {
  const start = performance.now();
  function tick(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.count[data-target]').forEach(el => {
        animateCount(el, parseInt(el.dataset.target, 10), 1400);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

const statsBar = document.getElementById('statsBar');
if (statsBar) statsObserver.observe(statsBar);

// ────────────────────────────────────────────────────────────────
// Contact block toggle
// ────────────────────────────────────────────────────────────────
const knowYesEl     = document.getElementById('knowYes');
const knowNoEl      = document.getElementById('knowNo');
const contactBlock  = document.getElementById('contactBlock');

function updateContactVisibility() {
  if (knowYesEl && knowYesEl.checked) {
    contactBlock.classList.add('is-visible');
  } else {
    contactBlock.classList.remove('is-visible');
  }
}

if (knowYesEl) knowYesEl.addEventListener('change', updateContactVisibility);
if (knowNoEl)  knowNoEl.addEventListener('change',  updateContactVisibility);

// ────────────────────────────────────────────────────────────────
// Form validation
// ────────────────────────────────────────────────────────────────
function setError(inputEl, message) {
  clearError(inputEl);
  inputEl.classList.add('is-error');
  const msg = document.createElement('p');
  msg.className = 'field-error-msg';
  msg.textContent = message;
  inputEl.closest('.field-group').appendChild(msg);
}

function clearError(inputEl) {
  inputEl.classList.remove('is-error');
  const existing = inputEl.closest('.field-group')?.querySelector('.field-error-msg');
  if (existing) existing.remove();
}

function validateForm(data) {
  let valid = true;
  const nameEl      = document.getElementById('f-name');
  const communityEl = document.getElementById('f-community');
  const brandEl     = document.getElementById('f-brand');
  const reasonEl    = document.getElementById('f-reason');

  [nameEl, communityEl, brandEl, reasonEl].forEach(clearError);

  if (!data.name.trim())      { setError(nameEl,      t('val.name'));      valid = false; }
  if (!data.community)        { setError(communityEl, t('val.community')); valid = false; }
  if (!data.brand.trim())     { setError(brandEl,     t('val.brand'));     valid = false; }
  if (!data.reason.trim())    { setError(reasonEl,    t('val.reason'));    valid = false; }

  return valid;
}

// ────────────────────────────────────────────────────────────────
// Form submission
// ────────────────────────────────────────────────────────────────
const refForm     = document.getElementById('refForm');
const submitBtn   = document.getElementById('submitBtn');
const formSuccess = document.getElementById('formSuccess');
const anotherBtn  = document.getElementById('anotherBtn');

function setSubmitLoading(loading) {
  submitBtn.disabled = loading;
  submitBtn.classList.toggle('is-loading', loading);
}

if (refForm) {
  refForm.addEventListener('submit', async e => {
    e.preventDefault();

    const fd = new FormData(refForm);
    const data = {
      name:             fd.get('name')          || '',
      community:        fd.get('community')     || '',
      brand:            fd.get('brand')         || '',
      reason:           fd.get('reason')        || '',
      partnershipTypes: fd.getAll('partnershipTypes'),
      knowContact:      fd.get('knowContact')   === 'yes',
      contactName:      fd.get('contactName')   || '',
      contactPhone:     fd.get('contactPhone')  || '',
      contactEmail:     fd.get('contactEmail')  || '',
      willingToIntro:   fd.get('willingToIntro') === 'yes',
    };

    if (!validateForm(data)) {
      const firstError = refForm.querySelector('.is-error');
      if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setSubmitLoading(true);

    try {
      const res = await fetch('/submit', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || 'Submission failed');
      }

      refForm.style.display = 'none';
      formSuccess.classList.add('is-visible');
      formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });

    } catch (err) {
      console.error('[TEDx] Submission error:', err);
      setSubmitLoading(false);

      let banner = refForm.querySelector('.form-error-banner');
      if (!banner) {
        banner = document.createElement('p');
        banner.className = 'form-error-banner field-error-msg';
        banner.style.cssText = 'margin-top: 0.75rem; font-size: 0.82rem;';
        submitBtn.closest('.form-footer').appendChild(banner);
      }
      banner.textContent = t('val.error');
    }
  });
}

if (anotherBtn) {
  anotherBtn.addEventListener('click', () => {
    refForm.reset();
    refForm.style.display = '';
    formSuccess.classList.remove('is-visible');
    if (contactBlock) contactBlock.classList.remove('is-visible');
    setSubmitLoading(false);
    refForm.querySelectorAll('.is-error').forEach(el => el.classList.remove('is-error'));
    refForm.querySelectorAll('.field-error-msg').forEach(el => el.remove());
    document.getElementById('refer').scrollIntoView({ behavior: 'smooth' });
  });
}

if (refForm) {
  refForm.querySelectorAll('.field-input').forEach(el => {
    el.addEventListener('input',  () => clearError(el));
    el.addEventListener('change', () => clearError(el));
  });
}
