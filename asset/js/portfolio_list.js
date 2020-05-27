$(function(){
    // start
    insertion();
    function insertion(){
        $.ajax({
            url : '/asset/js/json/project_name.json',
            type : 'GET', //POST
            dataType : 'json',
            success :function(text){                
                console.log("success:"+text);
                var porName;
                var liLength = $('.thum_img li').length;
                for(var i=0; i<liLength; i++){
                    porName = "<figcaption><small>"+
                                text.year[0]+
                                "</small><span>"+
                                text.projectName[i]+
                                "</span></figcaption>";
                    $('.thum_img li').eq(i).find('figure').append(porName);
                }
            },
            error: function(e) {
                            console.log("error: " + e);
                        }
        });
    }    

    $(window).on('scroll',function(){
        var winH = $(window).height();
        var sTop = $(this).scrollTop();
        // var thumTop = $('.thum_img').offset().top;
        var liTop = $('.thum_img li').eq(0).offset().top;
        var liTTop = $('.thum_img li').eq(3).offset().top;
        var liTTTop = $('.thum_img li').eq(4).offset().top;
        var setTime = 1000;
            if( liTop-winH < sTop ){
                $('.thum_img li').eq(0).animate({
                    opacity: 1,
                    "margin-top": 0
                },setTime,function(){
                    $('.thum_img li').eq(1).animate({
                                opacity: 1,
                                "margin-top": "6.25em"
                },setTime,function(){
                    $('.thum_img li').eq(2).animate({
                        opacity: 1,
                        "margin-top": 0
                },setTime);
                });
                });
            }
            console.log("li = "+liTTop);
            console.log("wi = "+winH);
            console.log("st = "+sTop);
            if( liTTop-winH < sTop ){
                $('.thum_img li').eq(3).animate({
                    opacity: 1,
                    "margin-top": "6em"
                },setTime,function(){
                    $('.thum_img li').eq(5).animate({
                        opacity: 1,
                        "margin-top": "6em"
                },setTime);
                });
            }

            if( liTTTop-winH < sTop ){
                $('.thum_img li').eq(4).animate({
                    opacity: 1,
                    "margin-top": "14em"
                },setTime+1600);
            }
    });
    
    $(window).trigger('scroll');
       
    // end
});