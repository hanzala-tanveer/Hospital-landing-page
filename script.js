let nav = document.querySelector("#nav");
let menu = document.querySelector("#menu-btn");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
});
