//LOADER
window.onload = function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
};
// ANIMACIÓN SUAVE SCROLL ENLACES
$(document).ready(function () {
    $('a').click(function(){
    $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 500);});
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

// AÑADIR CLASE ACTIVA CLICKANDO MENÚ
links.forEach(link => {
    link.addEventListener("click", añadirActiva)
});


function añadirActiva() {
    links.forEach(link => {
        link.classList.remove("activa")
    });

    this.classList.add("activa")
}

// AÑADIR CLASE ACTIVA HACIENDO SCROLL MENÚ
$(window).scroll(function(){
    if($(document).scrollTop() < ($("#habilidades").offset().top - 300)) { //Si el scrollTop de la ventana es menor o igual que el top de habilidades le pone la clase activa a quien-soy
        links.forEach(link => {
            link.classList.remove("activa")
        });
        links[0].classList.add("activa")
    }

    if($(document).scrollTop() > ($("#habilidades").offset().top - 300)) {
        links.forEach(link => {
            link.classList.remove("activa")
        });
        links[1].classList.add("activa")
    }

    if($(document).scrollTop() >= ($("#proyectos").offset().top - 300)) {
        links.forEach(link => {
            link.classList.remove("activa")
        });
        links[2].classList.add("activa")
    }

    if($(document).scrollTop() >= ($("#contacto").offset().top - 300)) {
        links.forEach(link => {
            link.classList.remove("activa")
        });
        links[3].classList.add("activa")
    }
});

// BOTON SUBIR ARRIBA ANIMACIÓN APARECER Y DESAPARECER
$(window).scroll(function(){
    if($(this).scrollTop() > 500){
        $('.flecha-subir').fadeIn('fast');
    } else if ($(this).scrollTop() > 100) {
        $('.flecha-subir').fadeOut('fast');
    }
});

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
