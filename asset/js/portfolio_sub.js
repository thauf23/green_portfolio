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
        var sPan = $('.sub_text p span');
        var spanW = sPan.width();
        // var pW = subText.width();
       
        var m = 0;
        var cLone = sPan.clone();
        subText.append(cLone);
        var spIndex = sPan.length;
        var cLoneT = sPan.clone();
        subText.prepend(cLoneT);
        var spanFi;
        console.log(spIndex);
        // const cLone = sPan.clone();
        // subText.append(cLone);
        
    // ----------- 이미지 위치 ---------------------------------        
        for(var a=0; a<spIndex; a++){
            sPan.eq(a).css({
                // left: a*spanW + "px"
                left: spanW + "px"
            })
        }
    console.log(spIndex)
    // ----------- img move ---------------------------------
    setInterval(function(){
        ++m;
        subText.animate({
            left: "-" +(spanW*2)+ "px"
        },24000,function(){
            // spanFi = $('.sub_text p span').eq(0);
            if(m > spIndex-1){
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