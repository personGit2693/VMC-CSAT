/*Import*/
import {requestQuestionsDataTwo} from "./Request_QuestionsDataTwo.js";
/*Import*/


/*Gateway*/
async function gatewayQuestionsDataTwo(officeId, dateFrom, dateTo){
	
	const gatewayPromise = new Promise(function(resolve){

		requestQuestionsDataTwo(officeId, dateFrom, dateTo)
		.then((requestPromise) => {

			if(requestPromise === true){
				
				resolve(true);
			}
		});
	});

	return await gatewayPromise;
}
/*Gateway*/


/*Declare global*/
window.gatewayQuestionsDataTwo = gatewayQuestionsDataTwo;
/*Declare global*/


/*Export*/
export default gatewayQuestionsDataTwo;
/*Export*/