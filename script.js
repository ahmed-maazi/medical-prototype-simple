const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
const year = document.getElementById('year');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

if (year) {
  year.textContent = String(new Date().getFullYear());
}

const revealSelectors = [
  '.section h2',
  '.section .section-sub',
  '.service-card',
  '.advantage-card',
  '.departments-tags span',
  '.cta-left',
  '.hours',
  '.location-info',
  '.map',
  '.footer-grid > div'
];

const revealElements = document.querySelectorAll(revealSelectors.join(', '));

if (revealElements.length > 0) {
  revealElements.forEach((element, index) => {
    element.classList.add('reveal-on-scroll');
    element.style.transitionDelay = `${(index % 4) * 80}ms`;
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}
