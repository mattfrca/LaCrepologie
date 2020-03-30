const app = {

    init: function() {
        console.log("app.init");
        // Ici, on définira quelle recette appeler
        app.classic()
    },

    classic: function() {
        console.log('classic');
        let elementSelect= "milk";
        let quantity="500";

        quantity= document.querySelector('.ingredient')

        classic.recipe(elementSelect, quantity);
    },

};

document.addEventListener("DOMContentLoaded", app.init);