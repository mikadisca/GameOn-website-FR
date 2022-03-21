function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll(".close"); 

// form elements
const inputFirstName = document.getElementById("first");
const inputLastName = document.getElementById("last");
const inputEmail = document.getElementById("email");
const inputBirthDate = document.getElementById("birthdate");


const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nameRegex = /^[A-Za-z_-]{2,30}$/;
const birthRegex = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
const tournoiRegex = /^[+]?\d+([.]\d+)?$/;

const errorFirst = document.getElementById("errorFirst");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// assigner un écouteur au bouton close
closeModalBtn.forEach((span) => span.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
};
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// fonction validate
function validate(event){
  event.preventDefault();
  const firstNameValue = inputFirstName.value.trim();
  if(firstNameValue.length < 2 || nameRegex.test(firstNameValue) == false){
    errorFirst.innerText = " Veuillez entrer deux caractères ou plus et respectez le format "
    errorFirst.style.fontSize = "13px"
    errorFirst.style.color = "red"
    inputFirstName.style.border = "2px solid red"
  } else {
    errorFirst.innerText = ""
    inputFirstName.style.border = "2px solid green"
  }
  
}