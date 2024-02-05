/*Import*/
import {requestAccountSession} from "./Request_AccountSession.js";
/*Import*/


/*Gateway*/
async function gatewayAccountSession(accountDetails_Obj, accToken){
	
	const gatewayPromise = new Promise(function(resolve){

		requestAccountSession(accountDetails_Obj, accToken)
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
window.gatewayAccountSession = gatewayAccountSession;
/*Declare global*/


/*Export*/
export default gatewayAccountSession;
/*Export*/