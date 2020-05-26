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
            left: i*72+'%'
        });
    }

// ----------- next ---------------------------------
    var w = 0;
    var s = 1;
    $('.box_img li').eq(1).addClass('shadow');
    var tem = $('#thum_tem ').html();
    $('.shadow a').append(tem);
    
    $('.thum_button .next').on('click',function(){
        boxhide();
        ++s;
        boxImg.animate({
            left: "-=72%"
        },800,function(){
            if(s >= imgLi.length-1){
                s = 1;
                setTimeout(function(){
                    boxImg.css({
                        left: "-47%"
                    });
                },10);
            }
            boxchange();
        });
        
    });

// ----------- prev ---------------------------------
    $('.thum_button .prev').on('click',function(){
        boxhide();
        --s;
        boxImg.animate({
            left: "+=72%"
        },800,function(){
            if(s < 1){
                s = 6;
                setTimeout(function(){
                    boxImg.css({
                        left: "-407.001%"
                    });
                },10);
            }
            setTimeout(boxchange,500);
        });
    });

// ----------- 텍스트, 버튼 hide ---------------------------------
    function boxhide(){
        $('.box_img li').removeClass('shadow');
        $('.thum_text').hide();
        $('.thum_button').hide();
        $('.box_text').hide();
    }

// ----------- 텍스트, 버튼 append ---------------------------------
    
    function boxchange(){
        // project name
        insertion();
        $('.box_img li').eq(s).addClass('shadow');
        $('.shadow a').append($('.box_img .thum_text'));
        $('.thum_text').fadeIn(200);
        // button
        $('.shadow a').append($('.box_img .thum_button'));
        $('.thum_button').fadeIn(200);
        // box_text
        $('.shadow a').append($('.box_img .box_text'));
        $('.box_text').fadeIn(200);
    }

// ----------- 텍스트 변경하기 ---------------------------------
    function insertion(){
        $.ajax({
            url : 'asset/js/json/project_name.json',
            type : 'GET', //POST
            dataType : 'json',
            success :function(text){                
                console.log("success:"+text);

                $('.thum_text h2').text(text.projectName[s-1]);
                $('.thum_text .introduce').text(text.introduce[s-1]);
                $('.thum_text .work').text(text.workingForm[s-1]);
            },
            error: function(e) {
                            console.log("error: " + e);
                        }
        });
    }

    // end
});