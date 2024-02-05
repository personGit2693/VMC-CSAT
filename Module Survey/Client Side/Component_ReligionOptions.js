/*Import*/
import {religionDetails_Array} from "./Request_Religions.js";
/*Import*/


/*Component*/
function ReligionsOptions(){

	let elemValue = "";

	const elemImgSrc = "../../src/religion icon.png";

	let religionsOptions = "";

	for(let index=0; index < religionDetails_Array.length; index++){

		elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(religionDetails_Array[index]))));

		religionsOptions += `<div class="selectDropdownOpt_RoClass" onclick="displaySelectedOpt(this, '180px'), controller_Option_AssignReligionValue()">`+
			`<input type="hidden" class="optValue_RoClass" value="`+elemValue+`">`+
			`<div class="optIcon_RoClass" style="--optIcon: url('`+elemImgSrc+`');"></div>`+
			`<div class="optText_RoClass">`+religionDetails_Array[index].religion_name+`</div>`+
		`</div>`;
	}

	return religionsOptions;
}
/*Component*/


/*Export*/
export default ReligionsOptions;
/*Export*/