/*Import*/
import {requestCcDataTwo} from "./Request_CcDataTwo.js";
/*Import*/


/*Gateway*/
async function gatewayCcDataTwo(officeId, dateFrom, dateTo){

	const gatewayPromise = new Promise(function(resolve){

		requestCcDataTwo(officeId, dateFrom, dateTo)
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
window.gatewayCcDataTwo = gatewayCcDataTwo;
/*Declare global*/


/*Export*/
export default gatewayCcDataTwo;
/*Export*/