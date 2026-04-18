/* ─────────────────────────────────────────────────────────────
   Bioinformatics for Space Biology · PhilSA-ISMDD
   main.js — Navigation, Theme, Starfield, ToC observer
   ───────────────────────────────────────────────────────────── */

/* ─── STARFIELD ─────────────────────────────────────────────── */
(function initStarfield() {
  const sf = document.getElementById('starfield');
  if (!sf) return;
  for (let i = 0; i < 120; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const size = Math.random() * 2.5 + 0.5;
    s.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random()*100}%;
      top:${Math.random()*100}%;
      --dur:${2+Math.random()*6}s;
      --delay:${Math.random()*8}s;
      --op:${0.2+Math.random()*0.6};
    `;
    sf.appendChild(s);
  }
})();

/* ─── THEME ─────────────────────────────────────────────────── */
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  const icon  = document.getElementById('theme-icon');
  const label = document.getElementById('theme-label');
  if (icon)  icon.textContent  = isDark ? '🌙' : '☀️';
  if (label) label.textContent = isDark ? 'Dark Mode' : 'Light Mode';
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
}

(function restoreTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    const icon  = document.getElementById('theme-icon');
    const label = document.getElementById('theme-label');
    if (icon)  icon.textContent  = '🌙';
    if (label) label.textContent = 'Dark Mode';
  }
})();

/* ─── TOC ACTIVE HIGHLIGHTING ───────────────────────────────── */
(function initTocObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        document.querySelectorAll('.sidebar-toc a').forEach(a => a.classList.remove('active'));
        const link = document.querySelector(`.sidebar-toc a[href="#${e.target.id}"]`);
        if (link) link.classList.add('active');
      }
    });
  }, { threshold: 0.2, rootMargin: '-70px 0px -55% 0px' });

  document.querySelectorAll('.content-body h2[id], .content-body h3[id]').forEach(h => {
    observer.observe(h);
  });
})();
