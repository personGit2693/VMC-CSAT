/*Import*/
import {respondentId, buildingId, floorId} from "../../Global JS/Values_Page_RateService.js";
import {officeDetails_Array} from "./Request_Offices.js";
/*Import*/


/*Component*/
function OfficeRadioBtn(){
	let elemValue = "";
	const elemImgSrc = "../../src/green check.png";

	let officeRadioBtn = "";
	for(let index=0; index < officeDetails_Array.length; index++){
		elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(officeDetails_Array[index]))));

		officeRadioBtn += `<div class="radioCheckFlex_RoClass">`+
			`<label for="`+elemValue+`" class="customRadioCheck_RoClass"><img src="`+elemImgSrc+`"></label>`+
			`<input type="radio" id="`+elemValue+`" name="office-Name" value="`+elemValue+`" onchange="radioCheckSelected(this), valueOffice(this.value), submitRequestServiceTypes(), submitRequestOfficeServices(), submitRequestQuestions(), submitRequestCommentQuestions()" autocomplete="off"/>`+
			`<div class="radioCheckTxtLabel_RoClass"><label for="`+elemValue+`" style="cursor:pointer">`+officeDetails_Array[index].office_value+`</label></div>`+
		`</div>`;
	}

	if(officeRadioBtn == ""){
		if(respondentId == "" && buildingId == "" && floorId == ""){
			officeRadioBtn = "Select Respondent, Point of Entry Location and floor.";
		}else if(respondentId == ""){
			officeRadioBtn = "Select Respondent.";
		}else if(buildingId == ""){
			officeRadioBtn = "Select Point of Entry Location.";
		}else if(floorId == ""){
			officeRadioBtn = "Select floor.";
		}else if(respondentId != "" && buildingId != "" && floorId != ""){
			officeRadioBtn = "No offices found to select!";
		}		
	}	

	return officeRadioBtn;
}
/*Component*/


/*Export*/
export default OfficeRadioBtn;
/*Export*/