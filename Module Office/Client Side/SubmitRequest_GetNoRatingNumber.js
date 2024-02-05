/*Import*/
import gatewayGetNoRatingNumber from "./Gateway_GetNoRatingNumber.js";
import {noRatingNumberDetails_Array} from "./Request_GetNoRatingNumber.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitGetNoRatingNumber(output, assignValue, officeId, noRating_Id, clientTypeInternal, clientTypeExternal, dateFrom, dateTo, notifierNewRespondent, currentNewRespondent){

	if(blockRequest === false){

		blockRequest = true;

		gatewayGetNoRatingNumber(officeId, noRating_Id, clientTypeInternal, clientTypeExternal, dateFrom, dateTo)
		.then(gatewayPromise => {
			
			if(gatewayPromise === true){								

				assignValue(noRatingNumberDetails_Array);

				output();

				notifierNewRespondent(currentNewRespondent);
			}

			blockRequest = false;
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitGetNoRatingNumber = submitGetNoRatingNumber;
/*Declare global*/


/*Export*/
export {submitGetNoRatingNumber, blockRequest};
/*Export*/
