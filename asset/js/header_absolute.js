$(function(){
    // start
    $('.header_menu').on('click', function(){
        if($('header h1 a').attr("class")){
            setTimeout(function(){
                $('header').css("position", "fixed");
            },500);
        }else{
            $('header').css("position", "absolute");
        }
    });
       
    // end
});