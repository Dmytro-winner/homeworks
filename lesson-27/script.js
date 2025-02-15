const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const indicatorsContainer = document.querySelector('.indicators');
const pauseButton = document.querySelector('.pause');
let currentSlideIndex = 0;
let slideInterval;
let isPaused = false;


function createIndicators() {
    slides.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });
}

function updateIndicators() {
    const indicators = indicatorsContainer.children;
    for (let i = 0; i < indicators.length; i++) {
        indicators[i].style.backgroundColor = i === currentSlideIndex ? 'blue' : 'lightskyblue';
    }
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateSlider();
}


function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateSlider();
}

function goToSlide(index) {
    currentSlideIndex = index;
    updateSlider();
}

function updateSlider() {
    const offset = -currentSlideIndex * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
    updateIndicators();
}


function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 3000);
}

pauseButton.addEventListener('click', () => {
    if (isPaused) {
        startAutoSlide();
        pauseButton.textContent = 'Pause';
    } else {
        clearInterval(slideInterval);
        pauseButton.textContent = 'Move';
    }
    isPaused = !isPaused;
});


nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    }
});

let touchStartX = 0;
let touchEndX = 0;

document.querySelector('.slider-container').addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.querySelector('.slider-container').addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX > touchEndX + 50) {
        nextSlide();
    } else if (touchStartX < touchEndX - 50) {
        prevSlide();
    }
});

createIndicators();
startAutoSlide();
updateSlider();