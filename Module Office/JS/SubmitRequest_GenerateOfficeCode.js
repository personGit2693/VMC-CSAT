/*Import*/
import gatewayGenerateOfficeCode from "./Gateway_GenerateOfficeCode.js";
/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


function submitGenerateOfficeCode(officeId){
	
	if(blockRequest === false){

		gatewayGenerateOfficeCode(officeId)
		.then(gatewayPromise => {
			
			if(gatewayPromise === true){

				blockRequest = false;
			}
		});	
	}
}


/*Declaire global*/
window.submitGenerateOfficeCode = submitGenerateOfficeCode;
/*Declaire global*/


/*Export*/
export {submitGenerateOfficeCode, blockRequest};
/*Export*/