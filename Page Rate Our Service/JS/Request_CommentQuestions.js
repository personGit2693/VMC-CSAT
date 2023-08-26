/*Import*/
import renderCommentField from "./View_CommentField.js";
import token from "../../Global JS/Token.js";
import {clientTypeId, officeId} from "../../Global JS/Values_Page_RateService.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var commentQuestionDetails_Array = [];
/*Export variables*/


/*Get comment questions details*/
function requestCommentQuestions(){
	
	httpRequest.onload = function(){
		if(httpRequest.status == 200){
			try{
				httpResponse = JSON.parse(httpRequest.responseText);

				if(httpResponse.serverConnection !== null){
					alert(httpResponse.serverConnection);
				}else if(httpResponse.globalTokenResult !== null){
					alert(httpResponse.globalTokenResult);
				}else if(httpResponse.execution !== true){
					alert("Getting Comment Questions has execution problem");
				}else if(httpResponse.serverConnection === null && httpResponse.execution === true && httpResponse.globalTokenResult === null){
					commentQuestionDetails_Array = httpResponse.commentQuestionDetails_Array;
					renderCommentField();
				}
			}catch(httpRequest_Error){
				alert("Response is not an object on getting Comment Questions");
				alert(httpRequest_Error);
			}			
		}else if(httpRequest.status != 200){
			alert("File not found");
		}
	}


	const queryString = "token="+token+
	"&clientTypeId="+clientTypeId+
	"&officeId="+officeId;
	httpRequest.open("POST", "Response_CommentQuestions.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(queryString);		
}
/*Get comment questions details*/


/*Export*/
export {requestCommentQuestions, commentQuestionDetails_Array};
/*Export*/