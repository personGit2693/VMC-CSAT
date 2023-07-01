/*Import*/
import {officeServiceDetails_Array} from "./Request_OfficeServices.js";
/*Import*/


/*Component*/
function OfficeServiceCheckbox(){
	let elemValue = "";
	const elemImgSrc = "../../src/green check.png";

	let officeServiceCheckbox = "";
	for(let index=0; index < officeServiceDetails_Array.length; index++){
		elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(officeServiceDetails_Array[index]))));

		officeServiceCheckbox += `<div class="cusCheckBoxPaper_RoClass">`+
			`<label for="`+elemValue+`"><div class="boxme_RoClass"><img src="`+elemImgSrc+`"></div> `+officeServiceDetails_Array[index].officeservice_name+`</label>`+
			`<input type="checkbox" id="`+elemValue+`" value="`+elemValue+`" name="officeService-Name" onchange="checkCusCheckBox(this), availedOfficeServices(this.value, this)" autocomplete="off">`+			
		`</div>`;
	}

	if(officeServiceCheckbox == ""){
		officeServiceCheckbox = "No Services found to select!";
	}

	return officeServiceCheckbox;
}
/*Component*/


/*Export*/
export default OfficeServiceCheckbox;
/*Export*/