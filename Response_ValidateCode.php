<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
session_start();
date_default_timezone_set('Asia/Manila');
$landingPage_EndUser = "index.php";
$page_RateService = "./Page Rate Our Service/PHP/Page_RateService.php";
/*Dependency PHP Codes*/


if(isset($_POST["validateCodeToken"]) && isset($_POST["inputCode"])){
	/*Globals*/
	require_once "./Global PHP/Connection.php";
	require_once "./Global PHP/CodeDetails_Class.php";
	/*Globals*/


	/*Prep return*/
	$validateCode_Resp = new stdClass();
	$validateCode_Resp->execution = null;
	$validateCode_Resp->count = null;
	
	$execution = null;
	$count = null;
	/*Prep return*/


	/*String query*/
	$inputCode = $_POST["inputCode"];
	/*String query*/


	/*Prep variables*/				
	
	/*Prep variables*/


	/*Code validation details*/
	$getCodeDetails_Obj = getCodeDetails($vmcCsat_Conn, $inputCode);

	$execution = $getCodeDetails_Obj->execution;
	$count = $getCodeDetails_Obj->count;
	/*Code validation details*/


	/*Return response*/
	$validateCode_Resp->execution = $execution;
	$validateCode_Resp->count = $count;	

	echo json_encode($validateCode_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/

}else if(!isset($_POST["validateCodeToken"]) || !isset($_POST["inputCode"])){
	
	/*Return response*/
	if(!isset($_SERVER["HTTP_REFERER"])){
		header("location:".$landingPage_EndUser);
	}else if(isset($_SERVER["HTTP_REFERER"])){

		$validateCode_Resp = new stdClass();
		$validateCode_Resp->execution = null;
		$validateCode_Resp->count = null;

		echo json_encode($validateCode_Resp, JSON_NUMERIC_CHECK);
	}	
	/*Return response*/
}
?>