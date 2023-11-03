const localData = (JSON.parse(localStorage.getItem("carsData")));
const cardsParent = document.querySelector("#cardsParent");
const pageNum = document.querySelectorAll(".page-num");
const allcards = document.querySelector(".cards")

const filterItem = document.querySelectorAll(".filter-btn");

// ==============================================================
//                         insert cards 
for (let i = 0; i < localData.length; i++) {
  const html = `<div style="" class="card col-md-3 col-lg-4 w-100 ">
    <img class="card-img-top" src=${localData[i].image} alt="Image">
<div class="card-body">
<h5 class="card-title">${localData[i].name}</h5>
    <p class="card-text">${localData[i].description}</p>
    <div class="details d-flex align-items-center justify-content-between">
    <p class="card-price bold m-0 m-0">
    </p>
    <button id="openModalButton" class="button" onclick="btnModal(0)">Rent Now</button>
    </div>
    </div>
</div>`;

  cardsParent.insertAdjacentHTML("afterbegin", html);
}

var listButtons = document.querySelectorAll('.list-toggle');
var gridbuttons = document.querySelectorAll('.grid-toggle');
var gridhtml = '';
document.querySelectorAll(".cards").forEach(function (card) {
  gridhtml += card.innerHTML;
});


gridbuttons.forEach(function (gridbutton) {
  gridbutton.addEventListener("click", function () {
    var gridCards = document.querySelectorAll(".cards");
    gridCards.forEach(function (card) {
      card.innerHTML = gridhtml;
    });
  });
});
function listDisplay (){
  document.querySelectorAll(".cards").forEach(function (card) {
    gridhtml += card.innerHTML;
  });
  gridbuttons.forEach(function (gridbutton) {
    gridbutton.addEventListener("click", function () {
      var gridCards = document.querySelectorAll(".cards");
      gridCards.forEach(function (card) {
        card.innerHTML = gridhtml;
      });
    });
  });
  listButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var gridCards = document.querySelectorAll(".cards");
      gridCards.forEach(function (card, index) {
        var html = "";
        for (let i = index * 6; i < (index + 1) * 6 && i < localData.length; i++) {
          html += `<div class="carda flex-column d-flex gap-4 px-5">
            <div class="d-flex gap-3 shadow bg-white rounded">
              <img src="${localData[i].image}" class="w-25 card-img-top" alt="Image" style="border-radius: 7%; height: 12rem;">
              <div class="card-body">
                <h5 class="card-title">${localData[i].name}</h5>
                <p class="card-text w-50">${localData[i].description}</p>
                <div class="details d-flex align-items-center justify-content-between">
                  <p class="card-price bold m-0">${localData[i].price}</p>
                  <button onclick="btnModal(${i})" class="button listPopup">Rent Now</button>
                </div>
              </div>
            </div>
          </div>`;
        }
        card.innerHTML = html;
      });
    });
  });
}
filterFunction ();
// ==============================================================
//                  pagination
var card = document.querySelectorAll(".card");
hide(0, 6);
function hide(start, stop) {
  card.forEach((element, index) => {
    if (start <= index && index < stop) {
      element.style.display = "block"
    }else{
      element.style.display = "none"
    }
  });
}
// ==============================================================
//                Filter
filterFunction ();
function filterFunction (){
  filterItem.forEach(item => {
    item.addEventListener("click", function () {
      const dataFilter = this.getAttribute("data-filter").toLowerCase();
  
      localData.forEach((car, index) => {
        const cardCategory = car.category.toLowerCase();
        const cardElement = card[index];
  
        if (dataFilter === "all" || dataFilter === cardCategory) {
          cardElement.style.display = "block"; 
        } else {
          cardElement.style.display = "none"; 
        }
      });
    }); 
  });
}
// ==============================================================

listButtons.addEventListener("click", function(){
  listDisplay();
  filterFunction();
  hide();
})