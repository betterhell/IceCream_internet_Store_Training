// Список попапов
const popUps = [
  ".search-popup",
  ".login-popup",
  ".catalogue-popup",
  ".cart-popup",
];

// Закрытие всех попапов
const closeAllPopUp = () => {
  popUps.forEach((name) => {
    const item = document.querySelector(name);
    item.classList.remove("active");
  });
};

// Инициализация попапа
const popUpInit = (open, body) => {
  const openPopUp = document.querySelector(open);

  const popUp = document.querySelector(body);

  openPopUp.addEventListener("click", function (e) {
    e.preventDefault();
    closeAllPopUp();
    popUp.classList.add("active");
    e.stopPropagation();
  });

  popUp.addEventListener("click", (e) => {
    e.stopPropagation();
  });
};

document.body.addEventListener("click", closeAllPopUp);

// Форма поиска
popUpInit(".open-search-popup", ".search-popup");

// Форма логина
popUpInit(".open-login-popup", ".login-popup");

// Попап каталога
popUpInit(".catalogue", ".catalogue-popup");

// Попап корзины
popUpInit(".open-cart-popup", ".cart-popup");

// Сортировка
// popUpInit(".visibleSort", ".additionSort");
