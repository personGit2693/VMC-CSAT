/*Import*/
import token from "../../Global Client Side/Token.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var respondentPerScoreDetails_Array = null;
/*Export variables*/


/*Count Total Answered Questions*/
async function requestRespondentPerScore(clientTypeInternal, clientTypeExternal, officeId, dateFrom, dateTo){
	
	const requestPromise = new Promise(function(resolve){
		
		/*Form data*/
		const fData = new FormData(); 
		fData.append("token", token);
		fData.append("officeId", officeId);
		fData.append("clientTypeInternal", clientTypeInternal);
		fData.append("clientTypeExternal", clientTypeExternal);
		fData.append("dateFrom", dateFrom);
		fData.append("dateTo", dateTo);	
		/*Form data*/


		/*Fetch method*/
		fetch("../Server Side/Response_RespondentPerScore.php", {method: "POST", body: fData})
		.then((res) =>{
			
			if(res.ok == false){
				location.reload();
			}

			res.json();
			res.serverConnection = "Disconnected";

			return res.json();
		})
		.then(parseObj => {

			if(parseObj.validAccess !== true){

				console.log("Invalid Access!");

			}else if(parseObj.serverConnection !== null){

				console.log("Connection Lost!");

			}else if(parseObj.validToken !== null){

				console.log("Invalid Token!");

			}else if(parseObj.execution === false){

				console.log("Execution Problem in Request Respondent per score!");

			}else if(parseObj.validAccess === true && parseObj.serverConnection === null && parseObj.validToken === null && parseObj.execution !== false){

				respondentPerScoreDetails_Array = parseObj.respondentPerScoreDetails_Array;

				resolve(true);
			}
		});
		/*Fetch method*/
		
	});


	return await requestPromise;
};
/*Count Total Answered Questions*/


/*Export*/
export {requestRespondentPerScore, respondentPerScoreDetails_Array};
/*Export*/