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
const inputQuantityTournois = document.getElementById("quantity")
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
const errorTournois = document.getElementById("errorTournois");
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


function validateInput(input, regex, spanError, errorMessage) {
    const value = input.value.trim();
    if (value.length < 2 || regex.test(value) == false) {
        spanError.innerText = errorMessage
        spanError.style.fontSize = "13px"
        spanError.style.color = "red"
        input.style.border = "2px solid red"
        return false;
    } else {
        spanError.innerText = ""
        input.style.border = "2px solid green"
        return true;
    }
}

function handleError(input, errorMessage) {
    input.innerText = errorMessage
    input.style.fontSize = "13px"
    input.style.color = "red"
}

function validateCheckboxes(condition, errorTag, errorMessage) {
    if (condition) {
        handleError(errorTag, errorMessage)
        return false;
    } else {
        errorTag.innerText = ""
        return true;
    }
}

// fonction validate
function validate(event) {
    event.preventDefault();

    const isFirstNameValid = validateInput(inputFirstName, nameRegex, errorFirst, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    const isLastNameValid = validateInput(inputLastName, nameRegex, errorLast, " Veuillez entrer 2 caractères ou plus pour le champ du nom. ");
    const isEmailNameValid = validateInput(inputEmail, emailRegex, errorEmail, " Veuillez entrer une adresse email valide ");
    const isBirthdateNameValid = validateInput(inputBirthDate, birthRegex, errorBirthDate, "Vous devez entrer votre date de naissance. ");
    const isTournoisValid = validateInput(inputQuantityTournois, tournoiRegex, errorTournois, " Veuillez entrer deux caractères ou plus et respectez le format ");

    // location tournois
    const inputLocationValue = document.querySelector('input[name="location"]:checked')
    const isLocationValid = validateCheckboxes(inputLocationValue == null, errorLocation, 'Vous devez choisir une option.');
    const isCGUValid = validateCheckboxes(checkBoxCGU.checked != true, errorCGU, 'Vous devez vérifier que vous acceptez les termes et conditions.');

    if (isFirstNameValid && isLastNameValid && isEmailNameValid && isBirthdateNameValid && isTournoisValid && isLocationValid && isCGUValid) {
        // Affichage du modal de confirmation
        showConfirmationModal();
    }
};
const formContent = document.getElementsByName("reserve");
function showConfirmationModal() {
    formContent.style.display = "none";

};


// DRY => DON'T REPEAT YOURSELF