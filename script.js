document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  // Activar sección según parámetro en URL
  const params = new URLSearchParams(window.location.search);
  const sectionParam = params.get('section');

  if (sectionParam) {
    sections.forEach(section => section.classList.remove("active"));
    const targetSection = document.getElementById(sectionParam);
    if (targetSection) targetSection.classList.add("active");
  }

  // Mostrar solo la sección seleccionada desde menú
  const menuLinks = document.querySelectorAll("nav a[data-section]");
  menuLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      sections.forEach(section => section.classList.remove("active"));
      const sectionId = link.getAttribute("data-section");
      document.getElementById(sectionId).classList.add("active");
    });
  });

  // Menu tipo toggle "celu"
  const nav = document.querySelector("nav ul");
  const toggle = document.createElement("div");
  toggle.innerHTML = "&#9776;"; 
  toggle.classList.add("menu-toggle");
  document.querySelector("nav").appendChild(toggle);

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});

// INTERRUPTOR MODO DÍA/NOCHE CON GUARDADO
const themeSwitch = document.getElementById("theme-switch");

// Aplicar modo guardado al cargar
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  themeSwitch.checked = true;
}

// Cambiar y guardar el modo
themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("light-mode", themeSwitch.checked);
  localStorage.setItem("theme", themeSwitch.checked ? "light" : "dark");
});



