$(function(){
    // start

    // h2move()
    function h2move(){
        $('h2 span').animate({
            opacity: 1,
            top: 0
        },1300,function(){
            $('h2 span').animate({
                opacity: ".2"
            },100,function(){
                $('h2 span').animate({
                    opacity: 1,
                    "text-shadow": "5px 8px 10px rgba(203,203,203,0.7)"
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