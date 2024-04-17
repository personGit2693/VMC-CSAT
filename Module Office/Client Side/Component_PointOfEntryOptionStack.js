/*Import*/
import {pointOfEntry_Array} from "./Request_PointOfEntry.js";
/*Import*/


/*Component*/
function PointOfEntryOptionStack(){

	let pointOfEntryOptionStack = "";

	for(let index=0; index < pointOfEntry_Array.length; index++){
		
		const elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(pointOfEntry_Array[index]))));

		pointOfEntryOptionStack += `<div class="selectDropdownOpt_RoClass" onclick="displaySelectedOpt(this, '180px'), controller_DivOption_AssignSelectedPointOfEntry(), controller_SearchArea_DisplayMonitoring()">`+
			`<input type="hidden" class="optValue_RoClass" value="`+elemValue+`">`+
			`<div class="optIcon_RoClass" style="--optIcon: url('../../src/`+pointOfEntry_Array[index].office_icon+`');"></div>`+
			`<div class="optText_RoClass" title="`+pointOfEntry_Array[index].office_abbre+`">`+pointOfEntry_Array[index].office_value+`</div>`+
		`</div>`;
	}

	return pointOfEntryOptionStack;
}
/*Component*/


/*Export*/
export default PointOfEntryOptionStack;
/*Export*/