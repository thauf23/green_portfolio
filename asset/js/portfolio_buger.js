$(function(){
    // start
    $('.header_menu').on('click', function(){
        $(".box").slideToggle(600);
        $('header h1 a').hide().toggleClass('color');
        $('header h1 a').fadeIn(1500);
        
        if($('header h1 a').attr("class")){
            $('header nav').hide();
            setTimeout(function(){
                $('header').css("position", "fixed");
                // $('.header_menu').css("background","#1c1b34");
            },500);
            $('.header_menu').hide().css("background","#1c1b34");
            $('.header_menu').fadeIn()
        }else{
            $('header').css("position", "relative");
            setTimeout(function(){
                $('header nav').fadeIn();
                $('.header_menu').css("background","#ff484a");
            },400);
        }
    });
       
    // end
});