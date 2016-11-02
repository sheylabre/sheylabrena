'use strict';
(function ($) {
    var scrollSpyTrigger = 150;
    var isOnTopTriger = 100;
    var activeTypewrite = false;

    $(document).ready(function () {
        /* Smooth scroll - desplazamiento suave */
        $('.menu .menu-item a').click(function (e) {
            e.preventDefault();

            $('.menu .menu-item').removeClass('active');
            $(this).parent('li.menu-item').addClass('active');

            var target = $(this.hash)

            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);

            return false;
        });

        /* Actiualiza la posicion del avatar cuando carga la pagina */
        if ( $(window).scrollTop() < isOnTopTriger ) {
            $('#header').addClass('is-on-top');
        }
        else {
            $('#header').removeClass('is-on-top');
        }

        /* Actualiza el estado activo de los items del menu al cargar la página */
        $('.section, #header').each(function(i, e) {
            var n = i+1;
            var id = '#' + $('.section, #header')[i].id;

            if (n < $('.section, #header').length && $('.section, #header')[i].offsetTop < $(window).scrollTop() + scrollSpyTrigger && $(window).scrollTop() + scrollSpyTrigger < $('.section, #header')[n].offsetTop ) {
                $('.menu .menu-item').removeClass('active');
                $('.menu .menu-item a[href="'+ id +'"]').parent('li.menu-item').addClass('active');
            }
            else if (n == $('.section, #header').length && $('.section, #header')[i].offsetTop < $(window).scrollTop() + scrollSpyTrigger ) {
                $('.menu .menu-item').removeClass('active');
                $('.menu .menu-item a[href="'+ id +'"]').parent('li.menu-item').addClass('active');
            }
        });

        /* Efecto de maquina de esctibir al cargar la página */
        $("#typewrite").typed({
            strings: [
                "Sheyla Breña",
                "Frontend Developer Junior",
                "Estudiante de Mecatrónica",
                "Entusiasta de la tecnología",
                "Amante de los robots ♥",
                "Amante del código",
                "Amante de la comida",
                "Humana"
            ],
            typeSpeed: 2,
            loop: true,
        });

        /* Animacion del preloader */
        $('body').removeClass('is-loading');

        setTimeout(function () {
            $('#page-preloader').css('z-index', -1);
        }, 750);
    });

    $(window).on('scroll', function () {
        /* Actiualiza la posicion del avatar cuando se hace scroll de la pagina */
        if ( $(window).scrollTop() < isOnTopTriger ) {
            $('#header').addClass('is-on-top');
        }
        else {
            $('#header').removeClass('is-on-top');
        }

        /* Actualiza el estado activo de los items del menu */
        $('.section, #header').each(function(i, e) {
            var n = i+1;
            var id = '#' + $('.section, #header')[i].id;

            if (n < $('.section, #header').length && $('.section, #header')[i].offsetTop < $(window).scrollTop() + scrollSpyTrigger && $(window).scrollTop() + scrollSpyTrigger < $('.section, #header')[n].offsetTop ) {
                $('.menu .menu-item').removeClass('active');
                $('.menu .menu-item a[href="'+ id +'"]').parent('li.menu-item').addClass('active');
            }
            else if (n == $('.section, #header').length && $('.section, #header')[i].offsetTop < $(window).scrollTop() + scrollSpyTrigger ) {
                $('.menu .menu-item').removeClass('active');
                $('.menu .menu-item a[href="'+ id +'"]').parent('li.menu-item').addClass('active');
            }
        });
    });
})(jQuery);
