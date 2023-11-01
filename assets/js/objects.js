
var carsdata =(JSON.parse(localStorage.getItem("carsData")));
console.log(carsdata);


var cards = document.querySelectorAll(".card");
var carName = document.querySelectorAll(".card-title");
var carDesc = document.querySelectorAll(".card-text");
var carImage = document.querySelectorAll(".card-img-top");

for (var i = 0; i < cards.length; i++) {
    carName[i].textContent = carsdata[i].name;
    carDesc[i].textContent = carsdata[i].description;
    carImage[i].src = carsdata[i].image;
}

