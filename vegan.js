const vegan = {

    //recette minimale : 1.7 crêpes / 50g de farine
    milk: 116.07,
    flour: 50,
    cornstarch: 8.93,
    oil: 0.18,
    salt: 0.18,
    crepe: 1.7,

    recipe: function () {
        switch (element) {
            case "milk":
                classic.milkFunc(quantity);
                break;
                
            case "flour":
                classic.flourFunc(quantity);
                break;

            case "cornstarch":
                classic.cornstarchFunc(quantity);

            case "crepe":
                classic.crepeFunc(quantity);
                break;
                
            default:
                break;
        }
    },

    showModal: function(milk, flour, conrstarch, oil, salt, crepe) {

    }

    milkFunc: function(milkUser) {
        let neededFlour = Math.round((milkUser * vegan.flour)/vegan.milk);
        let neededCornstarch = Math.round((milkUser * vegan.cornstarch)/vegan.milk)
        let neededOil = Math.round((milkUser * vegan.oil)/vegan.milk);
        let neededSalt = Math.round((milkUser * vegan.salt)/vegan.milk);
        let crepeGet = Math.round((milkUser * vegan.crepe)/vegan.milk);
    },

    flourFunc: function(flourUser) {
        let neededMilk = Math.raound((flourUser * vegan.milk)/vegan.flour);
        let neededCornstarch = Math.round((flourUser * vegan.cornstarch)/vegan.flour)
        let neededOil = Math.round((flourUser * vegan.oil)/vegan.flour);
        let neededSalt = Math.round((flourUser * vegan.salt)/vegan.flour);
        let crepeGet = Math.round((flourUser * vegan.crepe)/vegan.flour);
    },

    cornstarchFunc: function(cornstarchUser) {
        let neededMilk = Math.round((cornstarchUser * vegan.milk)/vegan.cornstarch);
        let neededFlour = Math.round((cornstarchUser * vegan.flour)/vegan.cornstarch)
        let neededOil = Math.round((cornstarchUser * vegan.oil)/vegan.cornstarch);
        let neededSalt = Math.round((cornstarchUser * vegan.salt)/vegan.cornstarch);
        let crepeGet = Math.round((cornstarchUser * vegan.crepe)/vegan.cornstarch);
    },

    crepeFunc: function(crepeUser) {
        let neededMilk = Math.round((crepeUser * vegan.milk)/vegan.crepe);
        let neededFlour = Math.round((crepeUser * vegan.flour)/vegan.crepe)
        let neededCornstarch = Math.round((crepeUser * vegan.flour)/vegan.crepe)
        let neededOil = Math.round((crepeUser * vegan.oil)/vegan.crepe);
        let neededSalt = Math.round((crepeUser * vegan.salt)/vegan.crepe);    
    },
};