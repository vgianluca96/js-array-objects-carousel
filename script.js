

// Inizializzo variabili utili
let imgNumber = 5;
let carouselArray = [];
let carousel = document.getElementById('carousel');
let btnForward = document.getElementById('btnForward');
let btnBackward = document.getElementById('btnBackward');

// Inizializzo l'array contenente gli oggetti immagini e creo le card (solo la prima visibile)
for (i = 1; i <= imgNumber; i++) {

    let carouselArrayElem = {
        path: 'https://picsum.photos/400/300?random=' + i,
        title: 'Image ' + i,
        text: 'Image taken from Lorem Picsum'
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

    if (i != 1) {

        let carouselCard = document.getElementById('carouselCard' + i);

        //console.log(carouselCard.classList);
        carouselCard.classList.add('d-none');

    }

}

console.log(carouselArray);

// Inizializzo variabile che mi dice a quale card siamo
let carouselPosition = 1;

btnForward.addEventListener('click', function() {

    let carouselCardToHide = document.getElementById('carouselCard' + carouselPosition);

    if (carouselPosition == imgNumber) {
        carouselPosition = 0;    
    }

    let carouselCardToShow = document.getElementById('carouselCard' + (carouselPosition + 1));

    carouselPosition += 1;

    carouselCardToHide.classList.add('d-none');
    carouselCardToShow.classList.remove('d-none');

})

btnBackward.addEventListener('click', function() {
    
    let carouselCardToHide = document.getElementById('carouselCard' + carouselPosition);
    
    if (carouselPosition == 1) {
        carouselPosition = imgNumber + 1;    
    }
    
    let carouselCardToShow = document.getElementById('carouselCard' + (carouselPosition - 1));

    carouselPosition -= 1;

    carouselCardToHide.classList.add('d-none');
    carouselCardToShow.classList.remove('d-none');

})
