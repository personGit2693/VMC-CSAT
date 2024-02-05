/*Import*/
import gatewayRespondentTypes from "./Gateway_RespondentTypes.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitRespondentTypes(output, boxLoader, boxLoader_Id){

	if(blockRequest === false){

		blockRequest = true;

		boxLoader();

		gatewayRespondentTypes()
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
window.submitRespondentTypes = submitRespondentTypes;
/*Declare global*/


/*Export*/
export {submitRespondentTypes, blockRequest};
/*Export*/
