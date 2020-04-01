const validation = {

    inputValidation: function (quantity, element) {
        if (!Number.isInteger(quantity) || quantity == "") {
            const input = element;
            const divInputs = input.parentNode;

                // Ici, il faut séléctionner le "after" de la div
            if (!divInputs.parentNode.querySelector('.error') || divInputs.parentNode.querySelector('.error').textContent === "" ) {
                const messageElt = document.createElement('p');
                messageElt.classList = 'error';
                messageElt.style.color = 'red';
                messageElt.textContent = 'Valeur incorrecte';
                messageElt.style.fontSize = '0.8em';
                messageElt.style.textAlign = "center";
                messageElt.style.marginTop = "0.5em";
                input.style.borderColor="red";
    
                divInputs.after(messageElt);
            }
            return false;
        }

        return true;
    },
};