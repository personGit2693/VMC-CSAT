/*Import*/
import {selectedPointOfEntry_Obj} from "./Values_Office.js";
import {submitGenerateOfficeCode} from "./SubmitRequest_GenerateOfficeCode.js";
/*Import*/


/*Controller*/
function controller_Btn_GenerateOfficeCode(){

	submitGenerateOfficeCode(selectedPointOfEntry_Obj.office_id);
}
/*Controller*/


/*Declare Global*/
window.controller_Btn_GenerateOfficeCode = controller_Btn_GenerateOfficeCode;
/*Declare Global*/


/*Export*/
export default controller_Btn_GenerateOfficeCode;
/*Export*/