lucide.createIcons();

// Page sections
const sections = [
  { id: 'hero', title: 'Home' },
  { id: 'about', title: 'About Me' },
  { id: 'experience', title: 'Experience' },
  { id: 'skills', title: 'Skills' },
  { id: 'work', title: 'Featured Work' },
  { id: 'education', title: 'Education' },
  { id: 'achievements', title: 'Achievements' },
  { id: 'extracurriculars', title: 'Activities' },
  { id: 'contact', title: 'Contact' }
];

let currentPage = 0;

// Create page indicators
const indicatorsContainer = document.getElementById('page-indicators');
sections.forEach((_, index) => {
  const indicator = document.createElement('button');
  indicator.className = `w-2 h-2 rounded-full transition ${index === 0 ? 'bg-orange-500' : 'bg-[#3a3a45]'}`;
  indicator.onclick = () => goToPage(index);
  indicatorsContainer.appendChild(indicator);
});

function goToPage(pageIndex) {
  currentPage = pageIndex;
  const section = sections[pageIndex];
  const element = document.getElementById(section.id);
  
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Update indicators
  document.querySelectorAll('#page-indicators button').forEach((btn, idx) => {
    btn.className = `w-2 h-2 rounded-full transition ${idx === pageIndex ? 'bg-orange-500' : 'bg-[#3a3a45]'}`;
  });
}

document.getElementById('next-btn').addEventListener('click', () => {
  const nextPage = (currentPage + 1) % sections.length;
  goToPage(nextPage);
});

document.getElementById('prev-btn').addEventListener('click', () => {
  const prevPage = (currentPage - 1 + sections.length) % sections.length;
  goToPage(prevPage);
});

const defaultConfig = {
  hero_name: 'Raj Kumar',
  hero_tagline: 'Creative Developer & Designer crafting digital experiences that inspire.',
  about_text: "I'm a passionate developer who loves building beautiful, functional websites and apps. With a focus on clean design and smooth interactions, I bring ideas to life through code. Always learning, always creating.",
  project_1_title: 'E-Commerce Platform',
  project_1_desc: 'Modern shopping experience with smooth animations and intuitive UI.',
  project_2_title: 'Fitness App',
  project_2_desc: 'Health tracking app with personalized workout plans and progress charts.',
  project_3_title: 'Analytics Dashboard',
  project_3_desc: 'Real-time data visualization with interactive charts and reports.',
  exp_1_title: 'Senior Developer at Tech Company',
  exp_1_desc: '2022 - Present | Led development of 5+ projects',
  exp_2_title: 'Junior Developer at Startup',
  exp_2_desc: '2020 - 2022 | Built and maintained web applications',
  skills_text: 'React, Node.js, Python, JavaScript, TypeScript, HTML/CSS, MongoDB, PostgreSQL, AWS, Docker, Git, Figma',
  edu_1_title: 'B.Tech in Computer Science',
  edu_1_desc: 'Delhi University | 2016 - 2020 | CGPA: 8.5/10',
  edu_2_title: 'Full Stack Web Development Bootcamp',
  edu_2_desc: 'Udacity Nanodegree | 2019 | Certified',
  achievement_1: 'Best Developer Award 2023',
  achievement_2: 'Open Source Contributor',
  achievement_3: 'Hackathon Winner',
  extra_1: 'Tech Meetup Organizer',
  extra_2: 'Tech Blogger & Writer',
  email: 'raj@example.com',
  phone: '+91 98765 43210',
  background_color: '#0f0f13',
  surface_color: '#1a1a22',
  text_color: '#e8e8e8',
  accent_color: '#f97316',
  secondary_color: '#ec4899',
  font_family: 'Syne',
  font_size: 16
};

function applyConfig(config) {
  document.getElementById('hero-name').innerHTML = `<span class="gradient-text">${config.hero_name || defaultConfig.hero_name}</span>`;
  document.getElementById('hero-tagline').textContent = config.hero_tagline || defaultConfig.hero_tagline;
  document.getElementById('about-text').textContent = config.about_text || defaultConfig.about_text;
  document.getElementById('project-1-title').textContent = config.project_1_title || defaultConfig.project_1_title;
  document.getElementById('project-1-desc').textContent = config.project_1_desc || defaultConfig.project_1_desc;
  document.getElementById('project-2-title').textContent = config.project_2_title || defaultConfig.project_2_title;
  document.getElementById('project-2-desc').textContent = config.project_2_desc || defaultConfig.project_2_desc;
  document.getElementById('project-3-title').textContent = config.project_3_title || defaultConfig.project_3_title;
  document.getElementById('project-3-desc').textContent = config.project_3_desc || defaultConfig.project_3_desc;
  document.getElementById('exp-1-title').textContent = config.exp_1_title || defaultConfig.exp_1_title;
  document.getElementById('exp-1-desc').textContent = config.exp_1_desc || defaultConfig.exp_1_desc;
  document.getElementById('exp-2-title').textContent = config.exp_2_title || defaultConfig.exp_2_title;
  document.getElementById('exp-2-desc').textContent = config.exp_2_desc || defaultConfig.exp_2_desc;
  document.getElementById('skills-text').textContent = config.skills_text || defaultConfig.skills_text;
  document.getElementById('edu-1-title').textContent = config.edu_1_title || defaultConfig.edu_1_title;
  document.getElementById('edu-1-desc').textContent = config.edu_1_desc || defaultConfig.edu_1_desc;
  document.getElementById('edu-2-title').textContent = config.edu_2_title || defaultConfig.edu_2_title;
  document.getElementById('edu-2-desc').textContent = config.edu_2_desc || defaultConfig.edu_2_desc;
  document.getElementById('achievement-1').textContent = config.achievement_1 || defaultConfig.achievement_1;
  document.getElementById('achievement-2').textContent = config.achievement_2 || defaultConfig.achievement_2;
  document.getElementById('achievement-3').textContent = config.achievement_3 || defaultConfig.achievement_3;
  document.getElementById('extra-1').textContent = config.extra_1 || defaultConfig.extra_1;
  document.getElementById('extra-2').textContent = config.extra_2 || defaultConfig.extra_2;
  document.getElementById('contact-email').textContent = `Email: ${config.email || defaultConfig.email}`;
  document.getElementById('contact-phone').textContent = `Phone: ${config.phone || defaultConfig.phone}`;

  const app = document.getElementById('app');
  app.style.backgroundColor = config.background_color || defaultConfig.background_color;
  app.style.color = config.text_color || defaultConfig.text_color;

  document.querySelectorAll('.bg-[\\#1a1a22]').forEach(el => {
    el.style.backgroundColor = config.surface_color || defaultConfig.surface_color;
  });

  const font = config.font_family || defaultConfig.font_family;
  document.querySelectorAll('.font-heading').forEach(el => {
    el.style.fontFamily = `${font}, sans-serif`;
  });

  const size = config.font_size || defaultConfig.font_size;
  document.getElementById('hero-tagline').style.fontSize = `${size * 1.25}px`;
  document.getElementById('about-text').style.fontSize = `${size * 1.125}px`;
}

window.elementSdk.init({
  defaultConfig,
  onConfigChange: async (config) => { applyConfig(config); },
  mapToCapabilities: (config) => ({
    recolorables: [
      { get: () => config.background_color || defaultConfig.background_color, set: (v) => { config.background_color = v; window.elementSdk.setConfig({ background_color: v }); } },
      { get: () => config.surface_color || defaultConfig.surface_color, set: (v) => { config.surface_color = v; window.elementSdk.setConfig({ surface_color: v }); } },
      { get: () => config.text_color || defaultConfig.text_color, set: (v) => { config.text_color = v; window.elementSdk.setConfig({ text_color: v }); } },
      { get: () => config.accent_color || defaultConfig.accent_color, set: (v) => { config.accent_color = v; window.elementSdk.setConfig({ accent_color: v }); } },
      { get: () => config.secondary_color || defaultConfig.secondary_color, set: (v) => { config.secondary_color = v; window.elementSdk.setConfig({ secondary_color: v }); } }
    ],
    borderables: [],
    fontEditable: { get: () => config.font_family || defaultConfig.font_family, set: (v) => { config.font_family = v; window.elementSdk.setConfig({ font_family: v }); } },
    fontSizeable: { get: () => config.font_size || defaultConfig.font_size, set: (v) => { config.font_size = v; window.elementSdk.setConfig({ font_size: v }); } }
  }),
  mapToEditPanelValues: (config) => new Map([
    ['hero_name', config.hero_name || defaultConfig.hero_name],
    ['hero_tagline', config.hero_tagline || defaultConfig.hero_tagline],
    ['about_text', config.about_text || defaultConfig.about_text],
    ['project_1_title', config.project_1_title || defaultConfig.project_1_title],
    ['project_1_desc', config.project_1_desc || defaultConfig.project_1_desc],
    ['project_2_title', config.project_2_title || defaultConfig.project_2_title],
    ['project_2_desc', config.project_2_desc || defaultConfig.project_2_desc],
    ['project_3_title', config.project_3_title || defaultConfig.project_3_title],
    ['project_3_desc', config.project_3_desc || defaultConfig.project_3_desc],
    ['exp_1_title', config.exp_1_title || defaultConfig.exp_1_title],
    ['exp_1_desc', config.exp_1_desc || defaultConfig.exp_1_desc],
    ['exp_2_title', config.exp_2_title || defaultConfig.exp_2_title],
    ['exp_2_desc', config.exp_2_desc || defaultConfig.exp_2_desc],
    ['skills_text', config.skills_text || defaultConfig.skills_text],
    ['edu_1_title', config.edu_1_title || defaultConfig.edu_1_title],
    ['edu_1_desc', config.edu_1_desc || defaultConfig.edu_1_desc],
    ['edu_2_title', config.edu_2_title || defaultConfig.edu_2_title],
    ['edu_2_desc', config.edu_2_desc || defaultConfig.edu_2_desc],
    ['achievement_1', config.achievement_1 || defaultConfig.achievement_1],
    ['achievement_2', config.achievement_2 || defaultConfig.achievement_2],
    ['achievement_3', config.achievement_3 || defaultConfig.achievement_3],
    ['extra_1', config.extra_1 || defaultConfig.extra_1],
    ['extra_2', config.extra_2 || defaultConfig.extra_2],
    ['email', config.email || defaultConfig.email],
    ['phone', config.phone || defaultConfig.phone]
  ])
});
