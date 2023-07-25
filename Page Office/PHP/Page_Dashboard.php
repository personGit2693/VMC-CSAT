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
				<a href="" class="mainNavMenu_RoClass">					
					<div class="mainNavMenuIconWrap_RoClass" style="--mainNavMenuIcon:url('../../src/abouticonwhite.png'); --activeMainNavMenuIcon:url('../../src/abouticongreen.png')"></div>
					<span class="generalNavMenuText_RoClass">navigation 1</span>
				</a>


				<a href="" class="activeMainNavMenu_RoClass">					
					<div class="activeMainNavMenuIconWrap_RoClass" style="--activeMainNavMenuIcon:url('../../src/abouticongreen.png')"></div>
					<span class="generalNavMenuText_RoClass">navigation 2</span>
				</a>
				

				<div class="mainNavMenu_RoClass" onclick="collapseMenu(this)">					
					<div class="mainNavMenuIconWrap_RoClass" style="--mainNavMenuIcon:url('../../src/bookcontacticonwhite.png'); --activeMainNavMenuIcon:url('../../src/bookcontacticongreen.png')"></div>
					<span class="generalNavMenuText_RoClass">navigation 3</span><div class="chevronIconWrap_RoClass"><img src="../../src/Chevron Right.png" /></div>
				</div>
				<div style="max-height: 0px;" class="subNavMenuWrap_RoClass">
					<a href="" class="subNavMenu_RoClass">					
						<div class="subNavMenuIconWrap_RoClass" style="--subNavMenuIcon:url('../../src/abouticonwhite.png'); --activeSubNavMenuIcon:url('../../src/abouticongreen.png')"></div>
						<span class="generalNavMenuText_RoClass">navigation 3.1</span>
					</a>
				</div>
	

				<div class="activeMainNavMenu_RoClass" onclick="collapseMenu(this)">					
					<div class="activeMainNavMenuIconWrap_RoClass" style="--activeMainNavMenuIcon:url('../../src/bookcontacticongreen.png')"></div>
					<span class="generalNavMenuText_RoClass">navigation 4</span><div class="activeChevronIconWrap_RoClass"><img src="../../src/Chevron Right.png" /></div>
				</div>
				<div style="max-height: 1000px;" class="subNavMenuWrap_RoClass">
					<a href="" class="subNavMenu_RoClass">					
						<div class="subNavMenuIconWrap_RoClass" style="--subNavMenuIcon:url('../../src/abouticonwhite.png'); --activeSubNavMenuIcon:url('../../src/abouticongreen.png')"></div>
						<span class="generalNavMenuText_RoClass">navigation 4.1</span>
					</a>
					<a href="" class="activeSubNavMenu_RoClass">					
						<div class="activeSubNavMenuIconWrap_RoClass" style="--activeSubNavMenuIcon:url('../../src/abouticongreen.png')"></div>
						<span class="generalNavMenuText_RoClass">navigation 4.2</span>
					</a>
				</div>
			</div>
		</div>
		<div class="mainmecha_RoClass" style="--mainBodyBgColor:#E8EFFF;">
			<!--Page title-->
			<div class="mainmechaCon_RoClass layoutOneHead_RoClass" style="--projectTitle_BgColor:#ffffff;">
				<div class="burger_RoClass"><img class="burgerIcon_RoClass"></div>
				<div class="projTitleAndUserLogin_RoClass">
					<div class="projTitleTxt_RoClass">Dashboard</div>
					<div class="userLogin_RoClass">
						<div class="userLoginIconWrap_RoClass"><img src="../../src/office-building.png"></div>
						<div class="userLoginDetails_RoClass">Office Account Details</div>
					</div>
				</div>
			</div>
			<!--Page title-->

			<!--Search area-->
			<div class="globalWrapper" id="searchWrapper">

				<!--_Date Range Item-->
				<div class="searchWrapperItem-Class" id="dateRangeOneItemWrap">
					<!--_ _Date Range Wrap-->
					<div class="dateRangeWrap_RoClass" id="dateRangeOneWrap-Id">
						<!--_ _ _Date Range-->
						<div class="dateRange_RoClass" onclick="displayDateRangeCalLite(this)">
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
							<div class="calLite_RoClass dateRangeCalLite_RoClass dateRangeCalLiteFrom_RoClass" id="dateRangeFrom">
								<input type="hidden" name="calLite_Name" class="calLiteValue_RoClass">
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
							<div class="calLite_RoClass dateRangeCalLite_RoClass dateRangeCalLiteTo_RoClass" id="dateRangeTo">
								<input type="hidden" name="calLite_Name" class="calLiteValue_RoClass">
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
		</div> 
	</div>

	<script type="text/javascript" src="../../Rogrid/Scripts/RogridNodeLayOneNavScript.js"></script>
	<script type="text/javascript" src="../../Rogrid/Scripts/RogridNodeScript.js"></script>
	<script type="text/javascript" src="../../Rogrid/Scripts/CalendarLite.js"></script>
	<script type="text/javascript" src="../JS/Executor_Page_Dashboard.js"></script>
</body>
</html>