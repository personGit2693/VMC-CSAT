/*Import*/
import token from "../../Global Client Side/Token.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var stronglyDisagreeNumberDetails_Array = null;
/*Export variables*/


/*Count pass score*/
async function requestGetStronglyDisagreeNumber(officeId, stronglyDisagree_Id, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){
	
	const requestPromise = new Promise(function(resolve){
		
		/*Form data*/
		const fData = new FormData(); 
		fData.append("token", token);
		fData.append("officeId", officeId);
		fData.append("clientTypeInternal", clientTypeInternal);
		fData.append("clientTypeExternal", clientTypeExternal);
		fData.append("dateFrom", dateFrom);
		fData.append("dateTo", dateTo);	
		fData.append("stronglyDisagree_Id", stronglyDisagree_Id);
		/*Form data*/


		/*Fetch method*/
		fetch("../Server Side/Response_GetStronglyDisagreeNumber.php", {method: "POST", body: fData})
		.then(res => res.json())
		.then(parseObj => {

			if(parseObj.validAccess !== true){

				console.log("Invalid Access!");

			}else if(parseObj.serverConnection !== null){

				console.log("Connection Lost!");

			}else if(parseObj.validToken !== null){

				console.log("Invalid Token!");

			}else if(parseObj.execution === false){

				console.log("Execution Problem in Request Get Strongly Disagree Number!");

			}else if(parseObj.validAccess === true && parseObj.serverConnection === null && parseObj.validToken === null && parseObj.execution !== false){

				stronglyDisagreeNumberDetails_Array = parseObj.stronglyDisagreeNumberDetails_Array;

				resolve(true);
			}
		});
		/*Fetch method*/
		
	});


	return await requestPromise;
};
/*Count pass score*/


/*Export*/
export {requestGetStronglyDisagreeNumber, stronglyDisagreeNumberDetails_Array};
/*Export*/