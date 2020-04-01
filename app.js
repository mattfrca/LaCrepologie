const app = {

    quantity: 0,
    ingredients: "",
    currentPage: "classic",

    init: function () {
        // Ici, on définira quelle recette appeler
        const buttonClassic = document.querySelectorAll('.button');
        const inputClassic =document.querySelectorAll('.quantities');

        for (let i = 0; i < buttonClassic.length; i++) {
            buttonClassic[i].addEventListener("click", app.handleClickButton);
        }

        for (let i = 0; i < inputClassic.length; i++) {
            inputClassic[i].addEventListener("input", app.handleChangeInput);
        }

        // ici on écoute l'input
        // inputClassic.addEventListener("input", app.handleChangeInput);
        // ici on écoute le bouton "go"
        // buttonClassic.addEventListener("click", app.handleClickButton);
        
    },

    handleChangeInput: function (evt) {
        evt.target.style.border = "lightgray solid 1px";
        const errorElt = document.querySelector('.error');
        if (errorElt) {
            errorElt.textContent = "";
        }
    },

    handleClickButton: function (evt) {

        app.quantity = parseInt(evt.target.parentNode.querySelector('input').value);
        app.ingredients = evt.target.parentNode.querySelector('select').value;

        console.log(app.quantity);
        console.log(app.ingredients);

        const input = evt.target.parentNode.querySelector('input');
        
        if (validation.inputValidation(app.quantity, input)) {
            switch (app.currentPage) {
                case "classic":
                    app.classic();
                    console.log('classic');
                    break;
                default:
                    app.classic();
                    break;
            }
        }
    },

    classic: function () {
        classic.recipe(app.ingredients, app.quantity);
    },

};

document.addEventListener("DOMContentLoaded", app.init);