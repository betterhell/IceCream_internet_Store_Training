// Сортировка по минимальнйо цене

const visibleSort = document.querySelector(".visibleSort");
const popularValueSort = document.querySelector(".popularValueSort");
const newsValueSort = document.querySelector("newsValueSort");

const minPriceButton = document.querySelector(".minPriceValueSort");

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
// minPriceButton.addEventListener("click", sortingMinPrices);

// Функция вставки после
const insertAfter = (elem, refElem) => {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
};

// Сортировка по максимальной цене
const maxPriceButton = document.querySelector(".maxPriceValueSort");

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
// maxPriceButton.addEventListener("click", sortingMaxPrices);

// Сортировка fill and fat

const ChokoFill = document.querySelector("#fill-1");
const SugarFill = document.querySelector("#fill-2");
const FruitFill = document.querySelector("#fill-3");
const SyrupFill = document.querySelector("#fill-4");
const JemFill = document.querySelector("#fill-5");

const onFilter = () => {
  let newIceCreams = [...icecreams];
  const currentFatInput = document.querySelector('input[name="fat"]:checked');
  if (currentFatInput) {
    const fatValue = Number(currentFatInput["dataset"].fat);
    if (fatValue !== 31) {
      newIceCreams = newIceCreams.filter((obj) => obj.fat <= fatValue);
    } else {
      newIceCreams = newIceCreams.filter((obj) => obj.fat >= fatValue);
    }
  }

  if (ChokoFill.checked) {
    newIceCreams = newIceCreams.filter((obj) =>
      obj.fillers ? obj.fillers.includes(FILLERS.CHOKOLATE) : false
    );
  }
  if (SugarFill.checked) {
    newIceCreams = newIceCreams.filter((obj) =>
      obj.fillers ? obj.fillers.includes(FILLERS.SUGAR) : false
    );
  }
  if (FruitFill.checked) {
    newIceCreams = newIceCreams.filter((obj) =>
      obj.fillers ? obj.fillers.includes(FILLERS.FRUITS) : false
    );
  }
  if (SyrupFill.checked) {
    newIceCreams = newIceCreams.filter((obj) =>
      obj.fillers ? obj.fillers.includes(FILLERS.SYRUPS) : false
    );
  }
  if (JemFill.checked) {
    newIceCreams = newIceCreams.filter((obj) =>
      obj.fillers ? obj.fillers.includes(FILLERS.JEM) : false
    );
    console.log(newIceCreams);
  }

  const leftValue = inputLeft.value * (maxPrice / 100);
  const rightValue = inputRight.value * (maxPrice / 100);
  newIceCreams = newIceCreams.filter(
    (obj) => obj.price >= leftValue && obj.price <= rightValue
  );

  clearCatalog();
  initCatalog(newIceCreams);
};

const submitSortButton = document.querySelector("#submit-sort");

submitSortButton.addEventListener("click", onFilter);

// ===========================
