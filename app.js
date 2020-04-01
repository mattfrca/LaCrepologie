const app = {

    quantity: 0,
    ingredients: "",
    currentPage: "",

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

        document.querySelector('.swiper-button-next').addEventListener('click', app.handleClickArrow);
        document.querySelector('.swiper-button-prev').addEventListener('click', app.handleClickArrow);



        // ici on écoute l'input
        // inputClassic.addEventListener("input", app.handleChangeInput);
        // ici on écoute le bouton "go"
        // buttonClassic.addEventListener("click", app.handleClickButton);
        
    },

    // enlever message erreur et bordure rouge
    handleClickArrow: function () {
        // Ici, on suprimer toute les border rouge éventuel ainsi que les message d'erreur.
        // Cette fonction est appeler lors du clique sur les flêches.

        const allErrorMessage = document.getElementsByClassName('error');
        const allErrorInput = document.getElementsByClassName('quantity');

        // Sélection de la totalité des messages erreur et vidage
        for (let i = 0; i < allErrorMessage.length; i++) {
            allErrorMessage[i].textContent = "";
        }

        // Sélection de la totalité des input et remise à zéro
        for (let i = 0; i < allErrorInput.length; i++) {
            allErrorInput[i].style.borderColor = "transparent";
            allErrorInput[i].value = "";
        }
    },

    handleChangeInput: function (evt) {
        evt.target.style.borderColor = "transparent";
        const errorElt = evt.target.parentNode.parentNode.querySelector('.error');
        if (errorElt) {
            errorElt.textContent = "";
        }
    },

    handleClickButton: function (evt) {

        evt.target.style.borderColor = "transparent";
        
        // Sélection de la class de la recette courante de la modale ouverte (avec recette)
        const currentDiv = evt.target.parentNode.parentNode.querySelector('.menu-open').classList[1];
        app.currentPage = currentDiv;
        // sélection du after
        const errorElt = evt.target.parentNode.parentNode.querySelector('.error');
        if (errorElt) {
            errorElt.textContent = "";
        }

        app.quantity = parseInt(evt.target.parentNode.querySelector('input').value);
        app.ingredients = evt.target.parentNode.querySelector('select').value;

        const input = evt.target.parentNode.querySelector('input');
        
        if (validation.inputValidation(app.quantity, input)) {

            switch (app.currentPage) {
                case "recipe-classic":
                    recipe.currentRecipe = recipe.classic;
                    recipe.init(app.ingredients, app.quantity, evt.target.parentNode.parentNode);
                    break;
                case "recipe-vegan":
                    recipe.currentRecipe = recipe.vegan;
                    recipe.init(app.ingredients, app.quantity, evt.target.parentNode.parentNode);
                    break;
                case "recipe-bretonne":
                    recipe.currentRecipe = recipe.bretonne;
                    recipe.init(app.ingredients, app.quantity, evt.target.parentNode.parentNode);
                    break;
                case "recipe-pancake":
                    recipe.currentRecipe = recipe.pancake;
                    recipe.init(app.ingredients, app.quantity, evt.target.parentNode.parentNode);
                    break;
                default:
                    break;
            }
        }
    },

};

document.addEventListener("DOMContentLoaded", app.init);