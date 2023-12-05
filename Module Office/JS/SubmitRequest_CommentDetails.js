/*Import*/
import gatewayCommentDetails from "./Gateway_CommentDetails.js";
/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


/*Submit function*/
function submitRequestCommentDetails(renderer_Param, loader_Param, boxLoader_Id, officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo, commentStartIndex, commentDisplay){

	if(blockRequest === false){

		blockRequest = true;
		loader_Param();		

		gatewayCommentDetails(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo, commentStartIndex, commentDisplay)
		.then(gatewayPromise => {		

			if(gatewayPromise === true){

				if(document.getElementById(boxLoader_Id) !== null){
					
					document.getElementById(boxLoader_Id).remove();
				}
																		
				renderer_Param();
				blockRequest = false;					
			}
		});
	}
}
/*Submit function*/


/*Declaire global*/
window.submitRequestCommentDetails = submitRequestCommentDetails;
/*Declaire global*/


/*Export*/
export {submitRequestCommentDetails, blockRequest};
/*Export*/