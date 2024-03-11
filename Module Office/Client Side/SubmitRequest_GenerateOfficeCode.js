/*Import*/
import gatewayGenerateOfficeCode from "./Gateway_GenerateOfficeCode.js";
import {generatedOfficeCode} from "./Request_GenerateOfficeCode.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitGenerateOfficeCode(officeId){

	if(blockRequest === false){

		blockRequest = true;

		gatewayGenerateOfficeCode(officeId)
		.then(gatewayPromise => {
			
			if(gatewayPromise === true){								

				if(generatedOfficeCode == "" || generatedOfficeCode == null){

					alert("Please try again with selected point of entry.");

				}else if(generatedOfficeCode != "" && generatedOfficeCode != null){

					alert("Please provide this passcode to the client: "+generatedOfficeCode);
				}				
			}

			blockRequest = false;
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitGenerateOfficeCode = submitGenerateOfficeCode;
/*Declare global*/


/*Export*/
export {submitGenerateOfficeCode, blockRequest};
/*Export*/
