$(function(){
    // start
    // var h2 = $('h2');
    // var span = $('h2 span');
    // console.log(span);
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