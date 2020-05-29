$(function(){
    // start
    var winHe,sTo;
// ----------- header ---------------------------------
    headerdown();
    function headerdown(){
        var sumMary = $('.sub_contents').offset().top;
        
        if( sTo>sumMary ){
            $('header').css({
                position: "fixed",
                background: "#fff"
            });
            $('header h1 a').css({
                color: "#fff"
            });
            $('header nav ul li:first a').css({
                color: "#ff8283"
            });
            $('.header_menu').css({
                background: "#ff8283"
            });
        } else {
            $('header').css({
                position: "absolute",
                background: "transparent",
                boxShadow: "none"
            });
            $('header h1 a').css({
                color: "#353160"
            });
            $('header nav ul li:first a').css({
                color: "#fff"
            });
            $('.header_menu').css({
                background: "#ff484a"
            });
        }
    }

// ----------- img and number scroll event ---------------------------------
    $(window).on('scroll',function(){
        winHe = $(window).height();
        sTo = $(this).scrollTop();
        headerdown();
        $('.sub_contents ul li').each(function(i){
            var liSet = $('.sub_contents ul li').eq(i).offset().top;
            var numBer =  $('.sub_contents ul li').eq(i).find('small').offset().top;
            var sToo = sTo+300;

            if( liSet-winHe<sTo ){
                $('.sub_contents ul li').eq(i).animate({
                    opacity: 1,
                    marginTop: 0
                },1500);
            }

            if( numBer<sTo ){
                $('.sub_contents ul li').eq(i).find('small').stop().animate({       
                    top: "52%"
                },1000);
            }else{
                $('.sub_contents ul li').eq(i).find('small').stop().animate({
                    top: "-140px"
                },1000);
            }
        });
    });

    
// ----------- sub_text move---------------------------------
        const subText = $('.sub_text p');
        var sPan = $('.sub_text p span');
        var spanW = sPan.width();
       
        var m = 0;
        var cLone = sPan.clone();
        subText.append(cLone);
        var spIndex = sPan.length;
        
    // ----------- 이미지 위치 ---------------------------------        
        for(var a=0; a<spIndex; a++){
            sPan.eq(a).css({
                left: spanW + "px"
            })
        }

    // ----------- img move ---------------------------------
    setInterval(function(){
        ++m;
        subText.animate({
            left: "-" +spanW+ "px"
        },24000,'linear',function(){
            if(m > spIndex-1){
                subText.css({
                    left: 0
                });
                m = 0;
            };
        });        
    });

    // end
});