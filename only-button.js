window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("popup-intro").classList.add("show");
    document.getElementById("popup-play").classList.add("show");
  }, 5000);

  document.getElementById("btn-intro").addEventListener("click", () => {
    window.location.href = "index.html#top";
  });

  document.getElementById("btn-play").addEventListener("click", () => {
    window.location.href = "game.html";
  });
});
