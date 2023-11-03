const carInfo = (JSON.parse(localStorage.getItem("carToCustomize")));

var nameInfo = document.querySelector(".card-title-personalisation");
var carCategory = document.querySelector(".car-categorey");
var priceInfo = document.querySelector(".pricePersonalisation")

nameInfo.textContent = carInfo[0].name;
carCategory.textContent = carInfo[0].category;
priceInfo.textContent = carInfo[0].price;