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

        if( windowScroll > 0 ){
            $('header').css({
                height: headerChange,
                top: headerTop + pp,
                background: "#fff"
            });
            $('.about_left p').css({
                top: "42%"
            });
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
            $('.about_left p').css({
                top: "54%"
            });
            $('header nav ul li').eq(1).find('a').css({
                color: "#fff"
            });            
        }
    });

// ----------- %% ---------------------------------
    var skilL = $('.skill_b');
    var skillNum = $('.skill_b div');
    
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
    
    for(var j=0;j<skilL.length;j++){
        var a = gauge($('dd').eq(j).find('.skill_b div').data('p'), j);
        a();
    }
        

    //end
});