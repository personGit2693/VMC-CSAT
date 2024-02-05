/*Import*/
import {officeServiceDetails_Array} from "./Request_OfficeServices.js";
/*Import*/


/*Component*/
function OfficeServicesRadioBtn(){
	
	let elemValue = "";

	const elemImgSrc = "../../src/green check.png";

	let officeServicesRadioBtn = "";

	for(let index=0; index < officeServiceDetails_Array.length; index++){

		elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(officeServiceDetails_Array[index]))));

		officeServicesRadioBtn += `<div class="radioCheckFlex_RoClass">`+
			`<label for="`+elemValue+`" class="customRadioCheck_RoClass"><img src="`+elemImgSrc+`"></label>`+
			`<input type="radio" id="`+elemValue+`" name="officeService-Name" value="`+elemValue+`" data-rogridradio-check="false" onclick="radioCheckSelected(this), controller_RadioBtn_AssignOfficeServiceValue(this.value, this)" autocomplete="off"/>`+
			`<div class="radioCheckTxtLabel_RoClass"><label for="`+elemValue+`" style="cursor:pointer">`+officeServiceDetails_Array[index].officeservice_name+`</label></div>`+
		`</div>`;		
	}

	return officeServicesRadioBtn;
}
/*Component*/


/*Export*/
export default OfficeServicesRadioBtn;
/*Export*/