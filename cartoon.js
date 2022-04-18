const APIPath = "https://api.sampleapis.com/cartoons/cartoons2D";
const numberOfResults = 9;
const cartoonGrid = document.querySelector('#cartoon-grid');
const selectInput = document.querySelector('#select-input');
let cartoons = [];

fetch("https://api.sampleapis.com/cartoons/cartoons2D")
    .then(response => response.json())
    .then((data) => {
        cartoons = data;
        updateCartoons(data);
    });

function updateCartoons(cartoons) {
    let allCardsDom = '';
    cartoons.forEach((cartoon)=>{
        const cardTemplate = 
            `<div class="col">
                <div class="card">
                    <img src="${cartoon.image}"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${cartoon.title}</h5>
                        <p class="card-text">${cartoon.genre}</p>
                    </div>
                </div>
            </div>`;
         allCardsDom +=cardTemplate;
    });
    cartoonGrid.innerHTML = allCardsDom;
}


function filterByGenre() {
    const selectInput = document.querySelector('#select-input').value;
    let filteredArray = [];
    if(selectInput){
        cartoons.forEach((cartoon) => {
            if(selectInput){
                filteredArray.push(cartoon);}
        });
    }else {
        return cartoons;
    }
    console.log({selectInput});
    return filteredArray;
}

selectInput.addEventListener('change',(e)=>{
    console.log('Select changed...');
    let filteredList = filterByGenre();
    updateCartoons(filteredList);
});