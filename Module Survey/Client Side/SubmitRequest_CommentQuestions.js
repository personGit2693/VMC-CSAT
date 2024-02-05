/*Import*/
import gatewayCommentQuestions from "./Gateway_CommentQuestions.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitCommentQuestions(output, boxLoader, boxLoader_Id, clientTypeId, officeId){

	if(blockRequest === false){

		blockRequest = true;

		boxLoader();

		gatewayCommentQuestions(clientTypeId, officeId)
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
window.submitCommentQuestions = submitCommentQuestions;
/*Declare global*/


/*Export*/
export {submitCommentQuestions, blockRequest};
/*Export*/
