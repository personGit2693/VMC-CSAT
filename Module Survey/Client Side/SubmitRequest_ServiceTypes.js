/*Import*/
import gatewayServiceTypes from "./Gateway_ServiceTypes.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitServiceTypes(output, boxLoader, boxLoader_Id, respondentId, clientTypeId, officeId){

	if(blockRequest === false){

		blockRequest = true;

		boxLoader();

		gatewayServiceTypes(respondentId, clientTypeId, officeId)
		.then(gatewayPromise => {

			if(document.getElementById(boxLoader_Id) !== null){
					
				document.getElementById(boxLoader_Id).remove();
			}
			

			if(gatewayPromise === true){								

				output();
			}

			blockRequest = false;
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitServiceTypes = submitServiceTypes;
/*Declare global*/


/*Export*/
export {submitServiceTypes, blockRequest};
/*Export*/
