let slideData = [
    {
      image: './images/trending1.png',  
      title: 'Dolore magna aliqua',
      description: 'Lorem ipsum dolor sit amet, ipsum labitur...',
      timestamp: '🕐 2m ago'
    },
    {
      image: './images/trending2.png',
      title: 'Morbi eleifend a libero',
      description: 'Lorem ipsum dolor sit amet, ipsum labitur...',
      timestamp: '🕐 1h ago'
    },
    {
      image: './images/trending3.png',
      title: 'Morbi eleifend a libero',
      description: 'Lorem ipsum dolor sit amet, ipsum labitur...',
      timestamp: '🕐 3h ago'
    },
    {
        image: './images/trending3.png',
        title: 'Morbi eleifend a libero',
        description: 'Lorem ipsum dolor sit amet, ipsum labitur...',
        timestamp: '🕐 3h ago'
      },
      {
        image: './images/trending1.png',  
        title: 'Dolore magna aliqua',
        description: 'Lorem ipsum dolor sit amet, ipsum labitur...',
        timestamp: '🕐 2m ago'
      },
      {
        image: './images/trending2.png',
        title: 'Morbi eleifend a libero',
        description: 'Lorem ipsum dolor sit amet, ipsum labitur...',
        timestamp: '🕐 1h ago'
      },
  ];
  
  let uniSlideIndex = 0;
  

  function createSlideHTML(slide) {
    let slideItem = document.createElement('div');
    slideItem.className = 'uni-slide-item';
  
    let img = document.createElement('img');
    img.src = slide.image;
    img.alt = slide.title;
    slideItem.appendChild(img);
  
    let h2 = document.createElement('h2');
    h2.textContent = slide.title;
    slideItem.appendChild(h2);
  
    let p = document.createElement('p');
    p.textContent = slide.description;
    slideItem.appendChild(p);
  
    let span = document.createElement('span');
    span.className = 'uni-timestamp';
    span.textContent = slide.timestamp;
    slideItem.appendChild(span);
  
    return slideItem;
  }
  
  function showUniSlides() {
    const slides = document.querySelectorAll('.uni-slide-item');
    slides.forEach(slide => slide.style.display = 'none'); 
  
    let slidesPerView;
    if (window.innerWidth > 768) {
      slidesPerView = 3; 
    } else if (window.innerWidth > 480) {
      slidesPerView = 2; 
    } else {
      slidesPerView = 1; 
    }
  
    const startIndex = uniSlideIndex * slidesPerView;
    const endIndex = startIndex + slidesPerView;
    for (let i = startIndex; i < endIndex; i++) {
      if (slides[i]) {
        slides[i].style.display = 'block'; 
      }
    }
  }
  
  function uniChangeSlide(step) {
    const slides = document.querySelectorAll('.uni-slide-item');
    const numSlides = slides.length;
  
    let slidesPerView;
    if (window.innerWidth > 768) {
      slidesPerView = 3;
    } else if (window.innerWidth > 480) {
      slidesPerView = 2; 
    } else {
      slidesPerView = 1; 
    }
    uniSlideIndex += step;
    if (uniSlideIndex * slidesPerView >= numSlides) {
      uniSlideIndex = 0;
    } else if (uniSlideIndex < 0) {
      uniSlideIndex = Math.ceil(numSlides / slidesPerView) - 1;
    }
    showUniSlides();
  }
  
  function initUniSlider() {
    const sliderContainer = document.querySelector('.uni-slider-container');
    sliderContainer.innerHTML = ''; 
  
    slideData.forEach(slide => {
      sliderContainer.appendChild(createSlideHTML(slide));
    });
  
    showUniSlides();
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0; 
    
    function createSlideHTML(slide) {
      let slideItem = document.createElement('div');
      slideItem.className = 'uni-slide-item';
    
      let img = document.createElement('img');
      img.src = slide.image;
      img.alt = slide.title;
      slideItem.appendChild(img);
    
      let h2 = document.createElement('h2');
      h2.textContent = slide.title;
      slideItem.appendChild(h2);
    
      let p = document.createElement('p');
      p.textContent = slide.description;
      slideItem.appendChild(p);
    
      let span = document.createElement('span');
      span.className = 'uni-timestamp';
      span.textContent = slide.timestamp;
      slideItem.appendChild(span);
    
      return slideItem;
    }
    
    function showUniSlides() {
      const slides = document.querySelectorAll('.uni-slide-item');
      slides.forEach(slide => slide.style.display = 'none');
    
      let slidesPerView = window.innerWidth > 1440 ? 3 : window.innerWidth > 768 ? 2 : 2;
    
      let startIndex = slideIndex * slidesPerView;
      let endIndex = startIndex + slidesPerView;
    
      for (let i = startIndex; i < endIndex; i++) {
        if (slides[i]) {
          slides[i].style.display = 'flex';
        }
      }
    }
    
    function uniChangeSlide(step) {
      const slides = document.querySelectorAll('.uni-slide-item');
      const numSlideSets = Math.ceil(slides.length / (window.innerWidth > 1440 ? 3 : window.innerWidth > 768 ? 2 : 1));

      slideIndex = (slideIndex + step + numSlideSets) % numSlideSets;
      showUniSlides();
    }
    
    function initUniSlider() {
      const sliderContainer = document.querySelector('.uni-slider-container');
      sliderContainer.innerHTML = ''; 
    
      slideData.forEach(slide => {
        sliderContainer.appendChild(createSlideHTML(slide));
      });
    
      showUniSlides();
    }
    
    initUniSlider();
    
    document.querySelector('.uni-slider-prev').addEventListener('click', function() {
      uniChangeSlide(-1);
    });
    document.querySelector('.uni-slider-next').addEventListener('click', function() {
      uniChangeSlide(1);
    });
    
    window.addEventListener('resize', showUniSlides);
  });