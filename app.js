"use strict";
(function ($) {
    $(document).ready(function () {
        /* smooth scroll - desplazamineto suave */
        $(".menu .menu-item a").click(function(e) {
            e.preventDefault();

            var target = $(this.hash);

            $("html, body").animate({
                scrollTop: target.offset().top
            },1000);

            return false;
        });

        /*Actulaiza la posicion del avtar cuando carga la pagina*/
        if($(window).scrollTop() < 500){
            $("#header").addClass('is-on-top');
        }
        else {
            $("#header").removeClass("is-on-top");
        }

        /*animacion del preloader*/
        $("body").removeClass("is-loading");

        setTimeout(function () {
            $("#page-preloader").css("z-index", -1);
        }, 750);
    });

    $(window).on("scroll", function(){
        /*Actulaiza la posicion del avtar cuando hace scroll la pagina*/
        if($(window).scrollTop() < 50){
            $("#header").addClass('is-on-top');
        }
        else {
            $("#header").removeClass("is-on-top");
        }
    })
})(jQuery);


