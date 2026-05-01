// ⏳ =========================
// CUENTA REGRESIVA
// =========================

// Configura la fecha del evento aquí (Año, Mes -1, Día, Hora, Minutos)
const eventDate = new Date(2026, 9, 15, 16, 0, 0).getTime();

const updateTimer = () => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  if (diff > 0) {
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");

    if (daysEl && hoursEl && minutesEl) {
      daysEl.innerText = d.toString().padStart(2, "0");
      hoursEl.innerText = h.toString().padStart(2, "0");
      minutesEl.innerText = m.toString().padStart(2, "0");
    }
  } else {
    const container = document.querySelector(".countdown-container");
    if (container) {
      container.innerHTML = "<p>¡ES HOY! 🎂</p>";
    }
  }
};

setInterval(updateTimer, 1000);
updateTimer();


// 🚀 =========================
// TODO EL DOM
// =========================

document.addEventListener("DOMContentLoaded", function () {

  // 🎯 ELEMENTOS
  const inicio = document.getElementById("inicio");
  const contenido = document.getElementById("contenido");
  const musica = document.getElementById("musica");
  const playBtn = document.getElementById("play-btn");

  // 🔒 PANTALLA INICIAL
  if (inicio && contenido) {
    inicio.addEventListener("click", () => {
      inicio.style.display = "none";
      contenido.style.display = "block";

      if (musica) {
        musica.play().catch(() => {
          console.log("Autoplay bloqueado 😅");
        });
      }

      // 🌟 Iniciar estrellas SOLO después de entrar
      setInterval(createStar, 300);
    });
  }

  // 🔊 BOTÓN PLAY / PAUSA
  if (playBtn && musica) {
    playBtn.addEventListener("click", function () {
      if (musica.paused) {
        musica.play();
        playBtn.classList.add("playing");
      } else {
        musica.pause();
        playBtn.classList.remove("playing");
      }
    });
  }

  // ✨ ANIMACIONES AL SCROLL
  const elements = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
  });

});


// 🌟 =========================
// ESTRELLITAS
// =========================

function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.left = Math.random() * window.innerWidth + "px";
  star.style.animationDuration = (Math.random() * 3 + 2) + "s";

  document.body.appendChild(star);

  setTimeout(() => star.remove(), 5000);
}