/*Import*/
import {requestQuestions} from "./Request_Questions.js";
/*Import*/


/*Gateway*/
async function gatewayQuestions(officeId, clientTypeId){
	
	const gatewayPromise = new Promise(function(resolve){

		requestQuestions(officeId, clientTypeId)
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
window.gatewayQuestions = gatewayQuestions;
/*Declare global*/


/*Export*/
export default gatewayQuestions;
/*Export*/