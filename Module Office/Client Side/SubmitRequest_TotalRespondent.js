/*Import*/
import gatewayTotalRespondent from "./Gateway_TotalRespondent.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitTotalRespondent(output, boxLoader, boxLoader_Id, officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){

	if(blockRequest === false){

		blockRequest = true;

		boxLoader();

		gatewayTotalRespondent(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo)
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
window.submitTotalRespondent = submitTotalRespondent;
/*Declare global*/


/*Export*/
export {submitTotalRespondent, blockRequest};
/*Export*/
