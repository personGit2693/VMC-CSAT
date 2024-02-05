/*Import*/
import token from "../../Global Client Side/Token.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var neitherNumberDetails_Array = null;
/*Export variables*/


/*Get Neither Number*/
async function requestGetNeitherNumber(clientTypeInternal, clientTypeExternal, officeId, dateFrom, dateTo, neither_Id){
	
	const requestPromise = new Promise(function(resolve){
		
		/*Form data*/
		const fData = new FormData(); 
		fData.append("token", token);
		fData.append("officeId", officeId);
		fData.append("clientTypeInternal", clientTypeInternal);
		fData.append("clientTypeExternal", clientTypeExternal);
		fData.append("dateFrom", dateFrom);
		fData.append("dateTo", dateTo);	
		fData.append("neither_Id", neither_Id);
		/*Form data*/


		/*Fetch method*/
		fetch("../Server Side/Response_GetNeitherNumber.php", {method: "POST", body: fData})
		.then(res => res.json())
		.then(parseObj => {

			if(parseObj.validAccess !== true){

				console.log("Invalid Access!");

			}else if(parseObj.serverConnection !== null){

				console.log("Connection Lost!");

			}else if(parseObj.validToken !== null){

				console.log("Invalid Token!");

			}else if(parseObj.execution === false){

				console.log("Execution Problem in Request Neither Number!");

			}else if(parseObj.validAccess === true && parseObj.serverConnection === null && parseObj.validToken === null && parseObj.execution !== false){

				neitherNumberDetails_Array = parseObj.neitherNumberDetails_Array;

				resolve(true);
			}
		});
		/*Fetch method*/
		
	});


	return await requestPromise;
};
/*Get Neither Number*/


/*Export*/
export {requestGetNeitherNumber, neitherNumberDetails_Array};
/*Export*/