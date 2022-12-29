$(function(){

    var html_body = $('html,body');
    var backtotop = $('.back2top');
    var navbar = $('.navbar');
    

    backtotop.on('click',function(){
        html_body.animate({scrollTop:0},1000);
    });
    
    $(window).on('scroll',function(){
        
        var scrolling = $(this).scrollTop();
        
        if(scrolling > 100){
            navbar.addClass("bg");
           }
        else{
            navbar.removeClass('bg');
        }
        
        if(scrolling > 300){
            backtotop.fadeIn();
           }
        else{
            backtotop.fadeOut();
        }
    });

    // banner slide
    $('.banner_slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<span class="prev_arrow"><i class="fa-solid fa-arrow-left"></i></span>',
        nextArrow: '<span class="next_arrow"><i class="fa-solid fa-arrow-right"></i></span>',
      });

    // testimonial slide
      $('.testimonial_slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
      });

















    

});