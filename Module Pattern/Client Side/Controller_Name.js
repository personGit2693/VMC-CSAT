/*Import*/
import token from "./../../Global Client Side/Token.js";
import {response_Name_Path, data1, data2} from "./Values_Pattern.js";
import {submitName} from "./Submit_Name.js";
import myFunctionOrController from "./MyFunctionOrController.js";
/*Import*/


/*Controller*/
function controller_Name(elem){

	const dataObj = {endpoint:response_Name_Path, elem, token, data1, data2};
	const controllersObj = {myFunctionOrController};
	const loaderObj = {};

	submitName(controller_Name, dataObj, controllersObj, loaderObj);
}
/*Controller*/


/*Declare Global*/
window.controller_Name = controller_Name;
/*Declare Global*/


/*Export*/
export default controller_Name;
/*Export*/
