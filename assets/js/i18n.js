const dict = {
  id: {
    navHome:'Home',
    navAbout:'Tentang',
    navProjects:'Projects',
    navTestimonials:'Testimoni',
    navContact:'Kontak',
    heroTitle:'Hi, saya Zaidan',
    heroDesc:'Web Developer muda fokus UI modern & responsif',
    aboutTitle:'Tentang Saya',
    aboutDesc:'Saya adalah web developer pelajar.',
    eduTitle:'Pendidikan',
    projectsTitle:'Projects',
    testimonialsTitle:'Testimoni',
    contactTitle:'Kontak'
  },
  en: {
    navHome:'Home',
    navAbout:'About',
    navProjects:'Projects',
    navTestimonials:'Testimonials',
    navContact:'Contact',
    heroTitle:'Hi, I am Zaidan',
    heroDesc:'Young Web Developer focused on modern UI',
    aboutTitle:'About Me',
    aboutDesc:'I am a student web developer.',
    eduTitle:'Education',
    projectsTitle:'Projects',
    testimonialsTitle:'Testimonials',
    contactTitle:'Contact'
  }
};

let lang = 'id';

document.addEventListener('DOMContentLoaded', () => {
  const applyLang = () => {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = dict[lang][el.dataset.i18n];
    });
  };

  applyLang();

  document.getElementById('langBtn')?.addEventListener('click', () => {
    lang = lang === 'id' ? 'en' : 'id';
    applyLang();
  });
});
