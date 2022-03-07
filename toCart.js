const items = [
  {
    pic: "/images/mini/Photo.svg",
    name: "Малинка",
    description: "1 кг х 310 ₽",
    price: 310,
  },
  {
    pic: "/images/mini/Photo1.svg",
    name: "Фисташка",
    description: "1 кг х 340 ₽",
    price: 340,
  },
  {
    pic: "/images/mini/Photo2.svg",
    name: "Черника",
    description: "1 кг х 330 ₽",
    price: 330,
  },
  {
    pic: "/images/mini/Photo3.svg",
    name: "Бабл-гам",
    description: "1 кг х 320 ₽",
    price: 320,
  },
  {
    pic: "/images//banan.svg",
    name: "Банан",
    description: "1 кг х 340 ₽",
    price: 340,
  },
  {
    pic: "/images/shokoladka.svg",
    name: "Шоколадка",
    description: "1 кг х 270 ₽",
    price: 270,
  },
  {
    pic: "/images/klubnika.svg",
    name: "Клубничка",
    description: "1 кг х 300 ₽",
    price: 300,
  },
  {
    pic: "/images/limon.svg",
    name: "Лимон",
    description: "1 кг х 310 ₽",
    price: 310,
  },
  {
    pic: "/images/mentol.svg",
    name: "Ментол",
    description: "1 кг х 320 ₽",
    price: 320,
  },
  {
    pic: "/images/oreh.svg",
    name: "Орешек",
    description: "1 кг х 360 ₽",
    price: 360,
  },
  {
    pic: "/images/krem-brule.svg",
    name: "Крем-брюле",
    description: "1 кг х 280 ₽",
    price: 280,
  },
  {
    pic: "/images/ejevika.svg",
    name: "Ежевика",
    description: "1 кг х 330 ₽",
    price: 330,
  },
];
const btnsToAdd = document.querySelectorAll(".articles-link");
const windowToAdd = document.querySelector(".carting-items");
let finalPrice = document.querySelector(".final-price");
const container = document.querySelectorAll(".art1");
let allPrice = 0;

const addToCart = (items) => {
  items.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    const cartImg = document.createElement("img");
    cartImg.setAttribute("src", item.pic);

    const nameWeight = document.createElement("div");
    nameWeight.classList.add("name-weight");
    const nameItem = document.createElement("h6");
    nameItem.innerHTML = item.name;

    const weightItem = document.createElement("p");
    weightItem.innerHTML = item.description;

    const itemPrice = document.createElement("h6");
    itemPrice.classList.add("price-item");
    itemPrice.innerHTML = item.price + " ₽/кг";

    const linkToDel = document.createElement("a");
    linkToDel.classList.add("delete-item");
    linkToDel.setAttribute("href", "##");

    const btnToDel = document.createElement("img");
    btnToDel.setAttribute("src", "/images/Cross.svg");

    nameWeight.appendChild(nameItem, weightItem);

    linkToDel.appendChild(btnToDel);

    cartItem.appendChild(cartImg);
    cartItem.appendChild(nameWeight);
    cartItem.appendChild(itemPrice);
    cartItem.appendChild(linkToDel);

    windowToAdd.appendChild(cartItem);
  });
};
// ====================================
