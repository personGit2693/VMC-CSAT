<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
session_start();
date_default_timezone_set('Asia/Manila');
/*Dependency PHP Codes*/


/*Global Required Files*/
require_once "../../Global PHP/Global_Connection.php";
require_once "../../Global PHP/CheckGlobalToken_Class.php";
require_once "../../Global PHP/ValidateRateToken_Class.php";
/*Global Required Files*/


if(isset($_GET["rateToken"]) && isset($_GET["codeDetailsBase"]) && isset($_GET["token"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_GET["token"];
	$rateToken = $_GET["rateToken"];
	$_SESSION["codeDetailsBase"] = $_GET["codeDetailsBase"];
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


	/*Token Validation*/
	$validateRateTok_Resp = validateRateToken($dbConnection->selectedPdoConn, $rateToken);

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
			<title>Rate VMC Services</title>

			<link rel="stylesheet" type="text/css" href="../Style/Page_RateService.css">
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
					</div>
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Age<span class="redAsterisk-Class">*</span></div>
					<div class="stepSetPerFieldFlex" id="ageRangesRadioBtnsWrap">																
						<div class="cusInputs_RoClass">					
							<input type="text" onfocusout="lowlightInWrap(this, '#303238')" onfocus="highlightInWrap(this, '#285FF3')" onkeyup="controller_InputText_AssignAge(this.value, this)" required>
							<div class="placeholdme_RoClass">Provide your age</div>
						</div>						
					</div>
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Gender<span class="redAsterisk-Class">*</span></div>
					<div class="stepSetPerFieldFlex" id="genderRadioBtnsWrap">
						<!--Component-->
					</div>
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Gender Preference<span class="redAsterisk-Class">*</span></div>
					<div class="stepSetPerFieldFlex" id="genderPrefRadioBtnsWrap">
						<!--Component-->
					</div>
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Religion</div>
					<div class="stepSetPerFieldFlex" id="religionDropdownMenuWrap">
						<div class="selectDropdownWrap_RoClass" style="z-index: 1;">
							<input type="hidden" class="selectedOptValue_RoClass" id="inputRespondentReligionValue-Id">
							<div class="displayedSelectedFlex_RoClass" title="Please select from option" onclick="showSelectDropdownOpts(this, '180px')">
								<div class="displayedSelectedIcon_RoClass" style="--optIcon: url('../../src/religion icon.png');"></div>
								<div class="displayedSelectedText_RoClass">Select Religion</div>
								<div class="displayedSelectedResetBtn_RoClass" style="--selectDropdownResetBtnIcon: url('../../src/closeModIcon_Suc.png');" onclick="resetSelectDropdown(this, 'Please select from option', '../../src/religion icon.png', 'Select Religion'), controller_DivRemoveOptionBtn_ResetReligionValue()"></div>
								<div class="displayedSelectedChevron_RoClass" style="--selectDropdownChevron: url('../../src/Chevron Up Darkblue.png');"></div>						
							</div>
							<div class="selectDropdownOptionsWrap_RoClass">
								<input type="text" placeholder="Search Here" class="searchOpts_RoClass" onkeyup="controller_InputText_AssignSearchReligion(this.value), controller_InputText_PopulateReligionsDropdown()">
								<div class="selectDropdownOptsArea_RoClass" id="rDropdownReligionsOptionsWrap">
									<!--Component-->
								</div>
							</div>
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
					</div>
				</div>

				<!--
				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Point of Entry Location<span class="redAsterisk-Class">*</span></div>
					<div class="stepSetPerFieldFlex" id="buildingRadioBtnsWrap">
						Component
						Loading...
					</div>
				</div>
				-->

				<!--
				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Floor<span class="redAsterisk-Class">*</span></div>
					<div class="stepSetPerFieldFlex" id="floorRadioBtnsWrap">
						Component
						Select building.
					</div>
				</div>
				-->

				<!--
				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Point of Entry Department Visited<span class="redAsterisk-Class">*</span></div>
					<div class="stepSetPerFieldFlex" id="officeRadioBtnsWrap">
						Component
						Select Respondent, building and floor.
					</div>
				</div>
				-->

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Service-Type<span class="redAsterisk-Class">*</span></div>
					<div class="stepSetPerFieldFlex" id="serviceTypeRadioBtnsWrap">
						<!--Component-->
						Select Respondent
					</div>
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Service Availed<span class="redAsterisk-Class">*</span></div>
					<div class="stepSetPerFieldFlex" id="officeServiceRadioBtnsWrap">
						<!--Component-->						
						Select Respondent and Service-Type.
					</div>
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">How frequent do you visit this facility?<span class="redAsterisk-Class">*</span></div>
					<div class="stepSetPerFieldFlex" id="freqVisitRadioBtnsWrap">
						<!--Component-->						
					</div>
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetBtnsFlex" id="stepOneBtnsWrap">
						<button class="normButton_RoClass proceedBtn-Class" onclick="controller_Btn_ValidateStepOne()">Proceed</button>
					</div>
				</div>
			</div>
			<!--_Step one-->

			<!--_Step two-->
			<div class="stepSets-Class">
				<div class="stepSetTitleWrap">
					<div class="stepSetTitle-Class">Citizen Charter of the office</div>
					<div class="stepSetTitleDefi-Class">Sagutan ang nararapat na kasagutan mo tungkol sa mga tanong Sa Citizen’s Chrater (CC). </div>
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Alin sa mga sumusunod ang naglalarawan ng iyong kamalayan tungkol sa Citizen's Charter (CC)?<span class="redAsterisk-Class">*</span></div>
					<div class="stepSetPerFieldFlex" id="cc1RadioBtnsWrap">
						<!--Component-->
					</div>					
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Kung alam mo ang CC (o kung ang sagot mo sa CC1 ay numero 1-3, masasabi mo ba na ang  CC ng ward / opisina na ito ay…?<span class="redAsterisk-Class">*</span></div>
					<div class="stepSetPerFieldFlex" id="cc2RadioBtnsWrap">
						<!--Component-->
						Select CC1 first.	
					</div>					
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetPerFieldTitle-Class">Kung alam mo ang CC (o ang sagot mo sa CC1 ay numero 1-3), gaano ka natulungan ng CC sa iyong pagpapagamot / pagpakonsulta/ transakyon?<span class="redAsterisk-Class">*</span></div>
					<div class="stepSetPerFieldFlex" id="cc3RadioBtnsWrap">
						<!--Component-->
						Select CC2 first.
					</div>								
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetBtnsFlex" id="stepTwoBtnsWrap">						
						<button class="normButton_RoClass proceedBtn-Class" onclick="controller_Btn_ValidateStepTwo()">Proceed</button>
						<button class="normButton_RoClass backBtn-Class" id="backStepTwoBtn-Id" onclick="controller_Btn_Steps('back')">Back</button>
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
				</div>				

				<div class="stepSetPerFieldWrap">
					<div class="stepSetBtnsFlex" id="stepThreeBtnsWrap">
						<button class="normButton_RoClass proceedBtn-Class" onclick="controller_Btn_ValidateStepThree()">Proceed</button>						
						<button class="normButton_RoClass backBtn-Class" id="backStepTwoBtn-Id" onclick="controller_Btn_Steps('back')">Back</button>
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
				</div>

				<div class="stepSetPerFieldWrap">
					<div class="stepSetBtnsFlex" id="stepFourBtnsWrap">
						<button class="normButton_RoClass proceedBtn-Class" onclick="controller_Btn_SendSurveyRating()">Submit</button>
						<button class="normButton_RoClass backBtn-Class" id="backStepTwoBtn-Id" onclick="controller_Btn_Steps('back')">Back</button>
					</div>
				</div>
			</div>
			<!--_Step four-->			
			<!--Step sets-->


			<!--Loading-->
			<div class="thisIsJapan_RoClass" style="--putOnTop: 1;"></div>
			<div class="spinnerLoad_RoClass" style="--topSpinBlurrer: 1; --spinnerWidthHeight: 75px;">
				<img src="../../src/spinner.gif">
			</div>
			<!--Loading-->


			<!--Javascripts-->
			<!--_Dependencies-->
			<script type="text/javascript" src="../../Rogrid/Scripts/RogridNodeScript.js"></script>
			<script type="text/javascript" src="../../Global Client Side/Rogrid_Steps.js"></script>
			<!--_Dependencies-->

			<!--_Controllers-->
			<script type="module" src="../Client Side/controller_RadioBtn_AssignRespondentValue.js"></script>
			<script type="module" src="../Client Side/Controller_RadioBtn_AssignClientTypeValue.js"></script>
			<script type="module" src="../Client Side/controller_RadioBtn_AssignOfficeValue.js"></script>
			<script type="module" src="../Client Side/Controller_RadioBtn_AssignGenderValue.js"></script>
			<script type="module" src="../Client Side/Controller_RadioBtn_AssignGenderPrefValue.js"></script>
			<script type="module" src="../Client Side/Controller_RadioBtn_AssignEducAttainValue.js"></script>			
			<script type="module" src="../Client Side/Controller_RadioBtn_OutputServiceTypes.js"></script>
			<script type="module" src="../Client Side/Controller_RadioBtn_AssignServiceTypeValue.js"></script>
			<script type="module" src="../Client Side/Controller_RadioBtn_OutputOfficeServices.js"></script>
			<script type="module" src="../Client Side/Controller_RadioBtn_AssignOfficeServiceValue.js"></script>
			<script type="module" src="../Client Side/Controller_RadioBtn_AssignFreqVisitValue.js"></script>
			<script type="module" src="../Client Side/Controller_InputText_AssignAge.js"></script>
			<script type="module" src="../Client Side/Controller_InputText_AssignSearchReligion.js"></script>
			<script type="module" src="../Client Side/Controller_InputText_PopulateReligionsDropdown.js"></script>
			<script type="module" src="../Client Side/Controller_Option_AssignReligionValue.js"></script>
			<script type="module" src="../Client Side/Controller_DivRemoveOptionBtn_ResetReligionValue.js"></script>
			<script type="module" src="../Client Side/Controller_Btn_ValidateStepOne.js"></script>
			<script type="module" src="../Client Side/Controller_RadioBtn_AssignAwarenessRatingValue.js"></script>
			<script type="module" src="../Client Side/Controller_RadioBtn_ListCcVisibilityRates.js"></script>
			<script type="module" src="../Client Side/Controller_RadioBtn_AssignVisibilityRatingValue.js"></script>
			<script type="module" src="../Client Side/Controller_RadioBtn_ListCcHelpfulnessRates.js"></script>
			<script type="module" src="../Client Side/Controller_RadioBtn_AssignHelpfulnessRatingValue.js"></script>
			<script type="module" src="../Client Side/Controller_Btn_ValidateStepTwo.js"></script>
			<script type="module" src="../Client Side/Controller_RadioBtn_AssignRespondentRatingsValue.js"></script>
			<script type="module" src="../Client Side/Controller_RadioBtn_AssignSelectedQuestionsGroupsValue.js"></script>
			<script type="module" src="../Client Side/Controller_Btn_ValidateStepThree.js"></script>
			<script type="module" src="../Client Side/Controller_Textarea_AssignContactDetails.js"></script>
			<script type="module" src="../Client Side/Controller_Textarea_AssignComments.js"></script>
			<script type="module" src="../Client Side/Controller_Btn_SendSurveyRating.js"></script>
			<script type="module" src="../Client Side/Controller_Btn_Steps.js"></script>
			<!--_Controllers-->

			<!--_Executer-->
			<script type="module" src="../Client Side/Executor_Page_RateService.js"></script>
			<!--_Executer-->
			<!--Javascripts-->
		</body>
		</html>
<?php 
	}
}else if(!isset($_GET["rateToken"]) || !isset($_GET["codeDetailsBase"]) || !isset($_GET["token"])){
	
	echo "No generated token!";
	header("Refresh:4;".$landingPage_EndUser);
}
?>