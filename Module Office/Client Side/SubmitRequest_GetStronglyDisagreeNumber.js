/*Import*/
import gatewayGetStronglyDisagreeNumber from "./Gateway_GetStronglyDisagreeNumber.js";
import {stronglyDisagreeNumberDetails_Array} from "./Request_GetStronglyDisagreeNumber.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitGetStronglyDisagreeNumber(output, assignValue, officeId, stronglyDisagree_Id, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){

	if(blockRequest === false){

		blockRequest = true;

		gatewayGetStronglyDisagreeNumber(officeId, stronglyDisagree_Id, clientTypeInternal, clientTypeExternal, dateFrom, dateTo)
		.then(gatewayPromise => {
			
			if(gatewayPromise === true){								

				assignValue(stronglyDisagreeNumberDetails_Array);

				output();				
			}

			blockRequest = false;
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitGetStronglyDisagreeNumber = submitGetStronglyDisagreeNumber;
/*Declare global*/


/*Export*/
export {submitGetStronglyDisagreeNumber, blockRequest};
/*Export*/
