<?php
/*Dependency PHP Codes*/
declare(strict_types=1);
session_start();
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
$destroySessions_Path = "../../Global PHP/DestroySessions.php";
/*Dependency PHP Codes*/

if(isset($_SESSION["accountNumber"]) && isset($_SESSION["officeId"]) && isset($_SESSION["identifier"]) && isset($_SESSION["active"]) && isset($_SESSION["accToken"])){
	/*Required Files*/
	require_once "../../Global PHP/Connection.php";
	require_once "../../Global PHP/CheckAccountToken_Class.php";
	require_once "../../Global PHP/OfficeDetails_Class.php";	
	require_once "../../Global PHP/AccountAccessLevel_Class.php";
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
		<title>CSAT Rating Monitoring</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">	
		<link rel="stylesheet" type="text/css" href="../CSS/Page_RatingMonitoring.css">
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

					<div class="activeMainNavMenu_RoClass mainNavMenu-Class" onclick="collapseMenu(this)">					
						<div class="activeMainNavMenuIconWrap_RoClass mainNavIconSize-Class" style="--activeMainNavMenuIcon:url('../../src/Monitoring White.png')"></div>
						<span class="generalNavMenuText_RoClass">Rating Monitoring</span><div class="chevronIconWrap_RoClass"><img src="../../src/Chevron Right_hover.png" /></div>
					</div>
					<div style="max-height: 1000px;" class="subNavMenuWrap_RoClass">
						<a href="#chartsWrapper" class="subNavMenu_RoClass bookmark-Class" onclick="controller_Ahref_HightlightBookmark(this)">					
							<div class="subNavMenuIconWrap_RoClass bookmarkIconWrap-Class" style="--subNavMenuIcon:url('../../src/Bar Graph Black.png'); --activeSubNavMenuIcon:url('../../src/Bar Graph White.png')"></div>
							<span class="generalNavMenuText_RoClass">Score Charts</span>
						</a>

						<a href="#questionsTabWrap-Id" class="subNavMenu_RoClass bookmark-Class" onclick="controller_Ahref_HightlightBookmark(this)">					
							<div class="subNavMenuIconWrap_RoClass bookmarkIconWrap-Class" style="--subNavMenuIcon:url('../../src/question list.png'); --activeSubNavMenuIcon:url('../../src/question list white.png')"></div>
							<span class="generalNavMenuText_RoClass">Questions Rating</span>
						</a>

						<a href="#ccTabWrap" class="subNavMenu_RoClass bookmark-Class" onclick="controller_Ahref_HightlightBookmark(this)">					
							<div class="subNavMenuIconWrap_RoClass bookmarkIconWrap-Class" style="--subNavMenuIcon:url('../../src/ARTAIcon_Black.png'); --activeSubNavMenuIcon:url('../../src/ARTAIcon_White.png')"></div>
							<span class="generalNavMenuText_RoClass">Citizen Charters Rating</span>
						</a>

						<a href="#commentSectionTextWrap" class="subNavMenu_RoClass bookmark-Class" onclick="controller_Ahref_HightlightBookmark(this)">					
							<div class="subNavMenuIconWrap_RoClass bookmarkIconWrap-Class" style="--subNavMenuIcon:url('../../src/Comment_Icon_Black.png'); --activeSubNavMenuIcon:url('../../src/Comment_Icon_White.png')"></div>
							<span class="generalNavMenuText_RoClass">Comments</span>
						</a>
					</div>					

				<?php
				if(in_array($accessLevels["reportsNav"], $accountAccess)){					
				?>

					<a href="../../Module Reports/PHP/Page_CSATReports.php" class="mainNavMenu_RoClass mainNavMenu-Class">					
						<div class="mainNavMenuIconWrap_RoClass mainNavIconSize-Class" style="--mainNavMenuIcon:url('../../src/report icon.png'); --activeMainNavMenuIcon:url('../../src/report icon white.png')"></div>
						<span class="generalNavMenuText_RoClass">Reports</span>
					</a>					
				<?php
				}
				?>	
					<a href="" class="mainNavMenu_RoClass mainNavMenu-Class">					
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

				<!--Search area-->
				<div class="globalWrapper" id="searchWrapper" style="z-index: 1;">

					<!--_Filter Client Type Item-->				
					<div class="searchWrapperItem-Class" id="filterClientItemWrap">
						<span class="searchAreaLabelTxt-Class">Client-Type</span>
						<div class="cusCheckBoxPaper_RoClass">
							<label for="checkboxFilterInternal-Id">Internal:<div class="boxme_RoClass"><img src="../../src/green check.png"></div></label>
							<input type="checkbox" id="checkboxFilterInternal-Id" onchange="checkCusCheckBox(this), controller_InputCheckbox_SearchFilterInternal(), controller_SearchArea_SubmitAllRequest()" autocomplete="off">
						</div>
						<div class="cusCheckBoxPaper_RoClass">
							<label for="checkboxFilterExternal-Id">External:<div class="boxme_RoClass"><img src="../../src/green check.png"></div></label>
							<input type="checkbox" id="checkboxFilterExternal-Id" onchange="checkCusCheckBox(this), controller_InputCheckbox_SearchFilterExternal(), controller_SearchArea_SubmitAllRequest()" autocomplete="off">
						</div>
					</div>
					<!--_Filter Client Type Item-->

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
						<div class="displayedSelectedFlex_RoClass" title="Please select from option" onclick="showSelectDropdownOpts(this, '180px')">
							<div class="displayedSelectedIcon_RoClass" style="--optIcon: url('../../src/office-building.png');"></div>
							<div class="displayedSelectedText_RoClass">Select Point of Entry</div>
							<div class="displayedSelectedResetBtn_RoClass" style="--selectDropdownResetBtnIcon: url('../../src/closeModIcon_Failed.png');" onclick="resetSelectDropdown(this, 'Please select from option', '../../src/office-building.png', 'Select Point of Entry'), controller_divResetBtn_ResetSearchSelectedOffice(), controller_SearchArea_SubmitAllRequest()"></div>
							<div class="displayedSelectedChevron_RoClass" style="--selectDropdownChevron: url('../../src/Chevron Down_hover.png');"></div>						
						</div>
						<div class="selectDropdownOptionsWrap_RoClass" id="pointOfEntryOptsWrap" style="border: 1px solid #285FF3;" onscroll="controller_divOptionsWrap_SearchAppendPointOfEntry(this)">
							<input type="text" placeholder="Search Here" class="searchOpts_RoClass" id="searchPointOfEntry-Id" onkeyup="controller_InputText_SearchFindPointOfEntry()" autocomplete="off">
							<div class="selectDropdownOptsArea_RoClass" id="pointOfEntryOptsArea-Id">
								<!--Component-->
								<!--
								<div class="selectDropdownOpt_RoClass" onclick="displaySelectedOpt(this, '180px')">
									<input type="hidden" class="optValue_RoClass" value="3">
									<div class="optIcon_RoClass" style="--optIcon: url('../../src/office-building.png');"></div>
									<div class="optText_RoClass" title="HRMO">Human Resource Management Office</div>
								</div>
								<div class="selectDropdownOpt_RoClass" onclick="displaySelectedOpt(this, '180px')">
									<input type="hidden" class="optValue_RoClass" value="1">
									<div class="optIcon_RoClass" style="--optIcon: url('../../src/office-building.png');"></div>
									<div class="optText_RoClass" title="RADIO">Department of Radiology</div>
								</div>
								-->
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
								<div class="calLite_RoClass dateRangeCalLite_RoClass dateRangeCalLiteFrom_RoClass dateRangeOnePageDashboard-Class" id="dateRangeOneCalLiteFrom">
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
								<div class="calLite_RoClass dateRangeCalLite_RoClass dateRangeCalLiteTo_RoClass dateRangeOnePageDashboard-Class" id="dateRangeOneCalLiteTo">
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


				<!--Charts-->
				<div class="globalWrapper" id="chartsWrapper">
					<div class="chartWrapWrapper-Class" style="--charWrapScrollbarBgColor:#8394B7; --charWrapScrollbarHoverBgColor: #8394B7; border: none; background-color: #E8EFFF;">
						<div class="engagementDetWrap">
							<div class="engagementFlex">
								<div class="engagementItem">
									<div class="engagementLabel">Overall Engagement</div>
									<div class="engagementValWrap"><div class="engagementVal-Class" id="overallEngagementVal-Id"><!--Component--></div></div>		
								</div>

								<div class="engagementItem">
									<div class="engagementLabel">Rating</div>
									<div class="engagementValWrap"><div class="engagementVal-Class" id="pointOfEntryRating-Id"><!--Component--></div></div>		
								</div>								
							</div>
							

							<div class="respondentTotalDetWrap">
								<div class="respondentTextIconFlex">
									<div class="respondentText-Class">Total Respondent</div>
									<div class="respondentIcon-Class"></div>
									<button class="normButton_RoClass genCodeBtn-Class" onclick="controller_Button_GenerateOfficeCode()">Generate code</button>
								</div>
								<div class="respondentVal-Class" id="respondentVal-Id"><!--Component--></div>
							</div>
						</div>
					</div>

					<div class="chartWrapWrapper-Class" style="--charWrapScrollbarBgColor:#0E8EF1; --charWrapScrollbarHoverBgColor: #0C86EE;">
						<div class="chartWrap_RoClass chartWrap-Class" id="overallServRatePieChartWrap"></div>
					</div>

					<div class="chartWrapWrapper-Class" style="--charWrapScrollbarBgColor:#036939; --charWrapScrollbarHoverBgColor: #036939;">
						<div class="chartWrap_RoClass chartWrap-Class" id="overallStronglyAgreeLineChartWrap"></div>
					</div>

					<div class="chartWrapWrapper-Class" style="--charWrapScrollbarBgColor:#8EC63F; --charWrapScrollbarHoverBgColor: #8EC63F;">
						<div class="chartWrap_RoClass chartWrap-Class" id="overallAgreeLineChartWrap"></div>	
					</div>

					<div class="chartWrapWrapper-Class" style="--charWrapScrollbarBgColor:#FAB142; --charWrapScrollbarHoverBgColor: #FAB142;">
						<div class="chartWrap_RoClass chartWrap-Class" id="overallNeitherLineChartWrap"></div>
					</div>

					<div class="chartWrapWrapper-Class" style="--charWrapScrollbarBgColor:#E35B6F; --charWrapScrollbarHoverBgColor: #E35B6F;">
						<div class="chartWrap_RoClass chartWrap-Class" id="overallDisagreeLineChartWrap"></div>
					</div>				

					<div class="chartWrapWrapper-Class" style="--charWrapScrollbarBgColor:#BD212F; --charWrapScrollbarHoverBgColor: #BD212F;">
						<div class="chartWrap_RoClass chartWrap-Class" id="overallStronglyDisagreeLineChartWrap"></div>
					</div>

					<div class="chartWrapWrapper-Class" style="--charWrapScrollbarBgColor:#92A2AA; --charWrapScrollbarHoverBgColor: #92A2AA;">
						<div class="chartWrap_RoClass chartWrap-Class" id="overallNoRatingLineChartWrap"></div>
					</div>

					<div class="chartWrapWrapper-Class" style="--charWrapScrollbarBgColor:#073763; --charWrapScrollbarHoverBgColor: #073763;">
						<div class="chartWrap_RoClass chartWrap-Class" id="availedOfficeServiceWrap"></div>
					</div>								
				</div>
				<!--Charts-->


				<!--Questions and cc table-->
				<div class="globalWrapper summaryResponsesFlex">
					<!--_Questions table-->
					<div class="summaryResponsesItem-Class" id="questionsTabWrap-Id">
						<!--Component-->
					</div>
					<!--_Questions table-->
					
					<!--_CC Table-->
					<div class="summaryResponsesItem-Class" id="ccTabWrap">
						<!--_ _CC1 table-->
						<div id="cc1TabWrap">
							<!--Component-->
						</div>
						<!--_ _CC1 table-->

						<!--_ _CC2 table-->
						<div id="cc2TabWrap">
							<!--Component-->
						</div>
						<!--_ _CC2 table-->

						<!--_ _CC3 table-->
						<div id="cc3TabWrap">
							<!--Component-->
						</div>
						<!--_ _CC3 table-->
					</div>
					<!--_CC Table-->
				</div>
				<!--Questions and cc table-->


				<!--Comment Section-->
				<div class="globalWrapper" id="commentSectionTextWrap">
					<div class="commentSectionText-Class">Comment Section</div>
					
					<!--Comment Section Box Loader
					<div class="boxLoaderWrap_RoClass" id="commentSectionLoader-Id">
						<div class="boxLoaderIcon_RoClass">
							<img src="../../src/Spinner.gif">
						</div>
					</div>
					Comment Section Box Loader-->
				</div>
				<div class="globalWrapper" id="commentSectionWrap" onscroll="controller_DivCommentSectionWrap_AppendComments(this)">
					No comment yet!
				</div>
				<!--Comment Section-->
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
		<script type="text/javascript" src="../../Rogrid/Scripts/RogridNodeLayOneNavScript.js"></script>
		<script type="text/javascript" src="../../Rogrid/Scripts/RogridNodeScript.js"></script>
		<script type="text/javascript" src="../../Rogrid/Scripts/CalendarLite.js"></script>
		<script type="text/javascript" src="../../Rogrid/Scripts/Plugin_GstaticChart.js"></script>
		<!--_Dependencies-->

		<!--_Value holder-->
		<script type="module" src="../../Global JS/Values_Module_Office.js"></script>
		<!--_Value holder-->

		<!--_Output-->
		<script type="module" src="../JS/Output_OverallEngagementVal.js"></script>
		<script type="module" src="../JS/Output_RespondentVal.js"></script>
		<script type="module" src="../JS/Output_RatingSpan.js"></script>
		<script type="module" src="../JS/Output_QuestionsTable.js"></script>
		<script type="module" src="../JS/Output_CitizenCharterOneTable.js"></script>
		<script type="module" src="../JS/Output_CitizenCharterTwoTable.js"></script>
		<script type="module" src="../JS/Output_CitizenCharterThreeTable.js"></script>
		<script type="module" src="../JS/Output_OverallServRatePieChart.js"></script>
		<script type="module" src="../JS/Output_OverallStronglyAgreeLineChart.js"></script>
		<script type="module" src="../JS/Output_OverallAgreeLineChart.js"></script>
		<script type="module" src="../JS/Output_OverallNeitherLineChart.js"></script>
		<script type="module" src="../JS/Output_OverallDisagreeLineChart.js"></script>
		<script type="module" src="../JS/Output_OverallStronglyDisagreeLineChart.js"></script>
		<script type="module" src="../JS/Output_OverallNoRatingLineChart.js"></script>
		<script type="module" src="../JS/Output_AvailedOfficeService.js"></script>
		<script type="module" src="../JS/Output_PointOfEntryOption.js"></script>
		<script type="module" src="../JS/Output_CommentDetails.js"></script>
		<script type="module" src="../JS/Output_AppendCommentDetails.js"></script>
		<script type="module" src="../JS/Output_CommentSectionLoader.js"></script>
		<script type="module" src="../JS/Output_AvailedOfficeServiceLoader.js"></script>
		<script type="module" src="../JS/Output_CitizenCharterOneTableLoader.js"></script>
		<script type="module" src="../JS/Output_CitizenCharterThreeTableLoader.js"></script>
		<script type="module" src="../JS/Output_CitizenCharterTwoTableLoader.js"></script>
		<script type="module" src="../JS/Output_RatingSpanLoader.js"></script>
		<script type="module" src="../JS/Output_OverallEngagementValLoader.js"></script>
		<script type="module" src="../JS/Output_OverallAgreeLineChartLoader.js"></script>
		<script type="module" src="../JS/Output_OverallDisagreeLineChartLoader.js"></script>
		<script type="module" src="../JS/Output_OverallNeitherLineChartLoader.js"></script>
		<script type="module" src="../JS/Output_OverallNoRatingLineChartLoader.js"></script>
		<script type="module" src="../JS/Output_OverallServRatePieChartLoader.js"></script>
		<script type="module" src="../JS/Output_OverallStronglyAgreeLineChartLoader.js"></script>
		<script type="module" src="../JS/Output_OverallStronglyDisagreeLineChartLoader.js"></script>
		<script type="module" src="../JS/Output_PointOfEntryOptionLoader.js"></script>
		<script type="module" src="../JS/Output_RespondentValLoader.js"></script>
		<script type="module" src="../JS/Output_QuestionsTableLoader.js"></script>
		<!--_Output-->

		<!--_Controller-->
		<script type="module" src="../JS/Controller_SearchArea_SubmitAllRequest.js"></script>
		<script type="module" src="../JS/Controller_InputText_SearchFindPointOfEntry.js"></script>
		<script type="module" src="../JS/Controller_Ahref_HighlightBookmark.js"></script>
		<script type="module" src="../JS/Controller_DivResetBtn_ResetSearchSelectedOffice.js"></script>
		<script type="module" src="../JS/Controller_InputCheckbox_SearchFilterInternal.js"></script>
		<script type="module" src="../JS/Controller_InputCheckbox_SearchFilterExternal.js"></script>
		<script type="module" src="../JS/Controller_DivOption_SearchAssignSelectedOffice.js"></script>
		<script type="module" src="../JS/Controller_Button_GenerateOfficeCode.js"></script>
		<script type="module" src="../JS/Controller_DivCommentSectionWrap_AppendComments.js"></script>
		<script type="module" src="../JS/Controller_DivOptionsWrap_SearchAppendPointOfEntry.js"></script>
		<!--_Controller-->

		<!--_Gateway-->
		<script type="module" src="../JS/Gateway_GenerateOfficeCode.js"></script>
		<script type="module" src="../JS/Gateway_CitizenCharterThreeScores.js"></script>
		<script type="module" src="../JS/Gateway_CitizenCharterTwoScores.js"></script>
		<script type="module" src="../JS/Gateway_CitizenCharterOneScores.js"></script>
		<script type="module" src="../JS/Gateway_QuestionsTable.js"></script>
		<script type="module" src="../JS/Gateway_OverallEngagement.js"></script>
		<script type="module" src="../JS/Gateway_TotalRespondent.js"></script>
		<script type="module" src="../JS/Gateway_OverallServRate.js"></script>
		<script type="module" src="../JS/Gateway_OverallStronglyAgree.js"></script>
		<script type="module" src="../JS/Gateway_OverallAgree.js"></script>
		<script type="module" src="../JS/Gateway_OverallNeither.js"></script>
		<script type="module" src="../JS/Gateway_OverallDisagree.js"></script>
		<script type="module" src="../JS/Gateway_OverallStronglyDisagree.js"></script>
		<script type="module" src="../JS/Gateway_OverallNoRating.js"></script>
		<script type="module" src="../JS/Gateway_AvailedOfficeService.js"></script>
		<script type="module" src="../JS/Gateway_CommentDetails.js"></script>
		<script type="module" src="../JS/Gateway_PointOfEntry.js"></script>
		<script type="module" src="../JS/Gateway_CountPassScore.js"></script>
		<!--_Gateway-->

		<!--_Submit Request Holder-->		
		<script type="module" src="../JS/SubmitRequest_GenerateOfficeCode.js"></script>
		<script type="module" src="../JS/SubmitRequest_CitizenCharterThreeScores.js"></script>
		<script type="module" src="../JS/SubmitRequest_CitizenCharterTwoScores.js"></script>
		<script type="module" src="../JS/SubmitRequest_CitizenCharterOneScores.js"></script>
		<script type="module" src="../JS/SubmitRequest_QuestionsTable.js"></script>
		<script type="module" src="../JS/SubmitRequest_OverallEngagement.js"></script>
		<script type="module" src="../JS/SubmitRequest_TotalRespondent.js"></script>
		<script type="module" src="../JS/SubmitRequest_OverallServRate.js"></script>
		<script type="module" src="../JS/SubmitRequest_OverallStronglyAgree.js"></script>
		<script type="module" src="../JS/SubmitRequest_OverallAgree.js"></script>
		<script type="module" src="../JS/SubmitRequest_OverallNeither.js"></script>
		<script type="module" src="../JS/SubmitRequest_OverallDisagree.js"></script>
		<script type="module" src="../JS/SubmitRequest_OverallStronglyDisagree.js"></script>
		<script type="module" src="../JS/SubmitRequest_OverallNoRating.js"></script>
		<script type="module" src="../JS/SubmitRequest_AvailedOfficeService.js"></script>
		<script type="module" src="../JS/SubmitRequest_CommentDetails.js"></script>
		<script type="module" src="../JS/SubmitRequest_PointOfEntry.js"></script>
		<script type="module" src="../JS/SubmitRequest_CountPassScore.js"></script>
		<!--_Submit Request Holder-->

		<!--_Executor-->
		<script type="module" src="../JS/Executor_Page_RatingMonitoring.js"></script>
		<!--_Executor-->
		<!--Javascripts-->			
	</body>
	</html>
<?php
}else if(!isset($_SESSION["accountNumber"]) || !isset($_SESSION["officeId"]) || !isset($_SESSION["identifier"]) || !isset($_SESSION["active"]) || !isset($_SESSION["accToken"])){
	header("location:".$destroySessions_Path);	
}
?>