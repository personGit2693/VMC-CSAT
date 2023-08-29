<?php
/*Dependency PHP Codes*/
declare(strict_types=1);
session_start();
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
$page_Login_Path = "../Page Login/PHP/Page_Login.php";
/*Dependency PHP Codes*/


/*Unsetting or Destroing Sessions*/
unset($_SESSION["accountNumber"]);
unset($_SESSION["officeId"]);
unset($_SESSION["active"]);
unset($_SESSION["identifier"]);
unset($_SESSION["accToken"]);
/*Unsetting or Destroing Sessions*/


/*Redirecting to login page*/
header("location:".$page_Login_Path);
/*Redirecting to login page*/
?>