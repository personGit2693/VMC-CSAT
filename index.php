<!DOCTYPE html>
<html>
<head>
	<title>VMC CSAT</title>
	<link rel="stylesheet" type="text/css" href="./index.css">
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
		<div class="pageHeaderTxt">Data Provicy Policy</div>
		<div class="pageHeaderSubtxt">To learn more about data privacy visit Republic Act 10173 – Data Privacy Act of 2012</div>
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
					<input type="checkbox" id="agreeTermsCheckbox-Id" onchange="checkCusCheckBox(this), switchRateOurServBtn()" autocomplete="off">
				</div>

				<button class="normButton_RoClass" id="rateOurServBtn-Id" style="margin: 5px auto;" onclick="redirectToRateServ()">Rate our service</button>
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

	<script type="text/javascript" src="./Rogrid/Scripts/RogridNodeScript_Index.js"></script>	
	<script type="text/javascript" src="JsCollection_Index.js"></script>	
	<script type="text/javascript" src="Request_GenerateRateToken.js"></script>
	<script type="text/javascript" src="Validation_PrivacyPolicy.js"></script>
	<script type="text/javascript" src="Portal_RateService.js"></script>
</body>
</html>