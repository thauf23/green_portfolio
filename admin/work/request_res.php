<?
    include_once $_SERVER['DOCUMENT_ROOT']."/admin/admin_check.php";
    // 글정보 처리

    $title = $_POST['title'];
    $url = $_POST['url'];
    $date = $_POST['date'];
    $upload = $_FILES['upload'];
    $contents = $_POST['contents'];
    $state = $_POST['state'];

    // file 등록
    $fileName = $upload['name'];
    $fileTmp = $upload['tmp_name'];
    $fileFolder = '../upload/thum/'.$fileName; // move_uploaded_file에는 상대경로밖에 안됨
    $fileDir = '/admin/upload/thum/'.$fileName; // date 기록용

    move_uploaded_file($fileTmp, $fileFolder);

    // db에 입력받은 자료 저장
    if(!isset($_POST['mode'])){
        $query = "insert into portfolio(
            title, url, date, upload, contents, state
        ) values (
            '$title', '$url', '$date', '$fileDir', '$contents', '$state'
        )";
    }else{
        $num = $_POST['num'];
        if(!empty($fileName)){
            $query = "update portfolio set upload='$fileDir' where num='$num'";    
            mq($query);
        }
        $query = "update portfolio set 
            title='$title', url='$url', date='$date', 
            contents='$contents', state='$state' 
            where num='$num'";
    }

    // 쿼리 명령문 실행
    mq($query);

    page('list.php');
?>