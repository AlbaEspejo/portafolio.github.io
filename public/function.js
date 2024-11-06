
window.onload = function() {
    // Si la página se recarga desde la parte inferior, navegamos al inicio
    if (window.scrollY > 0) {
        window.scrollTo(0, 0);  // Mueve el scroll a la parte superior
    }
};


// Función para cerrar el offcanvas
function cerrar() {
    let navbar = document.querySelector(".navbar-toggler");
    if (navbar && document.querySelector(".offcanvas.show")) {
        navbar.click();
    }
}

$(function() {
    // Efecto de animación para menú
    $('.menu a').addClass('tracking-in-expand-fwd-top');

    // Efectos para mostrar elementos en pantallas grandes
    if ($(window).width() > 800) {
        function mostrarElemento(elemento, delay) {
            $(elemento).css({ opacity: 0, marginTop: 0 }).animate({
                opacity: 1,
                marginTop: '0px'
            }, delay);
        }
        mostrarElemento('.nombre', 2000);
        mostrarElemento('.profesion-1', 1500);
        mostrarElemento('.profesion-2', 2000);
    }

    // Selección de elementos y categorías
    $('.category-item').click(function() {
        let categories = $(this).attr('category');
        $('.card').hide(); // Oculta todos
        $(`.card[category*=${categories}]`).fadeIn(400); // Muestra los seleccionados
        $('.category-item').removeClass('ct-active');
        $(this).addClass('ct-active');
    });

    // Cuando se hace clic en inicio, trabajo o contacto, muestra todas las tarjetas
    $('.inicio, .trabajo, .contacto').click(function() {
        $('.card').show();
        $('.category-item').removeClass('ct-active');
        $('.category-item[category="all"]').addClass('ct-active');
    });

    // Animación de scroll para el menú de navegación
    const scrollSections = {
        '#btn-inicio': '#inicio',
        '#btn-trabajos': '#trabajos',
        '#btn-contacto': '#contacto'
    };

    $.each(scrollSections, function(btn, section) {
        $(btn).on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(section).offset().top
            }, 500);
        });
    });

    // Para asegurar que siempre se cierre al hacer clic en un enlace del offcanvas
    $('#offcanvasNavbar .nav-link').on('click', cerrar);
});


