<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
session_start();
date_default_timezone_set('Asia/Manila');
$landingPage_EndUser = "../../index.php";
/*Dependency PHP Codes*/

if(isset($_GET["rateToken"])){
	/*Globals*/
	require_once "../../Global PHP/Connection.php";
	require_once "../../Global PHP/ValidateRateToken_Class.php";
	/*Globals*/


	/*Query string*/
	$rateToken = $_GET["rateToken"];
	/*Query string*/


	/*Token Validation*/
	$validateRateTok_Resp = validateRateToken($vmcCsat_Conn, $rateToken);

	if($validateRateTok_Resp->validateRateTok_Exec === null){
		echo "Authentication is not running! please try again.";
		header("Refresh:4;".$landingPage_EndUser);
	}else if($validateRateTok_Resp->validateRateTok_Exec === false){
		echo "Authentication failed to execute! please try again.";
		header("Refresh:4;".$landingPage_EndUser);
	}else if($validateRateTok_Resp->validateRateTok_Count === 0){
		echo "Invalid token!";
		header("Refresh:4;".$landingPage_EndUser);
	}else if($validateRateTok_Resp->validateRateTok_Count !== 0 && $validateRateTok_Resp->validateRateTok_Exec === true){
	/*Token Validation*/
?>
		<!DOCTYPE html>
		<html>
		<head>
			<title>Rate Our Services</title>
			<link rel="stylesheet" type="text/css" href="../CSS/Page_RateService.css">
			<link rel="shortcut icon" href="../../src/vmclogo.png">		
			<meta name="viewport" content="width=device-width, initial-scale=1.0">		
			<meta charset="utf-16">			
		</head>
		<body>
			<!--Blurrer-->
			<div class="thisIsJapan_RoClass" style="--putOnTop: 1;"></div>
			<!--Blurrer-->


			<!--Page Header-->
			<div class="pageHeaderWrap">
				<div class="pageHeaderTxt">Client Satisfaction Measurement (CSM)</div>
				<div class="pageHeaderSubtxt" id="headerDynamicSubTxt-Id">This survey will serve as a basis to help us to improve our services for you to have a better experience in the facility because you are important to us. Any comments or suggestions you provide through this survey will be highly-appreciated and will be treated with utmost confidentiality.</div>
			</div>
			<!--Page Header-->


			<!--Step by step-->
			<div class="stepByStepFlex-Class">
				<div class="stepByStepItem-Class">
					<div class="stepByStepLine-Class"></div>
					<div class="stepNumber-Class">1</div>
					<div class="stepDefi-Class">Fill Information</div>
				</div>
				<div class="stepByStepItem-Class">
					<div class="stepByStepLine-Class"></div>
					<div class="stepNumber-Class">2</div>
					<div class="stepDefi-Class">Rate Citizen Charter</div>
				</div>
				<div class="stepByStepItem-Class">
					<div class="stepByStepLine-Class"></div>
					<div class="stepNumber-Class">3</div>
					<div class="stepDefi-Class">Rate Service</div>
				</div>
				<div class="stepByStepItem-Class">
					<div class="stepByStepLine-Class"></div>
					<div class="stepNumber-Class">4</div>
					<div class="stepDefi-Class">Submit Rating</div>
				</div>
			</div>			
			<!--Step by step-->


			<!--Step sets-->
			<!--_Step one-->
			<div class="stepSets-Class">
				<div class="stepSetTitleWrap">
					<div class="stepSetTitle-Class">Survey Form</div>
					<div class="stepSetTitleDefi-Class">Please provide the correct details based on the conducted transactions.</div>
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Respondent Type</div>
					<div class="stepSetPerFieldFlex">
						<div class="radioCheckFlex_RoClass">
							<label for="respondentPatient-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="respondentPatient-Id" name="respondent-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">Patient</div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="respondentCompanion-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="respondentCompanion-Id" name="respondent-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">Companion (Family/Relative)</div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="respondentBusiness-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="respondentBusiness-Id" name="respondent-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">Business (visited for business purposes)</div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="respondentEmployee-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="respondentEmployee-Id" name="respondent-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">Employee</div>
						</div>
					</div>
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Age</div>
					<div class="stepSetPerFieldFlex">
						<div class="radioCheckFlex_RoClass">
							<label for="age1-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="age1-Id" name="age-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">19 or lower</div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="age2-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="age2-Id" name="age-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">20-34</div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="age3-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="age3-Id" name="age-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">35-49</div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="age4-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="age4-Id" name="age-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">50-64</div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="age5-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="age5-Id" name="age-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">65 or higher</div>
						</div>
					</div>
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Gender</div>
					<div class="stepSetPerFieldFlex">
						<div class="radioCheckFlex_RoClass">
							<label for="gender1-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="gender1-Id" name="gender-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">Male</div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="gender2-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="gender2-Id" name="gender-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">Female</div>
						</div>
					</div>
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Religion</div>
					<div class="stepSetPerFieldFlex">
						<div class="scdropdownSelBox_RoClass" id="dropdownReligion-Id">
							<div class="scdropOptionCon_RoClass">
								<div class="scdropOption_RoClass">
									<input type="radio" name="religion-Name" value="Catholic" id="religion1-Id">
									<label for="religion1">Catholic</label>
								</div>
								<div class="scdropOption_RoClass">
									<input type="radio" name="religion-Name" value="muslim" id="religion2-Id">
									<label for="religion2">Muslim</label>
								</div>
							</div>
							<div class="scdropSelected_RoClass"><span style="--cusDropSelArrowDownIcon: url('../../src/Chevron Down_Green.png');"></span><span class="scdropSelectedVal_RoClass">Select Religion</span></div>
							<div class="scdropSearchboxWrap_RoClass">
								<input type="text" placeholder="Start Typing...">
							</div>
							<input type="hidden" class="scDropdownVal_RoClass" autocomplete="off">
						</div>	
					</div>
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Educational Attainment</div>
					<div class="stepSetPerFieldFlex">
						<div class="radioCheckFlex_RoClass">
							<label for="educ1-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="educ1-Id" name="educational-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">Primary</div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="educ2-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="educ2-Id" name="educational-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">Secondary</div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="educ3-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="educ3-Id" name="educational-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">Postgraduate/Masters</div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="educ4-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="educ4-Id" name="educational-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">Vocational</div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="educ5-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="educ5-Id" name="educational-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">No Formal Education</div>
						</div>
					</div>
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Point of Entry Department Visited</div>
					<div class="stepSetPerFieldFlex">
						<div class="radioCheckFlex_RoClass">
							<label for="office1-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="office1-Id" name="office-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">Admitting Office</div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="office2-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="office2-Id" name="office-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">Cash Operation Section</div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="office3-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="office3-Id" name="office-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">Department of Pathology and Laboratory</div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="office4-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="office4-Id" name="office-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">Department of Radiology</div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="office5-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="office5-Id" name="office-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">Emergency Department</div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="office5-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="office5-Id" name="office-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">Medical Social Work Service</div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="office6-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="office6-Id" name="office-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">Pharmacy Service</div>
						</div>
					</div>
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Service Type</div>
					<div class="stepSetPerFieldFlex">
						<div class="radioCheckFlex_RoClass">
							<label for="service1-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="service1-Id" name="service-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">Patient Care</div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="service2-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="service2-Id" name="service-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">Documents</div>
						</div>
					</div>
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Service Availed</div>
					<div class="stepSetPerFieldFlex">
						<div class="radioCheckFlex_RoClass">
							<label for="officerService1-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="officerService1-Id" name="officeService-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">Consultation</div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="officerService2-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="officerService2-Id" name="officeService-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">Admission</div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="officerService3-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="officerService3-Id" name="officeService-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">Laboratory</div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="officerService4-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="officerService4-Id" name="officeService-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">Discharge</div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="officerService5-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="officerService5-Id" name="officeService-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">Settlement of Fees</div>
						</div>
					</div>
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">How frequent do you visit this facility?</div>
					<div class="stepSetPerFieldFlex">
						<div class="radioCheckFlex_RoClass">
							<label for="frequentlyVisit1-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="frequentlyVisit1-Id" name="frequentlyVisit-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">First Time</div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="frequentlyVisit2-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="frequentlyVisit2-Id" name="frequentlyVisit-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">1-3x a year</div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="frequentlyVisit3-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="frequentlyVisit3-Id" name="frequentlyVisit-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">4-6x a year</div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="frequentlyVisit4-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="frequentlyVisit4-Id" name="frequentlyVisit-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">7-11x a year</div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="frequentlyVisit5-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="frequentlyVisit5-Id" name="frequentlyVisit-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">>12x a year</div>
						</div>
					</div>
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetBtnsFlex">
						<button class="normButton_RoClass proceedBtn-Class" id="proceedBtnOne-Id">Proceed</button>
					</div>
				</div>
			</div>
			<!--_Step one-->

			<!--_Step two-->
			<div class="stepSets-Class">
				<div class="stepSetTitleWrap">
					<div class="stepSetTitle-Class">Citizen Charter of the office</div>
					<div class="stepSetTitleDefi-Class">Please rate the level of citizen charter awareness, visibility, and Helpfulness of the office.</div>
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Which of the following best describes your awareness of a CC?</div>
					<div class="stepSetPerFieldFlex">
						<div class="radioCheckFlex_RoClass">
							<label for="ccAwareness1-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="ccAwareness1-Id" name="ccAwareness-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">I know what a CC is and I saw this office’s CC.</div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="ccAwareness2-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="ccAwareness2-Id" name="ccAwareness-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">I know what a CC is but I did not see this office’s CC.</div>
						</div>						

						<div class="radioCheckFlex_RoClass">
							<label for="ccAwareness3-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="ccAwareness3-Id" name="ccAwareness-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">I learned of the CC only when I saw this office’s CC.</div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="ccAwareness4-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="ccAwareness4-Id" name="ccAwareness-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">I do not know what a CC is and I did not see this office’s CC.</div>
						</div>	
					</div>					
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Would you say that the CC of this office was?</div>
					<div class="stepSetPerFieldFlex">
						<div class="radioCheckFlex_RoClass">
							<label for="ccVisibility1-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="ccVisibility1-Id" name="ccVisibility-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">Easy to see</div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="ccVisibility2-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="ccVisibility2-Id" name="ccVisibility-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">Somewhat easy to see</div>
						</div>						

						<div class="radioCheckFlex_RoClass">
							<label for="ccVisibility3-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="ccVisibility3-Id" name="ccVisibility-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">Difficult to see</div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="ccVisibility4-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="ccVisibility4-Id" name="ccVisibility-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">Not visible at all</div>
						</div>	
					</div>					
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">How much did the CC help you in your transaction?</div>
					<div class="stepSetPerFieldFlex">
						<div class="radioCheckFlex_RoClass">
							<label for="ccHelpfulness1-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="ccHelpfulness1-Id" name="ccHelpfulness-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">Helped very much</div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="ccHelpfulness2-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="ccHelpfulness2-Id" name="ccHelpfulness-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">Somewhat helped</div>
						</div>						

						<div class="radioCheckFlex_RoClass">
							<label for="ccHelpfulness3-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="ccHelpfulness3-Id" name="ccHelpfulness-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckTxtLabel_RoClass">Did not help</div>
						</div>
					</div>								
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetBtnsFlex">
						<button class="normButton_RoClass backBtn-Class" id="backBtnTwo-Id">Back</button>
						<button class="normButton_RoClass proceedBtn-Class" id="proceedBtnTwo-Id">Proceed</button>						
					</div>
				</div>
			</div>
			<!--_Step two-->

			<!--_Step Three-->
			<div class="stepSets-Class">
				<div class="stepSetTitleWrap">
					<div class="stepSetTitle-Class">Hospital's Facilities, Staffs, and Services</div>
					<div class="stepSetTitleDefi-Class">Please rate your experience in our Hospital.</div>
				</div>

				<div class="stepSetPerFieldGroup-Class">A. Infrastructures and Process</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">The waiting areas were clean, orderly, and comfortable.</div>
					<div class="stepSetPerFieldFlex">
						<div class="radioCheckFlex_RoClass">
							<label for="question1score1-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question1score1-Id" name="question1-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot strongly agree.png"></div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="question1score2-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question1score2-Id" name="question1-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot agree.png"></div>
						</div>						

						<div class="radioCheckFlex_RoClass">
							<label for="question1score3-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question1score3-Id" name="question1-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot neither.png"></div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="question1score4-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question1score4-Id" name="question1-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot disagree.png"></div>
						</div>						

						<div class="radioCheckFlex_RoClass">
							<label for="question1score5-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question1score5-Id" name="question1-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot strongly disagree.png"></div>
						</div>		
					</div>					
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">The toilets and bathrooms inside the facility were kept clean, orderly and with a steady water supply.</div>
					<div class="stepSetPerFieldFlex">
						<div class="radioCheckFlex_RoClass">
							<label for="question2score1-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question2score1-Id" name="question2-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot strongly agree.png"></div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="question2score2-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question2score2-Id" name="question2-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot agree.png"></div>
						</div>						

						<div class="radioCheckFlex_RoClass">
							<label for="question2score3-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question2score3-Id" name="question2-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot neither.png"></div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="question2score4-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question2score4-Id" name="question2-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot disagree.png"></div>
						</div>						

						<div class="radioCheckFlex_RoClass">
							<label for="question2score5-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question2score5-Id" name="question2-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot strongly disagree.png"></div>
						</div>		
					</div>					
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">The patients’ rooms were kept clean, tidy, and comfortable.</div>
					<div class="stepSetPerFieldFlex">
						<div class="radioCheckFlex_RoClass">
							<label for="question3score1-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question3score1-Id" name="question3-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot strongly agree.png"></div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="question3score2-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question3score2-Id" name="question3-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot agree.png"></div>
						</div>						

						<div class="radioCheckFlex_RoClass">
							<label for="question3score3-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question3score3-Id" name="question3-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot neither.png"></div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="question3score4-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question3score4-Id" name="question3-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot disagree.png"></div>
						</div>						

						<div class="radioCheckFlex_RoClass">
							<label for="question3score5-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question4score5-Id" name="question3-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot strongly disagree.png"></div>
						</div>		
					</div>					
				</div>

				<div class="stepSetPerFieldGroup-Class">B. Client Engagement and Empowerment</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">The medical condition, procedures and instructions were discussed clearly.</div>
					<div class="stepSetPerFieldFlex">
						<div class="radioCheckFlex_RoClass">
							<label for="question4score1-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question4score1-Id" name="question4-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot strongly agree.png"></div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="question4score2-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question4score2-Id" name="question4-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot agree.png"></div>
						</div>						

						<div class="radioCheckFlex_RoClass">
							<label for="question4score3-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question4score3-Id" name="question4-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot neither.png"></div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="question4score4-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question4score4-Id" name="question4-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot disagree.png"></div>
						</div>						

						<div class="radioCheckFlex_RoClass">
							<label for="question4score5-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question4score5-Id" name="question4-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot strongly disagree.png"></div>
						</div>		
					</div>					
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Our sentiments, cultural background, and beliefs were heard and considered in the treatment procedure.</div>
					<div class="stepSetPerFieldFlex">
						<div class="radioCheckFlex_RoClass">
							<label for="question5score1-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question5score1-Id" name="question5-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot strongly agree.png"></div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="question5score2-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question5score2-Id" name="question5-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot agree.png"></div>
						</div>						

						<div class="radioCheckFlex_RoClass">
							<label for="question5score3-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question5score3-Id" name="question5-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot neither.png"></div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="question5score4-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question5score4-Id" name="question5-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot disagree.png"></div>
						</div>						

						<div class="radioCheckFlex_RoClass">
							<label for="question5score5-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question5score5-Id" name="question5-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot strongly disagree.png"></div>
						</div>		
					</div>					
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">We were given the chance to decide which treatment procedure shall be performed.</div>
					<div class="stepSetPerFieldFlex">
						<div class="radioCheckFlex_RoClass">
							<label for="question6score1-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question6score1-Id" name="question6-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot strongly agree.png"></div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="question6score2-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question6score2-Id" name="question6-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot agree.png"></div>
						</div>						

						<div class="radioCheckFlex_RoClass">
							<label for="question6score3-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question6score3-Id" name="question6-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot neither.png"></div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="question6score4-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question6score4-Id" name="question6-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot disagree.png"></div>
						</div>						

						<div class="radioCheckFlex_RoClass">
							<label for="question6score5-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question6score5-Id" name="question6-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot strongly disagree.png"></div>
						</div>		
					</div>					
				</div>

				<div class="stepSetPerFieldGroup-Class">C. Culture of Responsiveness</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Doctor</div>
					<div class="stepSetPerFieldFlex">
						<div class="radioCheckFlex_RoClass">
							<label for="question7score1-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question7score1-Id" name="question7-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot strongly agree.png"></div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="question7score2-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question7score2-Id" name="question7-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot agree.png"></div>
						</div>						

						<div class="radioCheckFlex_RoClass">
							<label for="question7score3-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question7score3-Id" name="question7-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot neither.png"></div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="question7score4-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question7score4-Id" name="question7-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot disagree.png"></div>
						</div>						

						<div class="radioCheckFlex_RoClass">
							<label for="question7score5-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question7score5-Id" name="question7-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot strongly disagree.png"></div>
						</div>		
					</div>					
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Nurse</div>
					<div class="stepSetPerFieldFlex">
						<div class="radioCheckFlex_RoClass">
							<label for="question8score1-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question8score1-Id" name="question8-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot strongly agree.png"></div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="question8score2-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question8score2-Id" name="question8-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot agree.png"></div>
						</div>						

						<div class="radioCheckFlex_RoClass">
							<label for="question8score3-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question8score3-Id" name="question8-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot neither.png"></div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="question8score4-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question8score4-Id" name="question8-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot disagree.png"></div>
						</div>						

						<div class="radioCheckFlex_RoClass">
							<label for="question8score5-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question8score5-Id" name="question8-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot strongly disagree.png"></div>
						</div>		
					</div>					
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Midwife</div>
					<div class="stepSetPerFieldFlex">
						<div class="radioCheckFlex_RoClass">
							<label for="question9score1-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question9score1-Id" name="question9-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot strongly agree.png"></div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="question9score2-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question9score2-Id" name="question9-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot agree.png"></div>
						</div>						

						<div class="radioCheckFlex_RoClass">
							<label for="question9score3-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question9score3-Id" name="question9-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot neither.png"></div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="question9score4-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question9score4-Id" name="question9-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot disagree.png"></div>
						</div>						

						<div class="radioCheckFlex_RoClass">
							<label for="question9score5-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question9score5-Id" name="question9-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot strongly disagree.png"></div>
						</div>		
					</div>
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Security</div>
					<div class="stepSetPerFieldFlex">
						<div class="radioCheckFlex_RoClass">
							<label for="question10score1-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question10score1-Id" name="question10-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot strongly agree.png"></div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="question10score2-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question10score2-Id" name="question10-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot agree.png"></div>
						</div>						

						<div class="radioCheckFlex_RoClass">
							<label for="question10score3-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question10score3-Id" name="question10-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot neither.png"></div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="question10score4-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question10score4-Id" name="question10-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot disagree.png"></div>
						</div>						

						<div class="radioCheckFlex_RoClass">
							<label for="question10score5-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question10score5-Id" name="question10-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot strongly disagree.png"></div>
						</div>		
					</div>
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">I was treated fairly, or “walang palakasan”, during my transaction.</div>
					<div class="stepSetPerFieldFlex">
						<div class="radioCheckFlex_RoClass">
							<label for="question11score1-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question11score1-Id" name="question11-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot strongly agree.png"></div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="question11score2-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question11score2-Id" name="question11-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot agree.png"></div>
						</div>						

						<div class="radioCheckFlex_RoClass">
							<label for="question11score3-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question11score3-Id" name="question11-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot neither.png"></div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="question11score4-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question11score4-Id" name="question11-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot disagree.png"></div>
						</div>						

						<div class="radioCheckFlex_RoClass">
							<label for="question11score5-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question11score5-Id" name="question11-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot strongly disagree.png"></div>
						</div>		
					</div>
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">I am satisfied with the service that I availed. </div>
					<div class="stepSetPerFieldFlex">
						<div class="radioCheckFlex_RoClass">
							<label for="question12score1-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question12score1-Id" name="question12-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot strongly agree.png"></div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="question12score2-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question12score2-Id" name="question12-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot agree.png"></div>
						</div>						

						<div class="radioCheckFlex_RoClass">
							<label for="question12score3-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question12score3-Id" name="question12-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot neither.png"></div>
						</div>

						<div class="radioCheckFlex_RoClass">
							<label for="question12score4-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question12score4-Id" name="question12-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot disagree.png"></div>
						</div>						

						<div class="radioCheckFlex_RoClass">
							<label for="question12score5-Id" class="customRadioCheck_RoClass"><img src="../../src/green check.png"></label>
							<input type="radio" id="question12score5-Id" name="question12-Name" onchange="radioCheckSelected(this)" autocomplete="off">
							<div class="radioCheckIconLabel_RoClass" style=""><img src="../../src/emot strongly disagree.png"></div>
						</div>		
					</div>
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetBtnsFlex">
						<button class="normButton_RoClass backBtn-Class" id="backBtnThree-Id">Back</button>
						<button class="normButton_RoClass proceedBtn-Class" id="proceedBtnThree-Id">Proceed</button>						
					</div>
				</div>
			</div>
			<!--_Step Three-->

			<!--_Step four-->
			<div class="stepSets-Class">
				<div class="stepSetTitleWrap">
					<div class="stepSetTitle-Class">Comments and Suggestions</div>
					<div class="stepSetTitleDefi-Class">Our Hospital is open to any comments and suggestions of our clients, so feel free to provide yours and we will read it.</div>
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Suggestions on how we can further improve our services.</div>
					<div class="stepSetPerFieldFlex">
						<textarea class="suggestionTextArea-Class" placeholder="Optional"></textarea>
					</div>
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">If applicable, please the name of any remarkable hospital staff you would like to commend, as well as your reason.</div>
					<div class="stepSetPerFieldFlex">
						<textarea class="suggestionTextArea-Class" placeholder="Optional"></textarea>
					</div>
				</div>				

				<div class="stepSetPerFieldWrap">
					<div class="stepSetBtnsFlex">
						<button class="normButton_RoClass backBtn-Class" id="backBtnFour-Id">Back</button>
						<button class="normButton_RoClass proceedBtn-Class" id="submitRatingBtn-Id">Submit Rating</button>						
					</div>
				</div>
			</div>
			<!--_Step four-->			
			<!--Step sets-->


			<!--
			<button>+</button>
			<button>-</button>
			-->

			<script type="text/javascript" src="../../Rogrid/Scripts/RogridNodeScript.js"></script>
			<script type="module" src="../JS/Controller_StepByStep.js"></script>			
		</body>
		</html>
<?php 
	}
}else if(!isset($_GET["rateToken"])){
	echo "No generated token!";
	header("Refresh:4;".$landingPage_EndUser);
}
?>