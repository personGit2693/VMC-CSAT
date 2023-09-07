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


	/*Check connection*/
	if($serverConnection != null){
		echo "No Connection from the server.";
		header("Refresh:4;".$landingPage_EndUser);
		return;
	}
	/*Check connection*/


	/*Token Validation*/
	$validateRateTok_Resp = validateRateToken($vmcCsat_Conn, $rateToken);

	if($validateRateTok_Resp->validateRateTok_Exec === null){
		echo "Authentication is not running! please try again.";
		header("Refresh:4;".$landingPage_EndUser);
	}else if($validateRateTok_Resp->validateRateTok_Exec === false){
		echo "Authentication failed to execute! please try again.";
		header("Refresh:4;".$landingPage_EndUser);
	}else if($validateRateTok_Resp->validateRateTok_Count === 0){
		echo "Invalid token or Session is already expired! Please wait";
		header("Refresh:4;".$landingPage_EndUser);
	}else if($validateRateTok_Resp->validateRateTok_Count !== 0 && $validateRateTok_Resp->validateRateTok_Exec === true){
	/*Token Validation*/
?>
		<!DOCTYPE html>
		<html>
		<head>
			<title>Rate Our Services</title>

			<!--JQuery version-->
			<script src="../../Global JS/Jquery_jquery-3.6.4.min.js?v1"></script>
			<!--JQuery version-->

			<!--Plugin Select2-->
			<link rel="stylesheet" type="text/css" href="../../Global Style/Plugin_select2.min.css">
			<script src="../../Global JS/Plugin_select2.min.js?v1"></script>
			<script src="../../Global JS/Init_Select2.js?v1"></script>
			<!--Plugin Select2-->

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
				<div class="pageHeaderItem pageHeaderBg-Class" style="--pageHeaderBackground: url('../../src/Banner One.png')">
					<div class="pageHeaderTxt">Hospital Client Satisfaction System (HCSS)</div>
					<div class="pageHeaderSubtxt" id="headerDynamicSubTxt-Id">This survey will serve as a basis to help us to improve our services for you to have a better experience in the facility because you are important to us. Any comments or suggestions you provide through this survey will be highly-appreciated and will be treated with utmost confidentiality.</div>
				</div>								
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
					<div class="stepSetPerFieldTitle-Class">Respondent<span class="redAsterisk-Class">*</span></div>
					<div class="stepSetPerFieldFlex" id="respondentTypeWrap">						
						<!--Component-->
						Loading...						
					</div>
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Age<span class="redAsterisk-Class">*</span></div>
					<div class="stepSetPerFieldFlex" id="ageRangesRadioBtnsWrap">																
						<div class="cusInputs_RoClass">					
							<input type="text" onfocusout="lowlightInWrap(this, '#303238')" onfocus="highlightInWrap(this, '#285FF3')" onkeyup="valueAgeRange(this.value)" required>
							<div class="placeholdme_RoClass">Provide your age</div>
						</div>						
					</div>
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Gender<span class="redAsterisk-Class">*</span></div>
					<div class="stepSetPerFieldFlex" id="genderRadioBtnsWrap">
						<!--Component-->
						Loading...
					</div>
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Gender Preference<span class="redAsterisk-Class">*</span></div>
					<div class="stepSetPerFieldFlex" id="genderPrefRadioBtnsWrap">
						<!--Component-->
						Loading...
					</div>
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Religion</div>
					<div class="stepSetPerFieldFlex" id="religionDropdownMenuWrap">
						<div class="scdropdownSelBox_RoClass" id="dropdownReligion-Id">
							<div class="scdropOptionCon_RoClass" id="dropdownReligionCon-Id">
								<!--Component-->
								Loading...								
							</div>
							<div class="scdropSelected_RoClass"><span style="--cusDropSelArrowDownIcon: url('../../src/Chevron Down_Green.png');"></span><span class="scdropSelectedVal_RoClass">Select Religion</span></div>
							<div class="scdropSearchboxWrap_RoClass">
								<input type="text" placeholder="Start Typing..." id="dropdownReligionSearch-Id" onkeyup="submitRequestReligions()">
							</div>
							<input type="hidden" class="scDropdownVal_RoClass" autocomplete="off" id="dropdownReligionValue-Id">
						</div>	
					</div>
				</div>

				<!--
				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Select2<span class="redAsterisk-Class">*</span></div>
					<div class="stepSetPerFieldFlex" id="religionDropdownMenuWrap">
						<select class="js-example-basic-single" name="state" style="width: 100%;">
							<optgroup label="Group Name">
								<option value="AL">Alabama</option>
								<option value="WY">Wyoming</option>
							</optgroup>
						</select>
					</div>
				</div>
				-->


				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Educational Attainment<span class="redAsterisk-Class">*</span></div>
					<div class="stepSetPerFieldFlex" id="educAttainmentRadioBtnsWrap">
						<!--Component-->
						Loading...
					</div>
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Building<span class="redAsterisk-Class">*</span></div>
					<div class="stepSetPerFieldFlex" id="buildingRadioBtnsWrap">
						<!--Component-->
						Loading...
					</div>
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Floor<span class="redAsterisk-Class">*</span></div>
					<div class="stepSetPerFieldFlex" id="floorRadioBtnsWrap">
						<!--Component-->
						Select building.
					</div>
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Point of Entry Department Visited<span class="redAsterisk-Class">*</span></div>
					<div class="stepSetPerFieldFlex" id="officeRadioBtnsWrap">
						<!--Component-->						
						Select Respondent, building and floor.
					</div>
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Service-Type<span class="redAsterisk-Class">*</span></div>
					<div class="stepSetPerFieldFlex" id="serviceTypeRadioBtnsWrap">
						<!--Component-->
						Select Respondent and Point of Entry Department Visited.
					</div>
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Service Availed<span class="redAsterisk-Class">*</span></div>
					<div class="stepSetPerFieldFlex" id="officeServiceRadioWrap">
						<!--Component-->						
						Select Respondent, Point of Entry Department Visited and Service-Type.
					</div>
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">How frequent do you visit this facility?<span class="redAsterisk-Class">*</span></div>
					<div class="stepSetPerFieldFlex" id="freqVisitRadioBtnsWrap">
						<!--Component-->
						Loading...
					</div>
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetBtnsFlex" id="stepOneBtnsWrap">
						<!--Components-->
						Loading...
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
					<div class="stepSetPerFieldTitle-Class">Which of the following best describes your awareness of a CC?<span class="redAsterisk-Class">*</span></div>
					<div class="stepSetPerFieldFlex" id="cc1RadioBtnsWrap">
						<!--Component-->	
						Loading
					</div>					
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Would you say that the CC of this office was?<span class="redAsterisk-Class">*</span></div>
					<div class="stepSetPerFieldFlex" id="cc2RadioBtnsWrap">
						<!--Component-->
						Select CC1 first.	
					</div>					
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">How much did the CC help you in your transaction?<span class="redAsterisk-Class">*</span></div>
					<div class="stepSetPerFieldFlex" id="cc3RadioBtnsWrap">
						<!--Component-->
						Select CC2 first.
					</div>								
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetBtnsFlex" id="stepTwoBtnsWrap">
						<!--Component-->
						Loading...						
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

				<div class="questionsWrap-Class" id="questionsWrap">
					<!--Component-->
					Select Respondent and Point of Entry.
				</div>				

				<div class="stepSetPerFieldWrap">
					<div class="stepSetBtnsFlex" id="stepThreeBtnsWrap">
						<!--Component-->
						Loading...						
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

				<div class="questionsWrap-Class" id="commentsWrap">	
					<!--Component-->
					Select Respondent and Point of Entry.								
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetBtnsFlex" id="stepFourBtnsWrap">
						<!--Component-->
						Loading...											
					</div>
				</div>
			</div>
			<!--_Step four-->			
			<!--Step sets-->


			<!--
			<button>+</button>
			<button>-</button>
			-->

			<script type="text/javascript" src="../../Rogrid/Scripts/RogridNodeScript.js?v1"></script>
			<script type="text/javascript" src="../JS/Controller_StepByStep.js?v1"></script>
			<script type="module" src="../JS/Validator_StepOne.js"></script>
			<script type="text/javascript" src="../JS/SubmitValidation_StepOne.js?v1"></script>
			<script type="module" src="../JS/Validator_StepTwo.js"></script>
			<script type="text/javascript" src="../JS/SubmitValidation_StepTwo.js?v1"></script>
			<script type="module" src="../JS/Validator_StepThree.js"></script>			
			<script type="text/javascript" src="../JS/SubmitValidation_StepThree.js?v1"></script>			
			<script type="module" src="../../Global JS/Values_Page_RateService.js"></script>
			<script type="module" src="../JS/Gateway_EncodeRating.js"></script>
			<script type="text/javascript" src="../JS/SubmitRequest_EncodeRating.js?v1"></script>
			<script type="module" src="../JS/Gateway_Religions.js"></script>
			<script type="text/javascript" src="../JS/SubmitRequest_Religions.js?v1"></script>
			<script type="module" src="../JS/Gateway_Floors.js"></script>
			<script type="text/javascript" src="../JS/SubmitRequest_Floors.js?v1"></script>
			<script type="module" src="../JS/Gateway_Offices.js"></script>
			<script type="text/javascript" src="../JS/SubmitRequest_Offices.js?v1"></script>			
			<script type="module" src="../JS/Gateway_ServiceTypes.js"></script>
			<script type="text/javascript" src="../JS/SubmitRequest_ServiceTypes.js?v1"></script>
			<script type="module" src="../JS/Gateway_OfficeServices.js"></script>
			<script type="text/javascript" src="../JS/SubmitRequest_OfficeServices.js?v1"></script>
			<script type="module" src="../JS/Gateway_VisibilityRates.js"></script>
			<script type="text/javascript" src="../JS/SubmitRequest_VisibilityRates.js?v1"></script>
			<script type="module" src="../JS/Validator_RequestVisibilityRates.js"></script>
			<script type="text/javascript" src="../JS/SubmitValidation_RequestVisibilityRates.js?v1"></script>	
			<script type="module" src="../JS/Gateway_HelpfulnessRates.js"></script>
			<script type="text/javascript" src="../JS/SubmitRequest_HelpfulnessRates.js?v1"></script>		
			<script type="module" src="../JS/Validator_RequestHelpfulnessRates.js"></script>
			<script type="text/javascript" src="../JS/SubmitValidation_RequestHelpfulnessRates.js?v1"></script>
			<script type="module" src="../JS/Gateway_Questions.js"></script>
			<script type="text/javascript" src="../JS/SubmitRequest_Questions.js?v1"></script>		
			<script type="module" src="../JS/Gateway_CommentQuestions.js"></script>
			<script type="text/javascript" src="../JS/SubmitRequest_CommentQuestions.js?v1"></script>
			<script type="module" src="../JS/Executor_Page_RateService.js"></script>			
		</body>
		</html>
<?php 
	}
}else if(!isset($_GET["rateToken"])){
	echo "No generated token!";
	header("Refresh:4;".$landingPage_EndUser);
}
?>