// Nav scroll effect
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile nav toggle
const navMobileBtn = document.getElementById('navMobileBtn');
navMobileBtn?.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('open'));
});

// WA Modal
const waOverlay = document.getElementById('waOverlay');
const waClose = document.getElementById('waClose');
waClose?.addEventListener('click', () => waOverlay.classList.remove('open'));
waOverlay?.addEventListener('click', (e) => {
  if (e.target === waOverlay) waOverlay.classList.remove('open');
});

// Unidades tabs
const unitBtns = document.querySelectorAll('.unit-tab-btn');
const unitPanels = document.querySelectorAll('.unit-panel');
unitBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-unit');
    unitBtns.forEach(b => b.classList.remove('active'));
    unitPanels.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(target)?.classList.add('active');
  });
});

// Service category filter
const catBtns = document.querySelectorAll('.serv-cat-btn');
const serviceCards = document.querySelectorAll('.service-card');

catBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    catBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.getAttribute('data-cat');
    serviceCards.forEach(card => {
      if (cat === 'all' || card.getAttribute('data-cat') === cat) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Testimonials carousel
const track = document.getElementById('testimonialsTrack');
const tPrev = document.getElementById('tPrev');
const tNext = document.getElementById('tNext');
let tPos = 0;

function updateTestimonials() {
  if (!track) return;
  track.style.transform = `translateX(${tPos}px)`;
}

tNext?.addEventListener('click', () => {
  const cardW = 341; // 340 + 1px gap
  const maxScroll = -(track.scrollWidth - track.parentElement.clientWidth);
  tPos = Math.max(tPos - cardW, maxScroll);
  updateTestimonials();
});

tPrev?.addEventListener('click', () => {
  const cardW = 341;
  tPos = Math.min(tPos + cardW, 0);
  updateTestimonials();
});

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObserver.observe(el));
