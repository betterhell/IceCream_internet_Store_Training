const backTop = () => {
  const trackScroll = () => {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;
    let widthClient = window.screen.width;
    const max = 1500;
    
    if (scrolled > coords) {
      goToTopBtn.classList.add("active");
    }
    if (scrolled < coords) {
      goToTopBtn.classList.remove("active");
    }
    if (widthClient <= max) {
      goToTopBtn.classList.remove("active");
    }
  };

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  const goToTopBtn = document.querySelector(".back-to-top");

  window.addEventListener("scroll", trackScroll);
  goToTopBtn.addEventListener("click", backToTop);
};
backTop();
