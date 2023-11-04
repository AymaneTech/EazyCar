const localData = (JSON.parse(localStorage.getItem("carsData")));
const cardsParent = document.querySelector("#cardsParent");
const pageNum = document.querySelectorAll(".page-num");
const allcards = document.querySelector(".cards");
const addCart = document.querySelectorAll("#addCart");

var panelArr = [];


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
    <button class="button addCard">Rent Now</button>
    </div>
    </div>
</div>`;

  cardsParent.insertAdjacentHTML("afterbegin", html);
}

// ==============================================================
//                  pagination
var card = document.querySelectorAll(".card");
hide(0, 6);
function hide(start, stop) {
  card.forEach((element, index) => {
    if (start <= index && index < stop) {
      element.style.display = "block"
    } else {
      element.style.display = "none"
    }
  });
}
// ==============================================================
//                Filter
filterFunction();
function filterFunction() {
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
//        add corder to local storage

var addCard = document.querySelectorAll(".addCard");
addCard.forEach((element, index) => {
  element.addEventListener("click", () => {
    panelArr.push(localData[index]);
    localStorage.setItem("PanelData", JSON.stringify(panelArr));
  });
});