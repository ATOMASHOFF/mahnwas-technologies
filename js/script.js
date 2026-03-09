/* Loader */
window.addEventListener('load', () => setTimeout(() => document.getElementById('loader').classList.add('done'), 1500));

/* Scroll reveal */
const revEls = document.querySelectorAll('.reveal');
const revObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revObs.unobserve(e.target); } });
}, { threshold: 0.07, rootMargin: '0px 0px -30px 0px' });
revEls.forEach(el => revObs.observe(el));

/* Hero reveals after loader */
document.querySelectorAll('#hero .reveal').forEach((el, i) => setTimeout(() => el.classList.add('visible'), 1600 + i * 130));

/* Scroll progress */
const progBar = document.getElementById('progress');
window.addEventListener('scroll', () => {
  progBar.style.width = (window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100) + '%';
}, { passive: true });

/* Nav scroll */
const navEl = document.getElementById('nav');
window.addEventListener('scroll', () => navEl.classList.toggle('scrolled', window.scrollY > 30), { passive: true });

/* Mobile burger */
const burger = document.getElementById('burger');
const mob = document.getElementById('mobileMenu');
burger.addEventListener('click', () => { burger.classList.toggle('open'); mob.classList.toggle('open'); });
mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { burger.classList.remove('open'); mob.classList.remove('open'); }));

/* FAQ */
function toggleFaq(btn) {
  const ans = btn.nextElementSibling;
  const icon = btn.querySelector('.faq-icon');
  const wasOpen = btn.classList.contains('open');
  document.querySelectorAll('.faq-q.open').forEach(q => { q.classList.remove('open'); q.querySelector('.faq-icon').textContent = '+'; q.nextElementSibling.classList.remove('open'); });
  if (!wasOpen) { btn.classList.add('open'); icon.textContent = '−'; ans.classList.add('open'); }
}

/* Counter */
function animCount(el) {
  const t = parseInt(el.dataset.t);
  let c = 0; const s = t / 75;
  const iv = setInterval(() => { c += s; if (c >= t) { el.textContent = t; clearInterval(iv); } else { el.textContent = Math.floor(c); } }, 16);
}
const cuEls = document.querySelectorAll('.cu');
const cuObs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { animCount(e.target); cuObs.unobserve(e.target); } }), { threshold: 0.5 });
cuEls.forEach(el => cuObs.observe(el));

/* Active nav */
const secs = document.querySelectorAll('section[id]');
const nlinks = document.querySelectorAll('.nav-links a[href^="#"]');
window.addEventListener('scroll', () => {
  let cur = '';
  secs.forEach(s => { if (window.scrollY >= s.offsetTop - 100) cur = s.id; });
  nlinks.forEach(a => { a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--c-accent)' : ''; });
}, { passive: true });
