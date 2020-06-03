<!DOCTYPE html>
<html>
<head>
<title>An Sumi Portfolio</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link href="/asset/css/integrated_sub.css" type=text/css rel=stylesheet>
    <link href="/asset/css/color/color_sumi.css" type=text/css rel=stylesheet>
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
                <span>A N S</span>
                <span>U M I</span>
            </h2>
            <p><img src="../img/sumi/sumi_visual.jpg" alt="sumi img"></p>
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
                <span>An Sumi portfolio</span>
                프로젝트는 지금까지 제작한 홈페이를 통합 적으로 볼 수 있는 통합 페이지입니다.<br>
                주조색 <span>Indigo</span> 보조색 <span>black</span> 포인트색 <span>pink</span>로 홈페이지를 
                <span>Design</span>
                제작 하였습니다.
            </p>
            <p>
                <span>HTML5, CSS3, J-query, Ajax</span>
                작업을 하였으며,
            </p>
            <p>
                <span>CSS media</span>
                반응형 처리할 예정이며 반응형 처리를 위해 HTML5, CSS3 코딩하였습니다.
            </p>
            <p>
                <span>J-query</span>
                로 Manin page에서는 header menu button click event로 logo src(주소값) 변경, menu page slide up/down,<br>
                img slide, json을 활용하여 텍스트값 변경, class 위치 변경으로 중심이 되는 이미지 표현
                Sub page에서는 컨텐츠 scroll에 따를 위치값 변경, text slide를 하여<br>
                <span>동적제어</span>
                할 수 있도록 제작하였습니다. 
            </p>
            <a href="https://thauf23.github.io/Shinil_project/" target="https://thauf23.github.io/Shinil_project/">https://thauf23.github.io/Shinil_project/</a>
        </section>
        <section class="sub_contents">
            <ul>
                <li>
                    <small>01</small>
                    <div class="sub_video">
                        <img src="../img/box_img_portfolio.jpg" alt="">
                        <!-- <video autoplay loop muted poster="../img/box_img_portfolio.jpg" src="../video/.mp4" type="video/mp4"></video> -->
                    </div>
                </li>
                <li>
                    <p><img src="../img/portfolio/sumi_monitor.png" alt="목업"></p>
                    <small>02</small>
                </li>
            </ul>
        </section>
        <section class="sub_text">
            <p>
                <span>ANSUMIPORTFOLIO</span>
            </p>
        </section>
        <section class="sub_detail">
            <figure>
                <p><img src="../img/portfolio/sumi_detail.png" alt=""></p>
                <figcaption>
                HOUSE는 벤치마킹으로 시작하여 디자인을 거쳐<br>
                레이어 아웃, 코딩까지 3주정도 제작하였습니다.<br>
                J-query를 배운 직후 적용하여 만든 페이지로<br>
                상세페이지의 img의 높이를 가져와 img의 상위 태그에<br>
                값을 넣어주고 페이지 로딩 직후 해당 높이값으로<br>
                보이도록 하는 작업이 가장 힘들었던 부분이었지만<br>
                여러 시행착오와 끈기를 가지고 작업할 수 있게 도와주는<br>
                매개체 역활을 하는 부분이기도 하였습니다.<br>
                엘레베이터처럼 빠르게 갈 수는 없지만<br>
                힘이 있을 때는 빠르게 오르기도 하고<br>
                힘이 들때는 차근차근 오르기도 하는 계단처럼<br>
                성장 할 수 있는 계기가 되었습니다.<br>
                </figcaption>
            </figure>
        </section>
    </div>
<?php 
    include_once $_SERVER['DOCUMENT_ROOT']."/asset/php/footer.php";
?>