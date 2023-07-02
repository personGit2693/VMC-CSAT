/*Import*/
import {awarenessRateDetails_Array} from "./Request_AwarenessRates.js";
/*Import*/


/*Component*/
function AwarenessRateRadioBtn(){
	let elemValue = "";
	const elemImgSrc = "../../src/green check.png";

	let awarenessRateRadioBtn = "";
	for(let index=0; index < awarenessRateDetails_Array.length; index++){
		elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(awarenessRateDetails_Array[index]))));

		awarenessRateRadioBtn += `<div class="radioCheckFlex_RoClass">`+
			`<label for="`+elemValue+`" class="customRadioCheck_RoClass"><img src="`+elemImgSrc+`"></label>`+
			`<input type="radio" id="`+elemValue+`" name="awarenessRate-Name" value="`+elemValue+`" onchange="radioCheckSelected(this)" autocomplete="off"/>`+
			`<div class="radioCheckTxtLabel_RoClass">`+awarenessRateDetails_Array[index].ccquestionsrate_value+`</div>`+
		`</div>`;
	}

	if(awarenessRateRadioBtn == ""){
		awarenessRateRadioBtn = "No options for Awareness Rating to select!";
	}

	return awarenessRateRadioBtn;
}
/*Component*/


/*Export*/
export default AwarenessRateRadioBtn;
/*Export*/