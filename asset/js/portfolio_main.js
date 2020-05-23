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
// ----------- next ---------------------------------
    var w = 1;
    var imgW, miNus;
    $('.thum_button p').on('click',function(e){
        // // var imgW = ($('.box_img li').eq(1).position().left)+($('.box_img li').eq(1).width())+(($('.box_img li').eq(1).width())/10);
        // var imgW = ($('.box_img li').eq(1).position().left)+($('.box_img li img').width());
        // console.log($('.box_img li').eq(1).position().left/2);
        // var leftarrow =  "-"+(imgW);
        // console.log(leftarrow);
        
        // imgW = $('.box_img li').width();
        //  miNus = (("-" + imgW)*2.3*w); 
        // miNus = ("-" + imgW)*(2.3*w); 
        // console.log(miNus);
        // var m = 138*w;
        // console.log(m)
        var p = [115,4645,5464,,4645,5646,];
        
        boxImg.animate({
            left: "-"+p[w]+"%"
            // left: "-"+236+"%"
        },2000);
        $('.thum_text').fadeOut(1);
        $('.shadow a').append($('.thum_text'));
        $('.thum_text').fadeIn(2000);
        $('.thum_button').fadeOut(1);
        $('.shadow a').append($('.thum_button'));
        $('.thum_button').fadeIn(2000);
        if(w == imgLi.length){
            w = 0;
        }
        w++;
    });


    // end
});