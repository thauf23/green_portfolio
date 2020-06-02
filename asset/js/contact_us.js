$(function(){
    //start

    var $inPut = $('.request form ul li');

    $($inPut).on('click',function(){
        $($inPut).removeClass('active');
        $(this).addClass('active');
    });
    
    //end
});