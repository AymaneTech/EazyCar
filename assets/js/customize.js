const carInfo = (JSON.parse(localStorage.getItem("carToCustomize")));
var carsdata = (JSON.parse(localStorage.getItem("carsData")));

var nameInfo = document.querySelector(".card-title-personalisation");
var carCategory = document.querySelector(".car-categorey");
var priceInfo = document.querySelector(".pricePersonalisation");
var imgInfo = document.querySelector(".main-img img");

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; 
const day = today.getDate();

const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

const dateElement = document.querySelector("#date-now")
const marque = document.querySelector("#marque");

// customize
nameInfo.textContent = carInfo[0].name;
carCategory.textContent = carInfo[0].category;
priceInfo.textContent = carInfo[0].price;
imgInfo.src = carInfo[0].image;

// devis
dateElement.textContent = formattedDate;
marque.textContent = carInfo[0].name;
console.log(carInfo[0].name);