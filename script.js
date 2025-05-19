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

// Slide-in animation saat scroll atau load
function revealSections() {
  const sections = document.querySelectorAll(".slide");
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("DOMContentLoaded", revealSections);