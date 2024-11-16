const burgerMenu = document.querySelector('.main-page-burger-menu');
const nav = document.querySelector('.nav');

burgerMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
    burgerMenu.classList.toggle('open');
});
