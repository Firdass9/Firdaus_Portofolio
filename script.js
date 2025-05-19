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
  sidebar.classList.toggle("show");
  contentWrapper.classList.toggle("sidebar-shift");
}

function toggleNav() {
  const sidebar = document.getElementById("sidebar");
  const contentWrapper = document.querySelector(".content-wrapper");
  const overlay = document.getElementById("overlay");

  sidebar.classList.toggle("show");
  contentWrapper.classList.toggle("sidebar-shift");
  overlay.classList.toggle("show");
}