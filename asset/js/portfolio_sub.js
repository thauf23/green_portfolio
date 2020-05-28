$(function(){
    // start
// ----------- img and number scroll event ---------------------------------
    $(window).on('scroll',function(){
        var winHe = $(window).height();
        var sTo = $(this).scrollTop();
     
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
        const sPan = $('.sub_text p span');
        var spanW = sPan.width();
        var pW = subText.width();
        var spIndex = sPan.length;
        var m = 0;
        var cLone = sPan.clone();
        subText.append(cLone);
        var cLoneT = sPan.clone();
        subText.append(cLoneT);
        var spanFi;
        // console.log(spanFi)
        // const cLone = sPan.clone();
        // subText.append(cLone);
        
    // ----------- 이미지 위치 ---------------------------------        
        for(var a=0; a<sPan.length; a++){
            console.log(a);
            console.log(sPan);
            sPan.eq(a).css({
                left: (spanW*a) + "px"
            })
        }
    
    // ----------- img move ---------------------------------
    setInterval(function(){
        ++m;
        subText.animate({
            left: "-" +spanW+ "px"
        },24000,function(){
            spanFi = $('.sub_text p span').eq(0);
            if(m > spIndex-2){
                // $('.sub_text p').append(spanFi);
                subText.css({
                    left: 0
                });
                m = 0;
            };
        });        
    });

    
    
    // end
});