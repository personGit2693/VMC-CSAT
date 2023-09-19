/*Import*/
import {selectedOffice_Obj} from "../../Global JS/Values_Page_Dashboard.js";
import {requestGenerateOfficeCode, generatedOfficeCode} from "./Request_GenerateOfficeCode.js";
/*Import*/


/*Gateway*/
const gatewayGenerateOfficeCode = () =>{
	requestGenerateOfficeCode(selectedOffice_Obj);

	if(generatedOfficeCode != null && generatedOfficeCode != ""){
		alert("Please provide this code to the respondent: " + generatedOfficeCode);
	}
}
/*Gateway*/


/*Declare global*/
window.gatewayGenerateOfficeCode = gatewayGenerateOfficeCode;
/*Declare global*/