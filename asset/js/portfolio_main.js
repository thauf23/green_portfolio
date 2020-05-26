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
    // +70.14
    var n = [116.2, 186.34, 256.48, 326.62, 396.76, 466.9];
    $('.thum_button .next').on('click',function(){
        boxImg.animate({
            left: "-"+n[w]+"%"
        },1000,function(){
            if(w == imgLi.length-3){
                w = -1;
                s = 1;
                setTimeout(function(){
                    boxImg.css({
                        left: "-46%"
                    });
                },10);
            }
            boxchange();
            ++s;
            ++w;
        });
    });

// ----------- prev ---------------------------------
    console.log(w);
    var p = [24.5, 94.64];
    $('.thum_button .prev').on('click',function(e){
        console.log(w);
        boxImg.animate({
            left: "+"+p[w]+"%"
        },1000,function(){
            if(w == 0){
                console.log("11");
                w = 1;
                s = 6;
                setTimeout(function(){
                    boxImg.css({
                        left: "-396.76%"
                    });
                },10);
            }
            boxchange();
            --s;
            ++w;
        });
    });

// ----------- 텍스트, 버튼 append ---------------------------------
    function boxchange(){
        // project name
        $('.thum_text').hide();
        $('.box_img li').removeClass('shadow');
        $('.box_img li').eq(s).addClass('shadow');
        insertion();
        $('.shadow a').append($('.thum_text'));
        $('.thum_text').fadeIn(1000);
        // button
        $('.thum_button').hide();
        $('.shadow a').append($('.thum_button'));
        $('.thum_button').fadeIn(1000);
        // box_tect
        $('.box_text').hide();
        $('.shadow a').append($('.box_text'));
        $('.box_text').fadeIn(1000);
    }

// ----------- 텍스트 변경하기 ---------------------------------
    function insertion(){
        $.ajax({
            url : 'asset/js/json/project_name.json',
            type : 'GET', //POST
            dataType : 'json',
            success :function(text){                
                console.log("success:"+text);
                $('.thum_text h2').text(text.projectName[w]);
                $('.thum_text .introduce').text(text.introduce[w]);
                $('.thum_text span .work').text(text.workingForm[w]);
            },
            error: function(e) {
                            console.log("error: " + e);
                        }
        });
    }

    // end
});