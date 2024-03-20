/*Import*/
import {commentDetails_Array} from "./Request_Comments.js";
import gatewayComments from "./Gateway_Comments.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitComments(output, boxLoader, boxLoader_Id, officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo, stronglyAgree_Id, agree_Id, noRating_Id, commentDisplay, commentStartIndex, valueCommentStartIndex, comments_PageNo){

	if(blockRequest === false){

		blockRequest = true;

		boxLoader();

		gatewayComments(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo, stronglyAgree_Id, agree_Id, noRating_Id, commentDisplay, commentStartIndex)
		.then(gatewayPromise => {

			if(document.getElementById(boxLoader_Id) !== null){
					
				document.getElementById(boxLoader_Id).remove();
			}

			
			if(gatewayPromise === true){								

				if(commentDetails_Array.length === 0 && comments_PageNo > 1){

					valueCommentStartIndex(false);
				}

				output();				
			}

			blockRequest = false;
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitComments = submitComments;
/*Declare global*/


/*Export*/
export {submitComments, blockRequest};
/*Export*/
