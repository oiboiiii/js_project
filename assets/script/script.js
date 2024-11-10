document.addEventListener('DOMContentLoaded', function() {
    const images = [
        './assets/images/captain.png', 
        './assets/images/fightclub.png',
        './assets/images/heavens.png',
    ];

    let currentIndex = 0;

    const contentElement = document.querySelector('.content');
    const imgElement = document.createElement('img');
    imgElement.src = images[currentIndex];
    imgElement.style.maxWidth = '100%';
    imgElement.style.borderRadius = '10px';
    imgElement.style.marginTop = '20px';
    contentElement.appendChild(imgElement);

    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');

    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        imgElement.src = images[currentIndex];
    });

    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        imgElement.src = images[currentIndex];
    });
});
