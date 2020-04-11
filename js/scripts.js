$(document).ready(function(){
    var services = $("#services").offset().top;
    var choose = $("#choose").offset().top;
    var testimonials = $("#testimonials").offset().top;
    var contact = $("#contact").offset().top;
    
    $(window).scroll(function(){

        if($(this).scrollTop()>=138){
            $('.fm-nav-scroll').css("opacity","1");
        }else{
            $('.fm-nav-scroll').css("opacity","0");
        }

        if($(this).scrollTop() < services){
            toggle();
            $("#scrollhome").addClass("fm-scroll-active");
        }

        if($(this).scrollTop() >= services && $(this).scrollTop() <= choose){
            toggle();
            $("#scrollservices").addClass("fm-scroll-active");
        }

         if($(this).scrollTop() >= choose && $(this).scrollTop() <= testimonials){
            toggle();
            $("#scrollchoose").addClass("fm-scroll-active");
         }

         if($(this).scrollTop() >= testimonials && $(this).scrollTop() <= contact){
            toggle();
            $("#scrolltestimonials").addClass("fm-scroll-active");
         }

         if($(this).scrollTop() >= contact){
            toggle();
            $("#scrollcontact").addClass("fm-scroll-active");
         }
    });

    function toggle(){
        var array = ['#scrollhome', '#scrollservices', '#scrollchoose', '#scrolltestimonials', '#scrollcontact'];
        $.each(array, (index, value) => {
            $(value).removeClass("fm-scroll-active");
        });
    }
});