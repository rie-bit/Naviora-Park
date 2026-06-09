// ===== NAVBAR SCROLL =====
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 60));

// ===== HAMBURGER MENU =====
const hbg = document.getElementById('hamburger');
const mob = document.getElementById('mobileMenu');
hbg.addEventListener('click', () => mob.classList.toggle('open'));
mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mob.classList.remove('open')));

// ===== REALM TABS =====
document.querySelectorAll('.realm-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.realm-tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.realm-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('realm-' + btn.dataset.realm).classList.add('active');
  });
});

// ===== SCROLL REVEAL =====
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => io.observe(el));

// ===== BIOLUMINESCENT PARTICLES =====
const pLayer = document.getElementById('particles');

function mkParticle() {
  const p = document.createElement('div');
  p.className = 'orb';
  const size = Math.random() * 5 + 2;
  const isBlue = Math.random() > 0.4;
  p.style.cssText = `
    width:${size}px; height:${size}px;
    left:${Math.random() * 100}%;
    bottom: -10px;
    background: radial-gradient(circle, ${isBlue ? 'rgba(0,229,255,0.8)' : 'rgba(173,124,245,0.8)'} 0%, transparent 70%);
    animation-duration: ${Math.random() * 10 + 8}s;
    animation-delay: ${Math.random() * 5}s;
    box-shadow: 0 0 ${size * 2}px ${isBlue ? 'rgba(0,229,255,0.6)' : 'rgba(173,124,245,0.6)'};
  `;
  pLayer.appendChild(p);
  setTimeout(() => p.remove(), 20000);
}

for (let i = 0; i < 20; i++) mkParticle();
setInterval(mkParticle, 1000);

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
  });
});