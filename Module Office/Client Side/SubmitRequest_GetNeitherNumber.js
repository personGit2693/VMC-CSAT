/*Import*/
import gatewayGetNeitherNumber from "./Gateway_GetNeitherNumber.js";
import {neitherNumberDetails_Array} from "./Request_GetNeitherNumber.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitGetNeitherNumber(output, assignValue, clientTypeInternal, clientTypeExternal, officeId, dateFrom, dateTo, neither_Id){

	if(blockRequest === false){

		blockRequest = true;

		gatewayGetNeitherNumber(clientTypeInternal, clientTypeExternal, officeId, dateFrom, dateTo, neither_Id)
		.then(gatewayPromise => {
			
			if(gatewayPromise === true){								

				assignValue(neitherNumberDetails_Array);

				output();				
			}

			blockRequest = false;
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitGetNeitherNumber = submitGetNeitherNumber;
/*Declare global*/


/*Export*/
export {submitGetNeitherNumber, blockRequest};
/*Export*/
