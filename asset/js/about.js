$(function(){
    //start
    // var winHeight = $(window).height();
    // var headerHeight = $('header').height();
    // var header = $('header');
console.log("aa");
    // Console.log(header);
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
    
    //end
});