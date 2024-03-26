/*Import*/
import gatewayCommentReport from "./Gateway_CommentReport.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitCommentReport(output, boxLoader, boxLoader_Id, office_id, dateFrom, dateTo){

	if(blockRequest === false){

		blockRequest = true;

		boxLoader();

		gatewayCommentReport(office_id, dateFrom, dateTo)
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
window.submitCommentReport = submitCommentReport;
/*Declare global*/


/*Export*/
export {submitCommentReport, blockRequest};
/*Export*/
