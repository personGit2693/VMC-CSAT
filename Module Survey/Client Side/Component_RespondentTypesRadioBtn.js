/*Import*/
import {respondentDetails_Array} from "./Request_RespondentTypes.js";
/*Import*/


/*Components*/
function RespondentTypesRadioBtn(){

	let elemValue = "";
	
	const elemImgSrc = "../../src/green check.png";

	let respondentTypesRadioBtn = "";

	for(let index=0; index < respondentDetails_Array.length; index++){

		elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(respondentDetails_Array[index]))));

		respondentTypesRadioBtn += `<div class="radioCheckFlex_RoClass">`+
			`<label for="`+elemValue+`" class="customRadioCheck_RoClass"><img src="`+elemImgSrc+`"></label>`+
			`<input type="radio" id="`+elemValue+`" name="respondentType-Name" value="`+elemValue+`" data-rogridradio-check="false" onclick="radioCheckSelected(this), controller_RadioBtn_AssignRespondentValue(this.value, this), controller_RadioBtn_AssignOfficeValue(this), controller_RadioBtn_AssignClientTypeValue(this.value, this), controller_RadioBtn_OutputServiceTypes()" autocomplete="off"/>`+
			`<div class="radioCheckTxtLabel_RoClass"><label for="`+elemValue+`" style="cursor:pointer">`+respondentDetails_Array[index].respondent_name+`</label></div>`+
		`</div>`;
	}

	return respondentTypesRadioBtn;
}
/*Components*/


/*Export*/
export default RespondentTypesRadioBtn;
/*Export*/