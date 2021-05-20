"use strict";

const resetButton = document.querySelector(".js-reset-btn");
const inputEls = document.querySelectorAll(".form__fill__input");
let previewPhotoElement = document.querySelector(".js__profile-preview");

function resetPreview() {
  data.palette = "1";
  previewNameElement.innerHTML = "Nombre Apellidos";
  previewJobElement.innerHTML = "Front-end developer";
  previewEmailElement.href = "";
  previewPhoneElement.href = "";
  previewLinkedinElement.href = "";
  previewGithubElement.href = "";
  previewPhotoElement.style.backgroundImage = ""; // HOLIS
}

function resetData() {
  //vacíar datos formulario
  for (let i = 0; i < inputEls.length; i++) {
    inputEls[i].value = "";
  }
  //cambiar color título
  colorNameEl.classList.add("card__name--color");
  colorNameEl.classList.remove("color-2a", "color-3a");
  //cambiar color de la línea
  colorLineEl.classList.add("card__line--color");
  colorLineEl.classList.remove("color-2b", "color-3b");
  //cambiar color y borde del icono
  for (const iconBorder of colorIconBorderEl) {
    iconBorder.classList.add("contact__icon--color");
    iconBorder.classList.remove("color-2c", "color-3c");
  }
  //actualizar el preview
  resetPreview();
}
resetButton.addEventListener("click", resetData);
