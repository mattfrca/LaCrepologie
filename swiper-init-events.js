var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    spaceBetween: 20,
    grabCursor: true,
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
            body.style.transition = 'background-color 2s';
            mainDescription.innerText = 'old but gold';
            mainDescription.style.left = '120px';
            mainDescription.style.top = '60px';
            mainDescription.style.marginLeft = '1em';
            crepe.style.transform = 'rotate(-30deg)';
            crepe.style.transition = 'transform .4s, top .4s, left.4s';
            crepe.style.top = '-30px';
            crepe.style.left = '0px';
            break;
        case 1:
            body.style.cssText = 'background-color: #BDCCE3';
            body.style.transition = 'background-color 2s';
            mainDescription.innerText = 'kram- pouezh';
            mainDescription.style.left = '110px';
            mainDescription.style.top = '50px';
            mainDescription.style.marginLeft = '1em';
            crepe.style.transform = 'rotate(-120deg)';
            crepe.style.transition = 'transform .4s, top .4s, left.4s';
            crepe.style.top = '70px';
            crepe.style.left = '-40px';
            break;
        case 2:
            body.style.cssText = 'background-color: #D7DFA0';
            body.style.transition = 'background-color 2s';
            mainDescription.innerText = 'je suis donc végé';
            mainDescription.style.left = '-60px';
            mainDescription.style.top = '-30px';
            mainDescription.style.marginRight = '1em';
            crepe.style.transform = 'rotate(150deg)';
            crepe.style.transition = 'transform .4s, top .4s, left.4s';
            crepe.style.top = '100px';
            crepe.style.left = '80px';
            break;
        case 3:
            body.style.cssText = 'background-color: #CD5C5C';
            body.style.transition = 'background-color 2s';
            mainDescription.innerText = 'tomber en amour';
            mainDescription.style.left = '-90px';
            mainDescription.style.top = '30px';
            mainDescription.style.marginRight = '1em';
            crepe.style.transform = 'rotate(80deg)';
            crepe.style.transition = 'transform .4s, top .4s, left.4s';
            crepe.style.top = '20px';
            crepe.style.left = '110px';
            break;
    }
})
