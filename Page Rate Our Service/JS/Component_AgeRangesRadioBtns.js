/*Import*/
import {ageRangeDetails_Array} from "./Request_AgeRanges.js";
/*Import*/


/*Component*/
function AgeRangesRadioBtns(){
	let elemValue = "";
	const elemImgSrc = "../../src/green check.png";

	let ageRangesRadioBtns = "";
	for(let index=0; index < ageRangeDetails_Array.length; index++){
		elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(ageRangeDetails_Array[index]))));

		ageRangesRadioBtns += `<div class="radioCheckFlex_RoClass">`+
			`<label for="`+elemValue+`" class="customRadioCheck_RoClass"><img src="`+elemImgSrc+`"></label>`+
			`<input type="radio" id="`+elemValue+`" name="age-Name" value="`+elemValue+`" onchange="radioCheckSelected(this), valueAgeRange(this.value)" autocomplete="off"/>`+
			`<div class="radioCheckTxtLabel_RoClass">`+ageRangeDetails_Array[index].agerange_value+`</div>`+
		`</div>`;
	}

	if(ageRangesRadioBtns == ""){
		ageRangesRadioBtns = "No Age ranges found to select!";
	}

	return ageRangesRadioBtns;
}
/*Component*/


/*Export*/
export default AgeRangesRadioBtns;
/*Export*/