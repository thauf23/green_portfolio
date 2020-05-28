$(function(){
    // start

    h2move()
    function h2move(){
        console.log("aa");
        $('h2 span').animate({
            opacity: 1,
            top: 0
        },1300,function(){
            $('h2 span').animate({
                opacity: ".2"
            },100,function(){
                $('h2 span').animate({
                    opacity: 1
                },500,function(){
                    $('.scroll_down').animate({
                        opacity: 1
                    });
                });
            });
        });
    }
    
    // end
});