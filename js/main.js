// ── DATA STORE ──
let SERVICES = [];

// ── LANGUAGE SYSTEM ──
const translations = {
  pt: {
    nav_home: 'Início', nav_services: 'Serviços', nav_campaign: 'Campanha 2025/26', nav_contact: 'Contactos',
    hero_tag: 'Empresa Agrícola Moçambicana',
    hero_h1a: 'Soberania começa', hero_h1b: 'no prato.',
    hero_motto: '"Trabalhar a terra é criar riqueza para Moçambique"',
    hero_p: 'Somos uma empresa moçambicana dedicada à produção agrícola, com foco no arroz, cereais, legumes, mecanização agrícola e processamento industrial.',
    btn_whatsapp: 'Fale connosco no WhatsApp',
    btn_services: 'Ver serviços',
    btn_campaign: 'Campanha 2025/2026',
    btn_contact: 'Contactos',
    stat1: 'Anos de actividade', stat2: 'Hectares cultivados', stat3: 'Serviços agrícolas', stat4: 'Distrito de Moma',
    about_tag: 'Sobre a empresa',
    about_title: 'Quem somos',
    about_p: 'A AGRO TRADES, LDA é uma empresa moçambicana dedicada ao desenvolvimento agrícola, com foco na produção de arroz, outros cereais e legumes, preparação de terras, mecanização agrícola, apoio técnico no campo, comercialização agrícola e processamento industrial.',
    about_p2: 'A empresa contribui para o fortalecimento da soberania alimentar em Moçambique, promovendo o trabalho no campo, a valorização da terra, a criação de emprego e o aumento da produção nacional.',
    services_tag: 'O que fazemos',
    services_title: 'Os nossos serviços',
    campanha_title: 'Campanha Agrícola 2025/2026',
    campanha_p: 'Iniciámos as operações da nova campanha agrícola, alinhada com o incentivo do Presidente da República Daniel Chapo. A soberania alimentar começa com a valorização da terra.',
    campanha_btn: 'Saber mais',
    location_office: 'Escritório Sede',
    location_field: 'Machamba',
    contact_tag: 'Fale connosco',
    contact_title: 'Contactos',
    footer_services: 'Serviços',
    footer_links: 'Links',
    footer_copy: '© 2025 AGRO TRADES, LDA. Todos os direitos reservados.',
    footer_made: 'Nampula, Moçambique',
    ceo_label: 'CEO',
    sd_highlights: 'Destaques',
    saiba_mais: 'Saiba mais'
  },
  en: {
    nav_home: 'Home', nav_services: 'Services', nav_campaign: 'Campaign 2025/26', nav_contact: 'Contacts',
    hero_tag: 'Mozambican Agricultural Company',
    hero_h1a: 'Sovereignty starts', hero_h1b: 'on the plate.',
    hero_motto: '"Working the land is creating wealth for Mozambique"',
    hero_p: 'We are a Mozambican company dedicated to agricultural production, focused on rice, cereals, vegetables, agricultural mechanisation and industrial processing.',
    btn_whatsapp: 'Contact us on WhatsApp',
    btn_services: 'Our services',
    btn_campaign: 'Campaign 2025/2026',
    btn_contact: 'Contacts',
    stat1: 'Years of activity', stat2: 'Hectares cultivated', stat3: 'Agricultural services', stat4: 'Moma District',
    about_tag: 'About us',
    about_title: 'Who we are',
    about_p: 'AGRO TRADES, LDA is a Mozambican company dedicated to agricultural development, focusing on rice production, other cereals and vegetables, land preparation, agricultural mechanisation, technical field support, agricultural marketing and industrial processing.',
    about_p2: 'The company contributes to strengthening food sovereignty in Mozambique, promoting fieldwork, land appreciation, job creation and increased national production.',
    services_tag: 'What we do',
    services_title: 'Our services',
    campanha_title: 'Agricultural Campaign 2025/2026',
    campanha_p: 'We have started operations for the new agricultural campaign, aligned with the initiative of President Daniel Chapo. Food sovereignty begins with valuing the land.',
    campanha_btn: 'Learn more',
    location_office: 'Head Office',
    location_field: 'Farm',
    contact_tag: 'Get in touch',
    contact_title: 'Contacts',
    footer_services: 'Services',
    footer_links: 'Links',
    footer_copy: '© 2025 AGRO TRADES, LDA. All rights reserved.',
    footer_made: 'Nampula, Mozambique',
    ceo_label: 'CEO',
    sd_highlights: 'Highlights',
    saiba_mais: 'Learn more'
  }
};

let currentLang = localStorage.getItem('lang') || 'pt';

// ── LOAD ALL DATA FROM JSON ──
async function loadAllData() {
  const [servicosRes, inicioRes, sobreRes, campanhaRes, contactosRes] = await Promise.all([
    fetch('_data/servicos.json').catch(() => null),
    fetch('_data/inicio.json').catch(() => null),
    fetch('_data/sobre.json').catch(() => null),
    fetch('_data/campanha.json').catch(() => null),
    fetch('_data/contactos.json').catch(() => null)
  ]);

  if (servicosRes && servicosRes.ok) {
    const d = await servicosRes.json();
    SERVICES = (d.items || []).filter(s => s.activo !== false);
    SERVICES.sort((a, b) => (a.ordem || 0) - (b.ordem || 0));
  }

  if (inicioRes && inicioRes.ok) {
    const d = await inicioRes.json();
    if (d.hero_motto_pt) translations.pt.hero_motto = d.hero_motto_pt;
    if (d.hero_motto_en) translations.en.hero_motto = d.hero_motto_en;
    if (d.hero_texto_pt) translations.pt.hero_p = d.hero_texto_pt;
    if (d.hero_texto_en) translations.en.hero_p = d.hero_texto_en;
  }

  if (sobreRes && sobreRes.ok) {
    const d = await sobreRes.json();
    if (d.paragrafo1_pt) translations.pt.about_p = d.paragrafo1_pt;
    if (d.paragrafo1_en) translations.en.about_p = d.paragrafo1_en;
    if (d.paragrafo2_pt) translations.pt.about_p2 = d.paragrafo2_pt;
    if (d.paragrafo2_en) translations.en.about_p2 = d.paragrafo2_en;
  }

  if (campanhaRes && campanhaRes.ok) {
    const d = await campanhaRes.json();
    if (d.titulo_pt) translations.pt.campanha_title = d.titulo_pt;
    if (d.titulo_en) translations.en.campanha_title = d.titulo_en;
    if (d.texto_pt) translations.pt.campanha_p = d.texto_pt;
    if (d.texto_en) translations.en.campanha_p = d.texto_en;
  }

  if (contactosRes && contactosRes.ok) {
    const d = await contactosRes.json();
    applyContactData(d);
  }
}

// ── APPLY CONTACT DATA TO contactos.html ──
function applyContactData(d) {
  const tel1El = document.getElementById('contact-tel1');
  const tel2El = document.getElementById('contact-tel2');
  const email1El = document.getElementById('contact-email1');
  const email2El = document.getElementById('contact-email2');
  const moradaEl = document.getElementById('contact-morada');

  if (tel1El && d.tel1) {
    tel1El.href = 'tel:' + d.tel1.replace(/\s/g, '');
    tel1El.textContent = d.tel1;
  }
  if (tel2El && d.tel2) {
    tel2El.href = 'tel:' + d.tel2.replace(/\s/g, '');
    tel2El.textContent = d.tel2;
  }
  if (email1El && d.email1) {
    email1El.href = 'mailto:' + d.email1;
    email1El.textContent = d.email1;
  }
  if (email2El && d.email2) {
    email2El.href = 'mailto:' + d.email2;
    email2El.textContent = d.email2;
  }
  if (moradaEl && d.morada) {
    moradaEl.innerHTML = d.morada.replace(/\n/g, '<br/>');
  }
}

// ── RENDER SERVICE CARDS ──
function renderServiceCards(containerEl, limit) {
  if (!containerEl || !SERVICES.length) return;
  const lang = currentLang;
  const services = limit ? SERVICES.slice(0, limit) : SERVICES;
  const label = translations[lang].saiba_mais;

  containerEl.innerHTML = services.map(s => `
    <div class="service-card">
      <div class="service-icon">${s.icone}</div>
      <h3>${s['title_' + lang]}</h3>
      <p>${s['summary_' + lang]}</p>
      <a href="servico.html?id=${s.id}" class="btn-saiba-mais">${label} →</a>
    </div>
  `).join('');
}

// ── LANGUAGE SYSTEM ──
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  document.querySelectorAll('[data-i18n-href]').forEach(el => {
    const key = el.getAttribute('data-i18n-href');
    if (translations[lang][key]) el.setAttribute('href', translations[lang][key]);
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  document.documentElement.lang = lang;

  // Re-render service cards when language changes
  const grid = document.getElementById('services-grid');
  if (grid && SERVICES.length) {
    const limit = grid.dataset.limit ? parseInt(grid.dataset.limit) : null;
    renderServiceCards(grid, limit);
  }

  // Re-render service detail when language changes
  if (document.getElementById('sd-title')) renderServiceDetail();
}

// ── MOBILE MENU ──
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  const langSw = document.querySelector('.lang-switcher');
  links.classList.toggle('open');
  if (langSw) langSw.classList.toggle('open');
}

// ── SCROLL NAV SHADOW ──
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (nav) nav.style.boxShadow = window.scrollY > 10 ? '0 2px 20px rgba(0,0,0,0.08)' : 'none';
});

// ── SERVICE DETAIL PAGE ──
function renderServiceDetail() {
  const id = new URLSearchParams(window.location.search).get('id');
  const service = SERVICES.find(s => s.id === id);
  const lang = currentLang;

  if (!service) {
    document.getElementById('sd-icon').textContent = '🌿';
    document.getElementById('sd-title').textContent = lang === 'pt' ? 'Serviço não encontrado' : 'Service not found';
    document.getElementById('sd-summary').textContent = lang === 'pt' ? 'O serviço que procura não existe.' : 'The service you are looking for does not exist.';
    document.getElementById('sd-description').textContent = '';
    document.getElementById('sd-highlights').innerHTML = '';
    return;
  }

  document.title = service['title_' + lang] + ' — AGRO TRADES, LDA';
  document.getElementById('sd-icon').textContent = service.icone;
  document.getElementById('sd-title').textContent = service['title_' + lang];
  document.getElementById('sd-summary').textContent = service['summary_' + lang];
  document.getElementById('sd-description').textContent = service['description_' + lang];
  document.getElementById('sd-highlights').innerHTML = (service['highlights_' + lang] || [])
    .map(h => `<li><span class="sd-check">✓</span>${h}</li>`)
    .join('');

  document.querySelectorAll('.sd-back').forEach(l => { l.href = 'servicos.html'; });
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', async () => {
  await loadAllData();

  setLang(currentLang);

  // Mark active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // Render service cards grid (index.html uses data-limit="4", servicos.html has no limit)
  const grid = document.getElementById('services-grid');
  if (grid) {
    const limit = grid.dataset.limit ? parseInt(grid.dataset.limit) : null;
    renderServiceCards(grid, limit);
  }

  // Render service detail if on servico.html
  if (document.getElementById('sd-title')) renderServiceDetail();

  // Footer year
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
