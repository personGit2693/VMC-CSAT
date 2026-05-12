/*Import*/
import token from "./../../Global Client Side/Token.js";
import {response_PointOfEntry_Path, searchPointOfEntry_Value, pointOfEntry_StartIndex, pointOfEntry_Display} from "./Values_Office.js";
import {submitPointOfEntry} from "./Submit_PointOfEntry.js";
import outputPointOfEntryOption from "./Output_PointOfEntryOption.js";
import outputPointOfEntryOptionLoader from "./Output_PointOfEntryOptionLoader.js";
/*Import*/


/*Controller*/
function controller_Doc_SearchPopulatePointOfEntry(){

	const dataObj = {endpoint: response_PointOfEntry_Path, token, searchPointOfEntry: searchPointOfEntry_Value, startIn: pointOfEntry_StartIndex, maxDisplayRow: pointOfEntry_Display};
	const controllersObj = {outputFn: outputPointOfEntryOption};
	const loaderObj = {boxLoader: outputPointOfEntryOptionLoader, boxLoader_Id: "pointOfEntryOptionLoader-Id"};

	submitPointOfEntry(controller_Doc_SearchPopulatePointOfEntry, dataObj, controllersObj, loaderObj);
}
/*Controller*/


/*Declare Global*/
window.controller_Doc_SearchPopulatePointOfEntry = controller_Doc_SearchPopulatePointOfEntry;
/*Declare Global*/


/*Export*/
export default controller_Doc_SearchPopulatePointOfEntry;
/*Export*/
