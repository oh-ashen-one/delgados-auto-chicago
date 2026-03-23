// === GSAP SETUP — Delgado's Auto Service ===
gsap.registerPlugin(ScrollTrigger);

function animateIfExists(selector, animProps, triggerOpts = {}) {
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;
  gsap.from(elements, {
    ...animProps,
    scrollTrigger: {
      trigger: elements[0].closest('section') || elements[0],
      start: 'top 80%',
      once: true,
      ...triggerOpts
    }
  });
}

// Hero entrance animations
const heroEyebrow = document.querySelector('.hero-eyebrow');
if (heroEyebrow) {
  const tl = gsap.timeline({ delay: 0.3 });
  tl.to('.hero-eyebrow', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
    .to('.hero h1', { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.4')
    .to('.hero-sub', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5')
    .to('.hero-ctas', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4');
}

// Service cards stagger
animateIfExists('.service-card', {
  opacity: 0, y: 40, duration: 0.7, stagger: 0.15, ease: 'power3.out'
});

// Stats counter animations
document.querySelectorAll('[data-count]').forEach(el => {
  const target = parseInt(el.dataset.count);
  gsap.from(el, {
    textContent: 0, duration: 2.5, ease: 'power3.out',
    snap: { textContent: 1 },
    scrollTrigger: { trigger: el, start: 'top 85%', once: true },
    onUpdate: function() {
      el.textContent = Math.round(parseFloat(el.textContent)).toLocaleString();
    }
  });
});

// Stat items reveal
animateIfExists('.stat-item', {
  opacity: 0, y: 30, duration: 0.6, stagger: 0.12, ease: 'power3.out'
});

// Testimonial cards
animateIfExists('.testimonial-card', {
  opacity: 0, y: 40, duration: 0.7, stagger: 0.15, ease: 'power3.out'
});

// FAQ items
animateIfExists('.faq-item', {
  opacity: 0, y: 20, duration: 0.5, stagger: 0.08, ease: 'power3.out'
});

// Generic reveal class
animateIfExists('.reveal', {
  opacity: 0, y: 40, duration: 0.8, stagger: 0.15, ease: 'power3.out'
});

// === NAV — hamburger ===
const hamburger = document.querySelector('.hamburger');
const navDrawer = document.querySelector('.nav-drawer');
if (hamburger && navDrawer) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navDrawer.classList.toggle('open');
    document.body.style.overflow = navDrawer.classList.contains('open') ? 'hidden' : '';
  });

  navDrawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navDrawer.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// === FAQ accordion ===
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(open => open.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// === Scroll-triggered section reveals ===
gsap.utils.toArray('section').forEach(section => {
  const title = section.querySelector('h2, h3');
  if (title && !section.classList.contains('hero')) {
    gsap.from(title, {
      opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: section, start: 'top 82%', once: true }
    });
  }
});
