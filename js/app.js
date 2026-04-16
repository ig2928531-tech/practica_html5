document.addEventListener("DOMContentLoaded", () => {
  console.log("Página de Series cargada correctamente.");

  // Extra: botón interactivo
  const btn = document.querySelector(".btn");
  btn.addEventListener("click", () => {
    alert("¡Bienvenido al mundo de las series!");
  });
});
