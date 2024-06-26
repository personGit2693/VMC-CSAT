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
		<title>CSAT Reports</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">	
		<link rel="stylesheet" type="text/css" href="../Style/Page_CSATReports.css">
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
					<a href="" class="activeMainNavMenu_RoClass mainNavMenu-Class">					
						<div class="activeMainNavMenuIconWrap_RoClass mainNavIconSize-Class" style="--activeMainNavMenuIcon:url('../../src/report icon white.png')"></div>
						<span class="generalNavMenuText_RoClass">Reports</span>
					</a>					
				<?php
				}
				?>	
					<a href="../../Module Settings/Pages/Page_AccountSettings.php" class="mainNavMenu_RoClass mainNavMenu-Class">					
						<div class="mainNavMenuIconWrap_RoClass mainNavIconSize-Class" style="--mainNavMenuIcon:url('../../src/GearIcon_Black.png'); --activeMainNavMenuIcon:url('../../src/GearIcon_White.png')"></div>
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
						<div class="projTitleTxt_RoClass">Dashboard</div>
						<div class="userLogin_RoClass">
							<div class="userLoginIconWrap_RoClass"><img src="../../src/avataricon.png"></div>
							<div class="userLoginDetails_RoClass"><?php echo $officeDetails_Obj->officeName; ?></div>
						</div>
					</div>
				</div>
				<!--Page title-->


				<!--Reports navigation-->
				<div class="topNavWrapFlex">
					<div class="topNavWrapFlexItem activeTopNavWrapFlexItem-Class dataOneNavigation-Class" onclick="controller_Div_DisplaySelectedReportTable(event,this)">Data One</div>
					<div class="topNavWrapFlexItem dataTwoNavigation-Class" onclick="controller_Div_DisplaySelectedReportTable(event,this)">Data Two</div>					
					<div class="topNavWrapFlexItem dataCmsNavigation-Class" onclick="controller_Div_DisplaySelectedReportTable(event,this)">CSM Report</div>
					<div class="topNavWrapFlexItem commentNavigation-Class" onclick="controller_Div_DisplaySelectedReportTable(event,this)">Comments</div>					
				</div>
				<!--Reports navigation-->


				<!--Search area-->
				<div class="globalWrapper" id="searchWrapper" style="z-index: 1;">					

					<!--_Select Point of Entry-->
				<?php
				if(in_array($accessLevels["pointOfEntryDropdown"], $accountAccess)){
				?>
					<div class="selectDropdownWrap_RoClass searchWrapperItem-Class" id="selDropdownPointOfEntryItem-Id" style="z-index: 1;">
				<?php
				}else if(!in_array($accessLevels["pointOfEntryDropdown"], $accountAccess)){
				?>
					<div class="selectDropdownWrap_RoClass searchWrapperItem-Class" id="selDropdownPointOfEntryItem-Id" style="z-index: 1; display: none;">
				<?php
				}
				?>
						<input type="hidden" class="selectedOptValue_RoClass" value="" id="selDropOfficeValue-Id">					
						<div class="displayedSelectedFlex_RoClass" title="Please select from option" onclick="showSelectDropdownOpts(this, '250px')">
							<div class="displayedSelectedIcon_RoClass" style="--optIcon: url('../../src/office-building.png');"></div>
							<div class="displayedSelectedText_RoClass">Select Point of Entry</div>
							<div class="displayedSelectedResetBtn_RoClass" style="--selectDropdownResetBtnIcon: url('../../src/closeModIcon_Failed.png');" onclick="resetSelectDropdown(this, 'Please select from option', '../../src/office-building.png', 'Select Point of Entry'), controller_DivOption_ResetSelectedOffice(), controller_SearchArea_DisplayTables()"></div>
							<div class="displayedSelectedChevron_RoClass" style="--selectDropdownChevron: url('../../src/Chevron Down_hover.png');"></div>						
						</div>
						<div class="selectDropdownOptionsWrap_RoClass" id="pointOfEntryOptsWrap" style="border: 1px solid #285FF3;" onscroll="controller_DivOptionWrap_DisplayMorePointOfEntry(this)">
							<input type="text" placeholder="Search Here" class="searchOpts_RoClass" id="searchPointOfEntry-Id" onkeyup="controller_InputText_AssignSearchAreaSearchPointOfEntry(this.value)" autocomplete="off">
							<div class="selectDropdownOptsArea_RoClass" id="pointOfEntryOptsArea-Id">
								<!--Component-->
							</div>
						</div>
					</div>
					<!--_Select Point of Entry-->

					<!--_Date Range Item-->
					<div class="searchWrapperItem-Class" id="dateRangeOneItemWrap">
						<!--_ _Date Range Wrap-->
						<div class="dateRangeWrap_RoClass" id="dateRangeOneWrap-Id">
							<!--_ _ _Date Range-->
							<div class="dateRange_RoClass" id="dateRangeOne-Id" onclick="displayDateRangeCalLite(this)">
								<div class="dateRangeDetails_RoClass">
									<div class="dateRangeIcon_RoClass" style="--dateRangeIcon: url('../../src/calendaricon blue.png');"></div>
									<div class="dateRangeText_RoClass"><span class="dateRangeFrom_RoClass">Date Start</span> - <span class="dateRangeTo_RoClass">Date Until</span></div>
								</div>
								<div class="dateRangeTooltipArrow_RoClass"></div>					
							</div>
							<!--_ _ _Date Range-->
							<!--_ _ _Date Range Calendar Lite Wrap-->
							<div class="dateRangeCalLiteWrap_RoClass">
								<!--_ _ _ _Date Range Calendar Lite From-->						
								<div class="calLite_RoClass dateRangeCalLite_RoClass dateRangeCalLiteFrom_RoClass dateRangeOnePageCsatReports-Class" id="dateRangeOneCalLiteFrom">
									<input type="hidden" name="calLite_Name" class="calLiteValue_RoClass" id="dateRangeOneCalLiteFromVal-Id">
									<div class="calLiteHead_RoClass">
										<div class="calLiteMonthHead_RoClass">
											<input type="hidden" name="calLiteMonthBtnValue_Name" class="calLiteMonthBtnValue_RoClass">
											<div class="calLiteButton_RoClass" onclick="changeCalLiteMonth('minus', 'dateRangeOneCalLiteFrom')"><img src="../../src/callite left.png"></div>
											<div class="calLiteMonthText_RoClass"><!--Print Here--></div>
											<div class="calLiteButton_RoClass" onclick="changeCalLiteMonth('add', 'dateRangeOneCalLiteFrom')"><img src="../../src/callite right.png"></div>
										</div>
										<div class="calLiteYearHead_RoClass">
											<input type="hidden" name="calLiteYearBtnValue_Name" class="calLiteYearBtnValue_RoClass">
											<div class="calLiteButton_RoClass" onclick="changeCalLiteYear('minus', 'dateRangeOneCalLiteFrom')"><img src="../../src/callite left.png"></div>
											<div class="calLiteYearText_RoClass"><!--Print Here--></div>
											<div class="calLiteButton_RoClass" onclick="changeCalLiteYear('add', 'dateRangeOneCalLiteFrom')"><img src="../../src/callite right.png"></div>
										</div>									
									</div>
									<div class="calLiteDaysTxt_RoClass">
										<div>Sun</div>
										<div>Mon</div>
										<div>Tue</div>
										<div>Wed</div>
										<div>Thu</div>
										<div>Fri</div>
										<div>Sat</div>
									</div>
									<div class="calLiteDaysIndex_RoClass">
										<div>
											<!--Print Here-->
										</div>
										<div>
											<!--Print Here-->								
										</div>

										<div>
											<!--Print Here-->										
										</div>
										<div>
											<!--Print Here-->										
										</div>
										<div>
											<!--Print Here-->										
										</div>
										<div>
											<!--Print Here-->										
										</div>
										<div>
											<!--Print Here-->										
										</div>
									</div>
								</div>
								<!--_ _ _ _Date Range Calendar Lite From-->

								<!--_ _ _ _Date Range Calendar Lite To-->
								<div class="calLite_RoClass dateRangeCalLite_RoClass dateRangeCalLiteTo_RoClass dateRangeOnePageCsatReports-Class" id="dateRangeOneCalLiteTo">
									<input type="hidden" name="calLite_Name" class="calLiteValue_RoClass" id="dateRangeOneCalLiteToVal-Id">
									<div class="calLiteHead_RoClass">
										<div class="calLiteMonthHead_RoClass">
											<input type="hidden" name="calLiteMonthBtnValue_Name" class="calLiteMonthBtnValue_RoClass">
											<div class="calLiteButton_RoClass" onclick="changeCalLiteMonth('minus', 'dateRangeOneCalLiteTo')"><img src="../../src/callite left.png"></div>
											<div class="calLiteMonthText_RoClass"><!--Print Here--></div>
											<div class="calLiteButton_RoClass" onclick="changeCalLiteMonth('add', 'dateRangeOneCalLiteTo')"><img src="../../src/callite right.png"></div>
										</div>
										<div class="calLiteYearHead_RoClass">
											<input type="hidden" name="calLiteYearBtnValue_Name" class="calLiteYearBtnValue_RoClass">
											<div class="calLiteButton_RoClass" onclick="changeCalLiteYear('minus', 'dateRangeOneCalLiteTo')"><img src="../../src/callite left.png"></div>
											<div class="calLiteYearText_RoClass"><!--Print Here--></div>
											<div class="calLiteButton_RoClass" onclick="changeCalLiteYear('add', 'dateRangeOneCalLiteTo')"><img src="../../src/callite right.png"></div>
										</div>									
									</div>
									<div class="calLiteDaysTxt_RoClass">
										<div>Sun</div>
										<div>Mon</div>
										<div>Tue</div>
										<div>Wed</div>
										<div>Thu</div>
										<div>Fri</div>
										<div>Sat</div>
									</div>
									<div class="calLiteDaysIndex_RoClass">
										<div>
											<!--Print Here-->
										</div>
										<div>
											<!--Print Here-->								
										</div>

										<div>
											<!--Print Here-->										
										</div>
										<div>
											<!--Print Here-->										
										</div>
										<div>
											<!--Print Here-->										
										</div>
										<div>
											<!--Print Here-->										
										</div>
										<div>
											<!--Print Here-->										
										</div>
									</div>
								</div>
								<!--_ _ _ _Date Range Calendar Lite To-->
							</div>
							<!--_ _ _Date Range Calendar Lite Wrap-->
						</div>
						<!--_ _Date Range Wrap-->				
					</div>
					<!--_Date Range Item-->
				</div>
				<!--Search area-->				


				<!--Data one table-->
				<div class="globalWrapper reportsWrapper-Class" id="dataOneTableWrap">
					<!--Component-->
				</div>
				<!--Data one table-->


				<!--Data two table-->
				<div class="globalWrapper reportsWrapper-Class" id="dataTwoTableWrap">
					<!--Component-->
				</div>
				<!--Data two table-->


				<!--CSM data table-->
				<div class="globalWrapper reportsWrapper-Class" id="csmDataTableWrap">
					<!--Component-->				
				</div>
				<!--CSM data table-->


				<!--Comments table-->
				<div class="globalWrapper reportsWrapper-Class" id="commentsTableWrap">
					<!--Component-->
					<button class="normButton_RoClass" onclick="controller_Button_DownloadAsExcel(this)">Download as Excel File</button>
					<table>
						<thead>
							<tr>
								<th>Reference No</th>
								<th>Questions</th>
								<th>Answers</th>
								<th>Timestamp</th>								
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>2024-VMCCSAT-11843113</td>
								<td>Mga suhestiyon kung paano pa mapapabuti ang aming mga serbisyo</td>
								<td>MAGAGALING AT MAAABILIDAD PO ANG LAHAT NG MANGGAGAWA SA INYONG TANGGAPAN.</td>
								<td>2/1/2024  8:01:05 AM</td>
							</tr>
						</tbody>
					</table>
				</div>
				<!--Comments table-->
			</div> 
		</div>

		<!--Loading Indicator-->
		<div class="thisIsJapan_RoClass" style="--putOnTop: 1;"></div>
		<div class="spinnerLoad_RoClass" style="--topSpinBlurrer: 1;">
			<img src="../../src/Spinner.gif">
		</div>	
		<!--Loading Indicator-->


		<!--Javascripts-->
		<!--_Dependencies-->
		<script type="text/javascript" src="../../Rogrid/Scripts/RogridNodeLayOneNavScript.js?v1"></script>
		<script type="text/javascript" src="../../Rogrid/Scripts/RogridNodeScript.js?v1"></script>
		<script type="text/javascript" src="../../Rogrid/Scripts/CalendarLite.js?v1"></script>		
		<script type="text/javascript" src="../../Global JS/table2excel.js"></script>
		<!--_Dependencies-->

		<!--_Controller-->
		<script type="module" src="../Client Side/Controller_Div_DisplaySelectedReportTable.js"></script>
		<script type="module" src="../Client Side/Controller_InputText_AssignSearchAreaSearchPointOfEntry.js"></script>
		<script type="module" src="../Client Side/Controller_DivOptionWrap_DisplayMorePointOfEntry.js"></script>
		<script type="module" src="../Client Side/Controller_DivOption_AssignSelectedOffice.js"></script>
		<script type="module" src="../Client Side/Controller_DivOption_ResetSelectedOffice.js"></script>
		<script type="module" src="../Client Side/Controller_SearchArea_DisplayTables.js"></script>
		<script type="module" src="../Client Side/Controller_Button_DownloadAsExcel.js"></script>
		<!--_Controller-->
		
		<!--_Executor-->	
		<script type="module" src="../Client Side/Executor_Page_CSATReports.js"></script>
		<!--_Executor-->
		<!--Javascripts-->		
	</body>
	</html>
<?php
}else if(!isset($_SESSION["account_number"]) || !isset($_SESSION["office_id"]) || !isset($_SESSION["account_identifier"]) || !isset($_SESSION["account_active"]) || !isset($_SESSION["accToken"])){
	
	header("location:".$destroySessions_Path);	
}
?>