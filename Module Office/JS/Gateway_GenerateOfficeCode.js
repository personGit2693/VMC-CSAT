/*Import*/
import {selectedOffice_Obj} from "../../Global JS/Values_Module_Office.js";
import {requestGenerateOfficeCode, generatedOfficeCode} from "./Request_GenerateOfficeCode.js";
/*Import*/


/*Gateway*/
async function gatewayGenerateOfficeCode(){

	const gatewayPromise = new Promise(function(resolve){

		requestGenerateOfficeCode(selectedOffice_Obj.office_id)
		.then(requestPromise => {
			if(requestPromise === true){

				if(generatedOfficeCode != null && generatedOfficeCode != ""){
					alert("Please provide this code to the respondent: " + generatedOfficeCode);
				}
				
				resolve(true);
			}
		});		
	});

	return await gatewayPromise;
}
/*Gateway*/


/*Declare global*/
window.gatewayGenerateOfficeCode = gatewayGenerateOfficeCode;
/*Declare global*/