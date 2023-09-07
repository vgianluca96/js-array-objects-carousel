

let imgNumber = 5;
let carouselArray = [];
let carousel = document.getElementById('carousel');

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
