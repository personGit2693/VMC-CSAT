/*Import*/
import token from "./../../Global Client Side/Token.js";
import {response_PointOfEntry_Path, resetPointOfEntry_StartIndex, searchPointOfEntry_Value, pointOfEntry_StartIndex, pointOfEntry_Display, valueSearchPointOfEntry} from "./Values_Office.js";
import {pointOfEntryOptsWrap} from "./Elements_Page_RatingMonitoring.js";
import {submitPointOfEntry} from "./Submit_PointOfEntry.js";
import outputPointOfEntryOption from "./Output_PointOfEntryOption.js";
import outputPointOfEntryOptionLoader from "./Output_PointOfEntryOptionLoader.js";
/*Import*/


/*Controller*/
function controller_InputText_SearchFindPointOfEntry(searchPointOfEntryValue){

	resetPointOfEntry_StartIndex();
	pointOfEntryOptsWrap.scrollTop = 0;

	valueSearchPointOfEntry(searchPointOfEntryValue);

	const dataObj = {endpoint: response_PointOfEntry_Path, token, searchPointOfEntry: searchPointOfEntry_Value, startIn: pointOfEntry_StartIndex, maxDisplayRow: pointOfEntry_Display};
	const controllersObj = {outputFn: outputPointOfEntryOption};
	const loaderObj = {boxLoader: outputPointOfEntryOptionLoader, boxLoader_Id: "pointOfEntryOptionLoader-Id"};

	submitPointOfEntry(controller_InputText_SearchFindPointOfEntry, dataObj, controllersObj, loaderObj);
}
/*Controller*/


/*Declare Global*/
window.controller_InputText_SearchFindPointOfEntry = controller_InputText_SearchFindPointOfEntry;
/*Declare Global*/


/*Export*/
export default controller_InputText_SearchFindPointOfEntry;
/*Export*/
