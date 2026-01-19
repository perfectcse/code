/* MOBILE MENU */
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
});

/* REVIEWS SLIDER */
const reviews = document.querySelectorAll(".review");
let index = 0;

setInterval(() => {
  reviews.forEach(r => r.classList.remove("active"));
  index = (index + 1) % reviews.length;
  reviews[index].classList.add("active");
}, 3000);
