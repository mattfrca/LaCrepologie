const validation = {

    inputValidation: function (quantity) {
        if (!Number.isInteger(quantity) || quantity == "") {
            const input = document.querySelector(".quantity");
            const divInputs = document.querySelector('.quantities');

            // TODO: oublié la creation de error: a faire en html avec un display = none.

            if (!document.querySelector('.error')) {
        
                const messageElt = document.createElement('p');
                messageElt.classList = 'error';
                messageElt.style.color = 'red';
                messageElt.textContent = 'Valeur incorrecte';
                messageElt.style.fontSize = '0.8em';
    
                input.style.border="solid 1px red";
    
                divInputs.appendChild(messageElt);
            }

        }
    },
};