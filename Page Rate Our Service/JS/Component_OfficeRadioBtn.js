/*Import*/
import {officeDetails_Array} from "./Request_Offices.js";
/*Import*/


/*Component*/
function OfficeRadioBtn(){
	let elemValue = "";
	const elemImgSrc = "../../src/green check.png";

	let officeRadioBtn = "";
	for(let index=0; index < officeDetails_Array.length; index++){
		elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(officeDetails_Array[index]))));

		officeRadioBtn += `<div class="radioCheckFlex_RoClass">`+
			`<label for="`+elemValue+`" class="customRadioCheck_RoClass"><img src="`+elemImgSrc+`"></label>`+
			`<input type="radio" id="`+elemValue+`" name="office-Name" value="`+elemValue+`" onchange="radioCheckSelected(this), valueOffice(this.value), submitRequestServiceTypes(), submitRequestOfficeServices()" autocomplete="off"/>`+
			`<div class="radioCheckTxtLabel_RoClass">`+officeDetails_Array[index].office_value+`</div>`+
		`</div>`;
	}

	if(officeRadioBtn == ""){
		officeRadioBtn = "No offices found to select!";
	}

	return officeRadioBtn;
}
/*Component*/


/*Export*/
export default OfficeRadioBtn;
/*Export*/