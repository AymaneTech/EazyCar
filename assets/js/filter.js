const filterItems = document.querySelectorAll(".filter-btn");
const cardElements = document.querySelectorAll(".card");
const data = JSON.parse(localStorage.getItem("carsData"));

filterItems.forEach(item => {
  item.addEventListener("click", function () {
    const dataFilter = this.getAttribute("data-filter").toLowerCase();

    data.forEach((car, index) => {
      const cardCategory = car.category.toLowerCase();
      const cardElement = cardElements[index];

      if (dataFilter === "all" || dataFilter === cardCategory) {
        cardElement.style.display = "block"; 
      } else {
        cardElement.style.display = "none"; 
      }
    });
  });
});
