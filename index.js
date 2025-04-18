document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".content-section");
  const backToTop = document.getElementById("backToTop");

  // スクロールで背景切り替え
  function activateVisibleSections() {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  }

  // TOPに戻るバー
  window.addEventListener("scroll", () => {
    activateVisibleSections();

    if (window.scrollY > 200) {
      backToTop.style.top = "0";
    } else {
      backToTop.style.top = "-60px";
    }
  });

  // TOPにスムーズに戻る
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // 初期状態でチェック
  activateVisibleSections();
});
