$(function(){
    // start
    $('.header_menu').on('click', function(){
        $(".box").slideToggle();
        $('header h1 a').toggleClass('color');
        // $('header nav').hide();
        // $('header').css("position", "fixed");
        console.log($('header h1 a').attr("class"));
        if($('header h1 a').attr("class")){
            $('header nav').hide();
            $('header').css("position", "fixed");    
        }else{
            $('header').css("position", "relative");
            $('header nav').show(); 
        }
    });
       
    // end
});