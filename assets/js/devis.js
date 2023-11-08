const panelItems = JSON.parse(localStorage.getItem("PanelData"));
var storedValue1 = localStorage.getItem("selectedValue1");
var storedValue2 = localStorage.getItem("selectedValue2");
var storedValue3 = localStorage.getItem("selectedValue3");

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; 
const day = today.getDate();
const date=document.getElementById("date-now");
const marque=document.getElementById("marque");
const prix=document.getElementById("prix");
const prittc=document.getElementById("prix-ttc");
const nameinfo=document.getElementById("name-car");
const option=document.getElementById("option");
date.textContent= `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
for (let index = 0; index < panelItems.length; index++) {
    nameinfo.textContent = panelItems[index].name;
    marque.textContent = panelItems[index].category;
    prix.textContent = panelItems[index].price;
    var itemPrice = parseFloat(panelItems[index].price); // 
var tax = itemPrice * 0.08; // 
var totalPrice = itemPrice + tax;
prittc.textContent = totalPrice;
  

    
}


function printPage() {
    window.print(); 
    // This opens the browser's print dialog
    
  }







