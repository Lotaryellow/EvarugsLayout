"use strict";

const orderBtn = document.querySelector(".about__orderBtn");
const content = document.querySelector("body");

orderBtn.addEventListener("click", () => {
  content.insertAdjacentHTML(
    "afterbegin",
    `
<div class="modal__body">
<div class="modal__content">
  <div class="content__title">ФОРМА ЗАЯВКИ</div>
  <div class="content__form">
    <input class="form__name" placeholder="Ваше имя" type="text" />
    <input class="form__email" placeholder="Ваш e-mail" type="text" />
  </div>
  <textarea class="content__formAbout" placeholder="Ваше сообщение (марка автомобиля, цвет ковриков, номер телефона)" ></textarea>
  <button>отправить</button>
</div>
</div>
`
  );
  const modalBody = document.querySelector(".modal__body");
  modalBody.addEventListener("click", () => {
    modalBody.style.display = "none";
  });
});
