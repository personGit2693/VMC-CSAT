/*Import*/
import {requestGenders} from "./Request_Genders.js";
/*Import*/


/*Gateway*/
async function gatewayGenders(){
	
	const gatewayPromise = new Promise(function(resolve){

		requestGenders()
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
window.gatewayGenders = gatewayGenders;
/*Declare global*/


/*Export*/
export default gatewayGenders;
/*Export*/