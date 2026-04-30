/*Import*/
import token from "./../../Global Client Side/Token.js";
import {response_GenerateOfficeCode_Path, selectedPointOfEntry_Obj} from "./Values_Office.js";
import {submitGenerateOfficeCode} from "./Submit_GenerateOfficeCode.js";
/*Import*/


/*Controller*/
function controller_Btn_GenerateOfficeCode(){

	const dataObj = {endpoint: response_GenerateOfficeCode_Path, token, officeId: selectedPointOfEntry_Obj.office_id};
	const controllersObj = {};
	const loaderObj = {};

	submitGenerateOfficeCode(controller_Btn_GenerateOfficeCode, dataObj, controllersObj, loaderObj);
}
/*Controller*/


/*Declare Global*/
window.controller_Btn_GenerateOfficeCode = controller_Btn_GenerateOfficeCode;
/*Declare Global*/


/*Export*/
export default controller_Btn_GenerateOfficeCode;
/*Export*/
