// Сортировка по минимальнйо цене
const minPriceButton = document.querySelector(".minPriceButton");

const sortingMinPrices = () => {
  let items = document.querySelector(".container");

  for (let i = 0; i < items.children.length; i++) {
    for (let j = i; j < items.children.length; j++) {
      if (
        +items.children[i].getAttribute("data-sort") >
        +items.children[j].getAttribute("data-sort")
      ) {
        replaceNode = items.replaceChild(items.children[j], items.children[i]);
        insertAfter(replaceNode, items.children[i]);
      }
    }
  }
};
minPriceButton.addEventListener("click", sortingMinPrices);

// Функция вставки после
const insertAfter = (elem, refElem) => {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
};

// Сортировка по максимальной цене
const maxPriceButton = document.querySelector(".maxPriceButton");

const sortingMaxPrices = () => {
  let items = document.querySelector(".container");

  for (let i = 0; i < items.children.length; i++) {
    for (let j = i; j < items.children.length; j++) {
      if (
        +items.children[i].getAttribute("data-sort") <
        +items.children[j].getAttribute("data-sort")
      ) {
        replaceNode = items.replaceChild(items.children[j], items.children[i]);
        insertAfter(replaceNode, items.children[i]);
      }
    }
  }
};
maxPriceButton.addEventListener("click", sortingMaxPrices);

// Сортировка наполнителей
