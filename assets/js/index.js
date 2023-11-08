const gridCards = document.querySelectorAll(".cards");
const carsdata = JSON.parse(localStorage.getItem("carsData"));
var listButtons = document.querySelector(".list-toggle");
var gridButtons = document.querySelector(".grid-toggle");
var cardsContainer = document.querySelector("#cardsParent");




// Loop through the carsData array and create cards for each object
// function fill () {
//   carsdata.forEach((value, key) => {
//     // Create a new card element
//     const card = document.createElement("div");
//     card.className = "carda flex-column d-flex gap-4 px-5";
  
//     // card.innerHTML = `
//     //   <div class="d-flex gap-3 shadow bg-white rounded">
//     //     <img src="${value.image}" class="w-25 card-img-top" alt="Image" style="border-radius: 7%; height: 12rem;">
//     //     <div class="card-body">
//     //       <h5 class="card-title">${value.name}</h5>
//     //       <p class="card-text w-50">${value.description}</p>
//     //       <div class="details d-flex align-items-center justify-content-between">
//     //         <p class="card-price bold m-0">${value.price} DH</p>
//     //         <button id="openModalButton" onclick="addtocart(${key})" class="button listPopup">Rent Now</button>
//     //       </div>
//     //     </div>
//     //   </div>
//     // `;
  
//     gridCards.forEach(function(gridCard) {
//       gridCard.appendChild(card.cloneNode(true));
//     });
//   });
// }

// listButtons.addEventListener("click", function () {
//     cardsContainer.innerHTML = ""; // Clear the current content
//     fill();
//   });



// function affichage() {
//   cardsContainer.innerHTML = ""; // Clear the card container before rendering new cards
//   for (let index = 0; index < carsdata.length; index++) {
//     if (carsdata[index].page == 1) {
//       const car = carsdata[index];
//       const cardElement = document.createElement('div');
//       cardElement.className = "card col-md-3 col-lg-4 w-100";
//       cardElement.innerHTML = `
//         <div class="col-md-3 col-lg-4 w-100">
//           <img class="card-img-top" src="${car.image}" alt="Image">
//           <div class="card-body">
//             <h5 class="card-title">${car.name}</h5>
//             <p class="card-text">${car.description}</p>
//             <div class="details d-flex align-items-center justify-content-between">
//               <p class="card-price bold m-0 m-0">${car.price} DH</p>
//               <button id="openModalButton"  class="button listPopup">Rent Now</button>
//             </div>
//           </div>
//         </div>
//       `;
//       cardsContainer.appendChild(cardElement);
//       console.log(carsdata[index]); // Log the data with the specified page number
//     }
//   }
// }

// affichage();




createGridItemHTML();
 
//////////////////////////////////////////////////////////

function createGridItemHTML() {
  // Clear existing grid cards
  gridCards.forEach(function(gridCard) {
    gridCard.innerHTML = ""; // Clear the content of each grid card
  });

  // Iterate over the first 6 cars in the carsdata array
  const firstSixCars = carsdata.slice(0, 6);

  // Iterate through gridCards and append first 6 cars to each grid card
  gridCards.forEach(function(gridCard) {
    firstSixCars.forEach((value, key) => {
      // Create a new card element
      const card = document.createElement("div");
      card.className = "card col-md-3 col-lg-4 w-100";
      card.innerHTML = `<div class="col-md-3 col-lg-4 w-100">
        <img class="card-img-top" src="${value.image}" alt="Image">
        <div class="card-body">
          <h5 class="card-title">${value.name}</h5>
          <p class="card-text">${value.description}</p>
          <div class="details d-flex align-items-center justify-content-between">
            <p class="card-price bold m-0">${value.price} DH</p>
            <button id="openModalButton" onclick="addtocart(${key})" class="button listPopup">Rent Now</button>
          </div>
        </div>
      </div>`;

      // Append the card to the current gridCard element
      gridCard.appendChild(card);
    });
  });
}


  gridButtons.addEventListener("click", function () {
     cardsContainer.innerHTML = ""
     createGridItemHTML();
   });

var cart = document.querySelector('#openCartButton');
var list = document.querySelector('.list');
var closelist = document.querySelector('#X');
var listcart = document.querySelector(".list-content");
var total = document.querySelector('.pricecounter');
var count = document.querySelector('#panelCounter');
let listcard = [];

cart.addEventListener("click", function() {
  list.classList.add("active");
});

closelist.addEventListener("click",function (){
  list.classList.remove("active");
});

function addtocart(key) {
  const carToAdd = carsdata[key];
  listcard.push(carToAdd);
  localStorage.setItem("PanelData", JSON.stringify(listcard));
  reloadcard();
}


let totalprice = 0;
var countpanier = 0;





// function reloadcardmoin() {
//   listcart.innerHTML = "";
//   totalprice = 0;
//   countpanier = 0;

//   listcard.forEach((value, key) => {
//     totalprice -= value.price;
//     countpanier--;
//     add(value, key);
//   });

//   total.innerHTML = totalprice.toLocaleString() + " DH";
//   count.innerHTML = countpanier;
//   localStorage.setItem("totalprice", JSON.stringify(totalprice));
// }



function add(value, key) {
  if (listcard.length !== 0) {
    let listItem = createListItem(value, key);
    listcart.appendChild(listItem);
  }
}



function createListItem(item, key) {
  let newdiv = document.createElement('li');
  newdiv.innerHTML = `
    <div class="incart">
    <img src="${item.image}">

    <div class="intwocart">
      <div><div class="name">${item.name}</div>
      <div class="pricecart">${item.price.toLocaleString()}</div></div>
      <div class="botons d-grid gap-2 d-md-block">
      <div class="">


      <button class="btn boton-rent-custom customize" data-key="${key}"><a href = "#" style="text-decoration:none;">CUSTOMIZE</a></button>
      <button class="mt-1 btn boton-rent-custom  delete-car" data-key="${key}">REMOVE</button>
      
      </div>
      
    </div>
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
  // Switch to grid view
  createListItemHTML()
});
listButtons.addEventListener("click", function () {
    cardsContainer.innerHTML = ""; // Clear the current content
    
    localData.forEach(function (car, index) {
      const listItemHTML = createListItemHTML(car, index);
      cardsContainer.insertAdjacentHTML("afterbegin", listItemHTML);
    });
  });

  listButtons.addEventListener("click", function () {
    // Switch to Liste view
    createListItemHTML()
  });
  listButtons.addEventListener("click", function () {
    cardsContainer.innerHTML = ""; // Clear the current content
    
    localData.forEach(function (car,index) {
      const listItemHTML = `<div class="border gap-5 py-3 d-flex w-75 h-50 list-item">
      <img class="w-25 h-50 card-img-top" src="${car.image}" alt="Image">
      <div class="list-details">
      <h3>${car.name}</h3>
      <p>${car.description}</p>
      <p>${car.price}</p>
      <button class="button addCard " onclick='addTOCard(event)' data-index="${index}">Rent Now</button>
      </div>
      </div>` ;
      cardsContainer.insertAdjacentHTML("afterbegin", listItemHTML);
    });
  });



  


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
// Function to filter cars based on a category gridd

function filterCars(category) {
  if (category === "all") {
    return localData; 
  } else {
    return localData.filter(car => car.category === category); 
  }

 }
// function filterCarsliste(category) {
//   if (category === "all") {
//     return localData; 
//   } else {
//     return localData.filter(car => car.category === category); 
//   }
// }

// // Function to grid  
function updateDisplayedCars(filteredCars) {
  cardsContainer.innerHTML = ""; // Clear the current content

  filteredCars.forEach(function (car, index) {
    const gridItemHTML = `<div class="card col-md-3 col-lg-4 w-100">
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
  });
}


// // filltre liste 

// function updateListedCars(filterCarsliste) {
//   cardsContainer.innerHTML = ""; // Clear the current content

//   filterCarsliste.forEach(function (car, index) {
//     const listItemHTML = `<div class="border gap-5 py-3 d-flex w-75 h-50 list-item">
//       <img class="w-25 h-50 card-img-top" src="${car.image}" alt="Image">
//       <div class="list-details">
//         <h3>${car.name}</h3>
//         <p>${car.description}</p>
//         <p>${car.price}</p>
//         <button class="button addCard" onclick='addTOCard(event)' data-index="${index}">Rent Now</button>
//       </div>
//     </div>`;

//     cardsContainer.insertAdjacentHTML("afterbegin", listItemHTML);
//   });
// }




// //Filter buttons  liste
// filterItem.forEach(button => {
//   button.addEventListener("click", function () {
//     const filter = button.getAttribute("data-filter");
//     const filteredliste = filterCarsliste(filter);
//     updateListedCars(filteredliste);
//   });
// });
  // Filter buttons grid
filterItem.forEach(button => {
  button.addEventListener("click", function () {
    const filter = button.getAttribute("data-filter");
    const filteredCars = filterCars(filter);
    updateDisplayedCars(filteredCars);
  });
});


  
