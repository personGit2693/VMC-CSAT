/*Import*/
import gatewayGetDisagreeNumber from "./Gateway_GetDisagreeNumber.js";
import {disagreeNumberDetails_Array} from "./Request_GetDisagreeNumber.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitGetDisagreeNumber(output, assignValue, clientTypeInternal, clientTypeExternal, officeId, dateFrom, dateTo, disagree_Id, notifierNewRespondent, currentNewRespondent){

	if(blockRequest === false){

		blockRequest = true;

		gatewayGetDisagreeNumber(clientTypeInternal, clientTypeExternal, officeId, dateFrom, dateTo, disagree_Id)
		.then(gatewayPromise => {
			
			if(gatewayPromise === true){								

				assignValue(disagreeNumberDetails_Array);

				output();

				notifierNewRespondent(currentNewRespondent);
			}

			blockRequest = false;
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitGetDisagreeNumber = submitGetDisagreeNumber;
/*Declare global*/


/*Export*/
export {submitGetDisagreeNumber, blockRequest};
/*Export*/
