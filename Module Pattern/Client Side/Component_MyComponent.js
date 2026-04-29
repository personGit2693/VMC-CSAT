/*Import*/
import {patientDetails} from "./Values_Patient_Profile.js";
import {patientRecords} from "./Request_GetPatientRecords.js";
/*Import*/


/*Component*/
async function MyComponent(){	

	const requestPromise = new Promise(function(resolve){

		let myComponent = `
			<h1>Hello World</h1>
		`;

		resolve(myComponent);
	});

	
	return await requestPromise;
}
/*Component*/


/*Export*/
export default MyComponent;
/*Export*/