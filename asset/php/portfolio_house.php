<!DOCTYPE html>
<html>
<head>
<title>An Sumi Portfolio</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link href="/asset/css/integrated_sub.css" type=text/css rel=stylesheet>
    <link href="/asset/css/color/color_house.css" type=text/css rel=stylesheet>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>    
    <script src="/asset/js/portfolio_buger.js"></script>
    <script src="/asset/js/header_absolute.js"></script>
    <script src="/asset/js/portfolio_sub.js"></script>
    <!-- <script src="/asset/js/portfolio_house.js"></script> -->
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
                <span>H O</span>
                <span>U S E</span>
            </h2>
            <p><img src="../img/house/house_visual.jpg" alt="house img"></p>
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
                <span>HOUSE</span>
                프로젝트는 
                <span>Design</span>
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
            <a href="https://thauf23.github.io/houseNew/">https://thauf23.github.io/houseNew/</a>
        </section>
        <section class="sub_contents">
            <ul>
                <li>
                    <small>01</small>
                    <div class="sub_video">
                        <video autoplay loop muted poster="" src="../video/house.mp4" type="video/mp4"></video>
                    </div>
                </li>
                <li>
                    <p><img src="../img/house/house_monitor.png" alt=""></p>
                    <small>02</small>
                </li>
            </ul>
        </section>
        <section class="sub_text">
            <p>
                <span>HOUSE</span>
            </p>
        </section>
        <section class="sub_detail">
            <figure>
                <p><img src="../img/shinil/shinil_detail.png" alt=""></p>
                <figcaption>
                신일폴리텍은 제가 처음으로 리뉴얼하여<br>
                제작한 홈페이지입니다.<br>
                로고부터 시작하여 디자인, 레이어 아웃 등 제작하면서부터<br>
                완성된 HTML5, CSS3를 작성하기까지 수차례 지우고<br>
                다시 작성하기를 반복하면서<br>
                신일폴리텍을 제작 할 수 있었습니다.<br>
                첫 제작한 홈페이지라 부족해 보이는 부분이 보이지만<br>
                그와 반대로 애착을 가지고 있는<br>
                홈페이지입니다.
                </figcaption>
            </figure>
        </section>
    </div>
<?php 
    include_once $_SERVER['DOCUMENT_ROOT']."/asset/php/footer.php";
?>