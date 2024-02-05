/*Import*/
import token from "../../Global Client Side/Token.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var officeServiceDetails_Array = null;
/*Export variables*/


/*Get Office Services*/
async function requestOfficeServices(serviceTypeId, clientTypeId, officeId){
	
	const requestPromise = new Promise(function(resolve){
		
		/*Form data*/
		const fData = new FormData(); 
		fData.append("token", token);
		fData.append("serviceTypeId", serviceTypeId);
		fData.append("clientTypeId", clientTypeId);
		fData.append("officeId", officeId);
		/*Form data*/


		/*Fetch method*/
		fetch("../Server Side/Response_OfficeServices.php", {method: "POST", body: fData})
		.then(res => res.json())
		.then(parseObj => {

			if(parseObj.validAccess !== true){

				console.log("Invalid Access!");

			}else if(parseObj.serverConnection !== null){

				console.log("Connection Lost!");

			}else if(parseObj.validToken !== null){

				console.log("Invalid Token!");

			}else if(parseObj.execution !== true){

				console.log("Execution Problem in Request Office Services!");

			}else if(parseObj.validAccess === true && parseObj.serverConnection === null && parseObj.validToken === null && parseObj.execution === true){

				officeServiceDetails_Array = parseObj.officeServiceDetails_Array;

				resolve(true);
			}
		});
		/*Fetch method*/
		
	});


	return await requestPromise;
};
/*Get Office Services*/


/*Export*/
export {requestOfficeServices, officeServiceDetails_Array};
/*Export*/