import datas from './datas.js'

const showModal = () => {

    function show() {
        const menuOpen = document.getElementsByClassName('menu-open');
        const swiperContainer = document.querySelector('.swiper-container');
        const whiteCircle = document.querySelector('#white-circle');

        whiteCircle.style.display = "none";
        swiperContainer.style.top = "0px";

        // boucle qui ouvre toutes les modales au button click
        for (let i = 0; i < menuOpen.length; i++) {
            menuOpen[i].style.display = "block";

            // Récupération des quantités et ingrédients sélectionnés
            menuOpen[i].querySelector('.quantity-selected').textContent = state. quantityMessage;
            menuOpen[i].querySelector('.ingredient-selected').textContent = state.elementMessage;

            // condition qui 'remplie' les ingrédients nécessaires dans chaque modale
            switch(menuOpen[i].classList[1]) {
                case 'recipe-classic':
                    menuOpen[i].querySelector('.quantity-flour').textContent = state.classicRecipe.flour;
                    menuOpen[i].querySelector('.quantity-eggs').textContent = state.classicRecipe.eggs;
                    menuOpen[i].querySelector('.quantity-milk').textContent = state.classicRecipe.milk;
                    menuOpen[i].querySelector('.quantity-oil').textContent = state.classicRecipe.oil;
                    menuOpen[i].querySelector('.quantity-salt').textContent = state.classicRecipe.salt;
                    menuOpen[i].querySelector('.crepe-number').textContent = state.classicRecipe.crepe;
                    break;
                case 'recipe-bretonne':
                    menuOpen[i].querySelector('.quantity-flour').textContent = state.bretonRecipe.flour;
                    menuOpen[i].querySelector('.quantity-eggs').textContent = state.bretonRecipe.eggs;
                    menuOpen[i].querySelector('.quantity-salt').textContent = state.bretonRecipe.salt;
                    menuOpen[i].querySelector('.crepe-number').textContent = state.bretonRecipe.crepe;
                    menuOpen[i].querySelector('.quantity-water').textContent = state.bretonRecipe.water;
                    break;
                case 'recipe-vegan':
                    menuOpen[i].querySelector('.quantity-flour').textContent = state.veganRecipe.flour;
                    menuOpen[i].querySelector('.quantity-milk').textContent = state.veganRecipe.milk;
                    menuOpen[i].querySelector('.quantity-oil').textContent = state.veganRecipe.oil;
                    menuOpen[i].querySelector('.quantity-salt').textContent = state.veganRecipe.salt;
                    menuOpen[i].querySelector('.crepe-number').textContent = state.veganRecipe.crepe;
                    menuOpen[i].querySelector('.quantity-cornstarch').textContent = state.veganRecipe.cornstarch;
                    break;
                case 'recipe-pancake':
                    menuOpen[i].querySelector('.quantity-flour').textContent = state.pancakeRecipe.flour;
                    menuOpen[i].querySelector('.quantity-eggs').textContent = state.pancakeRecipe.eggs;
                    menuOpen[i].querySelector('.quantity-milk').textContent = state.pancakeRecipe.milk;
                    menuOpen[i].querySelector('.crepe-number').textContent = state.pancakeRecipe.crepe;
                    menuOpen[i].querySelector('.quantity-cornstarch').textContent = state.pancakeRecipe.cornstarch;
                    menuOpen[i].querySelector('.quantity-yeast').textContent = state.pancakeRecipe.yeast;
                    break;
                default:
                    break;
            }
        }
    };

     // Calcule des ingrédients en fonction de la donnée milk
    const milkFunc = function(milkUser, recipeList) {
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
    }

    // Calcule des ingrédients en fonction de la donnée eggs
    const eggsFunc = function (eggsUser, recipeList) {
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
    }
    // Calcule des ingrédients en fonction de la donnée flour
    const flourFunc = (flourUser, recipeList) => {

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
    }

    // Calcule des ingrédients en fonction de la donnée crepe
    const crepeFunc = function(crepeUser, recipeList) {
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
    }

    const cornstarchFunc = function(cornstarchUser, recipeList) {
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
    }

    const waterFunc = function(waterUser, recipeList) {
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
    }


    switch (state.currentSelect) {
        case "milk":
            state.elementMessage = 'de lait';
            state.quantityMessage = ' ' + state.currentInput + ' mL ';
            state.classicRecipe = milkFunc(state.currentInput, datas.Recipes.classic);
            state.veganRecipe = milkFunc(state.currentInput, datas.Recipes.vegan);
            state.pancakeRecipe = milkFunc(state.currentInput, datas.Recipes.pancake);
            show();
            break;
            
        case "eggs":
            state.elementMessage = 'oeuf(s)';
            state.quantityMessage = ' ' + state.currentInputœ + ' ';
            state.classicRecipe = eggsFunc(state.currentInput, datas.Recipes.classic);
            state.bretonRecipe = eggsFunc(state.currentInput, datas.Recipes.bretonne);
            state.pancakeRecipe = eggsFunc(state.currentInput, datas.Recipes.pancake);
            show();
            break;
            
        case "flour":
            state.elementMessage = 'de farine';
            state.quantityMessage = ' ' + state.currentInput + ' g ';
            state.classicRecipe = flourFunc(state.currentInput, datas.Recipes.classic);
            state.veganRecipe = flourFunc(state.currentInput, datas.Recipes.vegan);
            state.bretonRecipe = flourFunc(state.currentInput, datas.Recipes.bretonne);
            state.pancakeRecipe = flourFunc(state.currentInput, datas.Recipes.pancake);
            show();
            break;

        case "crepe":
            state.elementMessage = 'crepe(s)';
            state.quantityMessage = ' ' + state.currentInput + ' ';
            state.classicRecipe = crepeFunc(state.currentInput, datas.Recipes.classic);
            state.veganRecipe = crepeFunc(state.currentInput, datas.Recipes.vegan);
            state.bretonRecipe = crepeFunc(state.currentInput, datas.Recipes.bretonne);
            state.pancakeRecipe = crepeFunc(state.currentInput, datas.Recipes.pancake);
            show();
            break;

        case "cornstarch":
            state.elementMessage = 'de fécule de maïs';
            state.quantityMessage = ' ' + state.currentInput + ' g ';
            state.classicRecipe = cornstarchFunc(state.currentInput, datas.Recipes.classic);
            state.veganRecipe = cornstarchFunc(state.currentInput, datas.Recipes.vegan);
            state.bretonRecipe = cornstarchFunc(state.currentInput, datas.Recipes.bretonne);
            state.pancakeRecipe = cornstarchFunc(state.currentInput, datas.Recipes.pancake);
            show();
            break;
            
        default:
            break;
    }
};

export default showModal;