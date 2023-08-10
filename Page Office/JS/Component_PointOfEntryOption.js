/*Import*/
import {pointOfEntry_Array} from "./Request_PointOfEntry.js";
/*Import*/


/*Component*/
function PointOfEntryOption(){

	let pointOfEntryOption = "";
	for(let index=0; index < pointOfEntry_Array.length; index++){
		const elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(pointOfEntry_Array[index]))));

		pointOfEntryOption += `<div class="selectDropdownOpt_RoClass" onclick="displaySelectedOpt(this, '180px'), valueSelectedOfficeObj(), submitRequestOverallServRate(), submitRequestOverallStronglyAgree(), submitRequestOverallAgree(), submitRequestOverallNeither(), submitRequestOverallDisagree(), submitRequestOverallStronglyDisagree(), submitRequestOverallNoRating(), submitRequestCommentDetails()"">`+
			`<input type="hidden" class="optValue_RoClass" value="`+elemValue+`">`+
			`<div class="optIcon_RoClass" style="--optIcon: url('../../src/`+pointOfEntry_Array[index].office_icon+`');"></div>`+
			`<div class="optText_RoClass" title="`+pointOfEntry_Array[index].office_abbre+`">`+pointOfEntry_Array[index].office_value+`</div>`+
		`</div>`;
	}

	if(pointOfEntryOption == ""){
		pointOfEntryOption = "No Result";
	}

	return pointOfEntryOption;
}
/*Component*/


/*Export*/
export default PointOfEntryOption;
/*Export*/