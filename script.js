// Image slider
const slides = document.querySelectorAll(".slides img");
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

showSlide(currentIndex);
setInterval(nextSlide, 4000);

// Mobile menu toggle
const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
