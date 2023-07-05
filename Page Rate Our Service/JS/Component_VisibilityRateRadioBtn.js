/*Import*/
import {visibilityRateDetails_Array} from "./Request_VisibilityRates.js";
/*Import*/


/*Component*/
function VisibilityRateRadioBtn(){
	let elemValue = "";
	const elemImgSrc = "../../src/green check.png";

	let visibilityRateRadioBtn = "";
	for(let index=0; index < visibilityRateDetails_Array.length; index++){
		elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(visibilityRateDetails_Array[index]))));

		visibilityRateRadioBtn += `<div class="radioCheckFlex_RoClass">`+
			`<label for="`+elemValue+`" class="customRadioCheck_RoClass"><img src="`+elemImgSrc+`"></label>`+
			`<input type="radio" id="`+elemValue+`" name="visibilityRate-Name" value="`+elemValue+`" onchange="radioCheckSelected(this), valueVisibilityRating(this.value), submitValidationRequestHelpfulnessRates()" autocomplete="off"/>`+
			`<div class="radioCheckTxtLabel_RoClass"><label for="`+elemValue+`" style="cursor:pointer">`+visibilityRateDetails_Array[index].ccquestionsrate_value+`</label></div>`+
		`</div>`;
	}

	if(visibilityRateRadioBtn == ""){
		visibilityRateRadioBtn = "No options for Visibility Rating to select!";
	}

	return visibilityRateRadioBtn;
}
/*Component*/


/*Export*/
export default VisibilityRateRadioBtn;
/*Export*/