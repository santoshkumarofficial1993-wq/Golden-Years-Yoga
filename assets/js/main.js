/* Golden Years Yoga — progressive enhancement only.
   The page is fully usable with JS disabled. */
(function () {
  "use strict";

  /* Mobile nav toggle ------------------------------------------------------ */
  var toggle = document.querySelector(".nav__toggle");
  var links = document.getElementById("primary-nav");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    // Close menu when a link is chosen (mobile)
    links.addEventListener("click", function (e) {
      if (e.target.closest("a") && links.classList.contains("is-open")) {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Current year in footer ------------------------------------------------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* Scroll reveal — purely additive. Content is visible by default in CSS;
     this only plays a gentle entrance the first time an element scrolls in.
     If JS or the observer is unavailable, content simply stays visible. */
  var reveals = document.querySelectorAll(".reveal");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reveals.length && "IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var delay = entry.target.getAttribute("data-delay") || 0;
          entry.target.style.animationDelay = delay + "ms";
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* Breathing widget guided text ------------------------------------------- */
  var bubble = document.querySelector("[data-breathe-label]");
  if (bubble && !reduce) {
    var phases = [
      { t: "Breathe in", ms: 4000 },
      { t: "Hold", ms: 7000 },
      { t: "Breathe out", ms: 8000 }
    ];
    var i = 0;
    function cycle() {
      bubble.textContent = phases[i].t;
      var ms = phases[i].ms;
      i = (i + 1) % phases.length;
      setTimeout(cycle, ms);
    }
    cycle();
  }

  /* Contact form: friendly, no-backend confirmation ------------------------ */
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = document.getElementById("form-status");
      if (note) {
        note.hidden = false;
        note.focus();
      }
      form.reset();
    });
  }
})();
