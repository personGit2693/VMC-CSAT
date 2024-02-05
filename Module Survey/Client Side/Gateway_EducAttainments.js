/*Import*/
import {requestEducAttainments} from "./Request_EducAttainments.js";
/*Import*/


/*Gateway*/
async function gatewayEducAttainments(){
	
	const gatewayPromise = new Promise(function(resolve){

		requestEducAttainments()
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
window.gatewayEducAttainments = gatewayEducAttainments;
/*Declare global*/


/*Export*/
export default gatewayEducAttainments;
/*Export*/