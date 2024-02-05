/*Import*/
import {requestReligions} from "./Request_Religions.js";
/*Import*/


/*Gateway*/
async function gatewayReligions(searchReligionValue){
	
	const gatewayPromise = new Promise(function(resolve){

		requestReligions(searchReligionValue)
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
window.gatewayReligions = gatewayReligions;
/*Declare global*/


/*Export*/
export default gatewayReligions;
/*Export*/