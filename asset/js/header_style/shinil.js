// ----------- header ---------------------------------
// headerdown();
function headerdown(){
    var sumMary = $('.sub_contents').offset().top;
    var sTo = $(window).scrollTop();
    if( sTo>sumMary ){
        $('header').css({
            position: "fixed",
            background: "#fff"
        });
        $('header h1 a').css({
            color: "#fff",
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
            // textShadow: "none"
        });
        $('header nav ul li:first a').css({
            color: "#fff"
        });
        $('.header_menu').css({
            background: "#ff484a"
        });
    }
}