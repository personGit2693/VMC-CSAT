/*Import*/
import {serviceTypeId, respondentId, officeId} from "../../Global JS/Values_Page_RateService.js";
import {officeServiceDetails_Array} from "./Request_OfficeServices.js";
/*Import*/


/*Component*/
function OfficeServiceRadio(){
	let elemValue = "";
	const elemImgSrc = "../../src/green check.png";

	let officeServiceRadio = "";
	for(let index=0; index < officeServiceDetails_Array.length; index++){
		elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(officeServiceDetails_Array[index]))));

		officeServiceRadio += `<div class="radioCheckFlex_RoClass">`+
			`<label for="`+elemValue+`" class="customRadioCheck_RoClass"><img src="`+elemImgSrc+`"></label>`+
			`<input type="radio" id="`+elemValue+`" name="officeService-Name" value="`+elemValue+`" onchange="radioCheckSelected(this), valueOfficeService(this.value)" autocomplete="off"/>`+
			`<div class="radioCheckTxtLabel_RoClass"><label for="`+elemValue+`" style="cursor:pointer">`+officeServiceDetails_Array[index].officeservice_name+`</label></div>`+
		`</div>`;		
	}

	if(officeServiceRadio == ""){
		if(serviceTypeId == "" && respondentId == "" && officeId == ""){
			officeServiceRadio = "Select Respondent, Point of Entry Department Visited and Service-Type.";
		}else if(serviceTypeId == ""){
			officeServiceRadio = "Select Service-Type.";
		}else if(respondentId == ""){
			officeServiceRadio = "Select Respondent.";
		}else if(officeId == ""){
			officeServiceRadio = "Select Point of Entry Department Visited.";
		}else if(serviceTypeId != "" && respondentId != "" && officeId != ""){
			officeServiceRadio = "No Services found to select!";
		}		
	}

	return officeServiceRadio;
}
/*Component*/


/*Export*/
export default OfficeServiceRadio;
/*Export*/