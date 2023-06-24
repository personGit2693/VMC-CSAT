/*Import*/
import {buildingDetails_Array} from "./Request_Buildings.js";
/*Import*/


/*Component*/
function BuildingRadioBtn(){
	let elemValue = "";
	const elemImgSrc = "../../src/green check.png";

	let buildingRadioBtn = "";
	for(let index=0; index < buildingDetails_Array.length; index++){
		elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(buildingDetails_Array[index]))));

		buildingRadioBtn += `<div class="radioCheckFlex_RoClass">`+
			`<label for="`+elemValue+`" class="customRadioCheck_RoClass"><img src="`+elemImgSrc+`"></label>`+
			`<input type="radio" id="`+elemValue+`" name="building-Name" value="`+elemValue+`" onchange="radioCheckSelected(this), submitRequestFloors(this.value)" autocomplete="off"/>`+
			`<div class="radioCheckTxtLabel_RoClass">`+buildingDetails_Array[index].building_name+`</div>`+
		`</div>`;
	}

	return buildingRadioBtn;
}
/*Component*/


/*Export*/
export default BuildingRadioBtn;
/*Export*/