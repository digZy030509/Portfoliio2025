function darkMode() {
  // Toggle dark mode on and off
  let darkmode = document.body.classList.toggle("darkmode");
  let nav = document.getElementsByTagName("nav")[0];
  nav.style.boxShadow = "0 0 10px rgba(211, 210, 210, 0.5) ";
  let toggleImg = document.getElementById("toggleImg");
  let navLinks = document.querySelectorAll("nav a");

  if (darkmode) {
    toggleImg.src = "./asset/socials/icons8-sun.gif";
    toggleImg.alt = "Light Mode";
    navLinks.forEach((link) => {
      link.classList.toggle("darkmodehover");
    });
  } else {
    toggleImg.src = "./asset/socials/icons8-moon.gif";
    toggleImg.alt = "Dark Mode";
    navLinks.forEach((link) => {
      link.classList.remove("darkmodehover");
    });
  }
  //   change the color of the navigation when hover
}
darkMode();

// Mobile menu
const hamburger = document
  .getElementById("hamburger")
  .addEventListener("click", toggleMenu);
function toggleMenu() {
  const menu = document.getElementById("menu");
  let menuMobile = document.getElementsByClassName(".nav-mobile");
  // Toggle the menu open and closed
  menu.classList.toggle("active");
  // Change the icon of the menu button
  let menuBtn = document.getElementById("hamburger");
  menuBtn.src = menu.classList.contains("active")
    ? "./asset/menu/arrow.png"
    : "./asset/menu/hamburger.png";
}

// Close the menu when a link is clicked
const menuLinks = document.querySelectorAll(".nav-mobile li");
menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

function closeMenu() {
  const menu = document.getElementById("menu");
  menu.classList.remove("active");
  let menuBtn = document.getElementById("hamburger");
  menuBtn.src = "./asset/menu/hamburger.png";
}
