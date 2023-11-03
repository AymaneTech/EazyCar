const localData = (JSON.parse(localStorage.getItem("carsData")));
const cardsParent = document.querySelector("#cardsParent");
const pageNum = document.querySelectorAll(".page-num");
const allcards = document.querySelector(".cards")


for (let i = 0; i < localData.length; i++) {
  const html = `<div style="display:none;" class="card col-md-3 col-lg-4 w-100 ">
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
var card = document.querySelectorAll(".card");

hide(0, 6);
function hide(start, stop) {
  card.forEach((element, index) => {
    if (start <= index && index < stop) {
      element.style.display = "block"
    }
  });
}
