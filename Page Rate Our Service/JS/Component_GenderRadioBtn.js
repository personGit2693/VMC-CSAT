/*Import*/
import {genderDetails_Array} from "./Request_Genders.js";
/*Import*/


/*Component*/
function GenderRadioBtn(){
	let elemValue = "";
	const elemImgSrc = "../../src/green check.png";

	let genderRadioBtn = "";
	for(let index=0; index < genderDetails_Array.length; index++){
		elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(genderDetails_Array[index]))));

		genderRadioBtn += `<div class="radioCheckFlex_RoClass">`+
			`<label for="`+elemValue+`" class="customRadioCheck_RoClass"><img src="`+elemImgSrc+`"></label>`+
			`<input type="radio" id="`+elemValue+`" name="gender-Name" value="`+elemValue+`" onchange="radioCheckSelected(this), valueGender(this.value)" autocomplete="off"/>`+
			`<div class="radioCheckTxtLabel_RoClass">`+genderDetails_Array[index].gender_value+`</div>`+
		`</div>`;
	}

	if(genderRadioBtn == ""){
		genderRadioBtn = "No genders found to select!";
	}

	return genderRadioBtn;
}
/*Component*/


/*Export*/
export default GenderRadioBtn;
/*Export*/