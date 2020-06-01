$(function(){
    //start
    var winHeight = $(window).height();
    var headerHeight = $('header').height();
    // var header = $(winHeight);

    console.log(winHeight);

// ----------- header 위치 ---------------------------------
    // var windowScroll, windowHeight, headerHeight, headerTop;
    $(window).on('scroll', function(){
        windowScroll = $(this).scrollTop();
        windowHeight = $(this).height();
        headerHeight = $('header').height();
        headerTop = windowHeight - headerHeight;

        if( windowScroll > 0 ){
            $('header').css({
                top: headerTop,
                background: "#fff"
            });
            $('.about_left p').stop().animate({
                top: "42%"
            },600);
            $('header nav ul li').eq(1).find('a').css({
                color: "#ff484a"
            });   
        } else {
            $('header').css({
                top: 0,
                background: "transparent"
            });
            $('.about_left p').stop().animate({
                top: "54%"
            },600);
            $('header nav ul li').eq(1).find('a').css({
                color: "#fff"
            });            
        }
    });

// ----------- %% ---------------------------------
    
    var skilL = $('.skill_b');
    var skillNum = $('.skill_b div');
    console.log(skillNum);

    
    // console.log(inD);
    
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
                $('dd').eq(z).find('.skill_b').css({background:'conic-gradient(from 0deg,#e9103a '+i+'%,#fff 0%)'});
                
            },10);
            
       }
    }
    
    for(var j=0;j<skilL.length;j++){
        var a = gauge($('dd').eq(j).find('.skill_b div').data('p'), j);
        a();
    }
        

    //end
});