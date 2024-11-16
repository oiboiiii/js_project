/*Карусель*/
const carouselImages = [
    '../images/captain.png',
    '../images/Властелин_колец2.jpg',
    '../images/Валли.webp'
];
const carouselTitles = [
    'Мстители: Финал',
    'Властелин колец',
    'Валл-и'
];
const carouselDescriptions = [
    'С помощью оставшихся союзников Мстители должны собраться еще раз, чтобы исправить действия Таноса...',
    'Моя прелесть...',
    'Он делал свое дело 700 лет. Теперь ему предстоит открыть свое истинное предназначение.'
];

let currentIndex = 0;

const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
const contentContainer = document.querySelector('.carousel_content');
const titleElement = document.querySelector('.carousel_content h1');
const descriptionElement = document.querySelector('.content-p');
const indicatorLines = document.querySelectorAll('.line');

function updateCarousel() {
    contentContainer.style.backgroundImage = `url('${carouselImages[currentIndex]}')`;
    titleElement.textContent = carouselTitles[currentIndex];
    descriptionElement.textContent = carouselDescriptions[currentIndex];

    indicatorLines.forEach((line, index) => {
        line.classList.remove('active');
        if (index === currentIndex) {
            line.classList.add('active');
        }
    });
}

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? carouselImages.length - 1 : currentIndex - 1;
    updateCarousel();
});
rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex === carouselImages.length - 1) ? 0 : currentIndex + 1; // Исправлено на carouselImages
    updateCarousel(); // Обновляем карусель после изменения индекса
});
updateCarousel();

// function openVideo() {
//     window.open("https://www.youtube.com/watch?v=QPRtU7EqQy0", "_blank");
// }
// openVideo();

function toggleMenu() {
    const navbarMenu = document.querySelector('.navbar-links-container');
    navbarMenu.classList.toggle('active');
}
toggleMenu();
