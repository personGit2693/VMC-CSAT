<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
session_start();
date_default_timezone_set('Asia/Manila');
$landingPage_EndUser = "index.php";
$page_RateService = "./Page Rate Our Service/PHP/Page_RateService.php";
/*Dependency PHP Codes*/


if(isset($_POST["requestRateToken_Gate"])){
	/*Globals*/
	require_once "./Global PHP/Connection.php";
	require_once "./Global PHP/GenerateRateToken_Class.php";
	/*Globals*/


	/*Prep return*/
	$reqRateToken_Resp = new stdClass();
	$reqRateToken_Resp->genRateTok_Resp = new stdClass();
	$reqRateToken_Resp->page_RateService = $page_RateService;
	
	$genRateTok_Resp = new stdClass();
	/*Prep return*/


	/*String query*/
		
	/*String query*/


	/*Prep variables*/				
	
	/*Prep variables*/


	/*Generate Rate token*/
	$genRateTok_Resp = generateRateToken($vmcCsat_Conn);
	/*Generate Rate token*/


	/*Return response*/
	$reqRateToken_Resp->genRateTok_Resp = $genRateTok_Resp;				

	echo json_encode($reqRateToken_Resp);
	/*Return response*/

}else if(!isset($_POST["requestRateToken_Gate"])){	
	/*Return response*/
	if(!isset($_SERVER["HTTP_REFERER"])){
		header("location:".$landingPage_EndUser);
	}else if(isset($_SERVER["HTTP_REFERER"])){
		$reqRateToken_Resp = new stdClass();
		$reqRateToken_Resp->genRateTok_Resp = new stdClass();

		echo json_encode($reqRateToken_Resp);
	}	
	/*Return response*/
}
?>