/*Import*/
import {serviceTypeId, respondentId, officeId} from "../../Global JS/Values_Page_RateService.js";
import {officeServiceDetails_Array} from "./Request_OfficeServices.js";
/*Import*/


/*Component*/
function OfficeServiceCheckbox(){
	let elemValue = "";
	const elemImgSrc = "../../src/green check.png";

	let officeServiceCheckbox = "";
	for(let index=0; index < officeServiceDetails_Array.length; index++){
		elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(officeServiceDetails_Array[index]))));

		officeServiceCheckbox += `<div class="cusCheckBoxPaper_RoClass">`+
			`<label for="`+elemValue+`"><div class="boxme_RoClass"><img src="`+elemImgSrc+`"></div> `+officeServiceDetails_Array[index].officeservice_name+`</label>`+
			`<input type="checkbox" id="`+elemValue+`" value="`+elemValue+`" name="officeService-Name" onchange="checkCusCheckBox(this), valueOfficeServices(this.value, this)" autocomplete="off">`+			
		`</div>`;
	}

	if(officeServiceCheckbox == ""){
		if(serviceTypeId == "" && respondentId == "" && officeId == ""){
			officeServiceCheckbox = "Select Respondent, Point of Entry Department Visited and Service-Type.";
		}else if(serviceTypeId == ""){
			officeServiceCheckbox = "Select Service-Type.";
		}else if(respondentId == ""){
			officeServiceCheckbox = "Select Respondent.";
		}else if(officeId == ""){
			officeServiceCheckbox = "Select Point of Entry Department Visited.";
		}else if(serviceTypeId != "" && respondentId != "" && officeId != ""){
			officeServiceCheckbox = "No Services found to select!";
		}		
	}

	return officeServiceCheckbox;
}
/*Component*/


/*Export*/
export default OfficeServiceCheckbox;
/*Export*/