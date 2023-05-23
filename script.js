// JavaScript code for effects
function checkFadeIn() {
  const fadeInElements = document.querySelectorAll('.fade-in');

  fadeInElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight) {
      element.classList.add('visible');
    }
  });
}

function checkSlideInLeft() {
  const slideInLeftElements = document.querySelectorAll('.slide-in-left');

  slideInLeftElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight) {
      element.classList.add('visible');
    }
  });
}

function handleScroll() {
  checkFadeIn();
  checkSlideInLeft();
}

window.addEventListener('scroll', handleScroll);