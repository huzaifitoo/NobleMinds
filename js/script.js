// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
   navLinks.classList.toggle("active");
   menuToggle.textContent = navLinks.classList.contains("active")
      ? "✕"
      : "☰";
});

// Close menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
   link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.textContent = "☰";
   });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
   anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
         target.scrollIntoView({
            behavior: "smooth",
            block: "start",
         });
      }
   });
});

// Carousel functionality
let currentSlideIndex = 0;
let autoSlideInterval;

function showSlide(index) {
   const slides = document.querySelectorAll(".carousel-slide");
   const dots = document.querySelectorAll(".dot");

   if (index >= slides.length) {
      currentSlideIndex = 0;
   } else if (index < 0) {
      currentSlideIndex = slides.length - 1;
   } else {
      currentSlideIndex = index;
   }

   slides.forEach((slide) => slide.classList.remove("active"));
   dots.forEach((dot) => dot.classList.remove("active"));

   slides[currentSlideIndex].classList.add("active");
   dots[currentSlideIndex].classList.add("active");
}

function moveSlide(direction) {
   showSlide(currentSlideIndex + direction);
   resetAutoSlide();
}

function currentSlide(index) {
   showSlide(index);
   resetAutoSlide();
}

function autoSlide() {
   autoSlideInterval = setInterval(() => {
      showSlide(currentSlideIndex + 1);
   }, 5000);
}

function resetAutoSlide() {
   clearInterval(autoSlideInterval);
   autoSlide();
}

// Start auto-sliding
autoSlide();

// Pause on hover
const carouselContainer = document.querySelector(
   ".carousel-container",
);
if (carouselContainer) {
   carouselContainer.addEventListener("mouseenter", () => {
      clearInterval(autoSlideInterval);
   });

   carouselContainer.addEventListener("mouseleave", () => {
      autoSlide();
   });
}
