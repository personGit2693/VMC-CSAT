/*Import*/
import gatewayGetStronglyAgreeNumber from "./Gateway_GetStronglyAgreeNumber.js";
import {stronglyAgreeNumberDetails_Array} from "./Request_GetStronglyAgreeNumber.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitGetStronglyAgreeNumber(output, assignValue, clientTypeInternal, clientTypeExternal, officeId, dateFrom, dateTo, stronglyAgree_Id){

	if(blockRequest === false){

		blockRequest = true;

		gatewayGetStronglyAgreeNumber(clientTypeInternal, clientTypeExternal, officeId, dateFrom, dateTo, stronglyAgree_Id)
		.then(gatewayPromise => {
			
			if(gatewayPromise === true){								

				assignValue(stronglyAgreeNumberDetails_Array);

				output();
			}

			blockRequest = false;
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitGetStronglyAgreeNumber = submitGetStronglyAgreeNumber;
/*Declare global*/


/*Export*/
export {submitGetStronglyAgreeNumber, blockRequest};
/*Export*/
