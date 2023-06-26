/*Import*/
import {officeServiceDetails_Array} from "./Request_OfficeServices.js";
/*Import*/


/*Component*/
function OfficeServiceRadioBtn(){
	let elemValue = "";
	const elemImgSrc = "../../src/green check.png";

	let officeServiceRadioBtn = "";
	for(let index=0; index < officeServiceDetails_Array.length; index++){
		elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(officeServiceDetails_Array[index]))));

		officeServiceRadioBtn += `<div class="radioCheckFlex_RoClass">`+
			`<label for="`+elemValue+`" class="customRadioCheck_RoClass"><img src="`+elemImgSrc+`"></label>`+
			`<input type="radio" id="`+elemValue+`" name="officeService-Name" value="`+elemValue+`" onchange="radioCheckSelected(this), valueOfficeService(this.value)" autocomplete="off"/>`+
			`<div class="radioCheckTxtLabel_RoClass">`+officeServiceDetails_Array[index].officeservice_name+`</div>`+
		`</div>`;
	}

	if(officeServiceRadioBtn == ""){
		officeServiceRadioBtn = "No Services found to select!";
	}

	return officeServiceRadioBtn;
}
/*Component*/


/*Export*/
export default OfficeServiceRadioBtn;
/*Export*/