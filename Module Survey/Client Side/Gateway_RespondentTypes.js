/*Import*/
import {requestRespondentTypes} from "./Request_RespondentTypes.js";
/*Import*/


/*Gateway*/
async function gatewayRespondentTypes(){
	
	const gatewayPromise = new Promise(function(resolve){

		requestRespondentTypes()
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
window.gatewayRespondentTypes = gatewayRespondentTypes;
/*Declare global*/


/*Export*/
export default gatewayRespondentTypes;
/*Export*/