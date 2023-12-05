/*Import*/
import {requestGenerateOfficeCode, generatedOfficeCode} from "./Request_GenerateOfficeCode.js";
/*Import*/


/*Gateway*/
async function gatewayGenerateOfficeCode(officeId){

	const gatewayPromise = new Promise(function(resolve){

		requestGenerateOfficeCode(officeId)
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


/*Export*/
export default gatewayGenerateOfficeCode;
/*Export*/