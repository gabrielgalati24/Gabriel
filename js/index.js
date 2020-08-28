$(document).ready(function () {
    $('.ir-arriba').click(function () {
        $('body,html').animate({
            scrollTop: '0px'
        }, 500);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.ir-arriba').slideDown(300)
        } else {
            $('.ir-arriba').slideUp(300)
        }
    })

    $("#button-acerca-de").click(function () {
        $('html, body').animate({
            scrollTop: $("#section-about").offset().top
        }, 500);
    });
    $("#button-proyectos").click(function () {
        $('html, body').animate({
            scrollTop: $("#section-contacto").offset().top
        }, 500);
    });
    $("#button-contacto").click(function () {
        $('html, body').animate({
            scrollTop: $("#myDiv").offset().top
        }, 500);
    });
})