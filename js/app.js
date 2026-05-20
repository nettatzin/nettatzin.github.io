// ============================================================
// APP.JS — RENDERING ENGINE
// ============================================================
// This file reads from data.js and builds the UI.
// Edit this only if you want to change HOW content is displayed
// (layout, structure, interactions) — not what the content says.
// ============================================================

// Set footer year
document.getElementById('year').textContent = new Date().getFullYear();

// --- Tab definitions (order = nav order) ---
const TABS = [
  { id: 'home',        label: 'Home'                        },
  { id: 'products',   label: 'Products & Ventures'          },
  { id: 'initiatives',label: 'AI Initiatives & Projects'    },
  { id: 'about',      label: 'About'                        },
  { id: 'contact',    label: 'Contact'                      }
];

let activeTab = 'home';
let _productStudies = [];
let _initiativeStudies = [];


// ============================================================
// TAB SWITCHING
// ============================================================

function switchTab(id) {
  activeTab = id;

  // Show/hide content panels
  document.querySelectorAll('.tab-content').forEach(el => {
    el.classList.toggle('active', el.id === 'tab-' + id);
  });

  // Update nav button states
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === id);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function buildNav() {
  const nav = document.getElementById('tab-nav');
  nav.innerHTML = TABS.map(tab => `
    <button
      class="tab-btn ${tab.id === activeTab ? 'active' : ''}"
      data-tab="${tab.id}"
      onclick="switchTab('${tab.id}')"
    >${tab.label}</button>
  `).join('') + `
    <a href="${OTHER_PROJECTS.cvLink}" target="_blank" rel="noopener" class="tab-btn tab-btn--cv">Full CV</a>
  `;
}


// ============================================================
// CARD COMPONENT (used by Strategy, Initiatives, Other)
// ============================================================

function renderCard(study, isPassion = false) {
  const [firstPara, ...rest] = study.description;
  const hasMore = rest.length > 0;
  // Unique ID so toggle knows which card to expand
  const id = 'card-' + Math.random().toString(36).substr(2, 9);

  return `
    <div class="card ${isPassion ? 'card--passion' : ''}" id="${id}">

      <div class="card-header">
        <span class="card-role">${study.role}</span>
        <h3 class="card-title">${study.title}</h3>
        ${study.organization ? `<p class="card-org">${study.organization}</p>` : ''}
        ${study.link ? `<a href="${study.link}" target="_blank" rel="noopener" class="card-link">Visit Project &rarr;</a>` : ''}
      </div>

      <div class="card-body">
        <p>${firstPara}</p>
        ${hasMore ? `
          <div class="card-extra" hidden>
            ${rest.map(p => `<p>${p}</p>`).join('')}
          </div>
          <button class="card-toggle" onclick="toggleCard('${id}')">
            Show Full Project <span class="toggle-icon">↓</span>
          </button>
        ` : ''}
      </div>

      ${study.dimensions && study.dimensions.length ? `
        <div class="card-dims">
          <span class="dims-label">Key Dimensions</span>
          <div class="dims-tags">
            ${study.dimensions.map(d => `<span class="dim-tag">${d}</span>`).join('')}
          </div>
        </div>
      ` : ''}

    </div>
  `;
}

function toggleCard(id) {
  const card   = document.getElementById(id);
  const extra  = card.querySelector('.card-extra');
  const btn    = card.querySelector('.card-toggle');
  const isOpen = !extra.hidden;

  extra.hidden = isOpen;
  btn.innerHTML = isOpen
    ? 'Show Full Project <span class="toggle-icon">↓</span>'
    : 'Show Less <span class="toggle-icon">↑</span>';
}


// ============================================================
// INITIATIVE HELPERS (used by AI Initiatives & Projects tab)
// ============================================================

function getInitiativeTag(item) {
  if (item.group === 'initiative') return { label: 'AI Initiative', cls: 'product-tag--initiative' };
  return                                  { label: 'Project',        cls: 'product-tag--project' };
}

function renderInitiativeCard(item, idx) {
  const tag = getInitiativeTag(item);
  return `
    <div class="product-card" onclick="openInitiativeModal(${idx})">
      <span class="product-tag ${tag.cls}">${tag.label}</span>
      <h3 class="product-card-title">${item.title}</h3>
      ${item.organization ? `<p class="product-card-org">${item.organization}</p>` : ''}
      <p class="product-card-summary">${item.summary}</p>
    </div>
  `;
}

function openInitiativeModal(idx) {
  const item = _initiativeStudies[idx];
  const tag  = getInitiativeTag(item);
  document.getElementById('initiative-modal-content').innerHTML = `
    <span class="product-tag ${tag.cls}">${tag.label}</span>
    <h2 class="modal-title">${item.title}</h2>
    ${item.organization ? `<p class="modal-org">${item.organization}</p>` : ''}
    <p class="modal-role">${item.role}</p>
    <div class="modal-body">
      ${item.description.map(p => `<p>${p}</p>`).join('')}
    </div>
    ${item.dimensions && item.dimensions.length ? `
      <div class="card-dims">
        <span class="dims-label">Key Dimensions</span>
        <div class="dims-tags">
          ${item.dimensions.map(d => `<span class="dim-tag">${d}</span>`).join('')}
        </div>
      </div>
    ` : ''}
    ${item.link ? `<a href="${item.link}" target="_blank" rel="noopener" class="card-link" style="margin-top:1.25rem;display:inline-block">Visit Project &rarr;</a>` : ''}
  `;
  document.getElementById('initiative-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeInitiativeModal(event) {
  if (event && event.target.closest('.product-modal-inner')) return;
  document.getElementById('initiative-modal').classList.remove('open');
  document.body.style.overflow = '';
}


// ============================================================
// TAB RENDERERS
// ============================================================

// --- HOME ---
function renderHome() {
  return `
    <div class="home">
      <div class="home-hero">
        <div class="profile-img-wrap">
          <img
            src="${HOME.profileImage}"
            alt="${HOME.name}"
            class="profile-img"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
          >
          <div class="profile-initials" style="display:none">
            ${HOME.name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>
        <div class="home-text">
          <p class="eyebrow">${HOME.title}</p>
          <h1 class="home-name">${HOME.name}</h1>
          <p class="home-tagline">${HOME.tagline}</p>
          <p class="home-bio">${HOME.bio}</p>
        </div>
      </div>
      <div class="stats-row">
        ${HOME.stats.map(s => `
          <div class="stat">
            <strong>${s.value}</strong>
            <span>${s.label}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// --- PRODUCTS & VENTURES — helpers ---

function sortProducts(studies) {
  const rank = s => s.group === 'venture' ? 0 : s.role === 'AI Product Lead' ? 1 : 2;
  return [...studies].sort((a, b) => rank(a) - rank(b) || a.order - b.order);
}

function getProductTag(study) {
  if (study.group === 'venture')        return { label: 'Venture',             cls: 'product-tag--venture' };
  if (study.role === 'AI Product Lead') return { label: 'AI Product Lead',     cls: 'product-tag--lead' };
  return                                       { label: 'AI Product Strategist', cls: 'product-tag--strategist' };
}

function renderProductCard(study, idx) {
  const tag = getProductTag(study);
  return `
    <div class="product-card" onclick="openProductModal(${idx})">
      <span class="product-tag ${tag.cls}">${tag.label}</span>
      <h3 class="product-card-title">${study.title}</h3>
      <p class="product-card-org">${study.organization}</p>
      <p class="product-card-summary">${study.description[0]}</p>
    </div>
  `;
}

function openProductModal(idx) {
  const study = _productStudies[idx];
  const tag   = getProductTag(study);
  document.getElementById('product-modal-content').innerHTML = `
    <span class="product-tag ${tag.cls}">${tag.label}</span>
    <h2 class="modal-title">${study.title}</h2>
    <p class="modal-org">${study.organization}</p>
    <p class="modal-role">${study.role}</p>
    <div class="modal-body">
      ${study.description.map(p => `<p>${p}</p>`).join('')}
    </div>
    ${study.dimensions && study.dimensions.length ? `
      <div class="card-dims">
        <span class="dims-label">Key Dimensions</span>
        <div class="dims-tags">
          ${study.dimensions.map(d => `<span class="dim-tag">${d}</span>`).join('')}
        </div>
      </div>
    ` : ''}
    ${study.link ? `<a href="${study.link}" target="_blank" rel="noopener" class="card-link" style="margin-top:1.25rem;display:inline-block">Visit Project &rarr;</a>` : ''}
  `;
  document.getElementById('product-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal(event) {
  if (event && event.target.closest('.product-modal-inner')) return;
  document.getElementById('product-modal').classList.remove('open');
  document.body.style.overflow = '';
}

// --- PRODUCTS & VENTURES — renderer ---
function renderProducts() {
  _productStudies = sortProducts(STRATEGY.caseStudies);
  return `
    <div class="tab-inner">
      <h2 class="section-heading">Products &amp; Ventures</h2>
      <blockquote class="section-intro">${STRATEGY.intro}</blockquote>
    </div>
    <div class="product-grid">
      ${_productStudies.map((s, i) => renderProductCard(s, i)).join('')}
    </div>
    <div class="product-modal" id="product-modal" onclick="closeProductModal(event)">
      <div class="product-modal-inner">
        <button class="product-modal-close" onclick="closeProductModal()">&#215;</button>
        <div id="product-modal-content"></div>
      </div>
    </div>
  `;
}

// --- INITIATIVES ---
function renderInitiatives() {
  _initiativeStudies = [...INITIATIVES.items].sort((a, b) => a.order - b.order);
  return `
    <div class="tab-inner">
      <h2 class="section-heading">AI Initiatives &amp; Projects</h2>
      <blockquote class="section-intro">${INITIATIVES.intro}</blockquote>
    </div>
    <div class="product-grid">
      ${_initiativeStudies.map((s, i) => renderInitiativeCard(s, i)).join('')}
    </div>
    <div class="product-modal" id="initiative-modal" onclick="closeInitiativeModal(event)">
      <div class="product-modal-inner">
        <button class="product-modal-close" onclick="closeInitiativeModal()">&#215;</button>
        <div id="initiative-modal-content"></div>
      </div>
    </div>
  `;
}

// --- ABOUT ---
function renderAbout() {
  return `
    <div class="tab-inner">
      <h2 class="section-heading">About Me</h2>

      <div class="about-grid">

        <div class="about-main">
          <p class="eyebrow">${ABOUT.title}</p>
          <h3 class="about-name">${ABOUT.name}</h3>
          <p class="about-tagline">${ABOUT.tagline}</p>
          <div class="about-bio">
            ${ABOUT.bio.map(p => `<p>${p}</p>`).join('')}
          </div>
          <div class="about-accelerators">
            <span class="dims-label">Accelerators</span>
            <div class="dims-tags">
              ${ABOUT.accelerators.map(a => `<span class="dim-tag">${a}</span>`).join('')}
            </div>
          </div>
        </div>

        <div class="about-sidebar">
          <div class="profile-img-wrap profile-img-wrap--small">
            <img
              src="${ABOUT.profileImage}"
              alt="${ABOUT.name}"
              class="profile-img"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
            >
            <div class="profile-initials" style="display:none">
              ${ABOUT.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
          <div class="education-box">
            <span class="dims-label">Education</span>
            <ul class="edu-list">
              ${ABOUT.education.map(e => `
                <li>
                  <strong>${e.degree}</strong>
                  <span>${e.institution}</span>
                  <small>${e.year}</small>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>

      </div>

      <div class="skills-grid">
        ${ABOUT.skills.map(s => `
          <div class="skill-card">
            <h4>${s.title}</h4>
            <div class="dims-tags">
              ${s.items.map(i => `<span class="dim-tag">${i}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>

    </div>
  `;
}

// --- CONTACT ---
function renderContact() {
  return `
    <div class="tab-inner">
      <h2 class="section-heading">Contact</h2>
      <div class="contact-box">
        <h3 class="contact-heading">${CONTACT.heading}</h3>
        <p class="contact-sub">${CONTACT.subheading}</p>
        <a href="mailto:${CONTACT.email}" class="contact-email">${CONTACT.email}</a>
        <div class="contact-links">
          ${CONTACT.links.map(l => `
            <a href="${l.url}" target="_blank" rel="noopener" class="contact-link">
              <span class="contact-link-label">${l.label}</span>
              <span class="contact-link-handle">${l.handle}</span>
            </a>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}


// ============================================================
// INIT — render everything, show home tab
// ============================================================

function init() {
  buildNav();
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeProductModal(); closeInitiativeModal(); } });

  document.getElementById('tab-home').innerHTML        = renderHome();
  document.getElementById('tab-products').innerHTML    = renderProducts();
  document.getElementById('tab-initiatives').innerHTML = renderInitiatives();
  document.getElementById('tab-about').innerHTML       = renderAbout();
  document.getElementById('tab-contact').innerHTML     = renderContact();

  // Show default tab
  document.getElementById('tab-home').classList.add('active');
}

init();
