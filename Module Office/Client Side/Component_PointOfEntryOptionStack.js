/*Import*/
import {pointOfEntry_Array} from "./Request_PointOfEntry.js";
/*Import*/


/*Component*/
async function PointOfEntryOptionStack(){

	const requestPromise = new Promise(function(resolve){

		let pointOfEntryOptionStack = "";

		const opts = [];
		for(let index = 0; index < pointOfEntry_Array.length; index++){
			const entry = pointOfEntry_Array[index];
			const elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(entry))));
			opts.push(`<div class="selectDropdownOpt_RoClass" onclick="displaySelectedOpt(this, '180px'), controller_DivOption_AssignSelectedPointOfEntry(), controller_SearchArea_DisplayMonitoring()">
				<input type="hidden" class="optValue_RoClass" value="${elemValue}">
				<div class="optIcon_RoClass" style="--optIcon: url('../../src/${entry.office_icon}');"></div>
				<div class="optText_RoClass" title="${entry.office_abbre}">${entry.office_value}</div>
			</div>`);
		}

		pointOfEntryOptionStack = opts.join('');

		resolve(pointOfEntryOptionStack);
	});

	return await requestPromise;
}
/*Component*/


/*Export*/
export default PointOfEntryOptionStack;
/*Export*/