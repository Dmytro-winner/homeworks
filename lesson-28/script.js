class Slider {
    constructor(container, config) {
        this.container = container;
        this.slides = this.container.querySelectorAll('.slide');
        this.currentSlideIndex = 0;
        this.isPaused = false;
        this.config = {
            autoSlideInterval: config.autoSlideInterval || 3000,
            showIndicators: config.showIndicators || true,
            ...config,
        };
        this.indicatorsContainer = this.container.querySelector('.indicators');
        this.pauseButton = this.container.querySelector('.pause');
        this.prevButton = this.container.querySelector('.prev');
        this.nextButton = this.container.querySelector('.next');
        this.slideInterval = null;

        this.init();
    }

    init() {
        this.createIndicators();
        this.addEventListeners();
        this.startAutoSlide();
        this.updateSlider();
    }

    createIndicators() {
        if (!this.config.showIndicators) return;

        this.slides.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.addEventListener('click', () => this.goToSlide(index));
            this.indicatorsContainer.appendChild(indicator);
        });
    }

    updateIndicators() {
        const indicators = this.indicatorsContainer.children;
        for (let i = 0; i < indicators.length; i++) {
            indicators[i].style.backgroundColor = i === this.currentSlideIndex ? 'blue' : 'lightskyblue';
        }
    }

    nextSlide() {
        this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
        this.updateSlider();
    }

    prevSlide() {
        this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
        this.updateSlider();
    }

    goToSlide(index) {
        this.currentSlideIndex = index;
        this.updateSlider();
    }

    updateSlider() {
        const offset = -this.currentSlideIndex * 100;
        this.container.querySelector('.slider').style.transform = `translateX(${offset}%)`;
        this.updateIndicators();
    }

    startAutoSlide() {
        if (this.config.autoSlideInterval) {
            this.slideInterval = setInterval(() => this.nextSlide(), this.config.autoSlideInterval);
        }
    }

    pauseSlide() {
        if (this.isPaused) {
            this.startAutoSlide();
            this.pauseButton.textContent = 'Pause';
        } else {
            clearInterval(this.slideInterval);
            this.pauseButton.textContent = 'Move';
        }
        this.isPaused = !this.isPaused;
    }

    addEventListeners() {
        this.pauseButton.addEventListener('click', this.pauseSlide.bind(this));
        this.nextButton.addEventListener('click', this.nextSlide.bind(this));
        this.prevButton.addEventListener('click', this.prevSlide.bind(this));

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prevSlide();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
            }
        });

        let touchStartX = 0;
        let touchEndX = 0;

        this.container.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        this.container.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            if (touchStartX > touchEndX + 50) {
                this.nextSlide();
            } else if (touchStartX < touchEndX - 50) {
                this.prevSlide();
            }
        });
    }
}

const sliderConfig = {
    autoSlideInterval: 3000,
    showIndicators: true,
};

const sliderContainer = document.querySelector('.slider-container');
const mySlider = new Slider(sliderContainer, sliderConfig);