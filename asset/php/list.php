<!DOCTYPE html>
<html>
<head>
<title>Chase Portfolio</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link href="/asset/css/integrated_main.css" type=text/css rel=stylesheet>
    <link href="/asset/css/portfolio_list.css" type=text/css rel=stylesheet>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>    
    <script src="/asset/js/portfolio_buger.js"></script>
    <script src="/asset/js/header_relative.js"></script>
    <script src="/asset/js/portfolio_list.js"></script>
</head>
<body>
    <div id="warp">
        <!-- start -->

<?php
    include_once $_SERVER['DOCUMENT_ROOT']."/asset/php/header.php";
?>

    <div class="container">
        <div class="thum_menu">
            <a href="/index.php">
                <p><img src="../img/list/thum_manu_button.png" alt=""></p>
                <strong>MAIN</strong>
            </a>
        </div>
        <ul class="thum_img">
            <li>
                <a href="/asset/php/portfolio_Shinil.php">
                    <figure>
                        <p><img src="../img/list/thum_list_shinil.jpg" alt="shinil polytech home page"></p>
                    </figure>
                </a>
            </li>
            <li>
                <a href="#">
                    <figure>
                        <p><img src="../img/list/thum_list_house.jpg" alt="house home page"></p>
                    </figure>
                </a>
            </li>
            <li>
                <a href="/index.php">
                    <figure>
                        <p><img src="../img/list/thum_list_portfolio.jpg" alt="portfolio home page"></p>
                    </figure>
                </a>
            </li>
            <li>
                <a href="#">
                    <figure>
                        <p><img src="../img/list/thum_list_thum.jpg" alt="working home page"></p>
                    </figure>
                </a>
            </li>
            <li>
                <a href="#">
                    <figure>
                        <p><img src="../img/list/thum_list_thum.jpg" alt="working home page"></p>
                    </figure>
                </a>
            </li>
            <li>
                <a href="#">
                    <figure>
                        <p><img src="../img/list/thum_list_thum.jpg" alt="working home page"></p>
                    </figure>
                </a>
            </li>
        </ul>
    </div>

<?php 
    include_once $_SERVER['DOCUMENT_ROOT']."/asset/php/footer.php";
?>