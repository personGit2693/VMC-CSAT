/*Import*/
import {requestGenderPrefs} from "./Request_GenderPrefs.js";
/*Import*/


/*Gateway*/
async function gatewayGenderPrefs(){
	
	const gatewayPromise = new Promise(function(resolve){

		requestGenderPrefs()
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
window.gatewayGenderPrefs = gatewayGenderPrefs;
/*Declare global*/


/*Export*/
export default gatewayGenderPrefs;
/*Export*/