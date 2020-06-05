<!DOCTYPE html>
<html>
<head>
<title>An Sumi Portfolio</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link href="/asset/css/integrated_contact.css" type=text/css rel=stylesheet>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>    
    <script src="/asset/js/portfolio_buger.js"></script>
    <script src="/asset/js/contact_us.js"></script>
    
</head>
<body>
    <div id="warp">
        <!-- start -->

<?php
    include_once $_SERVER['DOCUMENT_ROOT']."/asset/php/header.php";
?>

    <div class="container">
        <section class="request">
            <h2>CONTACT US</h2>
            <form action="../../admin/contact/request_res.php" name="popol" enctype="multipart/form-data" method="post">
                <ul>
                    <li><input type="text" name="name" placeholder="name"></li>
                    <li><input type="email" name="email" placeholder="email"></li>
                    <li><input type="text" name="subject" placeholder="subject"></li>
                    <li><textarea name="contents" required ></textarea></li>
                    <li><input type="submit" value="SAVE" class="btn"></li>
                </ul>
            </form>
        </section>    
    </div>

<?php 
    include_once $_SERVER['DOCUMENT_ROOT']."/asset/php/footer.php";
?>