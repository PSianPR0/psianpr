//info photoshop
const v1 = document.getElementById("v1");
const v1Dialog = document.querySelector("[v1='info-photoshop']");
const closeBtns = document.querySelectorAll(".close");
v1.addEventListener("click", () => {
  v1Dialog.showModal();

  closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.close();
  });
});
});