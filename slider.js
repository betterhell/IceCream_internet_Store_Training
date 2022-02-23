// Слайдер
const leftButton = document.querySelector(".carousel-left");
const rightButton = document.querySelector(".carousel-right");

let slideIndex = 1;

leftButton.addEventListener("click", () => {
  showSlides((slideIndex -= 1));
});

rightButton.addEventListener("click", () => {
  showSlides((slideIndex += 1));
});

const currentSlide = (n) => {
  showSlides((slideIndex = n));
};

const showSlides = (n) => {
  let slides = document.getElementsByClassName("main-ice");
  let dots = document.getElementsByClassName("slider-dots_item");
  let text = document.getElementsByClassName("info1");
  const colors = ["#FEAFC3", "#69A9FF", "#FCC850"];

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
    slideIndex = text.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    text[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex - 1].style.display = "block";
  text[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
  body.style.backgroundColor = colors[slideIndex - 1];
};

// --------------------ЖИЖА

const changeBgColor = (color1, color2, color3) => {
  const prevButton = document.querySelector(".carousel-left");
  const nextButton = document.querySelector(".carousel-right");
  let body = document.querySelector("body");
  let index = 1;

  nextButton.addEventListener("click", function () {
    switch (index) {
      case 1:
        body.style.backgroundColor = color2;
        index = 2;
        break;
      case 2:
        body.style.backgroundColor = color3;
        index = 3;
        break;
      case 3:
        body.style.backgroundColor = color1;
        index = 1;
        break;
      default:
        break;
    }
  });

  prevButton.addEventListener("click", function () {
    switch (index) {
      case 1:
        body.style.backgroundColor = color3;
        index = 3;
        break;
      case 2:
        body.style.backgroundColor = color1;
        index = 1;
        break;
      case 3:
        body.style.backgroundColor = color2;
        index = 2;
        break;
      default:
        break;
    }
  });
};
changeBgColor("#FEAFC3", "#69A9FF", "#FCC850");
