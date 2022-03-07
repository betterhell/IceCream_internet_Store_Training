const slider = document.querySelector(".price-input");
noUiSlider.cssClasses.target += " range-slider";

noUiSlider.create(slider, {
  start: [10, 80],
  connect: true,
  range: {
    min: 0,
    max: 100,
  },
});
