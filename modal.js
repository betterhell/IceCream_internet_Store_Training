// Форма обратной связи

const openCallPopUp = document.querySelector(".openCallPopUp");
const closeCallPopUp = document.querySelector(".closeCallPopUp");
const callBackPopUp = document.querySelector(".popup-bg");

openCallPopUp.addEventListener("click", function (e) {
  e.preventDefault();
  callBackPopUp.classList.add("active");
  fixedWindow();
});

// closeCallPopUp.addEventListener("click", function (e) {
//   e.preventDefault();
//   callBackPopUp.classList.remove("active");
//   freeWindows();
// });

// Заблокировать окно

const fixedWindow = () => {
  if (openCallPopUp) {
    body.classList.add("fixed");
  }
};

// Разблокировать окно

const freeWindows = () => {
  if (openCallPopUp) {
    body.classList.remove("fixed");
  }
};

// Функция закрытия формы обратной связи по бэку
const closeModalOnSpace = (namePopUps) => {
  const callBackContent = document.querySelector(".popup-body");

  namePopUps.addEventListener("click", (e) => {
    if (e.target === callBackContent) {
      namePopUps.classList.remove("active");
      freeWindows();
    }
  });
};

closeModalOnSpace(callBackPopUp);
