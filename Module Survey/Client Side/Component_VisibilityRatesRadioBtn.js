/*Import*/
import {visibilityRateDetails_Array} from "./Request_VisibilityRates.js";
/*Import*/


/*Component*/
function VisibilityRatesRadioBtn(){

	let elemValue = "";

	const elemImgSrc = "../../src/green check.png";

	let visibilityRatesRadioBtn = "";

	for(let index=0; index < visibilityRateDetails_Array.length; index++){

		elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(visibilityRateDetails_Array[index]))));

		visibilityRatesRadioBtn += `<div class="radioCheckFlex_RoClass">`+
			`<label for="`+elemValue+`" class="customRadioCheck_RoClass"><img src="`+elemImgSrc+`"></label>`+
			`<input type="radio" id="`+elemValue+`" name="visibilityRate-Name" value="`+elemValue+`" data-rogridradio-check="false" onclick="radioCheckSelected(this), controller_RadioBtn_AssignVisibilityRatingValue(this.value, this), controller_RadioBtn_ListCcHelpfulnessRates()" autocomplete="off"/>`+
			`<div class="radioCheckTxtLabel_RoClass"><label for="`+elemValue+`" style="cursor:pointer">`+visibilityRateDetails_Array[index].ccquestionsrate_value+`</label></div>`+
		`</div>`;
	}

	return visibilityRatesRadioBtn;
}
/*Component*/


/*Export*/
export default VisibilityRatesRadioBtn;
/*Export*/