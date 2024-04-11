const dark = document.getElementById("dark-mode-toggle");
dark.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  document.querySelector("nav").classList.toggle("dark-mode");
  document.querySelector("footer").classList.toggle("dark-mode");
});
