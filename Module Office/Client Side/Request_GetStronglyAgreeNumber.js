/*Import*/
import token from "../../Global Client Side/Token.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var stronglyAgreeNumberDetails_Array = null;
/*Export variables*/


/*Get Strongly Agree Number*/
async function requestGetStronglyAgreeNumber(clientTypeInternal, clientTypeExternal, officeId, dateFrom, dateTo, stronglyAgree_Id){
	
	const requestPromise = new Promise(function(resolve){
		
		/*Form data*/
		const fData = new FormData(); 
		fData.append("token", token);
		fData.append("officeId", officeId);
		fData.append("clientTypeInternal", clientTypeInternal);
		fData.append("clientTypeExternal", clientTypeExternal);
		fData.append("dateFrom", dateFrom);
		fData.append("dateTo", dateTo);	
		fData.append("stronglyAgree_Id", stronglyAgree_Id);
		/*Form data*/


		/*Fetch method*/
		fetch("../Server Side/Response_GetStronglyAgreeNumber.php", {method: "POST", body: fData})
		.then(res => res.json())
		.then(parseObj => {

			if(parseObj.validAccess !== true){

				console.log("Invalid Access!");

			}else if(parseObj.serverConnection !== null){

				console.log("Connection Lost!");

			}else if(parseObj.validToken !== null){

				console.log("Invalid Token!");

			}else if(parseObj.execution === false){

				console.log("Execution Problem in Request Strongly Agree Number!");

			}else if(parseObj.validAccess === true && parseObj.serverConnection === null && parseObj.validToken === null && parseObj.execution !== false){

				stronglyAgreeNumberDetails_Array = parseObj.stronglyAgreeNumberDetails_Array;

				resolve(true);
			}
		});
		/*Fetch method*/
		
	});


	return await requestPromise;
};
/*Get Strongly Agree Number*/


/*Export*/
export {requestGetStronglyAgreeNumber, stronglyAgreeNumberDetails_Array};
/*Export*/