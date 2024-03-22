/*Import*/
import token from "../../Global Client Side/Token.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var csmRespondentsScores_Array = null;
/*Export variables*/


/*Get CSM Respondents Scores*/
async function requestCsmRespondentsScores(questionActive, internal_clientTypeId, office_id, dateFrom, dateTo){
	
	const requestPromise = new Promise(function(resolve){
		
		/*Form data*/
		const fData = new FormData(); 
		fData.append("token", token);
		fData.append("internal_clientTypeId", internal_clientTypeId);
		fData.append("office_id", office_id);
		fData.append("dateFrom", dateFrom);
		fData.append("dateTo", dateTo);
		fData.append("questionActive", questionActive);
		/*Form data*/


		/*Fetch method*/
		fetch("../Server Side/Response_CsmRespondentsScores.php", {method: "POST", body: fData})
		.then(res => res.json())
		.then(parseObj => {

			if(parseObj.validAccess !== true){

				console.log("Invalid Access!");

			}else if(parseObj.serverConnection !== null){

				console.log("Connection Lost!");

			}else if(parseObj.validToken !== null){

				console.log("Invalid Token!");

			}else if(parseObj.execution !== true){

				console.log("Execution Problem in Request CSM Respondents Scores!");

			}else if(parseObj.validAccess === true && parseObj.serverConnection === null && parseObj.validToken === null && parseObj.execution === true){

				csmRespondentsScores_Array = parseObj.csmRespondentsScores_Array;

				resolve(true);
			}
		});
		/*Fetch method*/
		
	});


	return await requestPromise;
};
/*Get Respondent Question Rate Details*/


/*Export*/
export {requestCsmRespondentsScores, csmRespondentsScores_Array};
/*Export*/