$(function(){
    // start
    $(window).on('scroll',function(){
        var winHe = $(window).height();
        var sTo = $(this).scrollTop();
        var liHe = $('.sub_contents ul li').height();
        // console.log(liHe)
        

        $('.sub_contents ul li').each(function(i){
            var liSet = $('.sub_contents ul li').eq(i).offset().top;
            if( liSet-winHe<sTo ){
                $('.sub_contents ul li').eq(i).animate({
                    opacity: 1,
                    marginTop: 0
                },1500);
            }

            var numBer =  $('.sub_contents ul li').eq(i).find('small').offset().top;
            if( numBer<sTo ){
                $('.sub_contents ul li').eq(i).find('small').animate({
                            top: "70%"
                },1200);
            }

            var liBot = liHe + $('.sub_contents ul li').offset().top;
            console.log("to =" +liSet+liBot);
            console.log("s =" +sTo);

            if( liSet+liBot < sTo ){
                $('.sub_contents ul li').eq(i).find('small').animate({
                    top: "20px"
                },1200);
            }


        });

        
        
        // if( number<sTo ){
        //     $('.sub_contents ul li small').animate({
        //         top: "90%"
        //     });
        // }
        
    });

    
    // end
});