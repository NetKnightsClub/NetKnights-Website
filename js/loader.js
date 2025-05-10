// loader.js
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.classList.add("fade-out");
    }
  }, 5000); // 0.5s delay for smoother transition
});
