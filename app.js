const app = {

    quantity: 0,
    ingredients: "",
    currentPage: "classic",

    init: function () {
        // Ici, on définira quelle recette appeler
        
        const button = document.querySelector('.button');
        const input = document.querySelector('.quantity');

        input.addEventListener("input", app.handleChangeInput);
        button.addEventListener("click", app.handleChangeQuantity);
        
    },

    handleChangeInput: function (evt) {
        evt.target.style.border = "lightgray solid 1px";
        const errorElt = document.querySelector('.error');
        if (errorElt) {
            errorElt.textContent = "";
        }
    },

    handleChangeQuantity: function () {
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