/*Import*/
import {helpfulnessRateDetails_Array} from "./Request_HelpfulnessRates.js";
/*Import*/


/*Component*/
function HelpfulnessRateRadioBtn(){
	let elemValue = "";
	const elemImgSrc = "../../src/green check.png";

	let helpfulnessRateRadioBtn = "";
	for(let index=0; index < helpfulnessRateDetails_Array.length; index++){
		elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(helpfulnessRateDetails_Array[index]))));

		helpfulnessRateRadioBtn += `<div class="radioCheckFlex_RoClass">`+
			`<label for="`+elemValue+`" class="customRadioCheck_RoClass"><img src="`+elemImgSrc+`"></label>`+
			`<input type="radio" id="`+elemValue+`" name="helpfulnessRate-Name" value="`+elemValue+`" onchange="radioCheckSelected(this), valueHelpfulnessRating(this.value)" autocomplete="off"/>`+
			`<div class="radioCheckTxtLabel_RoClass"><label for="`+elemValue+`" style="cursor:pointer">`+helpfulnessRateDetails_Array[index].ccquestionsrate_value+`</label></div>`+
		`</div>`;
	}

	if(helpfulnessRateRadioBtn == ""){
		helpfulnessRateRadioBtn = "No options for Helpfulness Rating to select!";
	}

	return helpfulnessRateRadioBtn;
}
/*Component*/


/*Export*/
export default HelpfulnessRateRadioBtn;
/*Export*/