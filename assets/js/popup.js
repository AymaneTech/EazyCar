var carsdata = (JSON.parse(localStorage.getItem("carsData")));

var btns = document.querySelectorAll("#openModalButton");


btns.forEach(btn => {
    btn.addEventListener('click', function () {
        var myModal = new bootstrap.Modal(document.getElementById('carModal'));
        myModal.show();

        
    });

});


// btns.forEach(element => {
//     element.addEventListener("click", function () {
//         carName[i].textContent = carsdata[i].name;
//         carDesc[i].textContent = carsdata[i].description;
//         carImage[i].src = carsdata[i].image;
//     });
// });
