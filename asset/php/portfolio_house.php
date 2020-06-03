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
                프로젝트는 가전제품의 모던한 컨셉에 맞게 주조색 
                <span>white</span> 보조색 <span>brown</span> 포인트색 <span>yellow</span>로 홈페이지를
                <span>Design</span>
                제작 하였습니다.
            </p>
            <p>
                <span>HTML5, CSS3, J-query, Ajax</span>
                작업을 하였으며,
            </p>
            <p>
                <span>CSS media</span>
                를 이용하여 반응형 처리
            </p>
            <p>
                <span>J-query</span>
                로 Manin page에서는 header scroll에 따른 배경색 변경, menu button click event로 icon 변경<br>
                Sub page에서는 button click event에 따른 이미지 src(주소값) 변경, 이미지 slide, popup 화면 노출시켜<br>
                <span>동적제어</span>
                할 수 있도록 제작하였습니다. 
            </p>
            <a href="https://thauf23.github.io/houseNew/" target="https://thauf23.github.io/houseNew/">https://thauf23.github.io/houseNew/</a>
        </section>
        <section class="sub_contents">
            <ul>
                <li>
                    <small>01</small>
                    <div class="sub_video">
                        <video autoplay loop muted poster="../img/house/house_img.jpg" src="../video/house.mp4" type="video/mp4"></video>
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
                <p><img src="../img/house/house_detail.png" alt=""></p>
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
                성장 할 수 있는 계기가 되었습니다.
                </figcaption>
            </figure>
        </section>
    </div>
<?php 
    include_once $_SERVER['DOCUMENT_ROOT']."/asset/php/footer.php";
?>