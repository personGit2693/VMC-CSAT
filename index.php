<!DOCTYPE html>
<html>
<head>
	<title>VMC CSAT</title>
	<link rel="stylesheet" type="text/css" href="./Module Index/Style/index.css">
	<link rel="shortcut icon" href="./src/vmclogo.png">		
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
			<div class="pageHeaderTxt">Data Privacy Policy</div>
			<div class="pageHeaderSubtxt">To learn more about data privacy visit Republic Act 10173 – Data Privacy Act of 2012</div>
		</div>
	</div>
	<!--Page Header-->


	<!--Page Content-->
	<div class="pageContentWrapFlex">
		<!--_Policy-->
		<div class="policyDetailsItem">
			<!--_ _Policy date details-->
			<div class="policyDateDetailsWrap">				
				<div class="policyDateTxt">Confidentiality and Nondisclosure Agreement</div>
				<div class="policyUpToDateTxt">Our Data Privacy Policy is up to date.</div>
			</div>
			<!--_ _Policy date details-->


			<!--_ _Policy big label-->
			<div class="policyBigLabelTxt">Your Privacy Matters</div>
			<!--_ _Policy big label-->


			<!--_ _Policy Paragraph-->
			<div class="policyParagraph-Class">
				I agree with the following statements:
				<br><br>
				I have read and understood Privacy Policy.
				<br><br>
				I understand that I may come in contact with confidential information during the course of preparing and consolidating the reports for the Client Experience Survey. As part of the condition as the personnel-in-charge for this report, I hereby undertake to keep in strict confidence any information found in the survey. I will do this in accordance with the privacy policy and applicable laws, including those that require mandatory reporting.
				<br><br>
				I will not divulge any confidential information that may be gathered about the client through the survey form.
				<br><br>
				I also agree to never remove any confidential material of any kind from the premises, unless, authorized as part of my duties, or with the expressed permission of direction to do so from the respective offices.
			</div>
			<!--_ _Policy Paragraph-->


			<!--_ _Accept terms and agreement-->
			<div class="policyAgreeTermsWrap">
				<div class="cusCheckBoxPaper_RoClass agreeTermsCheckbox-Class">
					<label for="agreeTermsCheckbox-Id">I agree to the Terms of Use and Data Privacy Policy:<div class="boxme_RoClass"><img src="./src/checkIcon.png"></div></label>
					<input type="checkbox" id="agreeTermsCheckbox-Id" onchange="checkCusCheckBox(this), controller_InputCheckbox_EnableRateOurServBtn()" autocomplete="off">
				</div>

				<button class="normButton_RoClass" id="rateOurServBtn-Id" style="margin: 5px auto; visibility: hidden;" onclick="controller_Btn_ProceedToSurvey()">Rate our service</button>
			</div>
			<!--_ _Accept terms and agreement-->			
		</div>		
		<!--_Policy-->		
	</div>
	<!--Page Content-->


	<!--Loading-->
	<div class="spinnerLoad_RoClass" style="--topSpinBlurrer: 1;">
		<img src="./src/Spinner.gif">
	</div>
	<!--Loading-->


	<!--Modals-->
	<div class="modalmeCon_RoClass" style="--topOnBlurrer: 1;">
		<div class="modalme_RoClass enterCodeModal-Class">
			<div class="modalHeader_RoClass">
				<div class="modalHeadTxt_RoClass">Provide the code</div>
			</div>
			<div class="modalBody_RoClass">
				<div class="fieldsWrapFlex">
					<div id="notiEnterCodeModal-Id" style="width: 100%;"></div>
					<div class="message-Class">Hingin po ang code sa opisina na nais ninyong bigyan ng grado.</div>
					<div class="cusInputs_RoClass" style="width: 100%;">					
						<input type="text" onfocusout="lowlightInWrap(this, '#303238')" onfocus="highlightInWrap(this, '#285FF3')" id="inputCode-Id" onkeyup="controller_InputText_CheckInputCode(event)" autocomplete="off" required>
						<div class="placeholdme_RoClass">Enter code</div>
					</div>
					<button class="normButton_RoClass" id="verifyCodeBtn-Id" style="margin-top: 5px;" onclick="controller_Btn_CheckInputCode()">Verify Code</button>
				</div>
			</div>			
		</div>
	</div>
	<!--Modals-->

	<!--Javascripts-->
	<!--_Dependencies-->
	<script type="text/javascript" src="Rogrid/Scripts/RogridNodeScript_Index.js"></script>
	<!--_Dependencies-->

	<!--_Controllers-->
	<script type="module" src="Module Index/Client Side/Controller_InputCheckbox_EnableRateOurServBtn.js"></script>
	<script type="module" src="Module Index/Client Side/Controller_InputText_CheckInputCode.js"></script>
	<script type="module" src="Module Index/Client Side/Controller_Btn_CheckInputCode.js"></script>
	<script type="module" src="Module Index/Client Side/Controller_Btn_ProceedToSurvey.js"></script>
	<!--_Controllers-->

	<!--_Executer-->
	<script type="module" src="Module Index/Client Side/Executor_Index.js"></script>
	<!--_Executer-->
	<!--Javascripts-->	
</body>
</html>