<!DOCTYPE html>
<html>
<head>
<title>Chase Portfolio</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link href="/asset/css/integrated_main.css" type=text/css rel=stylesheet>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>    
    <script src="/asset/js/portfolio_buger.js"></script>
</head>
<body>
    <div id="warp">
        <!-- start -->
        <header>
            <h1><a href="/index.php">An Sumi</a></h1>
            <nav>
                <ul>
                    <li><a href="/asset/php/list.php">WORK</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">CONTACT ME</a></li>
                </ul>
            </nav>
            <div class="header_menu">
                <span></span>
                <span></span>
            </div>
            <?php
                include_once $_SERVER['DOCUMENT_ROOT']."/asset/php/buger.php";
            ?>
        </header>
