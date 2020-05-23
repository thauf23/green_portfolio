<?
include_once $_SERVER['DOCUMENT_ROOT']."/asset/inc/db.php";

session_destroy();
back('로그아웃 되었습니다.');

?>