/*Import*/
import gatewayGetAgreeNumber from "./Gateway_GetAgreeNumber.js";
import {agreeNumberDetails_Array} from "./Request_GetAgreeNumber.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitGetAgreeNumber(output, assignValue, clientTypeInternal, clientTypeExternal, officeId, dateFrom, dateTo, agree_Id, notifierNewRespondent, currentNewRespondent){

	if(blockRequest === false){

		blockRequest = true;

		gatewayGetAgreeNumber(clientTypeInternal, clientTypeExternal, officeId, dateFrom, dateTo, agree_Id)
		.then(gatewayPromise => {
			
			if(gatewayPromise === true){								

				assignValue(agreeNumberDetails_Array);

				output();

				notifierNewRespondent(currentNewRespondent);
			}

			blockRequest = false;
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitGetAgreeNumber = submitGetAgreeNumber;
/*Declare global*/


/*Export*/
export {submitGetAgreeNumber, blockRequest};
/*Export*/
