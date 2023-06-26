/*Import*/
import {genderPrefDetails_Array} from "./Request_GenderPrefs.js";
/*Import*/


/*Component*/
function GenderPrefRadioBtn(){
	let elemValue = "";
	const elemImgSrc = "../../src/green check.png";

	let genderPrefRadioBtn = "";
	for(let index=0; index < genderPrefDetails_Array.length; index++){
		elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(genderPrefDetails_Array[index]))));

		genderPrefRadioBtn += `<div class="radioCheckFlex_RoClass">`+
			`<label for="`+elemValue+`" class="customRadioCheck_RoClass"><img src="`+elemImgSrc+`"></label>`+
			`<input type="radio" id="`+elemValue+`" name="genderPref-Name" value="`+elemValue+`" onchange="radioCheckSelected(this), valueGenderPref(this.value)" autocomplete="off"/>`+
			`<div class="radioCheckTxtLabel_RoClass">`+genderPrefDetails_Array[index].genderpreference_value+`</div>`+
		`</div>`;
	}

	if(genderPrefRadioBtn == ""){
		genderPrefRadioBtn = "No gender preferences found to select!";
	}

	return genderPrefRadioBtn;
}
/*Component*/


/*Export*/
export default GenderPrefRadioBtn;
/*Export*/