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


};

document.addEventListener("DOMContentLoaded", app.init);