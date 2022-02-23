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
    pic: "/images/mini/Photo.svg",
    name: "Малинка",
    description: "Сливочное мороженое с малиновым джемом",
    price: 310,
    fat: 3,
    fillers: [fillers.JEM, fillers.FRUITS],
  },
  {
    pic: "/images/mini/Photo1.svg",
    name: "Фисташка",
    description: "Фисташковый пломбир с кусочками шоколада",
    price: 340,
    fat: 0,
    fillers: [fillers.CHOKOLATE],
  },
  {
    pic: "/images/mini/Photo2.svg",
    name: "Черника",
    description: "Крем-брюле с черничным джемом",
    price: 330,
    fat: 15,
    fillers: [fillers.JEM, fillers.FRUITS],
  },
  {
    pic: "/images/mini/Photo3.svg",
    name: "Бабл-гам",
    description: "Ванильный пломбир со сладкой посыпкой",
    price: 320,
    fat: 45,
    fillers: [fillers.SUGAR],
  },
  {
    pic: "/images//banan.svg",
    name: "Банан",
    description: "Сливочный пломбир с банановым вкусом",
    price: 340,
    fat: 25,
    fillers: [fillers.FRUITS],
  },
  {
    pic: "/images/shokoladka.svg",
    name: "Шоколадка",
    description: "Классический шоколадный пломбир",
    price: 270,
    fat: 10,
    fillers: [fillers.CHOKOLATE],
  },
  {
    pic: "/images/klubnika.svg",
    name: "Клубничка",
    description: "Сливочный пломбир с клубничным вкусом",
    price: 300,
    fat: 20,
    fillers: [fillers.FRUITS],
  },
  {
    pic: "/images/limon.svg",
    name: "Лимон",
    description: "Освежающий лимонный сорбет",
    price: 310,
    fat: 56,
    fillers: [fillers.FRUITS],
  },
  {
    pic: "/images/mentol.svg",
    name: "Ментол",
    description: "Сливочный пломбир с ментоловым сиропом",
    price: 320,
    fat: 15,
    fillers: [fillers.SYRUPS],
  },
  {
    pic: "/images/oreh.svg",
    name: "Орешек",
    description: "Фисташковый пломбир с шоколадным сиропом",
    price: 360,
    fat: 10,
    fillers: [fillers.CHOKOLATE, fillers.SYRUPS],
  },
  {
    pic: "/images/krem-brule.svg",
    name: "Крем-брюле",
    description: "Классическое крем-брюле",
    price: 280,
    fat: 2,
    fillers: [fillers.SUGAR],
  },
  {
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
    link.setAttribute("href", "#");
    const btnToBuy = document.createElement("img");
    btnToBuy.setAttribute("src", "/images/red cart.svg");
    btnToBuy.classList.add("articles-icon");

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
