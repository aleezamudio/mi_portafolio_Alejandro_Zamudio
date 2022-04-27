//LOADER
window.onload = function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
};
//CAROUSEL
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


//MODAL
const openModale = document.querySelector('.cta');
const modale = document.querySelector('.modale');
const closeModale = document.querySelector('.modale__close');

openModale.addEventListener('click', (e)=>{
    e.preventDefault();
    modale.classList.add('modale--show');
});

closeModale.addEventListener('click', (e)=>{
    e.preventDefault();
    modale.classList.remove('modale--show');
});
