function showContact() {
  const info = document.getElementById("contact-info");
  if (info.style.display === "none" || info.style.display === "") {
    info.style.display = "block";
  } else {
    info.style.display = "none";
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