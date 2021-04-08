function initializeCarousel(slidesSelector, prevButtonSelector, nextButtonSelector) {
  const slides = document.getElementsByClassName(slidesSelector);
  const prevButton = document.getElementsByClassName(prevButtonSelector)[0];
  const nextButton = document.getElementsByClassName(nextButtonSelector)[0];

  let slideIndex = 0;

  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length
  }

  function prevSlide() {
    slideIndex = slideIndex - 1;
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
  }

  function updateSlideDisplay() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("displaying");
    }
  
    slides[slideIndex].classList.add("displaying");
  }

  prevButton.addEventListener('click', () => {
    prevSlide();
    updateSlideDisplay();
  });

  nextButton.addEventListener('click', () => {
    nextSlide();
    updateSlideDisplay();
  })

  updateSlideDisplay();
}

document.addEventListener("DOMContentLoaded", () => {
  initializeCarousel('salt-articlepreview', 'salt-articlepreview-prev', 'salt-articlepreview-next');
})