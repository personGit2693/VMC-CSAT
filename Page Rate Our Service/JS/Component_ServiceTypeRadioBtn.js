/*Import*/
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
			`<input type="radio" id="`+elemValue+`" name="serviceType-Name" value="`+elemValue+`" onchange="radioCheckSelected(this), valueServiceType(this.value)" autocomplete="off"/>`+
			`<div class="radioCheckTxtLabel_RoClass">`+serviceTypeDetails_Array[index].serviceTypeValue+`</div>`+
		`</div>`;
	}

	if(serviceTypeRadioBtn == ""){
		serviceTypeRadioBtn = "No Service-Type found yet! Select Respondent and Point of Entry Department Visited first.";
	}

	return serviceTypeRadioBtn;
}
/*Component*/


/*Export*/
export default ServiceTypeRadioBtn;
/*Export*/