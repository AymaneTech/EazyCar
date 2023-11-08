const carInfo = (JSON.parse(localStorage.getItem("carToCustomize")));
var carsdata = (JSON.parse(localStorage.getItem("carsData")));
const panelItems = JSON.parse(localStorage.getItem("PanelData"));

var nameInfo = document.querySelector(".card-title-personalisation");
var carCategory = document.querySelector(".car-categorey");
var priceInfo = document.querySelector(".pricePersonalisation");
var imgInfo = document.querySelector(".main-img");
var imgInfoo = document.querySelector(".img-p");
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; 
const day = today.getDate();
imgInfo.src = panelItems[0].image;
// const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

// const dateElement = document.querySelector("#date-now")
const marque = document.querySelector("#marque");

// customize
for (let index = 0; index < panelItems.length; index++) {
    nameInfo.textContent = panelItems[index].name;
    carCategory.textContent = panelItems[index].category;
    priceInfo.textContent = panelItems[index].price;

    imgInfoo.src=panelItems[index].image;
}


