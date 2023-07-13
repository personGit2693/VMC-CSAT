/*Import*/
import token from "../../Global JS/Token.js";
import {submittedRate} from "../../Global JS/Values_Page_RateService.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var encodeRespondentDetailsResp_Obj = {};
/*Export variables*/


/*Encode Respondent Details*/
function requestEncodeRespondentDetails(){

	httpRequest.onload = function(){
		if(httpRequest.status == 200){
			try{
				httpResponse = JSON.parse(httpRequest.responseText);

				if(httpResponse.serverConnection !== null){
					alert(httpResponse.serverConnection);
				}else if(httpResponse.globalTokenResult !== null){
					alert(httpResponse.globalTokenResult);
				}else if(httpResponse.execution !== true){
					alert("Encoding Respondent Details has execution problem!");
				}else if(httpResponse.serverConnection === null && httpResponse.execution === true && httpResponse.globalTokenResult === null){
					encodeRespondentDetailsResp_Obj = httpResponse;				
				}
			}catch(httpRequest_Error){
				alert("Response is not an object on encoding Respondent Details!");
				alert(httpRequest_Error);
			}			
		}else if(httpRequest.status != 200){
			alert("File not found");
		}
	}


	const queryString = "token="+token+
	"&clientResponseRef="+submittedRate.respondentDetails.clientResponseRef+
	"&respondentId="+submittedRate.respondentDetails.respondentId+
	"&ageRangeId="+submittedRate.respondentDetails.ageRangeId+
	"&genderId="+submittedRate.respondentDetails.genderId+
	"&genderPreferenceId="+submittedRate.respondentDetails.genderPreferenceId+
	"&religionId="+submittedRate.respondentDetails.religionId+
	"&educationId="+submittedRate.respondentDetails.educationId+
	"&officeId="+submittedRate.respondentDetails.officeId+
	"&clientTypeId="+submittedRate.respondentDetails.clientTypeId+
	"&freqVisitId="+submittedRate.respondentDetails.freqVisitId;
	
	httpRequest.open("POST", "Response_EncodeRespondentDetails.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(queryString); 	
}
/*Encode Respondent Details*/


/*Export*/
export {requestEncodeRespondentDetails, encodeRespondentDetailsResp_Obj};
/*Export*/