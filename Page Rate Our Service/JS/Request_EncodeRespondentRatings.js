/*Import*/
import token from "../../Global JS/Token.js";
import {submittedRate} from "../../Global JS/Values_Page_RateService.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var encodeRespondentRatingsResp_Obj = {};
/*Export variables*/


/*Encode respondent ratings*/
function requestEncodeRespondentRatings(){

	httpRequest.onload = function(){
		if(httpRequest.status == 200){
			try{
				httpResponse = JSON.parse(httpRequest.responseText);

				if(httpResponse.serverConnection !== null){
					alert(httpResponse.serverConnection);
				}else if(httpResponse.globalTokenResult !== null){
					alert(httpResponse.globalTokenResult);
				}else if(httpResponse.execution_Array.includes(false) != false){
					alert("Encoding respondent ratings has execution problem!");
				}else if(httpResponse.serverConnection === null && httpResponse.execution_Array.includes(false) == false && httpResponse.globalTokenResult === null){
					encodeRespondentRatingsResp_Obj = httpResponse;				
				}
			}catch(httpRequest_Error){
				alert("Response is not an object on encoding respondent ratings!");
				alert(httpRequest_Error);
			}			
		}else if(httpRequest.status != 200){
			alert("File not found");
		}
	}


	const respondentRatings_Base = btoa(unescape(encodeURIComponent(JSON.stringify(submittedRate.respondentRatings))));

	const queryString = "token="+token+
	"&clientResponseRef="+submittedRate.respondentDetails.clientResponseRef+
	"&respondentRatings_Base="+respondentRatings_Base;
	
	
	httpRequest.open("POST", "Response_EncodeRespondentRatings.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(queryString); 	
}
/*Encode respondent ratings*/


/*Export*/
export {requestEncodeRespondentRatings, encodeRespondentRatingsResp_Obj};
/*Export*/