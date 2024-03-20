<?php
/*Dependency PHP Codes*/
declare(strict_types=1);
session_start();
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
$page_Login_Path = "../Module Login/Pages/Page_Login.php";
/*Dependency PHP Codes*/


/*Unsetting or Destroing Sessions*/
unset($_SESSION["account_number"]);
unset($_SESSION["office_id"]);
unset($_SESSION["account_identifier"]);
unset($_SESSION["account_active"]);
unset($_SESSION["accToken"]);
unset($_SESSION["setBypass"]);
/*Unsetting or Destroing Sessions*/


/*Redirecting to login page*/
header("location:".$page_Login_Path);
/*Redirecting to login page*/
?>