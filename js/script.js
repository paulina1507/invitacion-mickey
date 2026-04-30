// Configura la fecha del evento aquí (Año, Mes -1, Día, Hora, Minutos)
const eventDate = new Date(2026, 9, 15, 16, 0, 0).getTime();

const updateTimer = () => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  if (diff > 0) {
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("days").innerText = d.toString().padStart(2, "0");
    document.getElementById("hours").innerText = h.toString().padStart(2, "0");
    document.getElementById("minutes").innerText = m
      .toString()
      .padStart(2, "0");
  } else {
    document.querySelector(".countdown-container").innerHTML =
      "<p>¡ES HOY! 🎂</p>";
  }
};

setInterval(updateTimer, 1000);
updateTimer();

document.addEventListener("DOMContentLoaded", function () {
  const music = document.getElementById("musica");
  const playBtn = document.getElementById("play-btn");

  playBtn.addEventListener("click", function () {
    if (music.paused) {
      music.play();
      playBtn.classList.add("playing");
      playBtn.querySelector("span").innerText = "Sonando 🎵";
    } else {
      music.pause();
      playBtn.classList.remove("playing");
      playBtn.querySelector("span").innerText = "Play para reproducir";
    }
  });
});

const elements = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 },
);

elements.forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});


function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.body.appendChild(star);

    setTimeout(() => star.remove(), 5000);
}

setInterval(createStar, 300);