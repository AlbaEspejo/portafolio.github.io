function cerrar() {
    let navbar = document.querySelector(".navbar-toggler");
    navbar.click();
}

$(function(){
    // efecto menú
    menu_inicio = $('.menu a');
    $('.menu a').each(function(){
        $(this).addClass('tracking-in-expand-fwd-top')
        
        
        // $(this).animate({
        //     'botom': '-200px'
        // })

        // $(this).animate({
        //     top: '100'
        // }, 1500 + (index * 500))
        // console.log('hola')
    })

    // * efecto HEADER
    if ( $(window).width() > 800 ) {
        $('header .container .contenedor-texto .texto .nombre').css({
            opacity: 0,
            marginTop: 0
        })
        $('header .container .contenedor-texto .texto .nombre').animate({
            opacity: 1,
            marginTop: '0px'
        },2000)
    }
    if ( $(window).width() > 800 ) {
        $('header .container .contenedor-texto .texto .profesion-1').css({
            opacity: 0,
            marginTop: 0
        })
        $('header .container .contenedor-texto .texto .profesion-1').animate({
            opacity: 1,
            marginTop: '0px'
        },1500)
    }
    if ( $(window).width() > 800 ) {
        $('header .container .contenedor-texto .texto .profesion-2').css({
            opacity: 0,
            marginTop: 0
        })
        $('header .container .contenedor-texto .texto .profesion-2').animate({
            opacity: 1,
            marginTop: '0px'
        },2000)
    }
    

    // agregamos la clase ct-active al primer enlace
    $('.container-category .category-item[category="all"]').addClass('ct-active');

    function llamarItem(categories){

        let arr = categories.split('#');

        // $(categories).filter(function(){
        //     $(this).hasClass('figma')
        // }).remove()
        

        // agregar clase ct-active al enlace seleccionado
        $('.category-item').removeClass('ct-active');
        $(this).addClass('ct-active');

        // ocultando productos que no coincidan con lo seleccionado, elimina todos los elementos
        $('.card').fadeOut(0000);
        
        
        arr.forEach(function(category){
        // Mostrando los productos que coinciden con las categories
        $(`.card[category*=${category}]`).fadeIn(400);
        // $(`.card[category=${categories}]`).addClass('show');
        // $(`.card[category=${categories}]`).removeClass('show');


        // if(`.card[category=${categories}]`.length < 3){
            
        //     console.log('hay uno')
        // }else{
        //     console.log('hay mas')
        // }

    })
    }

    // filtrando productos
    $('#css-label').click(function(){
        var categories = $(this).attr('category');
        $('.posts').addClass('justify-content-around')

        llamarItem(categories);
        
    })

    $('#js-label').click(function(){
        var categories = $(this).attr('category');
        // $('.posts').addClass('justify-content-between')
        $('.posts').css('width','1100px')

        llamarItem(categories);
    })

    $('#html-label').click(function(){
        var categories = $(this).attr('category');
        $('.posts').addClass('justify-content-between')

        llamarItem(categories);
        
    })

    $('#all-label').click(function(){
        var categories = $(this).attr('category');
        $('.posts').addClass('justify-content-between')

        llamarItem(categories);
        
    })

    $('#bootstrap-label').click(function(){
        var categories = $(this).attr('category');
        $('.posts').addClass('justify-content-between')

        llamarItem(categories);
        
    })

    $('#jquery-label').click(function(){
        var categories = $(this).attr('category');
        $('.posts').addClass('justify-content-between')

        llamarItem(categories);
        
    })

    $('#sass-label').click(function(){
        var categories = $(this).attr('category');
        $('.posts').addClass('justify-content-between')

        llamarItem(categories);
        
    })

    $('#adobe-label').click(function(){
        var categories = $(this).attr('category');
        $('.posts').addClass('justify-content-center')
        $('.posts').css('width','100%')

        llamarItem(categories);
    })

    $('#node-label').click(function(){
        var categories = $(this).attr('category');
        $('.posts').addClass('justify-content-between')

        llamarItem(categories);
        
    })

    $('#react-label').click(function(){
        var categories = $(this).attr('category');
        $('.posts').addClass('justify-content-between')

        llamarItem(categories);
        
    })

    $('#figma-label').click(function(){
        var categories = $(this).attr('category');

        $('.posts').removeClass('justify-content-between')
        $('.posts').addClass('justify-content-start')
        $('.figma').css('margin-right','50px')

        llamarItem(categories);
        
    })

    $('.inicio').click(function(){
        $('.card').show();
        $('.category-item').removeClass('ct-active');
        $('.category-item[category="all"]').addClass('ct-active');

    })
    $('.trabajo').click(function(){
        $('.card').show();
        $('.category-item').removeClass('ct-active');
        $('.category-item[category="all"]').addClass('ct-active');
    })
    $('.contacto').click(function(){
        $('.card').show();
        $('.category-item').removeClass('ct-active');
        $('.category-item[category="all"]').addClass('ct-active');
    })

    // mostrando todos los cards cuando pulsamos en todos
    $('.category-item[category="all"]').click(function(){
        $('.card').fadeIn(400);
    })
    
});



$(function(){

    var inicio = $('#inicio').offset().top;
    var trabajos = $('#trabajos').offset().top;
    var contacto = $('#contacto').offset().top;

    $('#btn-inicio').on('click', (e) =>{
        e.preventDefault()
        $('html, body').animate({
            scrollTop: inicio
        },500)
    })

    $('#btn-trabajos').on('click', (e) =>{
        e.preventDefault()
        $('html, body').animate({
            scrollTop: trabajos
        },500)
    })
    $('#btn-contacto').on('click', (e) =>{
        e.preventDefault()
        $('html, body').animate({
            scrollTop: contacto
        },500)
    })
})

