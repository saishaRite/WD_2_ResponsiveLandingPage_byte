(() => {
  "use strict";

  const year = document.querySelector("#year");
  const parallaxElements = document.querySelectorAll("[data-speed]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Parallax is applied with the CSS translate property so it does not
  // overwrite existing transforms used by cards and the dashboard.
  let ticking = false;

  function updateParallax() {
    if (reduceMotion.matches) {
      parallaxElements.forEach((element) => {
        element.style.translate = "0 0";
      });
      ticking = false;
      return;
    }

    const scrollPosition = window.scrollY;

    parallaxElements.forEach((element) => {
      const speed = Number(element.dataset.speed) || 0;
      const movement = Math.max(-150, Math.min(150, scrollPosition * speed));
      element.style.translate = `0 ${movement.toFixed(2)}px`;
    });

    ticking = false;
  }

  function requestParallaxUpdate() {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
  window.addEventListener("resize", requestParallaxUpdate, { passive: true });

  if (typeof reduceMotion.addEventListener === "function") {
    reduceMotion.addEventListener("change", requestParallaxUpdate);
  }

  updateParallax();
})();
