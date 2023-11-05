const localData = JSON.parse(localStorage.getItem("carsData"));
const panelItems = JSON.parse(localStorage.getItem("PanelData"));
const cardsParent = document.querySelector("#cardsParent");
const pageNum = document.querySelectorAll(".page-num");
const allcards = document.querySelector(".cards");
const addCart = document.querySelectorAll("#addCart");

const panierContent = document.querySelector(".panier-content");

var panelCounter = document.getElementById("panelCounter");
var panelArr = panelItems || [];




const filterItem = document.querySelectorAll(".filter-btn");

// ==============================================================

// ==============================================================

// ==============================================================





const openCartButton = document.getElementById("openCartButton");

openCartButton.addEventListener("click", function () {
  const cartModal = new bootstrap.Modal(document.getElementById("cartModal"));
  cartModal.show();
});
// ==============================================================
// Add car to local storage
function updatePanelCounter() {
  panelCounter.textContent = panelArr.length;
}

var addCard = document.querySelectorAll(".addCard");

const addTOCard = (event) => {
  const index = event.target.getAttribute("data-index");
  
  if (index >= 0 && index < localData.length) {
    panelArr.push(localData[index]);
    localStorage.setItem("PanelData", JSON.stringify(panelArr));
    updatePanelCounter();
    addCartPanel();
  }
};


function addCartPanel() {
  panierContent.innerHTML = "";
  panelArr.forEach((panelItem, index) => {
    const panelItemHTML = `
    <div class="list-group-item panier-item d-flex justify-content-space-between w-75">
    <img class="w-50 h-25" src="${panelItem.image}" alt="">
    <div class="w-50 ms-3">
    <h3>${panelItem.name}</h3>
    <p>${panelItem.description}</p>
    <p>${panelItem.price}</p>
    <button class="button-remove ms-5 removeItem" data-index="${index}" >Remove</button>
    </div>
    
    </div>
    `;
    panierContent.innerHTML += panelItemHTML;
  });
  
  const removeButtons = document.querySelectorAll(".removeItem");
  removeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const index = event.target.getAttribute("data-index");
      if (index !== null) {
        panelArr.splice(index, 1);
        localStorage.setItem("PanelData", JSON.stringify(panelArr));
        updatePanelCounter();
        addCartPanel();
      }
    });
  });
}

updatePanelCounter();
addCartPanel();
// gird & Liste

var listButtons = document.querySelector(".list-toggle");
var gridButtons = document.querySelector(".grid-toggle");
var cardsContainer = document.querySelector("#cardsParent");

listButtons.addEventListener("click", function () {
    cardsContainer.innerHTML = ""; // Clear the current content
    
    localData.forEach(function (car, index) {
      const listItemHTML = createListItemHTML(car, index);
      cardsContainer.insertAdjacentHTML("beforeend", listItemHTML);
    });
  });


function createListItemHTML(car, index) {
  return `<div class="border gap-5 py-3 d-flex w-75 h-50 list-item">
  <img class="w-25 h-50 card-img-top" src="${car.image}" alt="Image">
  <div class="list-details">
  <h3>${car.name}</h3>
  <p>${car.description}</p>
  <p>${car.price}</p>
  <button class="button addCard " onclick='addTOCard(event)' data-index="${index}">Rent Now</button>
  </div>
  </div>`;

  
}

gridButtons.addEventListener("click", function () {
  // Switch to grid view
  createGridItemHTML()
});

function createGridItemHTML() {
  cardsContainer.innerHTML = ""; // Clear the current content
  
  localData.forEach(function (car, index) {
    const gridItemHTML= `<div class="card col-md-3 col-lg-4 w-100">
    <img class="card-img-top" src="${car.image}" alt="Image">
    <div class="card-body">
    <h5 class="card-title">${car.name}</h5>
    <p class="card-text">${car.description}</p>
    <div class="details d-flex align-items-center justify-content-between">
    <p class="card-price bold m-0 m-0">${car.price}</p>
    <button onclick='addTOCard(event)' class="button addCard" data-index="${index}">Rent Now</button>
    </div>
    </div>
    </div>`;
    
    cardsContainer.insertAdjacentHTML("afterbegin", gridItemHTML);
  }
);
  
}

createGridItemHTML();




// Pagination
var card = document.querySelectorAll(".card");

function hide(start, stop) {
   console.log(card);
  card.forEach((element, index) => {
    
    if (start <= index && index < stop) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}


// Filter




  filterItem.forEach(item => {
   item.addEventListener("click", function () {
      const dataFilter = this.getAttribute("data-filter").toLowerCase();
       console.log(dataFilter);
     localData.forEach((car, index) => {
       const cardCategory = car.category.toLowerCase();
        const cardElement = card[index];
         if(dataFilter === "all" ){
          cardElement.style.display = "block";
         }else if ( dataFilter === cardCategory) {
          cardElement.style.display = "block";
        } else {
          cardElement.style.display = "none";
        }
      });
    });
  });
