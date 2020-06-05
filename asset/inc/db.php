<?
    session_start();

    $host = 'localhost';
    $db_user = 'smproject'; 
    $db_password = 'seeun1146!';
    $db_name = 'smproject'; //user DB

    // $dbConnect = mysqli_connect($host, $db_user, $db_password, $db_name);
    $dbcon = new mysqli($host, $db_user, $db_password, $db_name);

    function mq($sql){
        global $dbcon;
        return $dbcon->query($sql);
    }
    function page($url){
        echo "<script>location.href=\"$url\";</script>";
    }
    function back($msg){
        echo "<script>alert(\"$msg\");history.back();</script>";
    }
    function fun($name){
        echo "<script>{$name}</script>";
    }
?>