/*Import*/
import token from "../../Global Client Side/Token.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var respondentCcRatingDetails_Array = null;
/*Export variables*/


/*Get Respondent Cc Rating Details*/
async function requestRespondentCcRates(external_clientTypeId, office_id, dateFrom, dateTo){
	
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
		fetch("../Server Side/Response_RespondentCcRates.php", {method: "POST", body: fData})
		.then(res => res.json())
		.then(parseObj => {

			if(parseObj.validAccess !== true){

				console.log("Invalid Access!");

			}else if(parseObj.serverConnection !== null){

				console.log("Connection Lost!");

			}else if(parseObj.validToken !== null){

				console.log("Invalid Token!");

			}else if(parseObj.execution !== true){

				console.log("Execution Problem in Request Respondent Cc Rates!");

			}else if(parseObj.validAccess === true && parseObj.serverConnection === null && parseObj.validToken === null && parseObj.execution === true){

				respondentCcRatingDetails_Array = parseObj.respondentCcRatingDetails_Array;

				resolve(true);
			}
		});
		/*Fetch method*/
		
	});


	return await requestPromise;
};
/*Get Respondent Cc Rating Details*/


/*Export*/
export {requestRespondentCcRates, respondentCcRatingDetails_Array};
/*Export*/