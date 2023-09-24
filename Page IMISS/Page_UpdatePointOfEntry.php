<?php
/*Dependency PHP Codes*/
declare(strict_types=1);
session_start();
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
$page_Login_Path = "../Page Login/PHP/Page_Login.php";
$destroySessions_Path = "../Global PHP/DestroySessions.php";
/*Dependency PHP Codes*/

if(isset($_SESSION["accountNumber"]) && isset($_SESSION["officeId"]) && isset($_SESSION["identifier"]) && isset($_SESSION["active"]) && isset($_SESSION["accToken"])){
	/*Required Files*/
	require_once "../Global PHP/Connection.php";
	require_once "../Global PHP/CheckAccountToken_Class.php";
	require_once "../Global PHP/OfficeDetails_Class.php";	
	require_once "../Global PHP/AccountAccessLevel_Class.php";
	/*Required Files*/


	/*Check connection*/
	if($serverConnection != null){
		echo $serverConnection;
		return;
	}
	/*Check connection*/


	/*Check account token*/
	$validateAccToken_Obj = validateAccToken($vmcCsat_Conn, $_SESSION["accToken"], $_SESSION["accountNumber"]);

	if($validateAccToken_Obj->execution != true){        
		echo "Validating account token has execution problem! redirecting to login page in 5 seconds please wait...";
		header("Refresh:5;".$destroySessions_Path);
		return;
	}else if($validateAccToken_Obj->found == 0){
		echo "Session expired! redirecting to login page in 5 seconds please wait...";
		header("Refresh:5;".$destroySessions_Path);
		return;
	}
	/*Check account token*/


	/*Get office details*/
	$officeDetails_Obj = officeDetails($vmcCsat_Conn, intval($_SESSION["officeId"]));

	if($officeDetails_Obj->execution != true){
		echo "Getting office details has execution problem!";
		return;
	}
	/*Get office details*/


	/*Get account access level*/
	$accountAccessLevel_Obj = accountAccessLevel($vmcCsat_Conn, $_SESSION["accountNumber"]);

	if($accountAccessLevel_Obj->execution != true){
		echo "Getting account access level has execution problem!";
		return;
	}

	$accountAccess = $accountAccessLevel_Obj->accountAccess;
	$accessLevels = $accountAccessLevel_Obj->accessLevels;
	/*Get account access level*/
?>
	<!DOCTYPE html>
	<html>
	<head>
		<title>Update Point of Entry</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">			
		<link rel="shortcut icon" href="../src/vmclogo.png">
	</head>
	<body>		
		New Point of Entry Name:<br>
		<textarea name="newPointOfEntry-Name" id="newPointOfEntry-Id" required></textarea>
		<br>
		Point of Entry I.D<br>
		<input type="text" name="officeId-Name" id="officeId-Id" required>
		<br><br>
		<button onclick="submitRequestPointOfEntry()">Update</button>

				
		<script type="module" src="./Gateway_UpdatePointOfEntry.js"></script>
		<script type="text/javascript" src="./SubmitRequest_UpdatePointOfEntry.js"></script>			
	</body>
	</html>
<?php
}else if(!isset($_SESSION["accountNumber"]) || !isset($_SESSION["officeId"]) || !isset($_SESSION["identifier"]) || !isset($_SESSION["active"]) || !isset($_SESSION["accToken"])){
	header("location:".$destroySessions_Path);	
}
?>