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
  { id: 'strategy',   label: 'AI Product Lead & Strategist' },
  { id: 'initiatives',label: 'AI Initiatives'               },
  { id: 'other',      label: 'Other Projects'               },
  { id: 'about',      label: 'About'                        },
  { id: 'contact',    label: 'Contact'                      }
];

let activeTab = 'home';


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

// --- STRATEGY ---
function renderStrategy() {
  return `
    <div class="tab-inner">
      <h2 class="section-heading">AI Product Lead &amp; Strategist</h2>
      <blockquote class="section-intro">${STRATEGY.intro}</blockquote>
      <div class="cards">
        ${STRATEGY.caseStudies.map(s => renderCard(s)).join('')}
      </div>
    </div>
  `;
}

// --- INITIATIVES ---
function renderInitiatives() {
  return `
    <div class="tab-inner">
      <h2 class="section-heading">AI Initiatives</h2>
      <blockquote class="section-intro">${INITIATIVES.intro}</blockquote>
      <div class="cards">
        ${INITIATIVES.caseStudies.map(s => renderCard(s)).join('')}
      </div>
    </div>
  `;
}

// --- OTHER PROJECTS ---
function renderOther() {
  return `
    <div class="tab-inner">
      <h2 class="section-heading">Other Projects</h2>


      <h3 class="subsection-heading">Passion Projects</h3>
      <div class="cards">
        ${OTHER_PROJECTS.projects.map(p => renderCard(p, true)).join('')}
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

  document.getElementById('tab-home').innerHTML        = renderHome();
  document.getElementById('tab-strategy').innerHTML    = renderStrategy();
  document.getElementById('tab-initiatives').innerHTML = renderInitiatives();
  document.getElementById('tab-other').innerHTML       = renderOther();
  document.getElementById('tab-about').innerHTML       = renderAbout();
  document.getElementById('tab-contact').innerHTML     = renderContact();

  // Show default tab
  document.getElementById('tab-home').classList.add('active');
}

init();
