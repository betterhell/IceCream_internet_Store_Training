// Бургер
const hamb = document.querySelector(".hamb");
const burgerPopUp = document.querySelector(".burger-popup");
const menuBurger = document.querySelector(".top-navig");

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  burgerPopUp.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("fixed");
}
