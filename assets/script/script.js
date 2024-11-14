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



//Каталог фильмов
fetch('../json/info.json')
    .then(response => {
        if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
    })
    .then(data => {
    createGallery(data.movies, 'movies'); // Передаем фильмы
    createGallery(data.series, 'series'); // Передаем сериалы
    })
    .catch(error => {
    console.error("Ошибка загрузки данных:", error);
    });

function createGallery(items, type) {
    let container = document.getElementById(type);
    let block = document.createElement('div');
    block.classList.add('block');

    // Цикл по данным из info.json для добавления карточек в блок
    items.forEach((item, index) => {
        let card = document.createElement('div');
        card.classList.add('card');
        
        let img = document.createElement('img');
        img.src = item.image; // Здесь путь к картинке из info.json
        img.alt = item.title;
        
        // Добавление обработчика события click
        card.addEventListener('click', () => {
            window.location.href = `dropdown-moviecard.html?id=${type === 'movies' ? 'movie' : 'series'}&index=${index}`;
        });
        
        card.appendChild(img);
        block.appendChild(card);
    });

    container.appendChild(block);
}
async function loadMediaData() {
    const params = new URLSearchParams(window.location.search);
  const type = params.get('id'); // movie или series
  const index = parseInt(params.get('index')); // Индекс для доступа к объекту

    try {
        const response = await fetch('../json/info.json');
        const data = await response.json();

        let mediaItem = (type === 'movie') ? data.movies[index] : data.series[index];

    // Заполнение полей данными
    document.getElementById('detailImage').style.backgroundImage = `url(${mediaItem.detailImage || mediaItem.image})`;
    document.getElementById('movieTitle').textContent = mediaItem.title;
    document.getElementById('movieYear').textContent = mediaItem.year;
    document.getElementById('movieCountry').textContent = mediaItem.country;
    document.getElementById('movieGenre').textContent = mediaItem.genre;
    document.getElementById('movieDirector').textContent = mediaItem.director;
    document.getElementById('moviePlot').textContent = mediaItem.plot;
    document.getElementById('movieActors').textContent = mediaItem.actors.join(', ');
    document.getElementById('movieRating').textContent = mediaItem.rating;

    } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
    }
}

// Вызов функции для загрузки данных
loadMediaData();



