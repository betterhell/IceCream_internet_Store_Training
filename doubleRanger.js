const minPrice = 100;
const maxPrice = 500;

const inputLeft = document.getElementById("input-left-price");
const inputRight = document.getElementById("input-right-price");

const thumbLeft = document.querySelector(".slider > .thumb.left");
const thumbRight = document.querySelector(".slider > .thumb.right");
const range = document.querySelector(".slider > .range");
const priceValue = document.querySelector(".price-sort > p");

function setPriceValue() {
  const leftValue = inputLeft.value * 5;
  const rightValue = inputRight.value * 5;
  priceValue.innerHTML = `Цена: ${leftValue}₽ - ${rightValue}₽`;
}
setPriceValue();

function setLeftValue() {
  let _this = inputLeft,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

  let percent = ((_this.value - min) / (max - min)) * 100;

  thumbLeft.style.left = percent + "%";
  range.style.left = percent + "%";
  setPriceValue();
}
setLeftValue();

function setRightValue() {
  let _this = inputRight,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

  let percent = ((_this.value - min) / (max - min)) * 100;

  thumbRight.style.right = 100 - percent + "%";
  range.style.right = 100 - percent + "%";
  setPriceValue();
}
setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);
