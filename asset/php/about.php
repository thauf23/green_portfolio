<!DOCTYPE html>
<html>
<head>
<title>An Sumi Portfolio</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link href="/asset/css/integrated_sub.css" type=text/css rel=stylesheet>
    <link href="/asset/css/about.css" type=text/css rel=stylesheet>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>    
    <script src="/asset/js/portfolio_buger.js"></script>
    <script src="/asset/js/header_absolute.js"></script>
    <!-- <script src="/asset/js/about.js"></script> -->
</head>
<body>
    <div id="warp">
        <!-- start -->

<?php
    include_once $_SERVER['DOCUMENT_ROOT']."/asset/php/header.php";
?>

    <div class="container">
        <section class="about_left">
            <p><img src="../img/sumi/about_me.jpg" alt="me"></p>
        </section>
        <section class="about_right">
            <strong>An Summi</strong>
            <p>
                <span>let</span>
                <strong>ssum</strong>
                <small>= [</small><br>
                <small>
                    <span>“안녕하세요. 경쾌, 발랄, 성실한 안수미입니다.”,</span>
                    <span>“세상에서 제일 해로운 벌레는 대충(蟲)이라고 합니다.”,</span>
                    <span>“대충하지 않고, 꼼꼼하게, 열정적으로, 주도적으로, 창의적으로 하겠습니다.”</span>
                </small>
                <small>]</small>
            </p>
            <p>
                <span>const</span>
                <strong>Birth</strong>
                <small>= “ 1987.06.19 ” ;</small>
            </p>
            <p>
                <span>var</span>
                <strong>cAll, eMail ;</strong>
            </p>
            <p>
                <span>if</span>
                <small>( 핸드폰을 가지고 있다 ){</small><br>
                <strong>cAll</strong>
                <small>= “ 010 - 3542 - 6239 ” ;</small><br>
                <small>} else {</small><br>
                <strong>eMail</strong>
                <small>= “ thauf23@naver.com ” ;</small><br>
                <small>}</small>
            </p>
        </section>
    </div>
<?php 
    include_once $_SERVER['DOCUMENT_ROOT']."/asset/php/footer.php";
?>