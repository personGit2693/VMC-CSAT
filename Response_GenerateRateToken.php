<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
session_start();
date_default_timezone_set('Asia/Manila');
$landingPage_EndUser = "index.php";
$page_RateService = "./Page Rate Our Service/PHP/Page_RateService.php";
/*Dependency PHP Codes*/


if(isset($_POST["requestRateToken_Gate"]) && isset($_POST["inputCode"])){
	/*Globals*/
	require_once "./Global PHP/Connection.php";
	require_once "./Global PHP/GenerateRateToken_Class.php";
	require_once "./Global PHP/CodeDetails_Class.php";
	/*Globals*/


	/*Prep return*/
	$reqRateToken_Resp = new stdClass();
	$reqRateToken_Resp->genRateTok = null;
	$reqRateToken_Resp->getCodeDetails = null;
	$reqRateToken_Resp->rateToken = null;
	$reqRateToken_Resp->codeDetails = null;
	$reqRateToken_Resp->page_RateService = $page_RateService;
	
	$genRateTok = null;
	$getCodeDetails = null;
	$rateToken = null;
	$codeDetails = null;
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
		$reqRateToken_Resp->getCodeDetails = $getCodeDetails;

		echo json_encode($reqRateToken_Resp, JSON_NUMERIC_CHECK);
		return;
	}else if($getCodeDetails_Obj->count == 0){
		$getCodeDetails = "Invalid code";
		$reqRateToken_Resp->getCodeDetails = $getCodeDetails;

		echo json_encode($reqRateToken_Resp, JSON_NUMERIC_CHECK);
		return;
	}
	/*Code validation details*/


	/*Generate Rate token*/
	$genRateTok_Resp = generateRateToken($vmcCsat_Conn, $getCodeDetails_Obj->details_Assoc["officecode_code"]);

	if($genRateTok_Resp->genRateTok_Exec != true){
		$genRateTok = "Generating rate token has execution problem";
		$reqRateToken_Resp->genRateTok = $genRateTok;

		echo json_encode($reqRateToken_Resp, JSON_NUMERIC_CHECK);
		return;
	}else if($genRateTok_Resp->genRateTok_Count == 0){
		$genRateTok = "No rate token was generated";
		$reqRateToken_Resp->genRateTok = $genRateTok;

		echo json_encode($reqRateToken_Resp, JSON_NUMERIC_CHECK);
		return;
	}
	/*Generate Rate token*/


	/*Return response*/
	$reqRateToken_Resp->genRateTok = $genRateTok;
	$reqRateToken_Resp->getCodeDetails = $getCodeDetails;	
	$reqRateToken_Resp->rateToken = $genRateTok_Resp->genRateTok_Val;
	$reqRateToken_Resp->codeDetails = $getCodeDetails_Obj->details_Assoc;

	echo json_encode($reqRateToken_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/

}else if(!isset($_POST["requestRateToken_Gate"]) || !isset($_POST["inputCode"])){	
	/*Return response*/
	if(!isset($_SERVER["HTTP_REFERER"])){
		header("location:".$landingPage_EndUser);
	}else if(isset($_SERVER["HTTP_REFERER"])){
		$reqRateToken_Resp = new stdClass();
		$reqRateToken_Resp->genRateTok = null;
		$reqRateToken_Resp->getCodeDetails = null;
		$reqRateToken_Resp->rateToken = null;
		$reqRateToken_Resp->codeDetails = null;

		echo json_encode($reqRateToken_Resp, JSON_NUMERIC_CHECK);
	}	
	/*Return response*/
}
?>