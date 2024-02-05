/*Import*/
import {genderPrefDetails_Array} from "./Request_GenderPrefs.js";
/*Import*/


/*Component*/
function GenderPrefsRadioBtn(){

	let elemValue = "";

	const elemImgSrc = "../../src/green check.png";

	let genderPrefsRadioBtn = "";

	for(let index=0; index < genderPrefDetails_Array.length; index++){

		elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(genderPrefDetails_Array[index]))));

		genderPrefsRadioBtn += `<div class="radioCheckFlex_RoClass">`+
			`<label for="`+elemValue+`" class="customRadioCheck_RoClass"><img src="`+elemImgSrc+`"></label>`+
			`<input type="radio" id="`+elemValue+`" name="genderPref-Name" value="`+elemValue+`" data-rogridradio-check="false" onclick="radioCheckSelected(this), controller_RadioBtn_AssignGenderPref(this.value, this)" autocomplete="off"/>`+
			`<div class="radioCheckTxtLabel_RoClass"><label for="`+elemValue+`" style="cursor:pointer">`+genderPrefDetails_Array[index].genderpreference_value+`</label></div>`+
		`</div>`;
	}

	return genderPrefsRadioBtn;
}
/*Component*/


/*Export*/
export default GenderPrefsRadioBtn;
/*Export*/