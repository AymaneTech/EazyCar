var carsdata = (JSON.parse(localStorage.getItem("carsData")));
// global variables
var cards = document.querySelectorAll(".card");
var carName = document.querySelectorAll(".card-title");
var carDesc = document.querySelectorAll(".card-text");
var carPrice = document.querySelectorAll(".card-price");
var carImage = document.querySelectorAll(".card-img-top");
var btns = document.querySelectorAll("#openModalButton");
const modals = document.querySelector("#carModal");

var customizeArray = [];
var customeId = 0;



// filling the html content 
for (var i = 0; i < cards.length; i++) {
  carName[i].textContent = carsdata[i].name;
  carDesc[i].textContent = carsdata[i].description;
  carPrice[i].textContent = carsdata[i].price;
  carImage[i].src = carsdata[i].image;
}

// show modal & put data into localstorage to use it in customize page 
btns.forEach((btn, index) => {
  btn.addEventListener('click', function () {
    modals.innerHTML = ''
    const html = `<div class="modal-dialog d-flex justify-content-center" role="document">
       <div class="modal-content d-flex justify-content-center align-items-center mx-0 w-auto pt-4 pb-4">
       <img class="card-img-top w-100 px-4" src="${carsdata[index].image}" alt="Car Image">
         <div class="modal-body d-flex flex-column px-4">
            <div class="d-flex justify-content-between align-items-center">
           <h2 class="card-title fw-bold fs-4">${carsdata[index].name}</h2>
           <p class="card-price">${carsdata[index].price}</p>
           </div>
           <p class="card-text fw-bold">${carsdata[index].description}</p>
         </div>
         <div class="pt-4 d-flex justify-content-between gap-4 px-2">
           <button type="button" class="btn fw-medium" data-bs-dismiss="modal">Close</button>
           <button type="button" class="btn btn1">Rent Now</button>
           <a  type="button" href="./customize.html" class="btn customize fw-medium">Customize</a>
         </div>
       </div>
     </div>`

    modals.insertAdjacentHTML("afterbegin", html)
    var myModal = new bootstrap.Modal(document.getElementById('carModal'));
    myModal.show();
    const customizeBtn = document.querySelector(".customize");


    customizeBtn.addEventListener("click", function () {
      var newCustomize = {
        id: customeId,
        name: carsdata[index].name,
        price: carsdata[index].price,
        description: carsdata[index].description,
        image: carsdata[index].image
      };
      customizeArray.push(newCustomize);
      console.log(customizeArray);
      localStorage.setItem("carToCustomize", JSON.stringify(customizeArray));
      customeId++;

    });

  });
});
