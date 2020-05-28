<!DOCTYPE html>
<html>
<head>
<title>An Sumi Portfolio</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link href="/asset/css/integrated_main.css" type=text/css rel=stylesheet>
    <link href="/asset/css/portfolio_main.css" type=text/css rel=stylesheet>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>    
    <script src="/asset/js/portfolio_buger.js"></script>
    <script src="/asset/js/header_relative.js"></script>
    <script src="asset/js/portfolio_main.js"></script>
</head>
<body>
    <div id="warp">
        <!-- start -->

<?php
    include_once $_SERVER['DOCUMENT_ROOT']."/asset/php/header.php";
?>

        <template id="thum_tem">
            <div class="thum_text">
                <p></p>
                <h2></h2>
                <small>
                    <span class="introduce"></span>
                    <span class="work"></span>
                </small>
            </div>
            <div class="thum_button">
                <p class="prev"><img src="asset/img/main/arrow_left.png" alt="prev"></p>
                <p class="next"><img src="asset/img/main/arrow_right.png" alt="next"></p>
            </div>
            <small class="box_text">An Sumi project</small>
        </template>
        <template id="button_tem">
            <div class="thum_button">
                <p class="prev"><img src="asset/img/main/arrow_left.png" alt="prev"></p>
                <p class="next"><img src="asset/img/main/arrow_right.png" alt="next"></p>
            </div>
        </template>
        <div class="container">
            <section>
                <div class="thum_box">
                    <ul class="box_img">
                        <li><a href="/asset/php/portfolio_Shinil.php"><img src="asset/img/main/box_img_Shinil.jpg" alt="shinil polytech home page"></a></li>
                        <li><a href="#"><img src="asset/img/main/box_img_house.jpg" alt="house home page"></a></li>
                        <li><a href="/index.php"><img src="asset/img/main/box_img_portfolio.jpg" alt="portfolio home page"></a></li>
                        <li><a href="#"><img src="asset/img/main/box_img_space.jpg" alt="working home page"></a></li>
                        <li><a href="#"><img src="asset/img/main/box_img_space.jpg" alt="working home page"></a></li>
                        <li><a href="#"><img src="asset/img/main/box_img_space.jpg" alt="working home page"></a></li>
                    </ul>
                </div>
                <div class="thum_list">
                    <a href="/asset/php/list.php">
                        <p><img src="asset/img/main/list_button.png" alt="list button"></p>
                        <span>LIST</span>
                    </a>
                    <div class="list_num">
                        <p>01</p>
                        <span>/ 06</span>
                    </div>
                </div>
                
            </section>
            <strong><img src="asset/img/main/project_text.png" alt="project"></strong>
        </div>

<?php 
    include_once $_SERVER['DOCUMENT_ROOT']."/asset/php/footer.php";
?>