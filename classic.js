const classic = {

    // Recette minimale (1 oeuf) 3,9 crêpes
    milk: 166.67,
    eggs: 1,
    flour: 83.34,
    oil: 0.34,
    salt: 0.34,
    crepe: 3.9,

    recipe: function(element, quantity) {
        // Récupère l'élément sélectionné par l'utilisateur ainsi que la quantité
        switch (element) {
            case "milk":
                classic.milkFunc(quantity);
                break;
                
            case "eggs":
                classic.eggsFunc(quantity);
                break;
                
            case "flour":
                classic.flourFunc(quantity);
                break;

            case "crepe":
                classic.crepeFunc(quantity);
                break;
                
            default:
                break;
        }
    },

    // Calcule des ingrédients en fonction de la donnée milk
    milkFunc: function(milkUser) {
        let neededEggs = Math.round((milkUser * classic.eggs)/classic.milk);
        let neededFlour = Math.round((milkUser * classic.flour)/classic.milk);
        let neededOil = Math.round((milkUser * classic.oil)/classic.milk);
        let neededSalt = Math.round((milkUser * classic.salt)/classic.milk);
        let crepeGet = Math.round((milkUser * classic.crepe)/classic.milk);
    },

    // Calcule des ingrédients en fonction de la donnée eggs
    eggsFunc: function(eggsUser) {
        let neededMilk = Math.round((eggsUser * classic.milk)/classic.eggs);
        let neededFlour = Math.round((eggsUser * classic.flour)/classic.eggs);
        let neededOil = Math.round((eggsUser * classic.oil)/classic.eggs);
        let neededSalt = Math.round((eggsUser * classic.salt)/classic.eggs);
        let crepeGet = Math.round((eggsUser * classic.crepe)/classic.eggs);
    },

    // Calcule des ingrédients en fonction de la donnée flour
    flourFunc: function(flourUser) {
        let neededMilk = Math.round((flourUser * classic.milk)/classic.flour);
        let neededEggs = Math.round((flourUser * classic.eggs)/classic.flour);
        let neededOil = Math.round((flourUser * classic.oil)/classic.flour);
        let neededSalt = Math.round((flourUser * classic.salt)/classic.flour);
        let crepeGet = Math.round((flourUser * classic.crepe)/classic.flour);
    },

    // Calcule des ingrédients en fonction de la donnée crepe
    crepeFunc: function(crepeUser) {
        let neededMilk = Math.round((crepeUser * classic.milk)/classic.crepe);
        let neededFlour = Math.round((crepeUser * classic.flour)/classic.crepe);
        let neededEggs = Math.round((crepeUser * classic.eggs)/classic.crepe);
        let neededOil = Math.round((crepeUser * classic.oil)/classic.crepe);
        let neededSalt = Math.round((crepeUser * classic.salt)/classic.crepe);
    },

};
