const swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    spaceBetween: 20,
    grabCursor: true,
    longSwipes: true,
    longSwipesRatio: 0.15,
    longSwipesMs: 100,
    shortSwipes: false,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
    rotate: 40,
    stretch: 0,
    depth: 800,
    modifier: 1,
    slideShadows : true,
    },
    pagination: {
    el: '.swiper-pagination',
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

swiper.on('slideChange', () => {
     // Ici, on suprimer toute les border rouge éventuel ainsi que les message d'erreur.
    // Cette fonction est appeler lors du clique sur les flêches.
    
    const allErrorMessage = document.getElementsByClassName('error');
    const allErrorInput = document.getElementsByClassName('quantity');
    const allSelect = document.querySelectorAll('select');

    // A chaque changement de page, on voudrait que l'ingredient selectionné par défault soit la farine
    for (let i = 0; i < allSelect.length; i++) {
        allSelect[i].value = "flour";
    }

    // Sélection de la totalité des messages erreur
    for (let i = 0; i < allErrorMessage.length; i++) {
        allErrorMessage[i].textContent = "";
    }

    // Sélection de la totalité des input et remise à zéro
    for (let i = 0; i < allErrorInput.length; i++) {
        allErrorInput[i].style.borderColor = "transparent";
        allErrorInput[i].value = "";
    }

});

swiper.on('transitionEnd', () => {
    // On met a jour le state ici:
    state.currentPage.div = document.getElementsByClassName('swiper-slide-active')[0];
    state.currentPage.name = state.currentPage.div.classList[2];
    state.currentInput = "";

    let body = document.getElementsByTagName('body')[0];
    let mainDescription = document.getElementById('main-description');
    let crepe = document.getElementById('crepe');
    switch (swiper.realIndex) {
        case 0:
            body.style.cssText = 'background-color: #FEDD9C';
            body.style.transition = 'background-color .8s';
            mainDescription.innerText = 'old but gold';
            mainDescription.style.left = '90px';
            mainDescription.style.top = '60px';
            mainDescription.style.marginLeft = '1em';
            crepe.style.transform = 'rotate(-32deg)';
            crepe.style.transition = 'transform .8s, top .8s, left.8s';
            crepe.style.top = '-20px';
            crepe.style.left = '-5px';
            break;
        case 1:
            body.style.cssText = 'background-color: #BDCCE3';
            body.style.transition = 'background-color .8s';
            mainDescription.innerText = 'kram- pouezh';
            mainDescription.style.left = '40px';
            mainDescription.style.top = '5px';
            mainDescription.style.marginLeft = '1em';
            crepe.style.transform = 'rotate(-122deg)';
            crepe.style.transition = 'transform .8s, top .8s, left.8s';
            crepe.style.top = '90px';
            crepe.style.left = '-20px';
            break;
        case 2:
            body.style.cssText = 'background-color: #D7DFA0';
            body.style.transition = 'background-color .8s';
            mainDescription.innerText = 'my food doesn\'t scream';
            mainDescription.style.left = '-70px';
            mainDescription.style.top = '-50px';
            mainDescription.style.marginRight = '1em';
            crepe.style.transform = 'rotate(150deg)';
            crepe.style.transition = 'transform .8s, top .8s, left.8s';
            crepe.style.top = '110px';
            crepe.style.left = '85px';
            break;
        case 3:
            body.style.cssText = 'background-color: #CD5C5C';
            body.style.transition = 'background-color .8s';
            mainDescription.innerText = 'soft and fluffy';
            mainDescription.style.left = '-80px';
            mainDescription.style.top = '30px';
            mainDescription.style.marginRight = '1em';
            crepe.style.transform = 'rotate(90deg)';
            crepe.style.transition = 'transform .8s, top .8s, left.8s';
            crepe.style.top = '40px';
            crepe.style.left = '110px';
            break;
    }
})
