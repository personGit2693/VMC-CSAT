/*Import*/
import token from "../../Global Client Side/Token.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var citizenCharterOneScoresDetails_Array = null;
/*Export variables*/


/*Get Citizen Charter One Scores Details*/
async function requestCitizenCharterOneScores(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo, ccOne_Id){
	
	const requestPromise = new Promise(function(resolve){
		
		/*Form data*/
		const fData = new FormData(); 
		fData.append("token", token);
		fData.append("officeId", officeId);
		fData.append("clientTypeInternal", clientTypeInternal);
		fData.append("clientTypeExternal", clientTypeExternal);
		fData.append("dateFrom", dateFrom);
		fData.append("dateTo", dateTo);	
		fData.append("ccOne_Id", ccOne_Id);		
		/*Form data*/


		/*Fetch method*/
		fetch("../Server Side/Response_CitizenCharterOneScores.php", {method: "POST", body: fData})
		.then(res => res.json())
		.then(parseObj => {

			if(parseObj.validAccess !== true){

				console.log("Invalid Access!");

			}else if(parseObj.serverConnection !== null){

				console.log("Connection Lost!");

			}else if(parseObj.validToken !== null){

				console.log("Invalid Token!");

			}else if(parseObj.execution === false){

				console.log("Execution Problem in Request Citizen Charter One Scores!");

			}else if(parseObj.validAccess === true && parseObj.serverConnection === null && parseObj.validToken === null && parseObj.execution !== false){

				citizenCharterOneScoresDetails_Array = parseObj.citizenCharterOneScoresDetails_Array;

				resolve(true);
			}
		});
		/*Fetch method*/
		
	});


	return await requestPromise;
};
/*Get Citizen Charter One Scores Details*/


/*Export*/
export {requestCitizenCharterOneScores, citizenCharterOneScoresDetails_Array};
/*Export*/