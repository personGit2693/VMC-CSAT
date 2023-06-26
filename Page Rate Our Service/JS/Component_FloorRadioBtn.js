/*Import*/
import {floorDetails_Array} from "./Request_Floors.js";
/*Import*/


/*Component*/
function FloorRadioBtn(){
	let elemValue = "";
	const elemImgSrc = "../../src/green check.png";

	let floorRadioBtn = "";
	for(let index=0; index < floorDetails_Array.length; index++){
		elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(floorDetails_Array[index]))));

		floorRadioBtn += `<div class="radioCheckFlex_RoClass">`+
			`<label for="`+elemValue+`" class="customRadioCheck_RoClass"><img src="`+elemImgSrc+`"></label>`+
			`<input type="radio" id="`+elemValue+`" name="floor-Name" value="`+elemValue+`" onchange="radioCheckSelected(this), valueFloor(this.value), submitRequestOffices()" autocomplete="off"/>`+
			`<div class="radioCheckTxtLabel_RoClass">`+floorDetails_Array[index].floorAbbre+`</div>`+
		`</div>`;
	}

	if(floorRadioBtn == ""){
		floorRadioBtn = "No floors found!";
	}

	return floorRadioBtn;
}
/*Component*/


/*Export*/
export default FloorRadioBtn;
/*Export*/