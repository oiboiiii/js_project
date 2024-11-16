const carousel = document.querySelector('.category-carousel');
const cards = document.querySelectorAll('.category-card');
const leftArrow = document.querySelector('.carousel-arrow.left');
const rightArrow = document.querySelector('.carousel-arrow.right');

let currentIndex = 0;

// Проверка на десктоп
function isDesktop() {
    return window.innerWidth >= 1200;
}

function updateCarousel() {
    if (isDesktop()) {
        // Убираем управление каруселью
        carousel.style.transform = 'none';
        leftArrow.style.display = 'none';
        rightArrow.style.display = 'none';
    } else {
        const cardWidth = cards[0].offsetWidth;
        const gap = parseInt(getComputedStyle(carousel).gap) || 0; // Ширина промежутка
        const offset = -(currentIndex * (cardWidth + gap));
        carousel.style.transform = `translateX(${offset}px)`;

        // Управление видимостью стрелок
        leftArrow.style.display = currentIndex === 0 ? 'none' : 'block';
        rightArrow.style.display =
            currentIndex >= cards.length - Math.floor(carousel.offsetWidth / cardWidth)
                ? 'none'
                : 'block';
    }
}

leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

rightArrow.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

// Инициализация
updateCarousel();
window.addEventListener('resize', updateCarousel);
