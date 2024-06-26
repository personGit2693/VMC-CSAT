<?php
/*Dependency PHP Codes*/
declare(strict_types=1);
session_start();
date_default_timezone_set('Asia/Manila');
$page_Dashboard_Path = "../../Module Office/Pages/Page_RatingMonitoring.php";
/*Dependency PHP Codes*/


if(isset($_SESSION["account_number"]) && isset($_SESSION["office_id"]) && isset($_SESSION["account_identifier"]) && isset($_SESSION["account_active"]) && isset($_SESSION["accToken"])){
	header("location:".$page_Dashboard_Path);
}
?>
<!DOCTYPE html>
<html>
<head>
	<title>Login Page</title>
	<link rel="stylesheet" type="text/css" href="../Style/Page_Login.css">
	<link rel="shortcut icon" href="../../src/vmclogo.png">		
	<meta name="viewport" content="width=device-width, initial-scale=1.0">		
	<meta charset="utf-16">
	<meta http-equiv='cache-control' content='no-cache'>
	<meta http-equiv='expires' content='0'>
	<meta http-equiv='pragma' content ='no-cache'>
</head>
<body>
	<!--Login Section-->
	<div id="loginSection">
		<div id="vmcLogoWrap">
			<img src="../../src/vmclogo.png">
		</div>
		<div id="loginWin_ID">
			<div id="signInTxt_ID">Sign in</div>
			<div id="stayTxt_ID">Client Satisfaction Monitoring.</div>

			<div class="cusInputs_RoClass" id="usernameInputWrap">
				<input type="text" onfocusout="lowlightInWrap(this, 'black')" onfocus="highlightInWrap(this, '#285FF3')" onkeyup="controller_InputText_CheckCredential(event)" autocomplete="off" id="usernInput-Id" required>
				<div class="placeholdme_RoClass">Username</div>
			</div>

			<div class="cusInputs_RoClass" id="passwordInputWrap">
				<input type="password" onfocusout="lowlightInWrap(this, 'black')" onfocus="highlightInWrap(this, '#285FF3')" onkeyup="controller_InputText_CheckCredential(event)" autocomplete="off" id="passInput-Id" required>
				<div class="placeholdme_RoClass">Password</div>
			</div>
						
			<button class="signInBtn-Class" id="signInBtn-Id" onclick="controller_Btn_Login()">Sign in</button>
		</div>
	</div>
	<!--Logo Section-->


	<!--Footer Section-->
	<hr class="linethis_RoClass">
	<div class=footerWrap_RoClass id="footerWrap-Id">
		
	</div>
	<!--Footer Section-->


	<!--Loader-->
	<div class="thisIsJapan_RoClass" style="--putOnTop: 1;"></div>
	<div class="spinnerLoad_RoClass" style="--topSpinBlurrer: 1;">
		<img src="../../src/Spinner.gif">
	</div>
	<!--Loader-->


	<!--Javascripts-->
	<!--_Dependencies-->
	<script type="text/javascript" src="../../Rogrid/Scripts/RogridNodeScript.js?v1"></script>
	<!--_Dependencies-->

	<!--_Controllers-->
	<script type="module" src="../Client Side/Controller_Btn_Login.js"></script>
	<script type="module" src="../Client Side/Controller_InputText_CheckCredential.js"></script>	
	<!--_Controllers-->

	<!--_Executor-->
	<script type="module" src="../Client Side/Executor_Page_Login.js"></script>
	<!--_Executor-->
	<!--Javascripts-->	
</body>
</html>