/*Import*/
import token from "../../Global Client Side/Token.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var dataOne_Array = null;
/*Export variables*/


/*Get Data One*/
async function requestDataOne(external_clientTypeId, office_id, dateFrom, dateTo){
	
	const requestPromise = new Promise(function(resolve){
		
		/*Form data*/
		const fData = new FormData(); 
		fData.append("token", token);
		fData.append("external_clientTypeId", external_clientTypeId);
		fData.append("office_id", office_id);
		fData.append("dateFrom", dateFrom);
		fData.append("dateTo", dateTo);
		/*Form data*/


		/*Fetch method*/
		fetch("../Server Side/Response_DataOne.php", {method: "POST", body: fData})
		.then(res => res.json())
		.then(parseObj => {

			if(parseObj.validAccess !== true){

				console.log("Invalid Access!");

			}else if(parseObj.serverConnection !== null){

				console.log("Connection Lost!");

			}else if(parseObj.validToken !== null){

				console.log("Invalid Token!");

			}else if(parseObj.execution !== true){

				console.log("Execution Problem in Request Data One!");

			}else if(parseObj.validAccess === true && parseObj.serverConnection === null && parseObj.validToken === null && parseObj.execution === true){

				dataOne_Array = parseObj.dataOne_Array;

				resolve(true);
			}
		});
		/*Fetch method*/
		
	});


	return await requestPromise;
};
/*Get Data One*/


/*Export*/
export {requestDataOne, dataOne_Array};
/*Export*/