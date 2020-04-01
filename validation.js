const validation = {

    inputValidation: function (quantity, element) {
        if (!Number.isInteger(quantity) || quantity == "") {
            const input = element;
            console.log("test", element);
            const divInputs = input.parentNode;
            console.log(divInputs);
            // TODO: oublié la creation de error: a faire en html avec un display = none.

            if (!document.querySelector('.error')) {
        
                const messageElt = document.createElement('p');
                messageElt.classList = 'error';
                messageElt.style.color = 'red';
                messageElt.textContent = 'Valeur incorrecte';
                messageElt.style.fontSize = '0.8em';
                messageElt.style.textAlign = "center";
                messageElt.style.marginTop = "0.5em";
                input.style.border="solid 1px red";
    
                divInputs.after(messageElt);
            }

        }
    },
};