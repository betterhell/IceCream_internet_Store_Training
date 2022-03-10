const placeForItem = document.querySelector(".carting-items");

let cartArray = [];

// Добавление в корзину
function addInCart(id) {
  //  проверка, если продукт уже добавлен
  if (cartArray.some((item) => item.id === id)) {
    alert("Товар уже добавлен!");
  } else {
    const item = icecreams.find((icecream) => icecream.id === id);
    cartArray.push({
      ...item,
      numberOfUnits: 1,
    });
    console.log(cartArray);

    updateCart();
  }
}

function updateCart() {
  renderCartItems();
  renderSubtotal();

  // сохранение в local storage
  localStorage.setItem("CART", JSON.stringify(cartArray));
}

function renderCartItems() {
  placeForItem.innerHTML = ""; // удаляет элемен
  cartArray.forEach((item) => {
    placeForItem.innerHTML += `
    <div class='cart-item'>
      <div class='img-name-weight'>
        <img class='img-item' src="${item.pic}" alt="${item.name}">
        <div class='name-weight'>
          <h6 class='name-item'>${item.name} </h6>
          <p class='weight-item'>1 кг х ${item.price} ₽</p>
        </div>
      </div>
      <div class='price_delete_block'>
        <h6 class='price-item'>${item.price} ₽ </h6>
        <a class='delete-item' onclick="removeItemFromCart(${item.id})" href='##'>
        <img src='/images/Cross.svg' alt='Закрыть' />
      </a>
      </div>
    </div>`;
  });
}

const subTotal = document.querySelector(".final-price");
const cartValue = document.querySelector(".cartItems");
const cartIcon = document.querySelector(".img-cart");
const windowCart = document.querySelector(".cart-popup");
const bottomBtn = document.querySelector(".final-order-things");
const cartFill = document.querySelector(".cart_fill");

// Подсчёт общей суммы покупки
function renderSubtotal() {
  let totalPrice = 0;
  let totalItems = 0;

  cartArray.forEach((item) => {
    totalPrice += item.price;
    totalItems += item.numberOfUnits;
  });

  subTotal.innerHTML = `Итого: ${totalPrice} ₽`;

  if (totalItems === 1) {
    windowCart.style.width = "441px";
    windowCart.style.height = "fit-content";
    cartFill.innerHTML = "Корзина";
    cartFill.style.textAlign = "start";
    bottomBtn.classList.add("enabled");
    cartIcon.setAttribute("src", "/images/cartFull.svg");
    cartValue.innerHTML = `${totalItems} товар`;
  } else if (totalItems === 0) {
    cartFill.style.textAlign = "center";
    windowCart.style.width = "288px";
    windowCart.style.height = "156px";
    cartFill.innerHTML = "Ваша корзина <br> пока пуста";
    bottomBtn.classList.remove("enabled");
    cartIcon.setAttribute("src", "/images/Cart.svg");
    cartValue.innerHTML = "Пусто";
  } else if (totalItems <= 4) {
    cartValue.innerHTML = `${totalItems} товара`;
  } else {
    cartValue.innerHTML = `${totalItems} товаров`;
  }
}

// Удаление товара из корзины
function removeItemFromCart(id) {
  cartArray = cartArray.filter((item) => item.id !== id);
  updateCart();
}
