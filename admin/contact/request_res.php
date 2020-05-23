<?
    include_once $_SERVER['DOCUMENT_ROOT']."/admin/admin_check.php";
    // 글정보 처리

    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $email = $_POST['email'];
    $contents = $_POST['contents'];
    $date = date('y-m-d');

    $query = "insert into contact(
        name, subject, email, contents, date
    ) values (
        '$name', '$subject', '$email', '$contents', '$date'
    )";

    // 쿼리 명령문 실행
    mq($query);

    page('list.php');
?>