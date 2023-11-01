const cars = [
    {
        id: 1,
        name: "Toyota Camry",
        price: 25000,
        description: "A reliable and fuel-efficient sedan.",
        image: "./assets/images/booking/car-01.jpg"
    },
    {
        id: 2,
        name: "Honda Civic",
        price: 22000,
        description: "A compact car known for its efficiency and style.",
        image: "./assets/images/booking/car-02.jpg"
    },
    {
        id: 3,
        name: "Ford F-150",
        price: 35000,
        description: "A popular pickup truck with strong towing capabilities.",
        image: "./assets/images/booking/car-03.jpg"
    },
    // ... and so on for the rest of the cars
];


var cards = document.querySelectorAll(".card");
var carName = document.querySelectorAll(".card-title");
var carDesc = document.querySelectorAll(".card-text");
var carImage = document.querySelectorAll(".card-img-top");

for (var i = 0; i < 15; i++) {
    carName[i].textContent = cars[i].name;
    carDesc[i].textContent = cars[i].description;
    carImage[i].src = cars[i].image;

}