/*Import*/
import gatewayQuestions from "./Gateway_Questions.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitQuestions(output, boxLoader, boxLoader_Id, officeId, clientTypeId, submitRequest_Scores, controllers_Array){

	if(blockRequest === false){

		blockRequest = true;

		boxLoader();

		gatewayQuestions(officeId, clientTypeId)
		.then(gatewayPromise => {

			if(document.getElementById(boxLoader_Id) !== null){
					
				document.getElementById(boxLoader_Id).remove();
			}
			

			if(gatewayPromise === true){								

				controllers_Array.forEach(function(value, index, array){

					value();
				});

				submitRequest_Scores(output, boxLoader, boxLoader_Id);
			}

			blockRequest = false;
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitQuestions = submitQuestions;
/*Declare global*/


/*Export*/
export {submitQuestions, blockRequest};
/*Export*/
