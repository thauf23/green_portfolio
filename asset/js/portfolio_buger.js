$(function(){
    // start
    $('.header_menu').on('click', function(){
        var pinK = "_pink";
        var whitE = "_white";
        var logoI = $('header h1 a img');
        var imgS, chAn;

        $(".box").slideToggle(600);
        $('header h1 a').hide().toggleClass('color');
        imgS = logoI.attr('src');
        $('header h1 a').fadeIn(1000);
        

        if($('header h1 a').attr("class")){
            $('header nav').hide();
            chAn = imgS.replace(pinK,whitE);
            logoI.attr('src',chAn);
            $('.header_menu').hide().css("background","#fff");
            $('.header_menu span').css("background","#ff484a");
            $('.header_menu').fadeIn()
        }else{
            setTimeout(function(){
                $('header nav').fadeIn();
                chAn = imgS.replace(whitE,pinK);
                logoI.attr('src',chAn);
                $('.header_menu').css("background","#ff484a");
                $('.header_menu span').css("background","#fff");
            },400);
        }
    });
       
    // end
});