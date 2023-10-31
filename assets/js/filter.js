const filterMenuItem = document.querySelectorAll(".filter-btn");
const carItem = document.querySelectorAll(".card");

filterMenuItem.forEach(item => {
    item.addEventListener("click", function() {
        let value = this.getAttribute("data-filter");

        carItem.forEach(function(filter) {
            if(!filter.classList.contains(value)){
                filter.style.display = "none";
            }

            else{
                filter.style.display = "block";
            }
        });
    });
});