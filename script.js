// Theme Toggle
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = toggleBtn.querySelector('i');

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});

// Slide Animation
const paragraphs = document.querySelectorAll('.slide-paragraph p');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      entry.target.style.transition = 'opacity 1s ease, transform 1s ease';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

paragraphs.forEach(p => {
  observer.observe(p);
});

document.getElementById('play-music-btn').addEventListener('click', function () {
  const music = document.getElementById('bg-music');
  music.play();
});