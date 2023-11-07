let currentSlide = 1;

function showSlide(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) { currentSlide = 1; }
    if (n < 1) { currentSlide = slides.length; }
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[currentSlide - 1].style.display = "block";
  }

  function changeSlide(n) {
    currentSlide += n;
    showSlide(currentSlide);
  }

showSlide(currentSlide);