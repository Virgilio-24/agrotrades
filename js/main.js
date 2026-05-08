// ── DATA STORE ──
let SERVICES = [];

// ── LANGUAGE SYSTEM ──
const translations = {
  pt: {
    nav_home: 'Início', nav_about: 'Quem Somos', nav_services: 'Serviços', nav_campaign: 'Campanha 2025/26', nav_contact: 'Contactos',
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
    saiba_mais: 'Saiba mais',
    btn_about: 'Conhecer a equipa →',
    about_hero_p: 'Uma empresa moçambicana com raízes no campo e visão para o futuro da agricultura nacional.',
    location_tag: 'Localização', location_title: 'Onde estamos',
    stat_desc1: 'Desde a fundação, a AGRO TRADES tem crescido de forma consistente no sector agrícola moçambicano.',
    stat_desc2: 'Capacidade de expansão contínua das áreas cultivadas, alinhada com as metas da campanha nacional.',
    stat_desc3: 'Uma gama completa de serviços que cobre toda a cadeia de valor agrícola, da terra ao mercado.',
    stat_desc4: 'Operações no Distrito de Moma, Nampula — uma das regiões com maior potencial agrícola do país.',
    mv_tag: 'A nossa identidade', mv_title: 'Missão e Valores',
    mission_title: 'Missão', mission_text: 'Contribuir para a soberania alimentar de Moçambique através da produção agrícola de qualidade, da mecanização acessível e do apoio técnico às comunidades rurais do Norte do país.',
    vision_title: 'Visão', vision_text: 'Ser uma referência no sector agrícola moçambicano, reconhecida pela qualidade da produção, pela inovação tecnológica e pelo impacto positivo nas comunidades onde operamos.',
    value1_title: 'Sustentabilidade', value1_text: 'Praticamos uma agricultura responsável que respeita o ambiente, preserva os recursos hídricos e mantém a saúde do solo para as gerações futuras.',
    value2_title: 'Parceria', value2_text: 'Acreditamos no desenvolvimento conjunto com agricultores locais, cooperativas e comunidades, partilhando conhecimento e recursos para crescer juntos.',
    value3_title: 'Inovação', value3_text: 'Adoptamos tecnologias modernas e práticas agronómicas actualizadas para maximizar a produtividade e reduzir os custos operacionais.',
    value4_title: 'Excelência', value4_text: 'Comprometemo-nos com a qualidade em cada etapa do processo, desde a preparação do solo até à entrega do produto final ao mercado.',
    team_tag: 'As pessoas', team_title: 'A nossa equipa', team_sub: 'Profissionais dedicados que trabalham todos os dias para transformar a agricultura moçambicana.',
    team_role_ceo: 'Fundador & Director Executivo',
    team_bio_ceo: 'Engenheiro agrónomo com mais de 10 anos de experiência no sector agrícola moçambicano. Fundou a AGRO TRADES com a missão de modernizar a agricultura em Nampula.',
    team_role_prod: 'Director de Produção', team_bio_prod: 'Responsável pela supervisão das operações de campo, coordenação da mecanização e controlo de qualidade das culturas no Distrito de Moma.',
    team_role_tech: 'Responsável Técnica', team_bio_tech: 'Técnica agrícola especializada em variedades de alto rendimento, gestão de pragas e boas práticas agronómicas junto dos agricultores parceiros.',
    team_role_com: 'Director Comercial', team_bio_com: 'Lidera a área de comercialização agrícola e parcerias estratégicas, garantindo escoamento eficiente da produção e acesso a novos mercados.',
    team_role_admin: 'Gestão Administrativa', team_bio_admin: 'Coordena os processos administrativos e financeiros da empresa, assegurando o cumprimento das obrigações legais e a boa organização interna.',
    team_join_title: 'Junte-se à equipa', team_join_text: 'Estamos sempre à procura de talento apaixonado pela agricultura. Se quer fazer parte da transformação agrícola em Moçambique, fale connosco.'
  },
  en: {
    nav_home: 'Home', nav_about: 'About Us', nav_services: 'Services', nav_campaign: 'Campaign 2025/26', nav_contact: 'Contacts',
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
    saiba_mais: 'Learn more',
    btn_about: 'Meet the team →',
    about_hero_p: 'A Mozambican company rooted in the land, with a vision for the future of national agriculture.',
    location_tag: 'Location', location_title: 'Where we are',
    stat_desc1: 'Since its founding, AGRO TRADES has grown consistently in the Mozambican agricultural sector.',
    stat_desc2: 'Continuous capacity to expand cultivated areas, aligned with national campaign targets.',
    stat_desc3: 'A complete range of services covering the entire agricultural value chain, from land to market.',
    stat_desc4: 'Operations in Moma District, Nampula — one of the regions with the greatest agricultural potential in the country.',
    mv_tag: 'Our identity', mv_title: 'Mission & Values',
    mission_title: 'Mission', mission_text: 'To contribute to Mozambique\'s food sovereignty through quality agricultural production, accessible mechanisation and technical support to rural communities in the North.',
    vision_title: 'Vision', vision_text: 'To be a reference in the Mozambican agricultural sector, recognised for production quality, technological innovation and positive impact on the communities where we operate.',
    value1_title: 'Sustainability', value1_text: 'We practice responsible agriculture that respects the environment, preserves water resources and maintains soil health for future generations.',
    value2_title: 'Partnership', value2_text: 'We believe in joint development with local farmers, cooperatives and communities, sharing knowledge and resources to grow together.',
    value3_title: 'Innovation', value3_text: 'We adopt modern technologies and updated agronomic practices to maximise productivity and reduce operational costs.',
    value4_title: 'Excellence', value4_text: 'We commit to quality at every stage of the process, from soil preparation to delivery of the final product to market.',
    team_tag: 'The people', team_title: 'Our team', team_sub: 'Dedicated professionals who work every day to transform Mozambican agriculture.',
    team_role_ceo: 'Founder & Executive Director',
    team_bio_ceo: 'Agricultural engineer with over 10 years of experience in the Mozambican agricultural sector. Founded AGRO TRADES with the mission of modernising agriculture in Nampula.',
    team_role_prod: 'Production Director', team_bio_prod: 'Responsible for overseeing field operations, mechanisation coordination and crop quality control in Moma District.',
    team_role_tech: 'Technical Manager', team_bio_tech: 'Agricultural technician specialised in high-yield varieties, pest management and good agronomic practices alongside partner farmers.',
    team_role_com: 'Commercial Director', team_bio_com: 'Leads agricultural marketing and strategic partnerships, ensuring efficient production flow and access to new regional markets.',
    team_role_admin: 'Administrative Manager', team_bio_admin: 'Coordinates administrative and financial processes, ensuring legal compliance and good internal organisation.',
    team_join_title: 'Join the team', team_join_text: 'We are always looking for talent passionate about agriculture. If you want to be part of the agricultural transformation in Mozambique, get in touch.'
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

// ── APPLY CONTACT DATA ──
function applyContactData(d) {
  const tel1El = document.getElementById('contact-tel1');
  const tel2El = document.getElementById('contact-tel2');
  const email1El = document.getElementById('contact-email1');
  const email2El = document.getElementById('contact-email2');
  const moradaEl = document.getElementById('contact-morada');

  if (tel1El && d.tel1) { tel1El.href = 'tel:' + d.tel1.replace(/\s/g, ''); tel1El.textContent = d.tel1; }
  if (tel2El && d.tel2) { tel2El.href = 'tel:' + d.tel2.replace(/\s/g, ''); tel2El.textContent = d.tel2; }
  if (email1El && d.email1) { email1El.href = 'mailto:' + d.email1; email1El.textContent = d.email1; }
  if (email2El && d.email2) { email2El.href = 'mailto:' + d.email2; email2El.textContent = d.email2; }
  if (moradaEl && d.morada) { moradaEl.innerHTML = d.morada.replace(/\n/g, '<br/>'); }

  // Update all social links across the page
  if (d.whatsapp) {
    const waUrl = 'https://wa.me/' + d.whatsapp.replace(/\D/g, '');
    document.querySelectorAll('.sf-wa, .footer-social-wa, a[href^="https://wa.me/"]').forEach(el => { el.href = waUrl; });
  }
  if (d.facebook) {
    document.querySelectorAll('.sf-fb, .footer-social-fb').forEach(el => { el.href = d.facebook; });
  }
  if (d.instagram) {
    document.querySelectorAll('.sf-ig, .footer-social-ig').forEach(el => { el.href = d.instagram; });
  }
}

// Gradient palette for service cards (cycles by ordem)
const CARD_GRADIENTS = [
  'linear-gradient(145deg, #0f3a08, #2a7a1a)',
  'linear-gradient(145deg, #6b4a08, #b5820a)',
  'linear-gradient(145deg, #0a2a4a, #1a5c80)',
  'linear-gradient(145deg, #3a1a08, #7a4010)',
  'linear-gradient(145deg, #0a1f06, #1a5c10)',
  'linear-gradient(145deg, #1a0a3a, #4a2080)',
  'linear-gradient(145deg, #3a1a00, #8a4a00)',
  'linear-gradient(145deg, #0a2a2a, #1a6060)',
];

// ── RENDER SERVICE CARDS ──
function renderServiceCards(containerEl, limit) {
  if (!containerEl || !SERVICES.length) return;
  const lang = currentLang;
  const services = limit ? SERVICES.slice(0, limit) : SERVICES;
  const label = translations[lang].saiba_mais;

  containerEl.innerHTML = services.map((s, i) => {
    const num = String(s.ordem || i + 1).padStart(2, '0');
    const gradient = CARD_GRADIENTS[(s.ordem - 1) % CARD_GRADIENTS.length];
    const banner = s.imagem_banner
      ? `<img src="${s.imagem_banner}" alt="${s['title_' + lang]}" class="sc-banner-img" loading="lazy"/>`
      : `<div class="sc-banner-placeholder" style="background:${gradient}"><span class="sc-num">${num}</span></div>`;
    return `
    <div class="service-card sc-img">
      <div class="sc-banner">${banner}</div>
      <div class="sc-body">
        <h3>${s['title_' + lang]}</h3>
        <p>${s['summary_' + lang]}</p>
        <a href="servico.html?id=${s.id}" class="btn-saiba-mais">${label} →</a>
      </div>
    </div>`;
  }).join('');
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
    document.getElementById('sd-title').textContent = lang === 'pt' ? 'Serviço não encontrado' : 'Service not found';
    document.getElementById('sd-summary').textContent = lang === 'pt' ? 'O serviço que procura não existe.' : 'The service you are looking for does not exist.';
    document.getElementById('sd-description').textContent = '';
    document.getElementById('sd-highlights').innerHTML = '';
    return;
  }

  const num = String(service.ordem || 1).padStart(2, '0');
  const gradient = CARD_GRADIENTS[(service.ordem - 1) % CARD_GRADIENTS.length];

  document.title = service['title_' + lang] + ' — AGRO TRADES, LDA';
  document.getElementById('sd-title').textContent = service['title_' + lang];
  document.getElementById('sd-summary').textContent = service['summary_' + lang];
  document.getElementById('sd-description').textContent = service['description_' + lang];
  document.getElementById('sd-highlights').innerHTML = (service['highlights_' + lang] || [])
    .map(h => `<li><span class="sd-check">✓</span>${h}</li>`)
    .join('');

  // Banner image on the hero
  const bannerEl = document.getElementById('sd-banner');
  if (bannerEl) {
    if (service.imagem_banner) {
      bannerEl.style.backgroundImage = `url('${service.imagem_banner}')`;
      bannerEl.style.backgroundSize = 'cover';
      bannerEl.style.backgroundPosition = 'center';
      bannerEl.classList.add('has-image');
    } else {
      bannerEl.style.background = gradient;
      bannerEl.querySelector('.sd-num').textContent = num;
    }
  }

  // Image gallery
  const galleryEl = document.getElementById('sd-gallery');
  if (galleryEl) {
    const imgs = service.imagens || [];
    if (imgs.length > 0) {
      galleryEl.innerHTML = `
        <h3 class="sd-gallery-title">${lang === 'pt' ? 'Galeria' : 'Gallery'}</h3>
        <div class="sd-gallery-grid">
          ${imgs.map(src => `<a href="${src}" target="_blank" class="sd-gallery-item"><img src="${src}" alt="" loading="lazy"/></a>`).join('')}
        </div>`;
      galleryEl.style.display = 'block';
    } else {
      galleryEl.style.display = 'none';
    }
  }

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
