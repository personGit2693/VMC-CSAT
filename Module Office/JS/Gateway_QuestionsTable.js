/*Import*/
import {requestQuestionsScores} from "./Request_QuestionsTable.js";
/*Import*/


/*Gateway*/
async function gatewayQuestionsTable(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){

	const gatewayPromise = new Promise(function(resolve){

		requestQuestionsScores(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo)
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
window.gatewayQuestionsTable = gatewayQuestionsTable;
/*Declare global*/


/*Export*/
export default gatewayQuestionsTable;
/*Export*/