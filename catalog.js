const selectSorts = {
  POPULARS: "по популярности",
  NEW: "новинки",
  MIN_PRICE: "по минимальной цене",
  MAX_PRICE: "по максимальной цене",
};

const fillers = {
  CHOKOLATE: "шоколад",
  SUGAR: "сахарные посыпки",
  FRUITS: "фрукты",
  SYRUPS: "сиропы",
  JEM: "джемы",
};

const icecreams = [
  {
    id: 0,
    pic: "/images/mini/Photo.svg",
    name: "Малинка",
    description: "Сливочное мороженое с малиновым джемом",
    price: 310,
    fat: 3,
    fillers: [fillers.JEM, fillers.FRUITS],
    numberOfUnits: 1,
  },
  {
    id: 1,
    pic: "/images/mini/Photo1.svg",
    name: "Фисташка",
    description: "Фисташковый пломбир с кусочками шоколада",
    price: 340,
    fat: 0,
    fillers: [fillers.CHOKOLATE],
  },
  {
    id: 2,
    pic: "/images/mini/Photo2.svg",
    name: "Черника",
    description: "Крем-брюле с черничным джемом",
    price: 330,
    fat: 15,
    fillers: [fillers.JEM, fillers.FRUITS],
  },
  {
    id: 3,
    pic: "/images/mini/Photo3.svg",
    name: "Бабл-гам",
    description: "Ванильный пломбир со сладкой посыпкой",
    price: 320,
    fat: 45,
    fillers: [fillers.SUGAR],
  },
  {
    id: 4,
    pic: "/images//banan.svg",
    name: "Банан",
    description: "Сливочный пломбир с банановым вкусом",
    price: 340,
    fat: 25,
    fillers: [fillers.FRUITS],
  },
  {
    id: 5,
    pic: "/images/shokoladka.svg",
    name: "Шоколадка",
    description: "Классический шоколадный пломбир",
    price: 270,
    fat: 10,
    fillers: [fillers.CHOKOLATE],
  },
  {
    id: 6,
    pic: "/images/klubnika.svg",
    name: "Клубничка",
    description: "Сливочный пломбир с клубничным вкусом",
    price: 300,
    fat: 20,
    fillers: [fillers.FRUITS],
  },
  {
    id: 7,
    pic: "/images/limon.svg",
    name: "Лимон",
    description: "Освежающий лимонный сорбет",
    price: 310,
    fat: 56,
    fillers: [fillers.FRUITS],
  },
  {
    id: 8,
    pic: "/images/mentol.svg",
    name: "Ментол",
    description: "Сливочный пломбир с ментоловым сиропом",
    price: 320,
    fat: 15,
    fillers: [fillers.SYRUPS],
  },
  {
    id: 9,
    pic: "/images/oreh.svg",
    name: "Орешек",
    description: "Фисташковый пломбир с шоколадным сиропом",
    price: 360,
    fat: 10,
    fillers: [fillers.CHOKOLATE, fillers.SYRUPS],
  },
  {
    id: 10,
    pic: "/images/krem-brule.svg",
    name: "Крем-брюле",
    description: "Классическое крем-брюле",
    price: 280,
    fat: 2,
    fillers: [fillers.SUGAR],
  },
  {
    id: 11,
    pic: "/images/ejevika.svg",
    name: "Ежевика",
    description: "Сливочное мороженое с ежевичным джемом",
    price: 330,
    fat: 10,
    filler: [fillers.FRUITS, fillers.JEM],
  },
];

const initCatalog = () => {
  const catalog = document.getElementById("catalog");

  const fatInputs = document.querySelectorAll(".fat-input");
  const fillInputs = document.querySelectorAll(".fill-inputs");
  const selectSort = document.getElementById("select-sort");

  let items = [...icecreams];
  switch (selectSort.value) {
    case selectSorts.MIN_PRICE:
      items = items.sort((item1, item2) => {
        if (item1.price > item2.price) {
          return 1;
        }
        return -1;
      });
      break;
    case selectSorts.MAX_PRICE:
      items = items.sort((item1, item2) => {
        if (item1.price > item2.price) {
          return -1;
        }
        return 1;
      });
      break;

    default:
      break;
  }

  items.forEach((icecream) => {
    const container = document.createElement("div");
    container.classList.add("art1");
    container.setAttribute("data-id", icecream.id);
    const pic = document.createElement("img");
    pic.setAttribute("src", icecream.pic);
    const name = document.createElement("h4");
    name.innerHTML = icecream.name;
    name.classList.add("head-art");
    const description = document.createElement("p");
    description.innerHTML = icecream.description;
    const control = document.createElement("div");

    control.classList.add("art1-in");
    const price = document.createElement("h4");
    price.innerHTML = icecream.price + " ₽/кг";
    price.classList.add("price");
    const link = document.createElement("a");
    link.classList.add("articles-link");
    link.setAttribute("href", "##");
    const btnToBuy = document.createElement("img");
    btnToBuy.setAttribute("src", "/images/red cart.svg");
    btnToBuy.classList.add("articles-icon");
    btnToBuy.setAttribute("onclick", `addInCart(${icecream.id})`);

    control.appendChild(price);
    control.appendChild(link);

    link.appendChild(btnToBuy);

    container.appendChild(pic);
    container.appendChild(name);
    container.appendChild(description);
    container.appendChild(control);

    catalog.appendChild(container);
  });
};

const clearCatalog = () => {
  const catalog = document.getElementById("catalog");

  while (catalog.firstChild) {
    catalog.removeChild(catalog.firstChild);
  }
};

initCatalog();

const sumbitSort = document.getElementById("submit-sort");

sumbitSort.addEventListener("click", () => {
  clearCatalog();
  initCatalog();
});

// ====================================

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

  if (totalItems > 0) {
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
let deleteBtn = document.querySelectorAll(".delete-item");

// deleteBtn.addEventListener("click", function () {
//   cartArray = cartArray.filter(() => item.id !== id);
//   updateCart();
// });
