// Mobile Nav
const toggle = document.querySelector('.nav-toggle');
const links  = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => {
  const open = links?.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(!!open));
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 760) {
    links?.classList.remove('open');
  }
});


// Scroll Progress
const progress = document.getElementById('progress');

function setProgress() {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const pct = Math.max(0, Math.min(1, scrollTop / height));
  progress.style.width = pct * 100 + '%';
}

setProgress();
window.addEventListener('scroll', setProgress);
window.addEventListener('resize', setProgress);


// Scroll Reveal
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
