$(function(){
    //start

// ----------- header 위치 ---------------------------------
    var windowScroll, windowHeight, headerHeight, headerTop, headerChange, pp,blen=true,skillArr=[0];
    
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
                
                ddPlus = ddOffset - windowHeight;
                // console.log(v);
                if( ddPlus+100 < windowScroll && windowScroll < ddPlus+150){
                           
                            var h = 1;
                            var fLen = skillArr.length;
                            var lLen = 0;
                            
                            for(var j=0;j<skillArr.length;j++){
                                if(skillArr[j] == v){h=0}
                            }
                            if(h){
                                skillArr.push(v);
                                lLen = skillArr.length;
                            }

                             if(fLen != lLen){
                                var a = gauge($('dd').eq(v).find('.skill_b div').data('p'), v);
                                a();
                            }
                    
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