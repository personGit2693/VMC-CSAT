/*Import*/
import {helpfulnessRateDetails_Array} from "./Request_HelpfulnessRates.js";
/*Import*/


/*Component*/
function HelpfulnessRatesRadioBtn(){

	let elemValue = "";

	const elemImgSrc = "../../src/green check.png";

	let helpfulnessRatesRadioBtn = "";

	for(let index=0; index < helpfulnessRateDetails_Array.length; index++){

		elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(helpfulnessRateDetails_Array[index]))));

		helpfulnessRatesRadioBtn += `<div class="radioCheckFlex_RoClass">`+
			`<label for="`+elemValue+`" class="customRadioCheck_RoClass"><img src="`+elemImgSrc+`"></label>`+
			`<input type="radio" id="`+elemValue+`" name="helpfulnessRate-Name" value="`+elemValue+`" data-rogridradio-check="false" onclick="radioCheckSelected(this), controller_RadioBtn_AssignHelpfulnessRatingValue(this.value, this)" autocomplete="off"/>`+
			`<div class="radioCheckTxtLabel_RoClass"><label for="`+elemValue+`" style="cursor:pointer">`+helpfulnessRateDetails_Array[index].ccquestionsrate_value+`</label></div>`+
		`</div>`;
	}

	return helpfulnessRatesRadioBtn;
}
/*Component*/


/*Export*/
export default HelpfulnessRatesRadioBtn;
/*Export*/