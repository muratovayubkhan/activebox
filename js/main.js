$(document).ready(function() {

 $('.owl-carousel2 .owl-carousel').owlCarousel({
        items:1,
        loop:true,
        margin:0,
        nav:true,
        autoplay:3000,
        smartSpeed:3000
    });

 $('.owl-carousel').owlCarousel({
        items:1,
        loop:true,
        margin:0,
        nav:true,
        autoplay:3000,
        smartSpeed:3000
    });

    $("#menuOne").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 50;
        $('body,html').animate({ scrollTop: top - 50 }, 600);
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() > 70 && document.body.clientWidth > 768) {
            $('.my_fix').addClass('fix_menu');
        } else {
            $('.my_fix').removeClass('fix_menu');
        }
    });

});
