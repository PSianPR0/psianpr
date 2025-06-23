const v1 = document.getElementById("v1");
const v2 = document.getElementById("v2");
const v3 = document.getElementById("v3");
const v4 = document.getElementById("v4");

const v1Dialog = document.querySelector("[v1='photoshop1']");
const v2Dialog = document.querySelector("[v2='photoshop2']");
const v3Dialog = document.querySelector("[v3='photoshop3']");
const v4Dialog = document.querySelector("[v4='photoshop4']");

const closeBtns = document.querySelectorAll(".close");

v1.addEventListener("click", () => {
  v1Dialog.showModal();
});

v2.addEventListener("click", () => {
  v2Dialog.showModal();
});

v3.addEventListener("click", () => {
  v3Dialog.showModal();
});
v4.addEventListener("click", () => {
  v4Dialog.showModal();
});

closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.close();
  });
});
//Photoshop↑