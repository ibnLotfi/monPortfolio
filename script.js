$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky");
        }
        else{
            $(".navbar").removeClass("sticky");
        }
    });
    // togle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i.active').toggleClass("active");
    })

});