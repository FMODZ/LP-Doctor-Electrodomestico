$(document).ready(function(){

    $('html, body').css({
        "overflow": "hidden"
    });

    setTimeout(() => {

        $('html, body').css({
            "overflow": "auto"
        });

        $(".fm-loading").remove();

        /*Funciones */
     function toggle(){
        var array = ['#scrollhome', '#scrollservices', '#scrollchoose', '#scrolltestimonials', '#scrollcontact'];
        var arrayMobile = ['#mobilehome', '#mobileservices', '#mobilechoose', '#mobiletestimonials', '#mobilecontact'];

        $.each(array, (index, value) => {
            $(value).removeClass("fm-scroll-active");
        });

        $.each(arrayMobile, (index, value) => {
            $(value).removeClass("active");
        });
    }

    $("#nav").on("click", function(){
        $(".mobile").toggleClass("nav-mobile");
    })

    $("#more").on("click", function(){
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#services").offset().top
        }, 500);
    });

    $(".toTop").on('click', function(){
        $("html, body").animate({scrollTop: 0}, 100);
    });
        
    

    $(window).scroll(function(){

        /*ViewPort*/
        if($("#servicesrow").isInViewport()){
            $("#servicesrow").css("opacity", "1");
        }

        if($("#chooserow").isInViewport()){
            $("#chooserow").css("opacity", "1");
            $(".fade-choose-left").css("left", "0");
            $(".fade-choose-right").css("right", "0");
        }

        if($("#services").isInViewport()){
            $(".fm-subtitle-top").css({
                "opacity": "1",
                "bottom": "0"
            });
        }

        

        if($(".fm-subtitle-why").isInViewport()){
            $(".fm-subtitle-why").css("opacity", "1");
        }

        /*Scroll Nav */

        if($(this).scrollTop() > 58){
            $(".fm-nav-scroll").css("display", "block");
        }else{
            $(".fm-nav-scroll").css("display", "none");
        }

        if($(this).scrollTop()>=138){
            $('.fm-nav-scroll').css("opacity","1");
            $('.fm-float-button').css("bottom","40px");
        }else{
            $('.fm-nav-scroll').css("opacity","0");
            $('.fm-float-button').css("bottom","-60px");
        }

        if($(this).scrollTop() < services){
            toggle();
            $("#scrollhome").addClass("fm-scroll-active");
            $("#mobilehome").addClass("active");
        }

        if($(this).scrollTop() >= services && $(this).scrollTop() <= choose){
            toggle();
            $("#scrollservices").addClass("fm-scroll-active");
            $("#mobileservices").addClass("active");
        }

         if($(this).scrollTop() >= choose && $(this).scrollTop() <= testimonials){
            toggle();
            $("#scrollchoose").addClass("fm-scroll-active");
            $("#mobilechoose").addClass("active");
         }

         if($(this).scrollTop() >= testimonials && $(this).scrollTop() <= contact){
            toggle();
            $("#scrolltestimonials").addClass("fm-scroll-active");
            $("#mobiletestimonials").addClass("active");
         }

         if($(this).scrollTop() >= contact){
            toggle();
            $("#scrollcontact").addClass("fm-scroll-active");
            $("#mobilecontact").addClass("active");
         }
    });

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    

    /*Estilos iniciales */
    $(window).scroll(function() {
        var scrolledY = $(window).scrollTop();
        $('.fm-image-main').css('background-position', '0px ' + $(document).scrollTop() + 'px');
      });
      
    $(".fm-image-main").css("opacity","1");
    $(".fade-left").css("left","0");
    $(".fade-right").css("right","0");

    if($("#services").isInViewport()){
        $(".fm-subtitle-top").css({
            "opacity": "1",
            "bottom": "0"
        });
    }
     $("#facebook").on("click", function(){
        window.open("https://www.facebook.com/doctorelectrodomestico/");
     });

     $("#face").on("click", function(){
        window.open("https://www.facebook.com/doctorelectrodomestico/");
     });


    /*Hover*/
    $(".fm-card-description").hover(function() {
        $(this).children().first().addClass("fm-rotate");
    });

    $('.fm-card-top').bind('webkitAnimationEnd mozAnimationEnd animationEnd', function() {
        $(this).removeClass('fm-rotate');
      });

    /*Variables */
    var services = $("#services").offset().top;
    var choose = $("#choose").offset().top;
    var testimonials = $("#testimonials").offset().top;
    var contact = $("#contact").offset().top;
    }, 3000);

    
     
});