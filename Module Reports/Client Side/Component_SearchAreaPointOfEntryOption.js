/*Import*/
import {pointOfEntryDetails_Array} from "./Request_PointOfEntry.js";
/*Import*/


/*Component*/
function SearchAreaPointOfEntryOption(){

	let searchAreaPointOfEntryOption = "";

	for(let index=0; index < pointOfEntryDetails_Array.length; index++){
		
		const elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(pointOfEntryDetails_Array[index]))));

		searchAreaPointOfEntryOption += `<div class="selectDropdownOpt_RoClass" onclick="displaySelectedOpt(this, '250px'), controller_DivOption_AssignSelectedOffice('`+elemValue+`'), controller_SearchArea_DisplayTables()">`+
			`<input type="hidden" class="optValue_RoClass" value="`+elemValue+`">`+
			`<div class="optIcon_RoClass" style="--optIcon: url('../../src/`+pointOfEntryDetails_Array[index].office_icon+`');"></div>`+
			`<div class="optText_RoClass" title="`+pointOfEntryDetails_Array[index].office_abbre+`">`+pointOfEntryDetails_Array[index].office_value+`</div>`+
		`</div>`;
	}

	return searchAreaPointOfEntryOption;
}
/*Component*/


/*Export*/
export default SearchAreaPointOfEntryOption;
/*Export*/