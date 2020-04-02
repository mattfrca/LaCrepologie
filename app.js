import validation from './validation.js';
import showModal from './showModal.js';

const app = {

    // current page est modifié par swiper-init-events l44
    init: function () {
        app.listener();
    },

    listener: function() {
        // Mise en place des listener:

        // On selectionne la totalité des bouton ainsi que des inputs
        const button = document.querySelectorAll('.button');
        const input = document.querySelectorAll('.quantity');
        const select = document.querySelectorAll('.ingredients');
        const arrowTop = document.querySelectorAll('.arrow-top');

        // On fait ensuite une bloucle dessus pour mettre en place les listeners
        for (let i = 0; i < button.length; i++) {
            console.log()
            button[i].addEventListener("click", app.handleClickButton);
        }
        for (let i = 0; i < input.length; i++) {
            input[i].addEventListener("input", app.handleChangeInput);
        }
        for (let i = 0; i < select.length; i++) {
            select[i].addEventListener('change', app.handleChangeSelect);
        }
        for (let i = 0; i < arrowTop.length; i++) {
            arrowTop[i].addEventListener('click', app.handleCloseModal);
        }

    },
    
    handleChangeInput: function(evt) {
        evt.target.value = Number.parseInt(evt.target.value);
        if (isNaN(evt.target.value)) {
            evt.target.value = "";
        }
        state.currentInput = parseInt(evt.target.value);
        evt.target.style.borderColor = "transparent";
        const errorElt = state.currentPage.div.querySelector('.error');
        if (errorElt) {
            errorElt.textContent = "";
        }
    },

    handleClickButton: function() {
        if (validation()) {
            showModal();
        }
    },

    handleChangeSelect: function(evt) {
        console.log(state.currentInput);
        state.currentSelect = evt.target.value;

        const input = state.currentPage.div.querySelector('.quantity');
        input.style.borderColor = "transparent";
        const errorElt = state.currentPage.div.querySelector('.error');
        if (errorElt) {
            errorElt.textContent = "";
        }
    },

    handleCloseModal: function() {
        const menuOpen = document.getElementsByClassName('menu-open');
        const swiperContainer = document.querySelector('.swiper-container');
        const whiteCircle = document.querySelector('#white-circle');

        whiteCircle.style.display = "block";
        swiperContainer.style.top = "370px";

        // boucle qui ouvre toutes les modales au button click
        for (let i = 0; i < menuOpen.length; i++) {
            menuOpen[i].style.display = "none";
        }
    },


};

document.addEventListener("DOMContentLoaded", app.init);