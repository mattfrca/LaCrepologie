const app = {

    quantity: 0,
    ingredients: "",
    currentPage: "classic",

    init: function () {
        // Ici, on définira quelle recette appeler
        
        const buttonClassic = document.getElementsByClassName('button')[swiper.realIndex + 4];
        const inputClassic = document.getElementsByClassName('quantities')[swiper.realIndex + 4];

        console.log(buttonClassic);
        console.log(inputClassic);
        // ici on écoute l'input
        inputClassic.addEventListener("input", app.handleChangeInput);
        // ici on écoute le bouton "go"
        buttonClassic.addEventListener("click", app.handleClickButton);
        
        console.log(swiper.realIndex)
    },

    handleChangeInput: function (evt) {
        console.log("test");
        evt.target.style.border = "lightgray solid 1px";
        const errorElt = document.querySelector('.error');
        if (errorElt) {
            errorElt.textContent = "";
        }
    },

    handleClickButton: function (evt) {
        app.quantity = parseInt(document.querySelector('.quantity').value);
        app.ingredients = document.querySelector('.ingredients').value;
        
        if (validation.inputValidation(app.quantity)) {
            switch (app.currentPage) {
                case "classic":
                    app.cassic();
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