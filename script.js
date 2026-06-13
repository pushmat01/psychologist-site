const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-nav");
const mobileLinks = document.querySelectorAll(".mobile-nav a");

function closeMenu() {
  document.body.classList.remove("menu-open");
  mobileMenu.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
}

menuButton.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("is-open");
  document.body.classList.toggle("menu-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mobileMenu.classList.contains("is-open")) {
    closeMenu();
  }
});
