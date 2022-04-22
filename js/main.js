window.onload = function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
};

document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 150,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 3,
        indicators: true,
        noWrap: false
    }); 
});

addEventListener('DOMContentLoaded', ()=>{
    const btn_menu = document.querySelector('.btn_menu')
    if(btn_menu) {
        btn_menu.addEventListener('click', ()=>{
            const caja1 = document.querySelector('.caja1')
            caja1.classList.toggle('show')
        })
    }
})