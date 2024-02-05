/*Import*/
import gatewayEncodeNewRespondent from "./Gateway_EncodeNewRespondent.js";
import {dataUpdated, endPoint, execution, validToken, serverConnection, validAccess} from "./Request_EncodeNewRespondent.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitEncodeNewRespondent(showSpinningLoad, removeSpinningLoad, submittedRate, surveyRatingSender_Obj){

	if(blockRequest === false){

		blockRequest = true;

		showSpinningLoad();

		gatewayEncodeNewRespondent()
		.then(gatewayPromise => {

			/*
			if(document.getElementById(boxLoader_Id) !== null){
					
				document.getElementById(boxLoader_Id).remove();
			}
			*/
			

			if(gatewayPromise === true){								

				if(validAccess != true || serverConnection != null || validToken != null || execution != true || dataUpdated == 0){

					surveyRatingSender_Obj.submitDeleteEncoded(showSpinningLoad, removeSpinningLoad, submittedRate, surveyRatingSender_Obj);

				}else if (validAccess == true && serverConnection == null || validToken == null || execution == true || dataUpdated != 0){

					window.location.href = endPoint;
				}
			}

			removeSpinningLoad();

			blockRequest = false;
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitEncodeNewRespondent = submitEncodeNewRespondent;
/*Declare global*/


/*Export*/
export {submitEncodeNewRespondent, blockRequest};
/*Export*/
