$(function(){
    // start


    const boxImg = $('.box_img');
    var imgLi = $('.box_img li');

    const cloneLeft = imgLi.eq(0).clone();
    boxImg.append(cloneLeft);
    const cloneRight = imgLi.eq(5).clone();
    boxImg.prepend(cloneRight);

// ----------- 이미지 위치 ---------------------------------
    imgLi = $('.box_img li');
    for(var i=0; i<imgLi.length; i++){
        $('.box_img li').eq(i).css({
            left: (i*138)+"%"
        });
    }

// ----------- next ---------------------------------
    var w = 0;
    var s = 2;
    $('.thum_button .next').on('click',function(e){
        // +70.14
        var p = [116.2, 186.34, 256.48, 326.62, 396.76, 466.9];
        
        boxImg.animate({
            left: "-"+p[w]+"%"
        },800,function(){
            if(w == imgLi.length-3){
                w = -1;
                s = 1;
                setTimeout(function(){
                    boxImg.css({
                        left: "-46%"
                    });
                },10);
            }
            // project name
            $('.thum_text').hide();
            $('.box_img li').removeClass('shadow');
            $('.box_img li').eq(s).addClass('shadow');
            $('.shadow a').append($('.thum_text'));
            $('.thum_text').fadeIn(1000);
            // button
            $('.thum_button').hide();
            $('.shadow a').append($('.thum_button'));
            $('.thum_button').fadeIn(1000);
            ++s;
            ++w;
        });

       
    });


    // end
});