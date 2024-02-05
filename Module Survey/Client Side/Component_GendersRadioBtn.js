/*Import*/
import {genderDetails_Array} from "./Request_Genders.js";
/*Import*/


/*Component*/
function GendersRadioBtn(){

	let elemValue = "";
	const elemImgSrc = "../../src/green check.png";

	let gendersRadioBtn = "";

	for(let index=0; index < genderDetails_Array.length; index++){

		elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(genderDetails_Array[index]))));

		gendersRadioBtn += `<div class="radioCheckFlex_RoClass">`+
			`<label for="`+elemValue+`" class="customRadioCheck_RoClass"><img src="`+elemImgSrc+`"></label>`+
			`<input type="radio" id="`+elemValue+`" name="gender-Name" value="`+elemValue+`" data-rogridradio-check="false" onclick="radioCheckSelected(this), controller_RadioBtn_AssignGender(this.value, this)" autocomplete="off"/>`+
			`<div class="radioCheckTxtLabel_RoClass"><label for="`+elemValue+`" style="cursor:pointer">`+genderDetails_Array[index].gender_value+`</label></div>`+
		`</div>`;
	}

	return gendersRadioBtn;
}
/*Component*/


/*Export*/
export default GendersRadioBtn;
/*Export*/