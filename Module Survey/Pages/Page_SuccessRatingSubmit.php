<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
session_start();
date_default_timezone_set('Asia/Manila');
$landingPage_EndUser = "../../index.php";
/*Dependency PHP Codes*/


/*Global Required Files*/
require_once "../../Global PHP/Global_Connection.php";
require_once "../../Global PHP/CheckGlobalToken_Class.php";
require_once "../../Global PHP/BurnCode_Class.php";
/*Global Required Files*/


if(isset($_GET["token"])){

	/*Required files*/
	
	/*Required files*/


	/*Query string*/
	$token = $_GET["token"];
	$codeDetails_Obj = json_decode(base64_decode($_SESSION["codeDetailsBase"]));
	/*Query string*/


	/*Prep Variables*/
	$dbConnection = connectToDb("vmc_csat");

	$landingPage_EndUser = "../../index.php";
	/*Prep Variables*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo "Connection Problem!";

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Check connection*/
	

	/*Validate token*/
	$validateGlobalToken_Obj = validateGlobalToken($dbConnection->selectedPdoConn, $token);

	if($validateGlobalToken_Obj->execution !== true){

		echo "Validating global token has execution problem!";

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		echo "Token can't be found!";

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	/*Burn code token*/	
	$burnCode_Obj = burnCode($dbConnection->selectedPdoConn, $codeDetails_Obj->officecode_code);

	if($burnCode_Obj->execution){

		if($burnCode_Obj->count != 0){

			/*Unset session*/
			unset($_SESSION["codeDetailsBase"]);
			/*Unset session*/

		}else if($burnCode_Obj->count == 0){

			exit("No code token was burned!");
		}

	}else if(!$burnCode_Obj->execution){

		exit("Burning code token has execution problem!");
	}
	/*Burn code token*/
?>

	<!DOCTYPE html>
	<html>
	<head>
		<title>Submit Request Result</title>
		<link rel="stylesheet" type="text/css" href="../Style/Page_SuccessRatingSubmit.css?v2">
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
?>