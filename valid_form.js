const prenom = document.getElementById('first');
const nom = document.getElementById('last');
const mail = document.getElementById('email');
const regex = /^[a-zA-Z][a-z]+([-'][a-zA-z][a-z]+)?/;
const regexMail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const input = document.getElementsByClassName('text-control');
const form = document.getElementById('form');



function checkPrenom(e) {
    if (first.value.trim() === '') {
        e.preventDefault();
        prenom.parentElement.setAttribute('data-error-visible', 'true');
        prenom.parentElement.setAttribute('data-error', "Veuillez remplir le champ");
        prenom.style.border = '2px solid #e54858';
        return false;
    } else if (prenom.value.trim().length < 2 || !prenom.value.match(regex)) {
        e.preventDefault();
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

function checkNom(e) {
    if (last.value.trim() === '') {
        e.preventDefault();
        nom.parentElement.setAttribute('data-error-visible', 'true');
        nom.parentElement.setAttribute('data-error', "Veuillez remplir le champ");
        nom.style.border = '2px solid #e54858';
        return false;
    } else if (nom.value.trim().length < 2 || !nom.value.match(regex)) {
        e.preventDefault();
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

function checkMail(e) {
    if (email.value.trim() === '') {
        e.preventDefault();
        mail.parentElement.setAttribute('data-error-visible', 'true');
        mail.parentElement.setAttribute('data-error', "Veuillez remplir le champ");
        mail.style.border = '2px solid #e54858';
        return false;
    } else if (!mail.value.match(regexMail)) {
        e.preventDefault();
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

// FORM FIELDS EVENTS
function formFieldsValidation(element, method, event) {
    element.addEventListener(event, method);
}
formFieldsValidation(prenom, checkPrenom, 'focusout');
formFieldsValidation(nom, checkNom, 'focusout');
formFieldsValidation(mail, checkMail, 'focusout');


// FOR ALL FIELDS VALIDATION
function forAllFieldsValidation() {
    checkPrenom()
    checkNom()
    checkMail()

}

function formValidation() {
    if (checkPrenom() === true &&
        checkNom() === true &&
        checkMail() === true) {
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