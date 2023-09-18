/*Import*/
import renderRespondentTypeRadioBtn from "./View_RespondentTypeRadioBtn.js";
import token from "../../Global JS/Token.js";
import {valueCodeDetailsObj} from "../../Global JS/Values_Page_RateService.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var respondentDetails_Array = [];
var codeDetails_Base = null;
/*Export variables*/


/*Get respondent type details*/
function requestRespondentType(){
	httpRequest.onload = function(){
		if(httpRequest.status == 200){
			try{
				httpResponse = JSON.parse(httpRequest.responseText);

				if(httpResponse.serverConnection !== null){
					alert(httpResponse.serverConnection);
				}else if(httpResponse.globalTokenResult !== null){
					alert(httpResponse.globalTokenResult);
				}else if(httpResponse.execution !== true){
					alert("Getting respondent type has execution problem");
				}else if(httpResponse.serverConnection === null && httpResponse.execution === true && httpResponse.globalTokenResult === null){
					respondentDetails_Array = httpResponse.respondentDetails_Array;
					codeDetails_Base = httpResponse.codeDetailsBase;

					valueCodeDetailsObj(codeDetails_Base);
					renderRespondentTypeRadioBtn();
				}
			}catch(httpRequest_Error){
				alert("Response is not an object on getting Respondent Type");
				alert(httpRequest_Error);
				alert(httpRequest.responseText);
			}			
		}else if(httpRequest.status != 200){
			alert("File not found");
		}
	}


	const queryString = "token="+token;
	httpRequest.open("POST", "Response_RespondentType.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(queryString);		
}
/*Get respondent type details*/


/*Export*/
export {requestRespondentType, respondentDetails_Array, codeDetails_Base};
/*Export*/