import datas from "./datas.js";

const validation = function () {

    const error = (message = "Veuillez entrer un chiffre") => {
        const input = state.currentPage.div.querySelector('input');
        const divInputs = state.currentPage.div.querySelector('.quantities');

        if (!state.currentPage.div.querySelector('.error') || state.currentPage.div.querySelector('.error').textContent === "" ) {
            const messageElt = document.createElement('p');
            messageElt.classList = 'error';
            messageElt.style.color = 'red';
            messageElt.textContent = message;
            messageElt.style.fontSize = '0.8em';
            messageElt.style.marginTop = "0.5em";
            messageElt.style.textAlign = "center";
            messageElt.style.fontWeight= "bold";
            messageElt.style.textDecoration = "underline";
            messageElt.style.width = "100%";
            input.style.borderColor="red";

            divInputs.after(messageElt);
        }
    };
    

    const RecipeValidation = (recipe) => {
        switch(state.currentSelect) {
            case 'flour':
                if(state.currentInput !== ""
                && Number.isInteger(state.currentInput)
                && state.currentInput != NaN
                && state.currentInput != 0
                && state.currentInput >= recipe.flour) {
                    return true;
                }else if(state.currentInput < recipe.flour) {
                    error(`Il faut au moins ${recipe.flour} g de farine`);
                }else {
                    error();
                }
                return false;
                break;
            case 'milk':
                if(state.currentInput !== ""
                && Number.isInteger(state.currentInput)
                && state.currentInput != NaN
                && state.currentInput != 0
                && state.currentInput >= recipe.milk) {
                    return true;
                }else if(state.currentInput < recipe.milk) {
                    error(`Il faut au moins ${recipe.milk} ml de lait`);
                }else {
                    error();
                }
                return false;
                break;
            case 'eggs':
                if(state.currentInput !== ""
                && Number.isInteger(state.currentInput)
                && state.currentInput != NaN
                && state.currentInput != 0
                && state.currentInput >= recipe.eggs) {
                    return true;
                }else if(state.currentInput < recipe.eggs) {
                    error(`Il faut au moins ${recipe.eggs} oeuf`);
                }else {
                    error();
                }
                return false;
                break;
            case 'cornstarch':
                if(state.currentInput !== ""
                && Number.isInteger(state.currentInput)
                && state.currentInput != NaN
                && state.currentInput != 0
                && state.currentInput >= recipe.cornstarch) {
                    return true;
                }else if(state.currentInput < recipe.cornstarch && state.currentInput != 0) {
                    error(`Il faut au moins ${recipe.cornstarch} g de fécule de maïs`);
                }else {
                    error();
                }
                return false;
                break;
            case 'crepe':
                if(state.currentInput !== ""
                && Number.isInteger(state.currentInput)
                && state.currentInput != NaN
                && state.currentInput != 0) {
                    return true;
                }
                error();
                break;
            default:
                break;
        }
    }


    switch(state.currentPage.name) {
        case 'slide-classic':
            return RecipeValidation(datas.Recipes.classic);
            break;
        case 'slide-vegan':
            return RecipeValidation(datas.Recipes.vegan);
            break;
        case 'slide-bretonne':
            return RecipeValidation(datas.Recipes.bretonne);
            break;
        case 'slide-pancake':
            return RecipeValidation(datas.Recipes.pancake);
            break;
        default:
            break;
    }

};

export default validation;