let coinCount = 0;

document.addEventListener("DOMContentLoaded", () => {
  const coinsDisplay = document.getElementById("coins");
  const btnPlus = document.getElementById("btn-plus");
  const btnMinus = document.getElementById("btn-minus");
  const backToTop = document.getElementById("backToTop");

  btnPlus.addEventListener("click", () => {
    coinCount++;
    coinsDisplay.textContent = coinCount;
  });

  btnMinus.addEventListener("click", () => {
    coinCount--;
    coinsDisplay.textContent = coinCount;
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTop.style.top = "0";
    } else {
      backToTop.style.top = "-60px";
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
