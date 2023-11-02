// Select the button and the popup container
const popupButton = document.getElementById("popupButton");
const popupContainer = document.getElementById("popupContainer");
const closePopup = document.getElementById("closePopup");

// Event listener to open the popup
popupButton.addEventListener("click", () => {
  popupContainer.style.display = "block";
});

// Event listener to close the popup
closePopup.addEventListener("click", () => {
  popupContainer.style.display = "none";
});

// Optional: Close the popup when clicking outside of it
popupContainer.addEventListener("click", (event) => {
  if (event.target === popupContainer) {
    popupContainer.style.display = "none";
  }
});
