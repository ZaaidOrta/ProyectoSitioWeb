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
      
      // AÑADIR: Cerrar el menú después de hacer clic en un enlace
      if (nav.classList.contains("active")) {
          nav.classList.remove("active"); 
      }
    });
  });

  // Menu tipo toggle "celu"
 const nav = document.querySelector("nav ul");
  // MODIFICAR: Usar el elemento existente en HTML con ID
  const toggle = document.getElementById("menu-toggle"); 
  
  if (toggle) { // Verificar que el elemento existe
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  // 🔆 Cambiar logos según tema (función)
  function updateThemeImages() {
    const isLight = document.body.classList.contains('light-mode');
    document.querySelectorAll('.theme-image').forEach(img => {
      img.src = isLight ? img.dataset.light : img.dataset.dark;
    });
  }

  // INTERRUPTOR MODO DÍA/NOCHE CON GUARDADO
  const themeSwitch = document.getElementById("theme-switch");

  // Aplicar modo guardado al cargar
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    themeSwitch.checked = true;
  }

  // ✅ Actualizar imágenes cuando se carga la página
  updateThemeImages();

  // Cambiar y guardar el modo
  themeSwitch.addEventListener("change", () => {
    document.body.classList.toggle("light-mode", themeSwitch.checked);
    localStorage.setItem("theme", themeSwitch.checked ? "light" : "dark");
    updateThemeImages(); // ✅ Actualizar imágenes al cambiar modo
  });
});
