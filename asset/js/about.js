$(function(){
    //start

// ----------- header 위치 ---------------------------------
    var windowScroll, windowHeight, headerHeight, headerTop, headerChange, pp;
    
    $(window).on('scroll', function(){
        windowScroll = $(this).scrollTop();
        windowHeight = $(this).height();
        headerHeight = $('header').height();
        headerTop = windowHeight - headerHeight;
        headerChange = windowHeight/15.5;
        pp = headerHeight - headerChange;

// ----------- header 위치 ---------------------------------
        if( windowScroll > 0 ){
            $('header').css({
                height: headerChange,
                top: headerTop + pp,
                background: "#fff"
            });
            $('.about_left p').stop().animate({
                top: "42%"
            },700);
            $('header nav ul li').eq(1).find('a').css({
                color: "#ff484a"
            });
            $('.header_menu').css({
                position: "fixed",
                left: "50%",
                top: 0,
                transform: "translateX(-50%)"
            });
            $('.box').css("position","fixed");
        } else {
            $('header').css({
                top: 0,
                background: "transparent",
                height: "12vh"
            });
            $('.about_left p').stop().animate({
                top: "54%"
            },700);
            $('header nav ul li').eq(1).find('a').css({
                color: "#fff"
            });            
        }

// ----------- dd 위치 ---------------------------------
        // var ddOffset = $('.skill dd').offset().top;
        // var ddHeight = $('.skill dd').height();
        // var ddPlus = ddOffset + ddHeight;
        var ddOffset, ddHeight, ddPlus;
        // $(window).one('scroll', function(){
            for( var v=0; v<$('.skill dd').length; v++ ){
                ddOffset = $('.skill dd').eq(v).offset().top;
                ddHeight = $('.skill dd').height();
                ddPlus = ddOffset + ddHeight;
                // console.log(v);
                if( ddPlus-windowHeight < windowScroll){
                    // console.log(ddPlus);
                    // for(var j=0;j<skilL.length;j++){
                        console.log("dd;;"+ddPlus);
                        console.log("win;;"+windowHeight);
                        console.log(ddPlus+"-"+windowHeight+"="+(ddPlus-windowHeight));
                        console.log("sc;;"+windowScroll);
                        var a = gauge($('dd').eq(v).find('.skill_b div').data('p'), v);
                            a();
                        // if( ddOffset==windowHeight ){
                        //     var a = gauge($('dd').eq(v).find('.skill_b div').data('p'), v);
                        //     a();
                        // }
                    // }
                }
            }
            // console.log($('.skill dd').length);
            // console.log(ddOffset);
        // });    
    });


// ----------- %% ---------------------------------
var skilL = $('.skill_b');

    function gauge(sk,z){
        var i = 0, loop='';
       
       return function(){
            loop = setInterval(function(){
                if( i==parseInt(sk) ){
                    i=0;
                    clearInterval(loop);
                    return;
                }
                i++;
                $('dd').eq(z).find('.skill_b div').text(i+"%");
                $('dd').eq(z).find('.skill_b').css({
                    background:`conic-gradient(from 0deg,#e9103a ${i}%,#fff 0%)`
                });
            },10);
            
       }
    }
//     function sTop(){
//     for(var j=0;j<skilL.length;j++){
//         var a = gauge($('dd').eq(j).find('.skill_b div').data('p'), j);
//         a();
//     }
        
// }
    //end
});