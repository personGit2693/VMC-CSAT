<!DOCTYPE html>
<html>
<head>
	<title>CSAT Dashboard</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">	
	<link rel="stylesheet" type="text/css" href="../CSS/Page_Dashboard.css">
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

				<a href="" class="activeMainNavMenu_RoClass mainNavMenu-Class">					
					<div class="activeMainNavMenuIconWrap_RoClass mainNavIconSize-Class" style="--activeMainNavMenuIcon:url('../../src/Bar Graph White.png')"></div>
					<span class="generalNavMenuText_RoClass">Dashboard</span>
				</a>

				<a href="" class="mainNavMenu_RoClass mainNavMenu-Class">					
					<div class="mainNavMenuIconWrap_RoClass mainNavIconSize-Class" style="--mainNavMenuIcon:url('../../src/newFile_Black.png'); --activeMainNavMenuIcon:url('../../src/newFile_White.png')"></div>
					<span class="generalNavMenuText_RoClass">Setup Questions</span>
				</a>				
				
				<div class="mainNavMenu_RoClass mainNavMenu-Class" onclick="collapseMenu(this)">					
					<div class="mainNavMenuIconWrap_RoClass mainNavIconSize-Class" style="--mainNavMenuIcon:url('../../src/report icon.png'); --activeMainNavMenuIcon:url('../../src/report icon white.png')"></div>
					<span class="generalNavMenuText_RoClass">Reports</span><div class="chevronIconWrap_RoClass chevronSize-Class"><img src="../../src/Chevron Right.png" /></div>
				</div>
				<div style="max-height: 0px;" class="subNavMenuWrap_RoClass subNavMenuWrapLevelOne-Class">
					<a href="" class="subNavMenu_RoClass subNavMenu-Class">					
						<div class="subNavMenuIconWrap_RoClass subNavIconSize-Class" style="--subNavMenuIcon:url('../../src/demographics_black.png'); --activeSubNavMenuIcon:url('../../src/demographics_white.png')"></div>
						<span class="generalNavMenuText_RoClass">Summary Demographics</span>
					</a>
					<a href="" class="subNavMenu_RoClass subNavMenu-Class">					
						<div class="subNavMenuIconWrap_RoClass subNavIconSize-Class" style="--subNavMenuIcon:url('../../src/DataIcon_Black.png'); --activeSubNavMenuIcon:url('../../src/DataIcon_White.png')"></div>
						<span class="generalNavMenuText_RoClass">Data One</span>
					</a>
					<a href="" class="subNavMenu_RoClass subNavMenu-Class">					
						<div class="subNavMenuIconWrap_RoClass subNavIconSize-Class" style="--subNavMenuIcon:url('../../src/DataIcon_Black.png'); --activeSubNavMenuIcon:url('../../src/DataIcon_White.png')"></div>
						<span class="generalNavMenuText_RoClass">Data Two</span>
					</a>
					<a href="" class="subNavMenu_RoClass subNavMenu-Class">					
						<div class="subNavMenuIconWrap_RoClass subNavIconSize-Class" style="--subNavMenuIcon:url('../../src/CollatedData_Black.png'); --activeSubNavMenuIcon:url('../../src/CollatedData_White.png')"></div>
						<span class="generalNavMenuText_RoClass">Collated Data</span>
					</a>

					<div class="mainNavMenu_RoClass mainNavMenu-Class" onclick="collapseMenu(this)">					
						<div class="mainNavMenuIconWrap_RoClass mainNavIconSize-Class" style="--mainNavMenuIcon:url('../../src/AnalyticsIcon_Black.png'); --activeMainNavMenuIcon:url('../../src/AnalyticsIcon_White.png')"></div>
						<span class="generalNavMenuText_RoClass">Analysis</span><div class="chevronIconWrap_RoClass chevronSize-Class"><img src="../../src/Chevron Right.png" /></div>
					</div>
					<div style="max-height: 0px;" class="subNavMenuWrap_RoClass subNavMenuWrapLevelTwo-Class">
						<a href="" class="subNavMenu_RoClass subNavMenu-Class">					
							<div class="subNavMenuIconWrap_RoClass subNavIconSize-Class" style="--subNavMenuIcon:url('../../src/ResponsiveAnal_Black.png'); --activeSubNavMenuIcon:url('../../src/ResponsiveAnal_White.png')"></div>
							<span class="generalNavMenuText_RoClass">Responsiveness Analysis</span>
						</a>
						<a href="" class="subNavMenu_RoClass subNavMenu-Class">					
							<div class="subNavMenuIconWrap_RoClass subNavIconSize-Class" style="--subNavMenuIcon:url('../../src/QuarterlyReportIcon_Black.png'); --activeSubNavMenuIcon:url('../../src/QuarterlyReportIcon_White.png')"></div>
							<span class="generalNavMenuText_RoClass">Analysis Q1-Q7</span>
						</a>
						<a href="" class="subNavMenu_RoClass subNavMenu-Class">					
							<div class="subNavMenuIconWrap_RoClass subNavIconSize-Class" style="--subNavMenuIcon:url('../../src/QuarterlyReportIcon_Black.png'); --activeSubNavMenuIcon:url('../../src/QuarterlyReportIcon_White.png')"></div>
							<span class="generalNavMenuText_RoClass">Analysis Q8-Q12</span>
						</a>
						<a href="" class="subNavMenu_RoClass subNavMenu-Class">					
							<div class="subNavMenuIconWrap_RoClass subNavIconSize-Class" style="--subNavMenuIcon:url('../../src/QuarterlyReportIcon_Black.png'); --activeSubNavMenuIcon:url('../../src/QuarterlyReportIcon_White.png')"></div>
							<span class="generalNavMenuText_RoClass">Analysis Q3-Q28</span>
						</a>
						<a href="" class="subNavMenu_RoClass subNavMenu-Class">					
							<div class="subNavMenuIconWrap_RoClass subNavIconSize-Class" style="--subNavMenuIcon:url('../../src/ARTAIcon_Black.png'); --activeSubNavMenuIcon:url('../../src/ARTAIcon_White.png')"></div>
							<span class="generalNavMenuText_RoClass">ARTA Analysis</span>
						</a>
					</div>
				</div>

				<a href="" class="mainNavMenu_RoClass mainNavMenu-Class">					
					<div class="mainNavMenuIconWrap_RoClass mainNavIconSize-Class" style="--mainNavMenuIcon:url('../../src/GearIcon_Black.png'); --activeMainNavMenuIcon:url('../../src/GearIcon_White.png')"></div>
					<span class="generalNavMenuText_RoClass">Settings</span>
				</a>
	
				<!--
				<div class="activeMainNavMenu_RoClass mainNavMenu-Class" onclick="collapseMenu(this)">					
					<div class="activeMainNavMenuIconWrap_RoClass mainNavIconSize-Class" style="--activeMainNavMenuIcon:url('../../src/bookcontacticongreen.png')"></div>
					<span class="generalNavMenuText_RoClass">navigation 4</span><div class="activeChevronIconWrap_RoClass chevronSize-Class"><img src="../../src/Chevron Right.png" /></div>
				</div>
				<div style="max-height: 1000px;" class="subNavMenuWrap_RoClass subNavMenuWrapLevelOne-Class">
					<a href="" class="subNavMenu_RoClass subNavMenu-Class">					
						<div class="subNavMenuIconWrap_RoClass subNavIconSize-Class" style="--subNavMenuIcon:url('../../src/abouticonwhite.png'); --activeSubNavMenuIcon:url('../../src/abouticongreen.png')"></div>
						<span class="generalNavMenuText_RoClass">navigation 4.1</span>
					</a>
					<a href="" class="activeSubNavMenu_RoClass subNavMenu-Class">					
						<div class="activeSubNavMenuIconWrap_RoClass subNavIconSize-Class" style="--activeSubNavMenuIcon:url('../../src/abouticongreen.png')"></div>
						<span class="generalNavMenuText_RoClass">navigation 4.2</span>
					</a>
				</div>
				-->
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
						<div class="userLoginDetails_RoClass">Office Account Details</div>
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
						<input type="checkbox" id="checkboxFilterInternal-Id" onchange="checkCusCheckBox(this), valueClientTypeInternal(), submitRequestOverallServRate(), submitRequestOverallStronglyAgree(), submitRequestOverallAgree(), submitRequestOverallNeither(), submitRequestOverallDisagree(), submitRequestOverallStronglyDisagree(), submitRequestOverallNoRating(), submitRequestCommentDetails()" autocomplete="off">
					</div>
					<div class="cusCheckBoxPaper_RoClass">
						<label for="checkboxFilterExternal-Id">External:<div class="boxme_RoClass"><img src="../../src/green check.png"></div></label>
						<input type="checkbox" id="checkboxFilterExternal-Id" onchange="checkCusCheckBox(this), valueClientTypeExternal(), submitRequestOverallServRate(), submitRequestOverallStronglyAgree(), submitRequestOverallAgree(), submitRequestOverallNeither(), submitRequestOverallDisagree(), submitRequestOverallStronglyDisagree(), submitRequestOverallNoRating(), submitRequestCommentDetails()" autocomplete="off">
					</div>
				</div>
				<!--_Filter Client Type Item-->

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
							<!--_ _ _ _Date Range Calendar Lite To-->						
							<div class="calLite_RoClass dateRangeCalLite_RoClass dateRangeCalLiteFrom_RoClass overallCalendar-Class" id="dateRangeFrom">
								<input type="hidden" name="calLite_Name" class="calLiteValue_RoClass" id="overallFromDate-Id">
								<div class="calLiteHead_RoClass">
									<div class="calLiteMonthHead_RoClass">
										<input type="hidden" name="calLiteMonthBtnValue_Name" class="calLiteMonthBtnValue_RoClass">
										<div class="calLiteButton_RoClass" onclick="changeCalLiteMonth('minus', 'dateRangeFrom')"><img src="../../src/callite left.png"></div>
										<div class="calLiteMonthText_RoClass"><!--Print Here--></div>
										<div class="calLiteButton_RoClass" onclick="changeCalLiteMonth('add', 'dateRangeFrom')"><img src="../../src/callite right.png"></div>
									</div>
									<div class="calLiteYearHead_RoClass">
										<input type="hidden" name="calLiteYearBtnValue_Name" class="calLiteYearBtnValue_RoClass">
										<div class="calLiteButton_RoClass" onclick="changeCalLiteYear('minus', 'dateRangeFrom')"><img src="../../src/callite left.png"></div>
										<div class="calLiteYearText_RoClass"><!--Print Here--></div>
										<div class="calLiteButton_RoClass" onclick="changeCalLiteYear('add', 'dateRangeFrom')"><img src="../../src/callite right.png"></div>
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

							<!--_ _ _ _Date Range Calendar Lite To-->
							<div class="calLite_RoClass dateRangeCalLite_RoClass dateRangeCalLiteTo_RoClass overallCalendar-Class" id="dateRangeTo">
								<input type="hidden" name="calLite_Name" class="calLiteValue_RoClass" id="overallToDate-Id">
								<div class="calLiteHead_RoClass">
									<div class="calLiteMonthHead_RoClass">
										<input type="hidden" name="calLiteMonthBtnValue_Name" class="calLiteMonthBtnValue_RoClass">
										<div class="calLiteButton_RoClass" onclick="changeCalLiteMonth('minus', 'dateRangeTo')"><img src="../../src/callite left.png"></div>
										<div class="calLiteMonthText_RoClass"><!--Print Here--></div>
										<div class="calLiteButton_RoClass" onclick="changeCalLiteMonth('add', 'dateRangeTo')"><img src="../../src/callite right.png"></div>
									</div>
									<div class="calLiteYearHead_RoClass">
										<input type="hidden" name="calLiteYearBtnValue_Name" class="calLiteYearBtnValue_RoClass">
										<div class="calLiteButton_RoClass" onclick="changeCalLiteYear('minus', 'dateRangeTo')"><img src="../../src/callite left.png"></div>
										<div class="calLiteYearText_RoClass"><!--Print Here--></div>
										<div class="calLiteButton_RoClass" onclick="changeCalLiteYear('add', 'dateRangeTo')"><img src="../../src/callite right.png"></div>
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
			</div>
			<!--Charts-->


			<!--Comment Section-->
			<div class="globalWrapper" id="commentSectionTextWrap">
				<div class="commentSectionText-Class">Comment Section</div>
			</div>
			<div class="globalWrapper" id="commentSectionWrap">
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

	<script type="text/javascript" src="../../Rogrid/Scripts/RogridNodeLayOneNavScript.js"></script>
	<script type="text/javascript" src="../../Rogrid/Scripts/RogridNodeScript.js"></script>
	<script type="text/javascript" src="../../Rogrid/Scripts/CalendarLite.js"></script>
	<script type="text/javascript" src="../../Rogrid/Scripts/Plugin_GstaticChart.js"></script>
	<script type="module" src="../../Global JS/Values_Page_Dashboard.js"></script>
	<script type="module" src="../JS/Gateway_OverallServRate.js"></script>
	<script type="text/javascript" src="../JS/SubmitRequest_OverallServRate.js"></script>
	<script type="module" src="../JS/Gateway_OverallStronglyAgree.js"></script>
	<script type="text/javascript" src="../JS/SubmitRequest_OverallStronglyAgree.js"></script>
	<script type="module" src="../JS/Gateway_OverallAgree.js"></script>
	<script type="text/javascript" src="../JS/SubmitRequest_OverallAgree.js"></script>
	<script type="module" src="../JS/Gateway_OverallNeither.js"></script>
	<script type="text/javascript" src="../JS/SubmitRequest_OverallNeither.js"></script>
	<script type="module" src="../JS/Gateway_OverallDisagree.js"></script>
	<script type="text/javascript" src="../JS/SubmitRequest_OverallDisagree.js"></script>
	<script type="module" src="../JS/Gateway_OverallStronglyDisagree.js"></script>
	<script type="text/javascript" src="../JS/SubmitRequest_OverallStronglyDisagree.js"></script>
	<script type="module" src="../JS/Gateway_OverallNoRating.js"></script>
	<script type="text/javascript" src="../JS/SubmitRequest_OverallNoRating.js"></script>
	<script type="module" src="../JS/Gateway_CommentDetails.js"></script>
	<script type="text/javascript" src="../JS/SubmitRequest_CommentDetails.js"></script>
	<script type="module" src="../JS/Executor_Page_Dashboard.js"></script>
</body>
</html>