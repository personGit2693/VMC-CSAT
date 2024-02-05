/*Import*/
import {educAttainmentDetails_Array} from "./Request_EducAttainments.js";
/*Import*/


/*Component*/
function EducAttainmentsRadioBtn(){

	let elemValue = "";

	const elemImgSrc = "../../src/green check.png";

	let educAttainmentRadioBtn = "";

	for(let index=0; index < educAttainmentDetails_Array.length; index++){

		elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(educAttainmentDetails_Array[index]))));

		educAttainmentRadioBtn += `<div class="radioCheckFlex_RoClass">`+
			`<label for="`+elemValue+`" class="customRadioCheck_RoClass"><img src="`+elemImgSrc+`"></label>`+
			`<input type="radio" id="`+elemValue+`" name="educAttainment-Name" value="`+elemValue+`" data-rogridradio-check="false" onclick="radioCheckSelected(this), controller_RadioBtn_AssignEducAttainValue(this.value, this)" autocomplete="off"/>`+
			`<div class="radioCheckTxtLabel_RoClass"><label for="`+elemValue+`" style="cursor:pointer">`+educAttainmentDetails_Array[index].educattain_value+`</label></div>`+
		`</div>`;
	}

	return educAttainmentRadioBtn;
}
/*Component*/


/*Export*/
export default EducAttainmentsRadioBtn;
/*Export*/