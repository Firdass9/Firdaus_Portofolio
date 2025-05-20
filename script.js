function toggleMusic() {
  const music = document.getElementById("background-music");
  if (music.muted) {
    music.muted = false;
    music.play();
  } else if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

console.log("Card aktif!");

function showContact() {
  const info = document.getElementById("contact-info");
  if (info.style.display === "none" || info.style.display === "") {
    info.style.display = "block";
    info.style.opacity = 0;
    setTimeout(() => {
      info.style.transition = "opacity 0.5s ease-in";
      info.style.opacity = 1;
    }, 10);
  } else {
    info.style.opacity = 0;
    setTimeout(() => {
      info.style.display = "none";
    }, 500);
  }
}

function toggleNav() {
  const sidebar = document.getElementById("sidebar");
  const contentWrapper = document.querySelector(".content-wrapper");
  const overlay = document.getElementById("overlay");

  sidebar.classList.toggle("show");
  contentWrapper.classList.toggle("sidebar-shift");
  overlay.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.2
  });

  const targets = document.querySelectorAll(".scroll-animate");
  targets.forEach((el) => observer.observe(el));
});

// Autoplay music saat halaman dibuka, atau setelah klik jika diblokir browser
  const music = document.getElementById("background-music");
  music.play().catch(() => {
    // Jika autoplay gagal, tunggu klik pertama
    document.body.addEventListener("click", () => {
      music.play();
    }, { once: true });
  });