const recipe = {

    // Recette minimale (1 oeuf) 3,9 crêpes
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
    currentRecipe: {},
    
    currentPage:'',

    element:'',

    quantity:'',

    init: function(element, quantity, currentPage) {
        // Récupère l'élément sélectionné par l'utilisateur ainsi que la quantité
        recipe.currentPage = currentPage;
        recipe.element = element;
        recipe.quantity = quantity;

        switch (element) {
            case "milk":
                recipe.element = 'de lait';
                recipe.quantity = ' ' + quantity + ' mL ';
                recipe.milkFunc(quantity);
                break;
                
            case "eggs":
                recipe.element = 'oeuf(s)';
                recipe.quantity = ' ' + quantity + ' ';
                recipe.eggsFunc(quantity);
                break;
                
            case "flour":
                recipe.element = 'de farine';
                recipe.quantity = ' ' + quantity + ' g ';
                recipe.flourFunc(quantity);
                break;

            case "crepe":
                recipe.element = 'crepe(s)';
                recipe.quantity = ' ' + quantity + ' ';
                recipe.crepeFunc(quantity);
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
    showModal: function(eggs, milk, flour, oil, salt, crepe, cornstarch, yeast, water) {

        const menuOpen = document.getElementsByClassName('menu-open');
        const swiperContainer = document.querySelector('.swiper-container');
        const whiteCircle = document.querySelector('#white-circle');

        whiteCircle.style.display = "none";
        swiperContainer.style.top = "0px";

        for (let i = 0; i < menuOpen.length; i++) {
            menuOpen[i].style.display = "block";

            menuOpen[i].querySelector('.quantity-selected').textContent = recipe.quantity;
            menuOpen[i].querySelector('.ingredient-selected').textContent = recipe.element;

            switch(menuOpen[i].classList[1]) {
                case 'recipe-classic':
                    menuOpen[i].querySelector('.quantity-flour').textContent = flour;
                    menuOpen[i].querySelector('.quantity-eggs').textContent = eggs;
                    menuOpen[i].querySelector('.quantity-milk').textContent = milk;
                    menuOpen[i].querySelector('.quantity-oil').textContent = oil;
                    menuOpen[i].querySelector('.quantity-salt').textContent = salt;
                    menuOpen[i].querySelector('.crepe-number').textContent = crepe;
                    break;
                case 'recipe-bretonne':
                    menuOpen[i].querySelector('.quantity-flour').textContent = flour;
                    menuOpen[i].querySelector('.quantity-eggs').textContent = eggs;
                    menuOpen[i].querySelector('.quantity-salt').textContent = salt;
                    menuOpen[i].querySelector('.crepe-number').textContent = crepe;
                    menuOpen[i].querySelector('.quantity-water').textContent = water;
                    break;
                case 'recipe-vegan':
                    menuOpen[i].querySelector('.quantity-flour').textContent = flour;
                    menuOpen[i].querySelector('.quantity-milk').textContent = milk;
                    menuOpen[i].querySelector('.quantity-oil').textContent = oil;
                    menuOpen[i].querySelector('.quantity-salt').textContent = salt;
                    menuOpen[i].querySelector('.crepe-number').textContent = crepe;
                    menuOpen[i].querySelector('.quantity-cornstarch').textContent = cornstarch;
                    break;
                case 'recipe-pancake':
                    menuOpen[i].querySelector('.quantity-flour').textContent = flour;
                    menuOpen[i].querySelector('.quantity-eggs').textContent = eggs;
                    menuOpen[i].querySelector('.quantity-milk').textContent = milk;
                    menuOpen[i].querySelector('.crepe-number').textContent = crepe;
                    menuOpen[i].querySelector('.quantity-cornstarch').textContent = cornstarch;
                    menuOpen[i].querySelector('.quantity-yeast').textContent = yeast;
                    break;
                default:
                    break;
            }
        }

    },

    // Calcule des ingrédients en fonction de la donnée milk
    milkFunc: function(milkUser) {
        let neededEggs = Math.round((milkUser * recipe.currentRecipe.eggs)/recipe.currentRecipe.milk);
        let neededFlour = Math.round((milkUser * recipe.currentRecipe.flour)/recipe.currentRecipe.milk);
        let neededOil = Math.round((milkUser * recipe.currentRecipe.oil)/recipe.currentRecipe.milk);
        let neededSalt = Math.round((milkUser * recipe.currentRecipe.salt)/recipe.currentRecipe.milk);
        let crepeGet = Math.round((milkUser * recipe.currentRecipe.crepe)/recipe.currentRecipe.milk);
        let cornstarch = Math.round((milkUser* recipe.currentRecipe.cornstarch)/recipe.currentRecipe.milk);
        let water = Math.round((milkUser* recipe.currentRecipe.water)/recipe.currentRecipe.milk);
        let yeast = Math.round((milkUser* recipe.currentRecipe.yeast)/recipe.currentRecipe.milk);


        recipe.showModal(neededEggs, milkUser, neededFlour, neededOil, neededSalt, crepeGet, cornstarch, yeast, water);
    },

    // Calcule des ingrédients en fonction de la donnée eggs
    eggsFunc: function(eggsUser) {
        let neededMilk = Math.round((eggsUser * recipe.currentRecipe.milk)/recipe.currentRecipe.eggs);
        let neededFlour = Math.round((eggsUser * recipe.currentRecipe.flour)/recipe.currentRecipe.eggs);
        let neededOil = Math.round((eggsUser * recipe.currentRecipe.oil)/recipe.currentRecipe.eggs);
        let neededSalt = Math.round((eggsUser * recipe.currentRecipe.salt)/recipe.currentRecipe.eggs);
        let crepeGet = Math.round((eggsUser * recipe.currentRecipe.crepe)/recipe.currentRecipe.eggs);
        let cornstarch = Math.round((eggsUser* recipe.currentRecipe.cornstarch)/recipe.currentRecipe.eggs);
        let water = Math.round((eggsUser* recipe.currentRecipe.water)/recipe.currentRecipe.eggs);
        let yeast = Math.round((eggsUser* recipe.currentRecipe.yeast)/recipe.currentRecipe.eggs);

        recipe.showModal(eggsUser, neededMilk, neededFlour, neededOil, neededSalt, crepeGet, cornstarch, yeast, water);
    },
    // Calcule des ingrédients en fonction de la donnée flour
    flourFunc: function(flourUser) {
        let neededMilk = Math.round((flourUser * recipe.currentRecipe.milk)/recipe.currentRecipe.flour);
        let neededEggs = Math.round((flourUser * recipe.currentRecipe.eggs)/recipe.currentRecipe.flour);
        let neededOil = Math.round((flourUser * recipe.currentRecipe.oil)/recipe.currentRecipe.flour);
        let neededSalt = Math.round((flourUser * recipe.currentRecipe.salt)/recipe.currentRecipe.flour);
        let crepeGet = Math.round((flourUser * recipe.currentRecipe.crepe)/recipe.currentRecipe.flour);
        let cornstarch = Math.round((flourUser* recipe.currentRecipe.cornstarch)/recipe.currentRecipe.flour);
        let water = Math.round((flourUser* recipe.currentRecipe.water)/recipe.currentRecipe.flour);
        let yeast = Math.round((flourUser* recipe.currentRecipe.yeast)/recipe.currentRecipe.flour);

        recipe.showModal(neededEggs, neededMilk, flourUser, neededOil, neededSalt, crepeGet, cornstarch, yeast, water);
    },

    // Calcule des ingrédients en fonction de la donnée crepe
    crepeFunc: function(crepeUser) {
        let neededMilk = Math.round((crepeUser * recipe.currentRecipe.milk)/recipe.currentRecipe.crepe);
        let neededFlour = Math.round((crepeUser * recipe.currentRecipe.flour)/recipe.currentRecipe.crepe);
        let neededEggs = Math.round((crepeUser * recipe.currentRecipe.eggs)/recipe.currentRecipe.crepe);
        let neededOil = Math.round((crepeUser * recipe.currentRecipe.oil)/recipe.currentRecipe.crepe);
        let neededSalt = Math.round((crepeUser * recipe.currentRecipe.salt)/recipe.currentRecipe.crepe);
        let cornstarch = Math.round((crepeUser* recipe.currentRecipe.cornstarch)/recipe.currentRecipe.crepe);
        let water = Math.round((crepeUser* recipe.currentRecipe.crepe)/recipe.currentRecipe.crepe);
        let yeast = Math.round((crepeUser* recipe.currentRecipe.yeast)/recipe.currentRecipe.crepe);

        recipe.showModal(neededEggs, neededMilk, neededFlour, neededOil, neededSalt, crepeUser, cornstarch, yeast, water);
    },

    cornstarchFunc: function(cornstarchUser) {
        let neededMilk = Math.round((cornstarchUser * recipe.currentRecipe.milk)/recipe.currentRecipe.cornstarch);
        let neededFlour = Math.round((cornstarchUser * recipe.currentRecipe.flour)/recipe.currentRecipe.cornstarch)
        let neededOil = Math.round((cornstarchUser * recipe.currentRecipe.oil)/recipe.currentRecipe.cornstarch);
        let neededSalt = Math.round((cornstarchUser * recipe.currentRecipe.salt)/recipe.currentRecipe.cornstarch);
        let neededEggs = Math.round((cornstarchUser * recipe.currentRecipe.eggs)/recipe.currentRecipe.cornstarch);
        let crepeGet = Math.round((cornstarchUser * recipe.currentRecipe.crepe)/recipe.currentRecipe.cornstarch);
        let water = Math.round((cornstarchUser* recipe.currentRecipe.water)/recipe.currentRecipe.cornstarch);
        let yeast = Math.round((cornstarchUser* recipe.currentRecipe.yeast)/recipe.currentRecipe.cornstarch);

        recipe.showModal(neededEggs, neededMilk, neededFlour, neededOil, neededSalt, crepeGet, cornstarchUser, yeast, water);
    },

    waterFunc: function(waterUser) {
        let neededMilk = Math.round((waterUser * recipe.currentRecipe.milk)/recipe.currentRecipe.water);
        let neededFlour = Math.round((waterUser * recipe.currentRecipe.flour)/recipe.currentRecipe.water)
        let neededOil = Math.round((waterUser * recipe.currentRecipe.oil)/recipe.currentRecipe.water);
        let neededSalt = Math.round((waterUser * recipe.currentRecipe.salt)/recipe.currentRecipe.water);
        let neededEggs = Math.round((waterUser * recipe.currentRecipe.eggs)/recipe.currentRecipe.water);
        let crepeGet = Math.round((waterUser * recipe.currentRecipe.crepe)/recipe.currentRecipe.water);
        let cornstarch = Math.round((waterUser* recipe.currentRecipe.cornstarch)/recipe.currentRecipe.water);
        let yeast = Math.round((waterUser* recipe.currentRecipe.yeast)/recipe.currentRecipe.water);

        recipe.showModal(neededEggs, neededMilk, neededFlour, neededOil, neededSalt, crepeGet, cornstarch, yeast, waterUser);
    },

};
