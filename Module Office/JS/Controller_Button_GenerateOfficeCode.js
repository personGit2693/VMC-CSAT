/*Import*/
import {selectedOffice_Obj} from "../../Global JS/Values_Module_Office.js";
import {submitGenerateOfficeCode} from "./SubmitRequest_GenerateOfficeCode.js";
/*Import*/


/*Controller for invoking submitGenerateOfficeCode*/
function controller_Button_GenerateOfficeCode(){

	submitGenerateOfficeCode(selectedOffice_Obj.office_id);
}
/*Controller for invoking submitGenerateOfficeCode*/


/*Declare Global*/
window.controller_Button_GenerateOfficeCode = controller_Button_GenerateOfficeCode
/*Declare Global*/


/*Export*/
export default controller_Button_GenerateOfficeCode;
/*Export*/