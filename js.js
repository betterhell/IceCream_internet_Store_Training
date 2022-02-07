// Слайдер

let slideIndex = 1;

const leftSlide = () => {
  showSlides((slideIndex -= 1));
};

const rightSlide = () => {
  showSlides((slideIndex += 1));
};

const currentSlide = (n) => {
  showSlides((slideIndex = n));
};

const showSlides = (n) => {
  let slides = document.getElementsByClassName("main-ice");
  let dots = document.getElementsByClassName("slider-dots_item");
  let text = document.getElementsByClassName("info1");

  if (n > slides.length && text.length) {
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
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  text[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
};

// --------------------------------
