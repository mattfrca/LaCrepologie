const recipe = {

    // Recette minimale (1 oeuf) 3,9 crêpes

    vide: {
        milk: 0,
        flour: 0,
        eggs: 0,
        cornstarch: 0,
        oil: 0,
        salt: 0,
        crepe: 0,
        water: 0,
        yeast: 0,
    },
    classic: {
        milk: 166.67,
        flour: 83.34,
        eggs: 1,
        cornstarch: 0,
        oil: 0.34,
        salt: 0.34,
        crepe: 3.9,
        water: 0,
        yeast: 0,
    },
    vegan: {
        milk: 116.07,
        flour: 50,
        eggs: 0,
        cornstarch: 8.93,
        oil: 0.18,
        salt: 0.18,
        crepe: 1.7,
        water: 0,
        yeast: 0,
    },
    bretonne: {
        milk: 0,
        flour: 165,
        eggs: 1,
        cornstarch: 0,
        oil: 0,
        salt: 5,
        crepe: 6,
        water: 375,
        yeast: 0,
    },
    pancake: {
        milk: 75,
        flour: 75,
        eggs: 1,
        cornstarch: 15,
        oil: 0,
        salt: 0,
        crepe: 0,
        yeast: 3,
    },

    classicRecipe: {},
    
    pancakeRecipe: {},
    
    bretonRecipe: {},
    
    veganRecipe: {},

    currentPage: '',

    element: '',

    quantity: '',

    init: function(element, quantity, currentPage) {
        // Récupère l'élément sélectionné par l'utilisateur ainsi que la quantité
        recipe.currentPage = currentPage;
        recipe.element = element;
        recipe.quantity = quantity;

        switch (element) {
            case "milk":
                recipe.element = 'de lait';
                recipe.quantity = ' ' + quantity + ' mL ';
                recipe.classicRecipe = recipe.milkFunc(quantity, recipe.classic);
                recipe.veganRecipe = recipe.milkFunc(quantity, recipe.vegan);
                recipe.bretonRecipe = recipe.vide;
                recipe.pancakeRecipe = recipe.milkFunc(quantity, recipe.pancake);
                recipe.showModal();
                break;
                
            case "eggs":
                recipe.element = 'oeuf(s)';
                recipe.quantity = ' ' + quantity + ' ';
                recipe.classicRecipe = recipe.eggsFunc(quantity, recipe.classic);
                recipe.veganRecipe = recipe.vide;
                recipe.bretonRecipe = recipe.eggsFunc(quantity, recipe.bretonne);
                recipe.pancakeRecipe = recipe.eggsFunc(quantity, recipe.pancake);
                recipe.showModal();
                break;
                
            case "flour":
                recipe.element = 'de farine';
                recipe.quantity = ' ' + quantity + ' g ';
                recipe.classicRecipe = recipe.flourFunc(quantity, recipe.classic);
                recipe.veganRecipe = recipe.flourFunc(quantity, recipe.vegan);
                recipe.bretonRecipe = recipe.flourFunc(quantity, recipe.bretonne);
                recipe.pancakeRecipe = recipe.flourFunc(quantity, recipe.pancake);
                recipe.showModal();
                break;

            case "crepe":
                recipe.element = 'crepe(s)';
                recipe.quantity = ' ' + quantity + ' ';
                recipe.classicRecipe = recipe.crepeFunc(quantity, recipe.classic);
                recipe.veganRecipe = recipe.crepeFunc(quantity, recipe.vegan);
                recipe.bretonRecipe = recipe.crepeFunc(quantity, recipe.bretonne);
                recipe.pancakeRecipe = recipe.crepeFunc(quantity, recipe.pancake);
                recipe.showModal();
                break;

            case "cornstarch":
                recipe.element = 'de fécule de maïs';
                recipe.quantity = ' ' + quantity + ' g ';
                recipe.classicRecipe = recipe.cornstarchFunc(quantity, recipe.classic);
                recipe.veganRecipe = recipe.cornstarchFunc(quantity, recipe.vegan);
                recipe.bretonRecipe = recipe.cornstarchFunc(quantity, recipe.bretonne);
                recipe.pancakeRecipe = recipe.cornstarchFunc(quantity, recipe.pancake);
                recipe.showModal();
                break;
                
            default:
                break;
        }
    },
    // 2700g de farine
    // classic: 70 crepes
    // classic bretonne pancakes vegan
    // class.flour classic.salt
    // bretonnne: 42 crepes
    // showModal: function(eggs, milk, flour, oil, salt, crepe, cornstarch, yeast, water) {

    showModal: function() {

        const menuOpen = document.getElementsByClassName('menu-open');
        const swiperContainer = document.querySelector('.swiper-container');
        const whiteCircle = document.querySelector('#white-circle');

        whiteCircle.style.display = "none";
        swiperContainer.style.top = "0px";

        // boucle qui ouvre toutes les modales au button click
        for (let i = 0; i < menuOpen.length; i++) {
            menuOpen[i].style.display = "block";

            // Récupération des quantités et ingrédients sélectionnés
            menuOpen[i].querySelector('.quantity-selected').textContent = recipe.quantity;
            menuOpen[i].querySelector('.ingredient-selected').textContent = recipe.element;

            // condition qui 'remplie' les ingrédients nécessaires dans chaque modale
            switch(menuOpen[i].classList[1]) {
                case 'recipe-classic':
                    menuOpen[i].querySelector('.quantity-flour').textContent = recipe.classicRecipe.flour;
                    menuOpen[i].querySelector('.quantity-eggs').textContent = recipe.classicRecipe.eggs;
                    menuOpen[i].querySelector('.quantity-milk').textContent = recipe.classicRecipe.milk;
                    menuOpen[i].querySelector('.quantity-oil').textContent = recipe.classicRecipe.oil;
                    menuOpen[i].querySelector('.quantity-salt').textContent = recipe.classicRecipe.salt;
                    menuOpen[i].querySelector('.crepe-number').textContent = recipe.classicRecipe.crepe;
                    break;
                case 'recipe-bretonne':
                    menuOpen[i].querySelector('.quantity-flour').textContent = recipe.bretonRecipe.flour;
                    menuOpen[i].querySelector('.quantity-eggs').textContent = recipe.bretonRecipe.eggs;
                    menuOpen[i].querySelector('.quantity-salt').textContent = recipe.bretonRecipe.salt;
                    menuOpen[i].querySelector('.crepe-number').textContent = recipe.bretonRecipe.crepe;
                    menuOpen[i].querySelector('.quantity-water').textContent = recipe.bretonRecipe.water;
                    break;
                case 'recipe-vegan':
                    menuOpen[i].querySelector('.quantity-flour').textContent = recipe.veganRecipe.flour;
                    menuOpen[i].querySelector('.quantity-milk').textContent = recipe.veganRecipe.milk;
                    menuOpen[i].querySelector('.quantity-oil').textContent = recipe.veganRecipe.oil;
                    menuOpen[i].querySelector('.quantity-salt').textContent = recipe.veganRecipe.salt;
                    menuOpen[i].querySelector('.crepe-number').textContent = recipe.veganRecipe.crepe;
                    menuOpen[i].querySelector('.quantity-cornstarch').textContent = recipe.veganRecipe.cornstarch;
                    break;
                case 'recipe-pancake':
                    menuOpen[i].querySelector('.quantity-flour').textContent = recipe.pancakeRecipe.flour;
                    menuOpen[i].querySelector('.quantity-eggs').textContent = recipe.pancakeRecipe.eggs;
                    menuOpen[i].querySelector('.quantity-milk').textContent = recipe.pancakeRecipe.milk;
                    menuOpen[i].querySelector('.crepe-number').textContent = recipe.pancakeRecipe.crepe;
                    menuOpen[i].querySelector('.quantity-cornstarch').textContent = recipe.pancakeRecipe.cornstarch;
                    menuOpen[i].querySelector('.quantity-yeast').textContent = recipe.pancakeRecipe.yeast;
                    break;
                default:
                    break;
            }
        }
    },

    // Calcule des ingrédients en fonction de la donnée milk
    milkFunc: function(milkUser, recipeList) {
        let neededEggs = Math.round((milkUser * recipeList.eggs)/recipeList.milk);
        let neededFlour = Math.round((milkUser * recipeList.flour)/recipeList.milk);
        let neededOil = Math.round((milkUser * recipeList.oil)/recipeList.milk);
        let neededSalt = Math.round((milkUser * recipeList.salt)/recipeList.milk);
        let crepeGet = Math.round((milkUser * recipeList.crepe)/recipeList.milk);
        let neededCornstarch = Math.round((milkUser* recipeList.cornstarch)/recipeList.milk);
        let neededWater = Math.round((milkUser * recipeList.water)/recipeList.milk);
        let neededYeast = Math.round((milkUser * recipeList.yeast)/recipeList.milk);

        return {
            milk: milkUser,
            eggs: neededEggs,
            flour: neededFlour,
            oil: neededOil,
            salt: neededSalt,
            crepes: crepeGet,
            cornstarch: neededCornstarch, 
            water: neededWater,
            yeast: neededYeast,
        };
        // recipe.showModal(neededEggs, milkUser, neededFlour, neededOil, neededSalt, crepeGet, cornstarch, yeast, water);
    },

    // Calcule des ingrédients en fonction de la donnée eggs
    eggsFunc: function(eggsUser, recipeList) {
        let neededMilk = Math.round((eggsUser * recipeList.milk)/recipeList.eggs);
        let neededFlour = Math.round((eggsUser * recipeList.flour)/recipeList.eggs);
        let neededOil = Math.round((eggsUser * recipeList.oil)/recipeList.eggs);
        let neededSalt = Math.round((eggsUser * recipeList.salt)/recipeList.eggs);
        let crepeGet = Math.round((eggsUser * recipeList.crepe)/recipeList.eggs);
        let neededCornstarch = Math.round((eggsUser* recipeList.cornstarch)/recipeList.eggs);
        let neededWater = Math.round((eggsUser* recipeList.water)/recipeList.eggs);
        let neededYeast = Math.round((eggsUser* recipeList.yeast)/recipeList.eggs);

        return {
            milk: neededMilk,
            eggs: eggsUser,
            flour: neededFlour,
            oil: neededOil,
            salt: neededSalt,
            crepe: crepeGet,
            cornstarch: neededCornstarch, 
            water: neededWater,
            yeast: neededYeast,
        };
        // recipe.showModal(eggsUser, neededMilk, neededFlour, neededOil, neededSalt, crepeGet, cornstarch, yeast, water);
    },
    // Calcule des ingrédients en fonction de la donnée flour
    flourFunc: function(flourUser, recipeList) {
        let neededMilk = Math.round((flourUser * recipeList.milk)/recipeList.flour);
        let neededEggs = Math.round((flourUser * recipeList.eggs)/recipeList.flour);
        let neededOil = Math.round((flourUser * recipeList.oil)/recipeList.flour);
        let neededSalt = Math.round((flourUser * recipeList.salt)/recipeList.flour);
        let crepeGet = Math.round((flourUser * recipeList.crepe)/recipeList.flour);
        let neededCornstarch = Math.round((flourUser* recipeList.cornstarch)/recipeList.flour);
        let neededWater = Math.round((flourUser* recipeList.water)/recipeList.flour);
        let neededYeast = Math.round((flourUser* recipeList.yeast)/recipeList.flour);

        return {
            milk: neededMilk,
            eggs: neededEggs,
            flour: flourUser,
            oil: neededOil,
            salt: neededSalt,
            crepe: crepeGet,
            cornstarch: neededCornstarch, 
            water: neededWater,
            yeast: neededYeast,
        };
        // recipe.showModal(neededEggs, neededMilk, flourUser, neededOil, neededSalt, crepeGet, cornstarch, yeast, water);
    },

    // Calcule des ingrédients en fonction de la donnée crepe
    crepeFunc: function(crepeUser, recipeList) {
        let neededMilk = Math.round((crepeUser * recipeList.milk)/recipeList.crepe);
        let neededFlour = Math.round((crepeUser * recipeList.flour)/recipeList.crepe);
        let neededEggs = Math.round((crepeUser * recipeList.eggs)/recipeList.crepe);
        let neededOil = Math.round((crepeUser * recipeList.oil)/recipeList.crepe);
        let neededSalt = Math.round((crepeUser * recipeList.salt)/recipeList.crepe);
        let neededCornstarch = Math.round((crepeUser* recipeList.cornstarch)/recipeList.crepe);
        let neededWater = Math.round((crepeUser* recipeList.crepe)/recipeList.crepe);
        let neededYeast = Math.round((crepeUser* recipeList.yeast)/recipeList.crepe);

        return {
            milk: neededMilk,
            eggs: neededEggs,
            flour: neededFlour,
            oil: neededOil,
            salt: neededSalt,
            crepe: crepeUser,
            cornstarch: neededCornstarch, 
            water: neededWater,
            yeast: neededYeast,
        };
        // recipe.showModal(neededEggs, neededMilk, neededFlour, neededOil, neededSalt, crepeUser, cornstarch, yeast, water);
    },

    cornstarchFunc: function(cornstarchUser, recipeList) {
        let neededMilk = Math.round((cornstarchUser * recipeList.milk)/recipeList.cornstarch);
        let neededFlour = Math.round((cornstarchUser * recipeList.flour)/recipeList.cornstarch)
        let neededOil = Math.round((cornstarchUser * recipeList.oil)/recipeList.cornstarch);
        let neededSalt = Math.round((cornstarchUser * recipeList.salt)/recipeList.cornstarch);
        let neededEggs = Math.round((cornstarchUser * recipeList.eggs)/recipeList.cornstarch);
        let crepeGet = Math.round((cornstarchUser * recipeList.crepe)/recipeList.cornstarch);
        let neededWater = Math.round((cornstarchUser* recipeList.water)/recipeList.cornstarch);
        let neededYeast = Math.round((cornstarchUser* recipeList.yeast)/recipeList.cornstarch);

        return {
            milk: neededMilk,
            eggs: neededEggs,
            flour: neededFlour,
            oil: neededOil,
            salt: neededSalt,
            crepe: crepeGet,
            cornstarch: cornstarchUser, 
            water: neededWater,
            yeast: neededYeast,
        };
        // recipe.showModal(neededEggs, neededMilk, neededFlour, neededOil, neededSalt, crepeGet, cornstarchUser, yeast, water);
    },

    waterFunc: function(waterUser, recipeList) {
        let neededMilk = Math.round((waterUser * recipeList.milk)/recipeList.water);
        let neededFlour = Math.round((waterUser * recipeList.flour)/recipeList.water)
        let neededOil = Math.round((waterUser * recipeList.oil)/recipeList.water);
        let neededSalt = Math.round((waterUser * recipeList.salt)/recipeList.water);
        let neededEggs = Math.round((waterUser * recipeList.eggs)/recipeList.water);
        let crepeGet = Math.round((waterUser * recipeList.crepe)/recipeList.water);
        let neededCornstarch = Math.round((waterUser* recipeList.cornstarch)/recipeList.water);
        let neededYeast = Math.round((waterUser* recipeList.yeast)/recipeList.water);

        return {
            milk: neededMilk,
            flour: neededFlour,
            oil: neededOil,
            salt: neededSalt,
            eggs: neededEggs,
            crepe: crepeGet,
            cornstarch: neededCornstarch, 
            water: waterUser,
            yeast: neededYeast,
        };

        // recipe.showModal(neededEggs, neededMilk, neededFlour, neededOil, neededSalt, crepeGet, cornstarch, yeast, waterUser);
    },

};
