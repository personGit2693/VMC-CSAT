<?php
/*Dependency PHP Codes*/
declare(strict_types=1);
session_start();
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
$destroySessions_Path = "../../Global PHP/DestroySessions.php";
/*Dependency PHP Codes*/


/*Global Required Files*/
require_once "../../Global PHP/Global_Connection.php";
require_once "../../Global PHP/CheckGlobalToken_Class.php";
require_once "../../Global PHP/CheckAccountToken_Class.php";
require_once "../../Global PHP/OfficeDetails_Class.php";
require_once "../../Global PHP/AccountAccessLevel_Class.php";
/*Global Required Files*/


if(isset($_SESSION["account_number"]) && isset($_SESSION["office_id"]) && isset($_SESSION["account_identifier"]) && isset($_SESSION["account_active"]) && isset($_SESSION["accToken"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	
	/*Query string*/


	/*Prep Variables*/
	$dbConnection = connectToDb("vmc_csat");
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


	/*Check account token*/
	$validateAccToken_Obj = validateAccToken($dbConnection->selectedPdoConn, $_SESSION["accToken"], $_SESSION["account_number"]);

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
	$officeDetails_Obj = officeDetails($dbConnection->selectedPdoConn, intval($_SESSION["office_id"]));

	if($officeDetails_Obj->execution != true){

		echo "Getting office details has execution problem!";
		return;
	}
	/*Get office details*/


	/*Get account access level*/
	$accountAccessLevel_Obj = accountAccessLevel($dbConnection->selectedPdoConn, $_SESSION["account_number"]);

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
		<title>CSAT Account Settings</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">	
		<link rel="stylesheet" type="text/css" href="../Style/Page_AccountSettings.css">
		<link rel="shortcut icon" href="../../src/vmclogo.png">
	</head>
	<body>
		<div class="rolayout_RoClass">
			<div class="sidemecha_RoClass" style="--naviBgColor:#ffffff;"> 
				<div class="sidemechaCon_RoClass">
					<div class="sideNavHeader-Class">
						<div class="sideNavHeaderIcon-Class" style="background-image: url('../../src/vmclogo.png');"></div>
						<div class="sideNavHeaderTxt-Class">VMC CSAT</div>
					</div>

					<a href="../../Module Office/Pages/Page_RatingMonitoring.php" class="mainNavMenu_RoClass mainNavMenu-Class bookmark-Class">					
						<div class="mainNavMenuIconWrap_RoClass mainNavIconSize-Class" style="--mainNavMenuIcon:url('../../src/Monitoring Black.png'); --activeMainNavMenuIcon:url('../../src/Monitoring White.png')"></div>
						<span class="generalNavMenuText_RoClass">Rating Monitoring</span>
					</a>					
				<?php
				if(in_array($accessLevels["reportsNav"], $accountAccess)){					
				?>					
					<a href="../../Module Reports/Pages/Page_CSATReports.php" class="mainNavMenu_RoClass mainNavMenu-Class">					
						<div class="mainNavMenuIconWrap_RoClass mainNavIconSize-Class" style="--mainNavMenuIcon:url('../../src/report icon.png'); --activeMainNavMenuIcon:url('../../src/report icon white.png')"></div>
						<span class="generalNavMenuText_RoClass">Reports</span>
					</a>					
				<?php
				}
				?>	
					<a href="" class="activeMainNavMenu_RoClass mainNavMenu-Class">					
						<div class="activeMainNavMenuIconWrap_RoClass mainNavIconSize-Class" style="--activeMainNavMenuIcon:url('../../src/GearIcon_White.png')"></div>
						<span class="generalNavMenuText_RoClass">Settings</span>
					</a>

					<a href="../../Global PHP/DestroySessions.php" class="mainNavMenu_RoClass mainNavMenu-Class">					
						<div class="mainNavMenuIconWrap_RoClass mainNavIconSize-Class" style="--mainNavMenuIcon:url('../../src/logouticon black.png'); --activeMainNavMenuIcon:url('../../src/logouticon white.png')"></div>
						<span class="generalNavMenuText_RoClass">Logout</span>
					</a>							
				</div>
			</div>
			<div class="mainmecha_RoClass" style="--mainBodyBgColor:#E8EFFF;">
				<!--Page title-->
				<div class="mainmechaCon_RoClass layoutOneHead_RoClass" style="--projectTitle_BgColor:#ffffff;">
					<div class="burger_RoClass"><img class="burgerIcon_RoClass"></div>
					<div class="projTitleAndUserLogin_RoClass">
						<div class="projTitleTxt_RoClass">CSAT Account Settings</div>
						<div class="userLogin_RoClass">
							<div class="userLoginIconWrap_RoClass"><img src="../../src/avataricon.png"></div>
							<div class="userLoginDetails_RoClass"><?php echo $officeDetails_Obj->officeName; ?></div>
						</div>
					</div>
				</div>
				<!--Page title-->								


				<!--Settings Label-->
				<div class="globalWrapper pageTopTitleLabelWrap-Class" style="background-color: #ffffff;">
					<div class="pageTopHeader-Class">Settings</div>
					<div class="pageTopDesc-Class">Manage your account settings and preferences</div>
				</div>
				<!--Settings Label-->


				<!--Setup Ignore passcodes-->
				<div class="globalWrapper" style="background-color: #ffffff;">
					<div class="titlePerSettingLabelWrap-Class">
						<div class="titlePerSettingHeader-Class">Ignoring survey passcodes</div>
						<div class="titlePerSettingDesc-Class">Save this device for bypassing provision of passcodes while the browser is open.</div>
					</div>
					
					<div class="settingsControllersWrap-Class">
						<div class="cusCheckBoxPaper_RoClass">
							<label for="bypassPassCode-Id"><div class="boxme_RoClass"><img src="../../src/green check.png"></div> Bypass passcodes from this device</label>
							<input type="checkbox" id="bypassPassCode-Id" onchange="controller_RadioBtn_SetBypassDevice(this, checkCusCheckBox)" autocomplete="off">
						</div>
					</div>
				</div>
				<!--Setup Ignore passcodes-->				


				<!--Profile Settings
				<div class="globalWrapper">

					Settings Title					
					<div class="titlePerSettingLabelWrap-Class">
						<div class="titlePerSettingHeader-Class">Account Credentials</div>
						<div class="titlePerSettingDesc-Class">Update the username or password of your CSAT Account</div>
					</div>
					
					Account Credentials Settings
					<div id="accCredentialsSettingsWrap">
						<div class=""></div>
					</div>
				</div>
				-->
			</div> 
		</div>		


		<!--Rogrid Blurrer-->
		<div class="thisIsJapan_RoClass" style="--putOnTop: 1;"></div>
		<!--Rogrid Blurrer-->


		<!--Loading Indicator-->		
		<div class="spinnerLoad_RoClass" style="--topSpinBlurrer: 1;">
			<img src="../../src/Spinner.gif">
		</div>	
		<!--Loading Indicator-->


		<!--Javascripts-->
		<!--_Dependencies-->
		<script type="text/javascript" src="../../Rogrid/Scripts/RogridNodeLayOneNavScript.js?v1"></script>
		<script type="text/javascript" src="../../Rogrid/Scripts/RogridNodeScript.js?v1"></script>				
		<!--_Dependencies-->

		<!--_Controller-->
		<script type="module" src="../Client Side/Controller_RadioBtn_SetBypassDevice.js"></script>
		<!--_Controller-->		

		<!--_Executor-->
		<script type="module" src="../Client Side/Executor_Page_AccountSettings.js"></script>
		<!--_Executor-->
		<!--Javascripts-->			
	</body>
	</html>
<?php
}else if(!isset($_SESSION["account_number"]) || !isset($_SESSION["office_id"]) || !isset($_SESSION["account_identifier"]) || !isset($_SESSION["account_active"]) || !isset($_SESSION["accToken"])){
	
	header("location:".$destroySessions_Path);	
}
?>