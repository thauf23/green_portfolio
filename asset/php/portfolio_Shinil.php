<!DOCTYPE html>
<html>
<head>
<title>Chase Portfolio</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link href="/asset/css/integrated_sub.css" type=text/css rel=stylesheet>
    <link href="/asset/css/portfolio_sub.css" type=text/css rel=stylesheet>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>    
    <script src="/asset/js/portfolio_buger.js"></script>
    <script src="/asset/js/header_absolute.js"></script>
    <script src="/asset/js/portfolio_sub.js"></script>
</head>
<body>
    <div id="warp">
        <!-- start -->

<?php
    include_once $_SERVER['DOCUMENT_ROOT']."/asset/php/header.php";
?>

    <div class="container">
        <section class="sub_visual parents">
            <h2>
                <span>Shinil p</span>
                <span>olytech</span>
            </h2>
            <p><img src="../img/shinil/shinil_visual.jpg" alt="shinil img"></p>
            <div class="scroll_down">
                <div class="chevron"></div>
                <div class="chevron"></div>
                <div class="chevron"></div>
                <span class="text">Scroll down</span>
            </div>
        </section>
        <section class="sub_summary">
            <h3>THE PROJECT</h3>
            <p>
                <span>Shinil polytech</span>
                프로젝트는 그린컴퓨터 아카데미 수강생 조별과제로써, 기존 홈페이지를
                <span>Renewal</span>
                제작 하였습니다.
            </p>
            <p>
                <span>HTML5, CSS3</span>
                위주의 작업을 하였으며,
            </p>
            <p>
                <span>CSS media</span>
                를 이용하여 1100px, 1024px, 768px, 480px 반응형 처리
            </p>
            <p>
                <span>Javascript</span>
                로 메인 이미지를
                <span>동적제어</span>
                할 수 있도록 제작하였습니다. 
            </p>
            <a href="https://thauf23.github.io/Shinil_project/">https://thauf23.github.io/Shinil_project/</a>
        </section>
        <section class="sub_contents">
            <ul>
                <li>
                    <small>01</small>
                    <div class="container_video">
                        <video autoplay loop muted poster="img/main/video_img.jpg" src="img/house_video.mp4" type="video/mp4"></video>
                    </div>
                </li>
            </ul>
        </section>
    </div>

<?php 
    include_once $_SERVER['DOCUMENT_ROOT']."/asset/php/footer.php";
?>