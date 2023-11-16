/*Import*/
import {commentDisplay, commentStartIndex, selectedOffice_Obj, clientTypeInternal, clientTypeExternal} from "../../Global JS/Values_Module_Office.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "../../Global JS/JSCollection_Module_Office.js";
import {requestCommentDetails} from "./Request_CommentDetails.js";
/*Import*/


/*Gateway*/
async function gatewayCommentDetails(){
	
	const gatewayPromise = new Promise(function(resolve){
		
		requestCommentDetails(selectedOffice_Obj.office_id, clientTypeInternal, clientTypeExternal, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value, commentStartIndex, commentDisplay)
		.then(requestPromise => {
			if(requestPromise === true){
				resolve(true);
			}
		});	
	});

	return await gatewayPromise;
}
/*Gateway*/


/*Declare global*/
window.gatewayCommentDetails = gatewayCommentDetails;
/*Declare global*/