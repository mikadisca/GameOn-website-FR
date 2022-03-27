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

const checkBoxLocations = document.getElementsByName("location");
const checkBoxCGU = document.getElementById("checkbox1");

// regex
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nameRegex = /^[A-Za-z_-]{2,30}$/;
const birthRegex = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
const tournoiRegex = /^[+]?\d+([.]\d+)?$/; 

// error message elements
const errorFirst = document.getElementById("errorFirst");
const errorLast = document.getElementById("errorLast");
const errorEmail = document.getElementById("errorEmail");
const errorBirthDate = document.getElementById("errorBirthDate");

const errorLocation = document.getElementById("errorLocation");
const errorCGU = document.getElementById("errorCGU");


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
  
  // firstname
  const firstNameValue = inputFirstName.value.trim();
  if(firstNameValue.length < 2 || nameRegex.test(firstNameValue) == false){
    errorFirst.innerText = " Veuillez entrer 2 caractères ou plus pour le champ du prénom. "
    errorFirst.style.fontSize = "13px"
    errorFirst.style.color = "red"
    inputFirstName.style.border = "2px solid red"
  } else {
    errorFirst.innerText = ""
    inputFirstName.style.border = "2px solid green"
  }
  
  // lastname
  const lastNameValue = inputLastName.value.trim();
  if(lastNameValue.length < 2 || nameRegex.test(lastNameValue) == false){
    errorLast.innerText = " Veuillez entrer 2 caractères ou plus pour le champ du nom. "
    errorLast.style.fontSize = "13px"
    errorLast.style.color = "red"
    inputLastName.style.border = "2px solid red"
  } else {
    errorLast.innerText = ""
    inputLastName.style.border = "2px solid green"
  }

  // email
  const emailValue = inputEmail.value.trim();
  if(emailRegex.test(emailValue) == false){
    errorEmail.innerText = " Veuillez entrer une adresse email valide "
    errorEmail.style.fontSize = "13px"
    errorEmail.style.color = "red"
    inputEmail.style.border = "2px solid red"
  } else {
    errorEmail.innerText = ""
    inputEmail.style.border = "2px solid green"
  }

  // birthdate
  const birthDateValue = inputBirthDate.value.trim();
  if(birthRegex.test(birthDateValue) == false){
    errorBirthDate.innerText = "Vous devez entrer votre date de naissance. "
    errorBirthDate.style.fontSize = "13px"
    errorBirthDate.style.color = "red"
    inputBirthDate.style.border = "2px solid red"
  } else {
    errorBirthDate.innerText = ""
    inputBirthDate.style.border = "2px solid green"
  }

  // quantity tournois
  /* const quantityTournoisValue = inputBirthDate.value.trim();
  if(birthRegex.test(birthDateValue) == false){
    errorBirthDate.innerText = " Veuillez entrer deux caractères ou plus et respectez le format "
    errorBirthDate.style.fontSize = "13px"
    errorBirthDate.style.color = "red"
    inputBirthDate.style.border = "2px solid red"
  } else {
    errorBirthDate.innerText = ""
    inputBirthDate.style.border = "2px solid green"
  } */

  // location tournois
  const inputLocationValue = document.querySelector( 'input[name="location"]:checked')
  if(inputLocationValue == null){
    errorLocation.innerText = "Vous devez choisir une option."
    errorLocation.style.fontSize = "13px"
    errorLocation.style.color = "red"
  } else {
    errorLocation.innerText = ""
  } 

  // CGU
  if(checkBoxCGU.checked != true){
    errorCGU.innerText = "Vous devez vérifier que vous acceptez les termes et conditions. "
    errorCGU.style.fontSize = "13px"
    errorCGU.style.color = "red"
  } else {
    errorLocation.innerText = ""    
  }


}