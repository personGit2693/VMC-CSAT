/*Import*/
import {respondentId, officeId} from "../../Global JS/Values_Page_RateService.js";
import {serviceTypeDetails_Array} from "./Request_ServiceTypes.js";
/*Import*/


/*Component*/
function ServiceTypeRadioBtn(){
	let elemValue = "";
	const elemImgSrc = "../../src/green check.png";

	let serviceTypeRadioBtn = "";
	for(let index=0; index < serviceTypeDetails_Array.length; index++){
		elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(serviceTypeDetails_Array[index]))));

		serviceTypeRadioBtn += `<div class="radioCheckFlex_RoClass">`+
			`<label for="`+elemValue+`" class="customRadioCheck_RoClass"><img src="`+elemImgSrc+`"></label>`+
			`<input type="radio" id="`+elemValue+`" name="serviceType-Name" value="`+elemValue+`" onchange="radioCheckSelected(this), valueServiceType(this.value), submitRequestOfficeServices()" autocomplete="off"/>`+
			`<div class="radioCheckTxtLabel_RoClass"><label for="`+elemValue+`" style="cursor:pointer">`+serviceTypeDetails_Array[index].serviceTypeValue+`</label></div>`+
		`</div>`;
	}

	if(serviceTypeRadioBtn == ""){
		if(respondentId == "" && officeId == ""){
			serviceTypeRadioBtn = "Select Respondent and Point of Entry Department Visited.";
		}else if(respondentId == ""){
			serviceTypeRadioBtn = "Select Respondent.";
		}else if(officeId == ""){
			serviceTypeRadioBtn = "Select Point of Entry Department Visited.";
		}else if(respondentId != "" && officeId != ""){
			serviceTypeRadioBtn = "No Service-Type found to select!";
		}		
	}

	return serviceTypeRadioBtn;
}
/*Component*/


/*Export*/
export default ServiceTypeRadioBtn;
/*Export*/