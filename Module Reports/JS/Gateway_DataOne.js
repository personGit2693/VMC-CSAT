/*Import*/
import {requestDataOne} from "./Request_DataOne.js";
/*Import*/


/*Gateway*/
async function gatewayDataOne(officeId, dateFrom, dateTo){

	const gatewayPromise = new Promise(function(resolve){

		requestDataOne(officeId, dateFrom, dateTo)
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
window.gatewayDataOne = gatewayDataOne;
/*Declare global*/


/*Export*/
export default gatewayDataOne;
/*Export*/