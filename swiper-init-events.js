var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true,
    },
    pagination: {
    el: '.swiper-pagination',
    },
    loop: true,
});
// swiper.on('progress', (progress) => {
//     console.log(progress);
// });
swiper.on('transitionEnd', () => {
    let body = document.getElementsByTagName('body')[0];
    let mainDescription = document.getElementById('main-description');
    let crepe = document.getElementById('crepe');
    switch (swiper.realIndex) {
        case 0:
            body.style.cssText = 'background-color: #FEDD9C';
            mainDescription.innerText = 'old but gold';
            mainDescription.style.left = '150px';
            mainDescription.style.top = '50px';
            mainDescription.style.marginLeft = '1em';
            crepe.style.transform = 'rotate(-30deg)';
            crepe.style.top = '-30px';
            crepe.style.left = '0px';
            break;
        case 1:
            body.style.cssText = 'background-color: #BDCCE3';
            mainDescription.innerText = 'kram- pouezh';
            mainDescription.style.left = '150px';
            mainDescription.style.top = '50px';
            mainDescription.style.marginLeft = '1em';
            crepe.style.transform = 'rotate(-120deg)';
            crepe.style.top = '60px';
            crepe.style.left = '-30px';
            break;
        case 2:
            body.style.cssText = 'background-color: #D7DFA0';
            mainDescription.innerText = 'je suis donc végé';
            mainDescription.style.left = '-60px';
            mainDescription.style.top = '-30px';
            mainDescription.style.marginRight = '1em';
            crepe.style.transform = 'rotate(-210deg)';
            crepe.style.top = '100px';
            crepe.style.left = '70px';
            break;
        case 3:
            body.style.cssText = 'background-color: #CD5C5C';
            mainDescription.innerText = 'tomber en amour';
            mainDescription.style.left = '-90px';
            mainDescription.style.top = '30px';
            mainDescription.style.marginRight = '1em';
            crepe.style.transform = 'rotate(-300deg)';
            crepe.style.top = '-10px';
            crepe.style.left = '110px';
            break;
    }
})
