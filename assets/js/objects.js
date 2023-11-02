
var carsdata = (JSON.parse(localStorage.getItem("carsData")));


var cards = document.querySelectorAll(".card");
var carName = document.querySelectorAll(".card-title");
var carDesc = document.querySelectorAll(".card-text");
var carPrice = document.querySelectorAll(".card-price");
var carImage = document.querySelectorAll(".card-img-top");
var btns = document.querySelectorAll("#openModalButton");
const modals = document.querySelector("#carModal");

for (var i = 0; i < cards.length; i++) {
    carName[i].textContent = carsdata[i].name;
    carDesc[i].textContent = carsdata[i].description;
    carPrice[i].textContent = carsdata[i].price;
    carImage[i].src = carsdata[i].image;

}

btns.forEach((btn, index) => {
    btn.addEventListener('click', function () {
        console.log(index)
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
           <a href="./customize.html" type="button" class="btn fw-medium">Customize</a>
         </div>
       </div>
     </div>`

        modals.insertAdjacentHTML("afterbegin", html)
        var myModal = new bootstrap.Modal(document.getElementById('carModal')); 
        myModal.show();
    });
});
