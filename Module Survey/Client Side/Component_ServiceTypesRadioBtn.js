/*Import*/
import {serviceTypeDetails_Array} from "./Request_ServiceTypes.js";
/*Import*/


/*Component*/
function ServiceTypesRadioBtn(){

	let elemValue = "";

	const elemImgSrc = "../../src/green check.png";

	let serviceTypesRadioBtn = "";

	for(let index=0; index < serviceTypeDetails_Array.length; index++){

		elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(serviceTypeDetails_Array[index]))));

		serviceTypesRadioBtn += `<div class="radioCheckFlex_RoClass">`+
			`<label for="`+elemValue+`" class="customRadioCheck_RoClass"><img src="`+elemImgSrc+`"></label>`+
			`<input type="radio" id="`+elemValue+`" name="serviceType-Name" value="`+elemValue+`" data-rogridradio-check="false" onclick="radioCheckSelected(this), controller_RadioBtn_AssignServiceTypeValue(this.value, this), controller_RadioBtn_OutputOfficeServices()" autocomplete="off"/>`+
			`<div class="radioCheckTxtLabel_RoClass"><label for="`+elemValue+`" style="cursor:pointer">`+serviceTypeDetails_Array[index].serviceTypeValue+`</label></div>`+
		`</div>`;
	}

	return serviceTypesRadioBtn;
}
/*Component*/


/*Export*/
export default ServiceTypesRadioBtn;
/*Export*/