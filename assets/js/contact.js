// const inputs = document.querySelectorAll('example');

// const patterns ={
//     telephone: /^\d{10}$/,
//     lastname: /^[a-z]{5,12}$/i,
//     firstname: /^[a-z]{5,12}$/i,
//     // password: /^[\w\W@-]{8,20}$/,
//     email: /^([a-z\d.-]+)@([a-z\d-]+).([a-z]{2,8})$/i,
// }

// function validate(field, regex) {
//     if(regex.test(field.value)) {
//         field.className='valid';
//     }else{
//         field.className='invalid';
//     }
// }

// inputs.forEach((example)=> {
//     example.addEventListener('keyup',(e)=> {
//         validate(e.target,patterns[e.target.attributes.name.value])
//     });
// });



// function validateFullName(input) {
//     const fullName = input.value;
//     const errorElement = document.getElementById("nameError");
//     if (!fullName.includes(" ")) {
//       errorElement.textContent = "Invalid Full Name...!";
//     } else {
//       errorElement.textContent = "";
//     }
//   }
//   function validateEmail(input) {
//     const email = input.value;
//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
//     const errorElement = document.getElementById("emailError");

//     if (!emailRegex.test(email)) {
//       errorElement.textContent = "Adresse e-mail invalide";
//     } else {
//       errorElement.textContent = "";
//     }
//   }

//   function validatePhone(input) {
//     const phone = input.value;
//     const phoneRegex = /^[0-9]{10}$/; 
//     const errorElement = document.getElementById("phoneError");

//     if (!phoneRegex.test(phone)) {
//       errorElement.textContent = "Numéro de téléphone invalide";
//     } else {
//       errorElement.textContent = "";
//     }
//   }

//   const btnSend = document.querySelector(".btn--send");
//   var notyf = new Notyf({duration: 3000,
//     position: {
//       x: 'center',
//       y: 'top',
//     }});

//   btnSend.addEventListener("click", function (event) {
// event.preventDefault();
//     const cin = document.getElementById("cin").value;
//     const email = document.getElementById("e-mail").value;
//     const phone = document.getElementById("phone").value;

//     if (cin === ""  email === ""  phone === "") {
//         notyf.error("Tous les champs doivent être remplis.");

//     }else{
//         notyf.success("Send...");
//     }
//   });
