/*Import*/
import token from "./../../Global Client Side/Token.js";
import {response_PointOfEntry_Path, valuePointOfEntry_StartIndex, searchPointOfEntry_Value, pointOfEntry_StartIndex, pointOfEntry_Display} from "./Values_Office.js";
import {submitPointOfEntry, blockRequest} from "./Submit_PointOfEntry.js";
import outputPointOfEntryOptionStack from "./Output_PointOfEntryOptionStack.js";
import outputPointOfEntryOptionLoader from "./Output_PointOfEntryOptionLoader.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Controller*/
function controller_DivOptionWrap_SearchPopulatePointOfEntry(divOptionWrap){

	if((divOptionWrap.scrollTop + divOptionWrap.offsetHeight) >= divOptionWrap.scrollHeight){

		if(blockRequest === false){

			valuePointOfEntry_StartIndex();

			const dataObj = {endpoint: response_PointOfEntry_Path, token, searchPointOfEntry: searchPointOfEntry_Value, startIn: pointOfEntry_StartIndex, maxDisplayRow: pointOfEntry_Display};
			const controllersObj = {outputFn: outputPointOfEntryOptionStack};
			const loaderObj = {boxLoader: outputPointOfEntryOptionLoader, boxLoader_Id: "pointOfEntryOptionLoader-Id"};

			submitPointOfEntry(controller_DivOptionWrap_SearchPopulatePointOfEntry, dataObj, controllersObj, loaderObj);
		}
	}
}
/*Controller*/


/*Declare Global*/
window.controller_DivOptionWrap_SearchPopulatePointOfEntry = controller_DivOptionWrap_SearchPopulatePointOfEntry;
/*Declare Global*/


/*Export*/
export default controller_DivOptionWrap_SearchPopulatePointOfEntry;
/*Export*/
