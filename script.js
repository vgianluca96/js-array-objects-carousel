

// Inizializzo variabili utili
let imgNumber;
let createCarouselActive = true;
let carouselArray = [];
let carouselPosition = 1;
let playCarousel;
let reverse = 1;

// Seleziono elementi DOM
let carousel = document.getElementById('carousel');
let carouselMiniatures = document.getElementById('carouselMiniatures');
let buttonsElem = document.getElementById('buttonsElem');
let btnForward = document.getElementById('btnForward');
let btnBackward = document.getElementById('btnBackward');
let btnCarouselStart = document.getElementById('btnCarouselStart');
let btnCarouselStop = document.getElementById('btnCarouselStop');
let btnCarouselReverse =  document.getElementById('btnCarouselReverse');
let inputImgNumber =  document.getElementById('inputImgNumber');
let btnImgNumber =  document.getElementById('btnImgNumber');
let btnReset =  document.getElementById('btnReset');

// Creo gli event listener
btnForward.addEventListener('click', forwardImg);
btnBackward.addEventListener('click', backwardImg);
btnCarouselStart.addEventListener('click', startCarousel);
btnCarouselStop.addEventListener('click', stopCarousel);
btnCarouselReverse.addEventListener('click', reverseCarousel);
btnImgNumber.addEventListener('click', createCarousel);
btnReset.addEventListener('click', resetCarousel);



/* Sezione function */

function createCarousel() {

    imgNumber = Number(inputImgNumber.value);

    if (createCarouselActive && imgNumber > 0) {

        // Rendo visibili tutti i div
        buttonsElem.classList.remove('d-none');
        carousel.classList.remove('d-none');
        carouselMiniatures.classList.remove('d-none');
    
        // Creo l'array con gli oggetti immagini e creo le card (solo la prima sarà visibile)
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

        // Con questo comando impedisco di creare un altro carosello senza aver prima resettato quello attuale
        createCarouselActive = false;

    } else if (createCarouselActive == false) {

        alert('Resettare il carosello prima di crearne un altro');

    } else if (imgNumber < 1) {

        alert('Inserire un numero maggiore di zero');

    }

}

function resetCarousel () {

    stopCarousel();

    carousel.innerHTML = '';
    carouselMiniatures.innerHTML = '';
    carouselArray = [];
    buttonsElem.classList.add('d-none');

    createCarouselActive = true;

}

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
