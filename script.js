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



function handleScroll() {
  checkFadeIn();
  
}

window.addEventListener('scroll', handleScroll);