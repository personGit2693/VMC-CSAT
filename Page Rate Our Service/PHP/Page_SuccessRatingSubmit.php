<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
session_start();
date_default_timezone_set('Asia/Manila');
$landingPage_EndUser = "../../index.php";
/*Dependency PHP Codes*/


if(isset($_GET["token"])){
	/*Globals*/
	require_once "../../Global PHP/Connection.php";
	require_once "../../Global PHP/CheckGlobalToken_Class.php";
	/*Globals*/


	/*Query string*/
	$token = $_GET["token"];
	/*Query string*/


	/*Check connection*/
	if($serverConnection != null){
		echo "No Connection from the server.";
		header("Refresh:4;".$landingPage_EndUser);
		return;
	}
	/*Check connection*/
	

	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		echo "Validating global token has execution problem!";
		header("Refresh:4;".$landingPage_EndUser);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		echo "Token can't be found!";
		header("Refresh:4;".$landingPage_EndUser);
		return;
	}
	/*Validate global token*/
?>

	<!DOCTYPE html>
	<html>
	<head>
		<title>Submit Request Result</title>
		<link rel="stylesheet" type="text/css" href="../CSS/Page_SuccessRatingSubmit.css">
		<link rel="shortcut icon" href="../../src/vmclogo.png">		
		<meta name="viewport" content="width=device-width, initial-scale=1.0">		
		<meta charset="utf-16">
		<meta http-equiv='cache-control' content='no-cache'>
		<meta http-equiv='expires' content='0'>
		<meta http-equiv='pragma' content ='no-cache'>				
	</head>
	<body>
		<div id="mainContainer-Id">
			<div id="iconContainer-Id">
				<div id="iconWrapper">
					<img src="../../src/successcheck.png" id="checkIcon-Id">
				</div>
			</div>					
			<div id="messageTxt">YOUR RESPONSE HAS BEEN SUBMITTED THANK YOU!</div>										
			<div id="systemMessTxt">We have received your submitted rating for Valenzuela Medical Center!</div>					
			<div id="buttonWrapper">
				<a href="../../index.php" id="returnBtnLinkFlex">
					<div id="returnBtnTxtItem">RETURN TO HOME PAGE</div>
					<div id="returnBtnImageItem">
						<img src="../../src/statusicon_white.png">
					</div>
				</a>
			</div>					
		</div>
	</body>
	</html>	
<?php			
}else if(!isset($_GET["token"])){
	echo "No generated token!";
	header("Refresh:4;".$landingPage_EndUser);
}