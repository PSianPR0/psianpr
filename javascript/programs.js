// Add this JavaScript to make the accordion functional
document.addEventListener('DOMContentLoaded', function() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const item = this.parentElement;
      const isActive = item.classList.contains('active');
      
      // Close all items
      document.querySelectorAll('.accordion-item').forEach(accItem => {
        accItem.classList.remove('active');
      });
      
      // If the clicked item wasn't active, open it
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
});


//Dialog Download
const v1 = document.getElementById("v1");
const v1Dialog = document.querySelector("[v1='dialdown1']");
const closeBtns = document.querySelectorAll(".close");
v1.addEventListener("click", () => {
  v1Dialog.showModal();
    closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.close();
});
  });
  });

const v2 = document.getElementById("v2");
const v2Dialog = document.querySelector("[v2='dialdown2']");
v2.addEventListener("click", () => {
  v2Dialog.showModal();
    closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.close();
});
  });
  });

  const v3 = document.getElementById("v3");
const v3Dialog = document.querySelector("[v3='dialdown3']");
v3.addEventListener("click", () => {
  v3Dialog.showModal();
    closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.close();
});
  });
  });

  const v4 = document.getElementById("v4");
const v4Dialog = document.querySelector("[v4='dialdown4']");
v4.addEventListener("click", () => {
  v4Dialog.showModal();
    closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.close();
});
  });
  });

  const v5 = document.getElementById("v5");
const v5Dialog = document.querySelector("[v5='dialdown5']");
v5.addEventListener("click", () => {
  v5Dialog.showModal();
    closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.close();
});
  });
  });

    const v6 = document.getElementById("v6");
const v6Dialog = document.querySelector("[v6='dialdown6']");
v6.addEventListener("click", () => {
  v6Dialog.showModal();
    closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.close();
});
  });
  });

  const v7 = document.getElementById("v7");
const v7Dialog = document.querySelector("[v7='dialdown7']");
v7.addEventListener("click", () => {
  v7Dialog.showModal();
    closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.close();
});
  });
  });

  const v8 = document.getElementById("v8");
const v8Dialog = document.querySelector("[v8='dialdown8']");
v8.addEventListener("click", () => {
  v8Dialog.showModal();
    closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.close();
});
  });
  });

    const v9 = document.getElementById("v9");
const v9Dialog = document.querySelector("[v9='dialdown9']");
v9.addEventListener("click", () => {
  v9Dialog.showModal();
    closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.close();
});
  });
  });
