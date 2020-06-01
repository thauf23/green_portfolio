$(function(){
    //start
    // var winHeight = $(window).height();
    // var headerHeight = $('header').height();
    // var header = $('header');

    // Console.log(header);

// ----------- header 위치 ---------------------------------
    var windowScroll, windowHeight, headerHeight, headerTop;
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
    gauge()
    var skilL = document.querySelectorAll('.skill_b');
    var skillNum = document.querySelector('.skill_b div');
    var i = 0;
    // function gauge(sk){
    //     console.log(sk)
    //     loop = setInterval(function(){
    //         if( i==sk ){
    //             clearInterval(loop);
    //             i=0;
    //             return;
    //         }
    //         i++;
    //         skillNum.textContent = i+"%";
    //         skilL.style = `background:conic-gradient(from 0deg,#e9103a ${i}%,#000 0%)`;
    //     },10)
    // }
    // skill(skilL.children[0].dataset.p);

    //end
});