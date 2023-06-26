/*Import*/
import {respondentDetails_Array} from "./Request_RespondentType.js";
/*Import*/


/*Components*/
function RespondentTypeRadioBtn(){
	let elemValue = "";
	const elemImgSrc = "../../src/green check.png";

	let respondentTypeRadioBtn = "";
	for(let index=0; index < respondentDetails_Array.length; index++){
		elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(respondentDetails_Array[index]))));

		respondentTypeRadioBtn += `<div class="radioCheckFlex_RoClass">`+
			`<label for="`+elemValue+`" class="customRadioCheck_RoClass"><img src="`+elemImgSrc+`"></label>`+
			`<input type="radio" id="`+elemValue+`" name="respondentType-Name" value="`+elemValue+`" onchange="radioCheckSelected(this), valueRespondentType(this.value), submitRequestServiceTypes()" autocomplete="off"/>`+
			`<div class="radioCheckTxtLabel_RoClass">`+respondentDetails_Array[index].respondent_name+`</div>`+
		`</div>`;
	}

	return respondentTypeRadioBtn;
}
/*Components*/


/*Export*/
export default RespondentTypeRadioBtn;
/*Export*/