/*Import*/
import {requestCommentReport} from "./Request_CommentReport.js";
/*Import*/


/*Gateway*/
async function gatewayCommentReport(office_id, dateFrom, dateTo){
	
	const gatewayPromise = new Promise(function(resolve){

		requestCommentReport(office_id, dateFrom, dateTo)
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
window.gatewayCommentReport = gatewayCommentReport;
/*Declare global*/


/*Export*/
export default gatewayCommentReport;
/*Export*/