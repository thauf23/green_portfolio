$(function(){
    // start
// ----------- img and number scroll event ---------------------------------
    $(window).on('scroll',function(){
        var winHe = $(window).height();
        var sTo = $(this).scrollTop();
        var liHe = $('.sub_contents ul li').height();
     
        $('.sub_contents ul li').each(function(i){
            var liSet = $('.sub_contents ul li').eq(i).offset().top;
            var numBer =  $('.sub_contents ul li').eq(i).find('small').offset().top;
            var sToo = sTo+200;

            if( liSet-winHe<sTo ){
                $('.sub_contents ul li').eq(i).animate({
                    opacity: 1,
                    marginTop: 0
                },1500);
            }

            if( numBer<sToo ){
                $('.sub_contents ul li').eq(i).find('small').stop().animate({
                            top: "74%"
                },700);
            }else{
                $('.sub_contents ul li').eq(i).find('small').stop().animate({
                    top: "20px"
                },700);
            }
        });
    });

// ----------- sub_text move---------------------------------
        const subText = $('.sub_text');
        const sPan = $('.sub_text span');
        // const cLone = sPan.clone();
        // subText.append(cLone);
    
    // ----------- 이미지 위치 ---------------------------------        
        for(var a=0; a<sPan.length; a++){
            sPan.eq(a).css({
                left: "100%"
            })
        }

    // ----------- img move ---------------------------------        
    // textMove();
    function textMove(){
        const cLone = sPan.clone();
        subText.append(cLone);
        sPan.animate({
            left: "-100%"
        },14000,function(){
            sPan.css({
                left: 0
            })
        });
    }

    // setInterval("textMove()",1400);
    
    // end
});