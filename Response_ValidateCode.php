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
	/*Globals*/


	/*Prep return*/
	$validateCode_Resp = new stdClass();
	$validateCode_Resp->genRateTok = null;
	$validateCode_Resp->getCodeDetails = null;
	$validateCode_Resp->rateToken = null;
	$validateCode_Resp->codeId = null;
	$validateCode_Resp->page_RateService = $page_RateService;
	
	$genRateTok = null;
	$getCodeDetails = null;
	$rateToken = null;
	$codeId = null;
	/*Prep return*/


	/*String query*/
	$inputCode = $_POST["inputCode"];
	/*String query*/


	/*Prep variables*/				
	
	/*Prep variables*/


	/*Code validation details*/
	$getCodeDetails_Obj = getCodeDetails($vmcCsat_Conn, $inputCode);

	if($getCodeDetails_Obj->execution != true){
		$getCodeDetails = "Getting code details has execution problem";
		$validateCode_Resp->getCodeDetails = $getCodeDetails;

		echo json_encode($validateCode_Resp);
		return;
	}else if($getCodeDetails_Obj->count == 0){
		$getCodeDetails = "Invalid code";
		$validateCode_Resp->getCodeDetails = $getCodeDetails;

		echo json_encode($validateCode_Resp);
		return;
	}
	/*Code validation details*/


	/*Generate Rate token*/
	$genRateTok_Resp = generateRateToken($vmcCsat_Conn, $getCodeDetails_Obj->details_Assoc["officecode_id"]);

	if($genRateTok_Resp->genRateTok_Exec != true){
		$genRateTok = "Generating rate token has execution problem";
		$validateCode_Resp->genRateTok = $genRateTok;

		echo json_encode($validateCode_Resp);
		return;
	}else if($genRateTok_Resp->genRateTok_Count == 0){
		$genRateTok = "No rate token was generated";
		$validateCode_Resp->genRateTok = $genRateTok;

		echo json_encode($validateCode_Resp);
		return;
	}
	/*Generate Rate token*/


	/*Return response*/
	$validateCode_Resp->genRateTok = $genRateTok;
	$validateCode_Resp->getCodeDetails = $getCodeDetails;	
	$validateCode_Resp->rateToken = $genRateTok_Resp->genRateTok_Val;
	$validateCode_Resp->codeId = $getCodeDetails_Obj->details_Assoc["officecode_id"];

	echo json_encode($validateCode_Resp);
	/*Return response*/

}else if(!isset($_POST["validateCodeToken"]) || !isset($_POST["inputCode"])){	
	/*Return response*/
	if(!isset($_SERVER["HTTP_REFERER"])){
		header("location:".$landingPage_EndUser);
	}else if(isset($_SERVER["HTTP_REFERER"])){
		$validateCode_Resp = new stdClass();
		$validateCode_Resp->genRateTok = null;
		$validateCode_Resp->getCodeDetails = null;
		$validateCode_Resp->rateToken = null;
		$validateCode_Resp->codeId = null;

		echo json_encode($validateCode_Resp);
	}	
	/*Return response*/
}
?>