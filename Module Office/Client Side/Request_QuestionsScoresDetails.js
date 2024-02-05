/*Import*/
import token from "../../Global Client Side/Token.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var questionsScoresDetails_Array = null;
/*Export variables*/


/*Get Question Scores Details per of point of entry*/
async function requestQuestionsScoresDetails(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo, stronglyAgree_Id, agree_Id, noRating_Id, neither_Id, disagree_Id, stronglyDisagree_Id, dimensionComment_Id){
	
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
		fData.append("agree_Id", agree_Id);
		fData.append("noRating_Id", noRating_Id);
		fData.append("neither_Id", neither_Id);
		fData.append("disagree_Id", disagree_Id);
		fData.append("stronglyAgree_Id", stronglyAgree_Id);
		fData.append("dimensionComment_Id", dimensionComment_Id);
		/*Form data*/


		/*Fetch method*/
		fetch("../Server Side/Response_QuestionsScoresDetails.php", {method: "POST", body: fData})
		.then(res => res.json())
		.then(parseObj => {

			if(parseObj.validAccess !== true){

				console.log("Invalid Access!");

			}else if(parseObj.serverConnection !== null){

				console.log("Connection Lost!");

			}else if(parseObj.validToken !== null){

				console.log("Invalid Token!");

			}else if(parseObj.execution === false){

				console.log("Execution Problem in Request Questions score details!");

			}else if(parseObj.validAccess === true && parseObj.serverConnection === null && parseObj.validToken === null && parseObj.execution !== false){

				questionsScoresDetails_Array = parseObj.questionsScoresDetails_Array;

				resolve(true);
			}
		});
		/*Fetch method*/
		
	});


	return await requestPromise;
};
/*Get Question Scores Details per of point of entry*/


/*Export*/
export {requestQuestionsScoresDetails, questionsScoresDetails_Array};
/*Export*/