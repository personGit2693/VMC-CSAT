/*Import*/
import gatewayDataOne from "./Gateway_DataOne.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitDataOne(output, boxLoader, boxLoader_Id, external_clientTypeId, office_id, dateFrom, dateTo){

	if(blockRequest === false){

		blockRequest = true;

		boxLoader();

		gatewayDataOne(external_clientTypeId, office_id, dateFrom, dateTo)
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
window.submitDataOne = submitDataOne;
/*Declare global*/


/*Export*/
export {submitDataOne, blockRequest};
/*Export*/
