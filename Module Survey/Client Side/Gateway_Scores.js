/*Import*/
import {requestScores} from "./Request_Scores.js";
/*Import*/


/*Gateway*/
async function gatewayScores(){
	
	const gatewayPromise = new Promise(function(resolve){

		requestScores()
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
window.gatewayScores = gatewayScores;
/*Declare global*/


/*Export*/
export default gatewayScores;
/*Export*/