// Sélectionne la barre de navigation
var navbar = document.querySelector(".navbar");

// Fonction pour ajouter la classe "navbar-scroll" à la barre de navigation lorsque l'utilisateur fait défiler la page
function addNavbarClass() {
  if (window.scrollY >= 50) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
}

// Appelle la fonction "addNavbarClass" lorsque l'utilisateur fait défiler la page
window.addEventListener("scroll", addNavbarClass);
