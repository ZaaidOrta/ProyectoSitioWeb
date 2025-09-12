// Mostrar solo la sección seleccionada
const menuLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll(".section");

menuLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Ocultar todas las secciones
    sections.forEach(section => section.classList.remove("active"));

    // Mostrar la sección seleccionada
    const sectionId = link.getAttribute("data-section");
    document.getElementById(sectionId).classList.add("active");

    // Cerrar el menú en móvil
    document.querySelector("nav ul").classList.remove("active");
  });
});

// menu tipo toggle "celu"
const nav = document.querySelector("nav ul");
const toggle = document.createElement("div");
toggle.innerHTML = "&#9776;"; 
toggle.classList.add("menu-toggle");
document.querySelector("nav").appendChild(toggle);

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
