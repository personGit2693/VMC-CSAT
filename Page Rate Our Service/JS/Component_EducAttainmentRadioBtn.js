/*Import*/
import {educAttainmentDetails_Array} from "./Request_EducAttainment.js";
/*Import*/


/*Component*/
function EducAttainmentRadioBtn(){
	let elemValue = "";
	const elemImgSrc = "../../src/green check.png";

	let educAttainmentRadioBtn = "";
	for(let index=0; index < educAttainmentDetails_Array.length; index++){
		elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(educAttainmentDetails_Array[index]))));

		educAttainmentRadioBtn += `<div class="radioCheckFlex_RoClass">`+
			`<label for="`+elemValue+`" class="customRadioCheck_RoClass"><img src="`+elemImgSrc+`"></label>`+
			`<input type="radio" id="`+elemValue+`" name="educAttainment-Name" value="`+elemValue+`" onchange="radioCheckSelected(this)" autocomplete="off"/>`+
			`<div class="radioCheckTxtLabel_RoClass">`+educAttainmentDetails_Array[index].educattain_value+`</div>`+
		`</div>`;
	}

	return educAttainmentRadioBtn;
}
/*Component*/


/*Export*/
export default EducAttainmentRadioBtn;
/*Export*/