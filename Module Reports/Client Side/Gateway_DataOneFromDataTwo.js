/*Import*/
import {requestDataOneFromDataTwo} from "./Request_DataOneFromDataTwo.js";
/*Import*/


/*Gateway*/
async function gatewayDataOneFromDataTwo(external_clientTypeId, office_id, dateFrom, dateTo){
	
	const gatewayPromise = new Promise(function(resolve){

		requestDataOneFromDataTwo(external_clientTypeId, office_id, dateFrom, dateTo)
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
window.gatewayDataOneFromDataTwo = gatewayDataOneFromDataTwo;
/*Declare global*/


/*Export*/
export default gatewayDataOneFromDataTwo;
/*Export*/