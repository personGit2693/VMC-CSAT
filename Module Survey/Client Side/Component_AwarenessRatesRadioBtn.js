/*Import*/
import {awarenessRateDetails_Array} from "./Request_AwarenessRates.js";
/*Import*/


/*Component*/
function AwarenessRatesRadioBtn(){

	let elemValue = "";

	const elemImgSrc = "../../src/green check.png";

	let awarenessRatesRadioBtn = "";

	for(let index=0; index < awarenessRateDetails_Array.length; index++){

		elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(awarenessRateDetails_Array[index]))));

		awarenessRatesRadioBtn += `<div class="radioCheckFlex_RoClass">`+
			`<label for="`+elemValue+`" class="customRadioCheck_RoClass"><img src="`+elemImgSrc+`"></label>`+
			`<input type="radio" id="`+elemValue+`" name="awarenessRate-Name" value="`+elemValue+`" data-rogridradio-check="false" onclick="radioCheckSelected(this), controller_RadioBtn_AssignAwarenessRatingValue(this.value, this), controller_RadioBtn_ListCcVisibilityRates()" autocomplete="off"/>`+
			`<div class="radioCheckTxtLabel_RoClass"><label for="`+elemValue+`" style="cursor:pointer">`+awarenessRateDetails_Array[index].ccquestionsrate_value+`</label></div>`+
		`</div>`;
	}

	return awarenessRatesRadioBtn;
}
/*Component*/


/*Export*/
export default AwarenessRatesRadioBtn;
/*Export*/