$(function(){
    // start
    $('.header_menu').on('click', function(){
        $(".box").slideToggle(600);
        $('header h1 a').hide().toggleClass('color');
        $('header h1 a').fadeIn(1000);
        
        if($('header h1 a').attr("class")){
            $('header nav').hide();
            // setTimeout(function(){
                // $('header').css("position", "fixed");
                // $('.header_menu').css("background","#1c1b34");
            // },500);
            $('.header_menu').hide().css("background","#fff");
            $('.header_menu span').css("background","#ff484a");
            $('.header_menu').fadeIn()
        }else{
            // $('header').css("position", "relative");
            setTimeout(function(){
                $('header nav').fadeIn();
                $('.header_menu').css("background","#ff484a");
                $('.header_menu span').css("background","#fff");
            },400);
        }
    });
       
    // end
});