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
