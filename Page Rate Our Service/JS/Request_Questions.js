/*Import*/
import token from "../../Global JS/Token.js";
import {clientTypeId, officeId, valuePopRespondentRatings} from "../../Global JS/Values_Page_RateService.js";
import renderQuestionScoreRadioBtn from "./View_QuestionScoreRadioBtn.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var questionDetails_Array = [];
/*Export variables*/


/*Get questions details*/
function requestQuestions(){

	httpRequest.onload = function(){
		if(httpRequest.status == 200){				
			try{
				httpResponse = JSON.parse(httpRequest.responseText);

				if(httpResponse.serverConnection !== null){
					alert(httpResponse.serverConnection);
				}else if(httpResponse.globalTokenResult !== null){
					alert(httpResponse.globalTokenResult);
				}else if(httpResponse.execution !== true){
					alert("Getting questions has execution problem");
				}else if(httpResponse.serverConnection === null && httpResponse.execution === true && httpResponse.globalTokenResult === null){
					questionDetails_Array = httpResponse.questionDetails_Array;
					renderQuestionScoreRadioBtn();
					valuePopRespondentRatings();						
				}
			}catch(httpRequest_Error){
				alert("Response is not an object on getting Questions");
				alert(httpRequest_Error);
			}			
		}else if(httpRequest.status != 200){
			alert("File not found");
		}
	}

	const queryString = "token="+token+
	"&clientTypeId="+clientTypeId+
	"&officeId="+officeId;	
	
	httpRequest.open("POST", "../PHP/Response_Questions.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(queryString); 	
}
/*Get questions details*/


/*Export*/
export {requestQuestions, questionDetails_Array};
/*Export*/