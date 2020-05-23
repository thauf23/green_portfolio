// window.addEventListener('DOMContentLoaded',function(){
function contact(){
    $('.view').on('click',function(e){
        e.preventDefault();
        $('.contents').stop().slideUp();
        $(this).parent().find('.contents').stop().slideDown();
    });
}

function workList(){
    function data(e){
        e.preventDefault();
        var target = e.target;
        var className = target.className;
        
        for(; className != 'view'; target = target.parentElement){
            if(className == 'del' || className == 'edit') break;
            className = target.parentElement.className;
            if(className == 'work_list') break;
        };

        if(className == 'del' || className == 'view'){
            var num = target.dataset.num;
            console.log(className);
            $.ajax({
                url:'data_query.php',
                type:'POST',
                data:{'num':num,'mode':className},
                // dataType: 'php',
                success:function(data){
                    // location.reload();
                    // console.log(data);
                    if(className == 'view'){
                        $('.pop').html(data);
                    }else{
                        location.reload();
                    }
                }
            });
        }
        if(className == 'edit'){
            console.log(className);
            location.href=target.href;
        }
    }
    var workUl = document.querySelector('.work_list ul');
    workUl.addEventListener('click', data);
}


function request(){
    //editor start
    var oEditors = [];
    nhn.husky.EZCreator.createInIFrame({
        oAppRef: oEditors,
        elPlaceHolder: "ir1",
        sSkinURI: "/editor/SmartEditor2Skin.html",	
        htParams : {bUseToolbar : true,
            fOnBeforeUnload : function(){
                //alert("아싸!");	
            }
        },
        fCreator: "createSEditor2"
    });
    
    function editor(e){
        e.preventDefault();
        oEditors.getById["ir1"].exec("UPDATE_CONTENTS_FIELD", []);
        popol.submit();
    }
    
    var submit = document.querySelector('input[type=submit]');
    submit.addEventListener('click',editor);
    //editor end
}
// });
