/*Import*/
import gatewayGetOfficeServiceAvailed from "./Gateway_GetOfficeServiceAvailed.js";
import {availedOfficeService_Array} from "./Request_GetOfficeServiceAvailed.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitGetOfficeServiceAvailed(output, assignValue, officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){

	if(blockRequest === false){

		blockRequest = true;

		gatewayGetOfficeServiceAvailed(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo)
		.then(gatewayPromise => {
			
			if(gatewayPromise === true){								

				assignValue(availedOfficeService_Array);

				output();				
			}

			blockRequest = false;
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitGetOfficeServiceAvailed = submitGetOfficeServiceAvailed;
/*Declare global*/


/*Export*/
export {submitGetOfficeServiceAvailed, blockRequest};
/*Export*/
