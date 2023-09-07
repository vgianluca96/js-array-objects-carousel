

// Inizializzo variabili utili
let imgNumber = 5;
let carouselArray = [];
let carouselPosition = 1;
let playCarousel;
let reverse = 1;

// Seleziono elementi DOM
let carousel = document.getElementById('carousel');
let carouselMiniatures = document.getElementById('carouselMiniatures');
let btnForward = document.getElementById('btnForward');
let btnBackward = document.getElementById('btnBackward');
let btnCarouselStart = document.getElementById('btnCarouselStart');
let btnCarouselStop = document.getElementById('btnCarouselStop');
btnCarouselReverse =  document.getElementById('btnCarouselReverse');

// Inizializzo l'array contenente gli oggetti immagini e creo le card (solo la prima visibile)
for (i = 1; i <= imgNumber; i++) {

    let carouselArrayElem = {
        path: 'https://picsum.photos/400/300?random=' + i,
        title: 'Image ' + i,
        text: 'Image number ' + i + ' taken from Lorem Picsum'
    }
    carouselArray.push(carouselArrayElem);

    carousel.innerHTML += `
    <div id="carouselCard${i}" class="card">

            <img src="${carouselArrayElem.path}" class="card-img-top">
    
            <div class="card-body">
                <h5 class="card-title">${carouselArrayElem.title}</h5>
                <p class="card-text">${carouselArrayElem.text}</p>
            </div>
    
        </div>
    `;
    
    carouselMiniatures.innerHTML += `
    <div id="Miniature${i}" class="p-1">
        <img src="${carouselArrayElem.path}" width="100">
    </div>
    `;

    if (i != 1) {

        let carouselCard = document.getElementById('carouselCard' + i);
        let carouselMiniature = document.getElementById('Miniature' + i);

        carouselCard.classList.add('d-none');
        carouselMiniature.classList.add('opacity-25');

    }


}

console.log(carouselArray);

// Creo event listener
btnForward.addEventListener('click', forwardImg);
btnBackward.addEventListener('click', backwardImg);
btnCarouselStart.addEventListener('click', startCarousel);
btnCarouselStop.addEventListener('click', stopCarousel);
btnCarouselReverse.addEventListener('click', reverseCarousel);



/* Sezione function */

function startCarousel() {
    
    if (!playCarousel) {
        if (reverse == 1) {
            playCarousel = setInterval(forwardImg, 1000);
        } else if (reverse == -1) {
            playCarousel = setInterval(backwardImg, 1000);
        }
    }
    
}

function stopCarousel() {
    
    clearInterval(playCarousel);
    playCarousel = null;

}

function reverseCarousel() {
    
    stopCarousel();
    reverse *= -1;
    alert('Ciclo carosello invertito, premere nuovamente avvio');

}

function forwardImg() {

    let carouselCardToHide = document.getElementById('carouselCard' + carouselPosition);
    let carouselMiniatureToHide = document.getElementById('Miniature' + carouselPosition);

    if (carouselPosition == imgNumber) {
        carouselPosition = 0;    
    }

    let carouselCardToShow = document.getElementById('carouselCard' + (carouselPosition + 1));
    let carouselMiniatureToShow = document.getElementById('Miniature' + (carouselPosition + 1));

    carouselPosition += 1;

    carouselCardToHide.classList.add('d-none');
    carouselCardToShow.classList.remove('d-none');

    carouselMiniatureToHide.classList.add('opacity-25');
    carouselMiniatureToShow.classList.remove('opacity-25');

}

function backwardImg() {
    
    let carouselCardToHide = document.getElementById('carouselCard' + carouselPosition);
    let carouselMiniatureToHide = document.getElementById('Miniature' + carouselPosition);
    
    if (carouselPosition == 1) {
        carouselPosition = imgNumber + 1;    
    }
    
    let carouselCardToShow = document.getElementById('carouselCard' + (carouselPosition - 1));
    let carouselMiniatureToShow = document.getElementById('Miniature' + (carouselPosition - 1));

    carouselPosition -= 1;

    carouselCardToHide.classList.add('d-none');
    carouselCardToShow.classList.remove('d-none');

    carouselMiniatureToHide.classList.add('opacity-25');
    carouselMiniatureToShow.classList.remove('opacity-25');

}
