/*Import*/
import token from "../../Global Client Side/Token.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var serviceTypeDetails_Array = null;
/*Export variables*/


/*Get Service Types*/
async function requestServiceTypes(respondentId, clientTypeId, officeId){
	
	const requestPromise = new Promise(function(resolve){
		
		/*Form data*/
		const fData = new FormData(); 
		fData.append("token", token);
		fData.append("respondentId", respondentId);
		fData.append("clientTypeId", clientTypeId);
		fData.append("officeId", officeId);
		/*Form data*/


		/*Fetch method*/
		fetch("../Server Side/Response_ServiceTypes.php", {method: "POST", body: fData})
		.then(res => res.json())
		.then(parseObj => {

			if(parseObj.validAccess !== true){

				console.log("Invalid Access!");

			}else if(parseObj.serverConnection !== null){

				console.log("Connection Lost!");

			}else if(parseObj.validToken !== null){

				console.log("Invalid Token!");

			}else if(parseObj.execution !== true){

				console.log("Execution Problem in Request Service Types!");

			}else if(parseObj.validAccess === true && parseObj.serverConnection === null && parseObj.validToken === null && parseObj.execution === true){

				serviceTypeDetails_Array = parseObj.serviceTypeDetails_Array;

				resolve(true);
			}
		});
		/*Fetch method*/
		
	});


	return await requestPromise;
};
/*Get Service Types*/


/*Export*/
export {requestServiceTypes, serviceTypeDetails_Array};
/*Export*/