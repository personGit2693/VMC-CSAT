/*Import*/
import token from "../../Global Client Side/Token.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var rowAffected = null;
/*Export variables*/


/*Encode Respondent Details*/
async function requestEncodeRespondentDetails(submittedRate){
	
	const requestPromise = new Promise(function(resolve){
		
		/*Form data*/
		const fData = new FormData(); 
		fData.append("token", token);
		fData.append("clientResponseRef", submittedRate.respondentDetails.clientResponseRef);
		fData.append("respondentId", submittedRate.respondentDetails.respondentId);
		fData.append("clientResponseAge", submittedRate.respondentDetails.clientResponseAge);
		fData.append("ageRangeId", submittedRate.respondentDetails.ageRangeId);
		fData.append("genderId", submittedRate.respondentDetails.genderId);
		fData.append("genderPreferenceId", submittedRate.respondentDetails.genderPreferenceId);
		fData.append("religionId", submittedRate.respondentDetails.religionId);
		fData.append("educationId", submittedRate.respondentDetails.educationId);
		fData.append("officeId", submittedRate.respondentDetails.officeId);
		fData.append("clientTypeId", submittedRate.respondentDetails.clientTypeId);
		fData.append("officeServiceId", submittedRate.respondentDetails.officeServiceId);
		fData.append("freqVisitId", submittedRate.respondentDetails.freqVisitId);
		fData.append("contactDetails", submittedRate.respondentDetails.contactDetails);
		/*Form data*/


		/*Fetch method*/
		fetch("../Server Side/Response_EncodeRespondentDetails.php", {method: "POST", body: fData})
		.then(res => res.json())
		.then(parseObj => {
			
			if(parseObj.validAccess !== true){

				console.log("Invalid Access!");

			}else if(parseObj.serverConnection !== null){

				console.log("Connection Lost!");

			}else if(parseObj.validToken !== null){

				console.log("Invalid Token!");

			}else if(parseObj.execution !== true){

				console.log("Execution Problem in Encode Respondent Details!");

			}else if(parseObj.validAccess === true && parseObj.serverConnection === null && parseObj.validToken === null && parseObj.execution === true){

				rowAffected = parseObj.rowAffected;

				resolve(true);
			}
		});
		/*Fetch method*/
	});


	return await requestPromise;
};
/*Encode Respondent Details*/


/*Export*/
export {requestEncodeRespondentDetails, rowAffected};
/*Export*/