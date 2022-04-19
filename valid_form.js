const prenom = document.getElementById('first');
const nom = document.getElementById('last');
const mail = document.getElementById('email');
const regex = /^[a-zA-Z][a-z]+([-'][a-zA-z][a-z]+)?/;
const regexMail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const input = document.getElementsByClassName('text-control');
const form = document.getElementById('form');

const birthdate = document.getElementById('birthdate');
let birth = new Date(document.getElementById('birthdate').value);
let maDate = new Date();

const quantity = document.getElementById('quantity');
const allLocations = document.getElementById('allLocations');
const locations = document.querySelectorAll('#allLocations .checkbox-input');
const checkbox1 = document.getElementById('checkbox1');





function checkPrenom() {
    if (first.value.trim() === '') {
        prenom.parentElement.setAttribute('data-error-visible', 'true');
        prenom.parentElement.setAttribute('data-error', "Veuillez remplir le champ");
        prenom.style.border = '2px solid #e54858';
        return false;
    } else if (prenom.value.trim().length < 2 || !prenom.value.match(regex)) {
        prenom.parentElement.setAttribute('data-error-visible', 'true');
        prenom.parentElement.setAttribute('data-error', "Veuillez entrer un prénom valide ( 2 lettres minimum)");
        prenom.style.border = '2px solid #e54858';
        return false;
    } else {
        first.parentElement.setAttribute('data-error-visible', 'false');
        first.style.border = 'solid #279e7a 0.19rem';
        return true;
    }
}

function checkNom() {
    if (last.value.trim() === '') {
        nom.parentElement.setAttribute('data-error-visible', 'true');
        nom.parentElement.setAttribute('data-error', "Veuillez remplir le champ");
        nom.style.border = '2px solid #e54858';
        return false;
    } else if (nom.value.trim().length < 2 || !nom.value.match(regex)) {
        nom.parentElement.setAttribute('data-error-visible', 'true');
        nom.parentElement.setAttribute('data-error', "Veuillez entrer un nom valide ( 2 lettres minimum)");
        nom.style.border = '2px solid #e54858';
        return false;
    } else {
        last.parentElement.setAttribute('data-error-visible', 'false');
        last.style.border = 'solid #279e7a 0.19rem';
        return true;
    }
}

function checkMail() {
    if (email.value.trim() === '') {
        mail.parentElement.setAttribute('data-error-visible', 'true');
        mail.parentElement.setAttribute('data-error', "Veuillez remplir le champ");
        mail.style.border = '2px solid #e54858';
        return false;
    } else if (!mail.value.match(regexMail)) {
        mail.parentElement.setAttribute('data-error-visible', 'true');
        mail.parentElement.setAttribute('data-error', "Veuillez entrer un email valide (ex : toto@gmail.com)");
        mail.style.border = '2px solid #e54858';
        return false;
    } else {
        email.parentElement.setAttribute('data-error-visible', 'false');
        email.style.border = 'solid #279e7a 0.19rem';
        return true;
    }
}

function checkBirthdate() {
    if (birthdate.value.trim().length !== 10) {
        birthdate.parentElement.setAttribute('data-error-visible', 'true');
        birthdate.parentElement.setAttribute('data-error', 'Veuillez indiquer une date');
        birthdate.style.border = '2px solid #e54858';
        return false;
    } else if (maDate.getFullYear() - birth.getFullYear() <= 16) {
        birthdate.parentElement.setAttribute('data-error-visible', 'true');
        birthdate.parentElement.setAttribute('data-error', 'Vous devez avoir 16 ans minimum pour vous inscrire');
        birthdate.style.border = '2px solid #e54858';
        return false;
    } else {
        birthdate.parentElement.setAttribute('data-error-visible', 'false');
        birthdate.style.border = 'solid #279e7a 0.19rem';
        return true;
    }
}

// nombre de tournois
function checkTournamentsQuantity() {
    if (quantity.value.trim().length === 0 || isNaN(quantity.value.trim()) === true || quantity.value.trim() < 0) {
        quantity.parentElement.setAttribute('data-error-visible', 'true');
        quantity.parentElement.setAttribute('data-error', 'Indiquez un nombre de tournois ou vous avez participé');
        quantity.style.border = '2px solid #e54858';
        return false;
    } else {
        quantity.parentElement.setAttribute('data-error-visible', 'false');
        quantity.style.border = 'solid #279e7a 0.19rem';
        return true;
    }
}

// Localisation
function checkLocations() {
    allLocations.setAttribute('data-error-visible', 'true');
    allLocations.setAttribute('data-error', 'Veuillez choisir une ville');
    for (let i = 0; i < locations.length; i++) {
        if (locations[i].checked) {
            allLocations.setAttribute('data-error-visible', 'false');
            return true;
        }
    }
    return false;
}

// TERMS OF USE CHECK
function checkCheckBox() {
    if (checkbox1.checked === false) {

        checkbox1.parentElement.setAttribute('data-error-visible', 'true');
        checkbox1.parentElement.setAttribute('data-error', 'Veuillez accepter les conditions d\'utilisations');
        return false;
    } else {
        checkbox1.parentElement.setAttribute('data-error-visible', 'false');
        return true;
    }
}

// FORM FIELDS EVENTS
function formFieldsValidation(element, method, event) {
    element.addEventListener(event, method);
}
formFieldsValidation(prenom, checkPrenom, 'focusout');
formFieldsValidation(nom, checkNom, 'focusout');
formFieldsValidation(mail, checkMail, 'focusout');
formFieldsValidation(birthdate, checkBirthdate, 'focusout')
formFieldsValidation(quantity, checkTournamentsQuantity, 'focusout');
formFieldsValidation(allLocations, checkLocations, 'change');
formFieldsValidation(checkbox1, checkCheckBox, 'change');


// FOR ALL FIELDS VALIDATION
function forAllFieldsValidation() {
    checkPrenom()
    checkNom()
    checkMail()
    checkBirthdate()
    checkTournamentsQuantity()
    checkLocations()
    checkCheckBox()

}

function formValidation() {
    if (checkPrenom() === true &&
        checkNom() === true &&
        checkMail() === true &&
        checkBirthdate() === true &&
        checkTournamentsQuantity() === true &&
        checkLocations() === true &&
        checkCheckBox() === true) {
        return true;
    }
    return false;
}

// SEND FORM
form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (formValidation() == true) {
        displayModalSubmit();
        document.querySelector('form').reset();
    } else {
        forAllFieldsValidation();
    }
});