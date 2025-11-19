document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  const params = new URLSearchParams(window.location.search);
  const sectionParam = params.get('section');

  if (sectionParam) {
    sections.forEach(section => section.classList.remove("active"));
    const targetSection = document.getElementById(sectionParam);
    if (targetSection) targetSection.classList.add("active");
  }

  const menuLinks = document.querySelectorAll("nav a[data-section]");
  menuLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      sections.forEach(section => section.classList.remove("active"));
      const sectionId = link.getAttribute("data-section");
      document.getElementById(sectionId).classList.add("active");

      // cerrar menú al dar click
      if (nav.classList.contains("active")) {
        nav.classList.remove("active");
      }
    });
  });

  // 🔥 FIX PRINCIPAL
  const nav = document.querySelector("nav");
  const toggle = document.getElementById("menu-toggle");

  if (toggle) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  function updateThemeImages() {
    const isLight = document.body.classList.contains('light-mode');
    document.querySelectorAll('.theme-image').forEach(img => {
      img.src = isLight ? img.dataset.light : img.dataset.dark;
    });
  }

  const themeSwitch = document.getElementById("theme-switch");

  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    themeSwitch.checked = true;
  }

  updateThemeImages();

  themeSwitch.addEventListener("change", () => {
    document.body.classList.toggle("light-mode", themeSwitch.checked);
    localStorage.setItem("theme", themeSwitch.checked ? "light" : "dark");
    updateThemeImages();
  });
});
