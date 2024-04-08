let currentIndex = 0;

function showSlide() {
  const slides = document.querySelectorAll(".banner-item");
  slides.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.style.display = "flex";
    } else {
      slide.style.display = "none";
    }
  });
}

function prevSlide() {
  currentIndex = currentIndex === 0 ? 2 : currentIndex - 1;
  showSlide();
}

function nextSlide() {
  currentIndex = currentIndex === 2 ? 0 : currentIndex + 1;
  showSlide();
}

document.addEventListener("DOMContentLoaded", function (event) {
  showSlide();
});

let currentIndex2 = 0;

function showSlide2() {
  const slides = document.querySelectorAll(".Homework_Items");
  slides.forEach((slide, index) => {
    if (index === currentIndex2) {
      slide.style.display = "flex";
    } else {
      slide.style.display = "none";
    }
  });
}

function prevSlide2() {
  currentIndex2 = currentIndex2 === 0 ? 2 : currentIndex2 - 1;
  showSlide2();
}

function nextSlide2() {
  currentIndex2 = currentIndex2 === 2 ? 0 : currentIndex2 + 1;
  showSlide2();
}
