
/* Elementi del tema */

const btnTema = document.querySelector("#btnTema");
const iconaTema = document.querySelector("#iconaTema");

/* Elementi della modale */

const btnPreventivo = document.querySelector("#btnPreventivo");
const modale = document.querySelector("#modale");
const chiudiModale = document.querySelector("#chiudiModale");
const formPreventivo = document.querySelector("#formPreventivo");
const messaggioConferma = document.querySelector("#messaggioConferma");


/* Cambio tema */

btnTema.addEventListener("click", function () {

    document.body.classList.toggle("tema-scuro");

    if (document.body.classList.contains("tema-scuro")) {

        iconaTema.classList.replace("fa-moon", "fa-sun");
        btnTema.setAttribute("aria-label", "Attiva tema chiaro");

    } else {

        iconaTema.classList.replace("fa-sun", "fa-moon");
        btnTema.setAttribute("aria-label", "Attiva tema scuro");
    }

});


/* Apertura modale */

btnPreventivo.addEventListener("click", function () {

    modale.hidden = false;
    document.body.style.overflow = "hidden";

});


/* Chiusura modale */

function chiudiFinestra() {

    modale.hidden = true;
    document.body.style.overflow = "";

}

chiudiModale.addEventListener("click", chiudiFinestra);


/* Chiusura cliccando fuori dalla finestra */

modale.addEventListener("click", function (event) {

    if (event.target === modale) {
        chiudiFinestra();
    }

});


/* Chiusura con il tasto Escape */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape" && !modale.hidden) {
        chiudiFinestra();
    }

});


/* Invio del modulo */

formPreventivo.addEventListener("submit", function (event) {

    event.preventDefault();

    messaggioConferma.textContent =
        "Grazie! I tuoi dati sono stati inseriti correttamente.";

    formPreventivo.reset();

});
