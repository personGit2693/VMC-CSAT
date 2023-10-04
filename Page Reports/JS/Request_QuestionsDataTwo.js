/*Import*/
import token from "../../Global JS/Token.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var questionsDataTwo_Array = [];
/*Export variables*/


/*Get Questions Data Two Report*/
function requestQuestionsDataTwo(officeId, dateFrom, dateTo){
	
	httpRequest.onload = function(){
		if(httpRequest.status == 200){
			try{
				httpResponse = JSON.parse(httpRequest.responseText);

				if(httpResponse.serverConnection !== null){
					alert(httpResponse.serverConnection);
				}else if(httpResponse.globalTokenResult !== null){
					alert(httpResponse.globalTokenResult);
				}else if(httpResponse.execution !== true){
					alert("Getting Questions Data Two execution problem!");				
				}else if(httpResponse.serverConnection === null && httpResponse.globalTokenResult === null && httpResponse.execution === true){
					questionsDataTwo_Array = httpResponse.questionsDataTwo_Array;													
				}
			}catch(httpRequest_Error){
				alert("Response is not an object on getting Questions Data Two!");
				alert(httpRequest_Error);
				alert(httpRequest.responseText);
			}			
		}else if(httpRequest.status != 200){
			alert(httpRequest.statusText);
		}
	}

	const queryString = "token="+token+
	"&officeId="+officeId+	
	"&dateFrom="+dateFrom+
	"&dateTo="+dateTo;

	httpRequest.open("POST", "Response_QuestionsDataTwo.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(queryString);
};
/*Get Questions Data Two Report*/


/*Export*/
export {requestQuestionsDataTwo, questionsDataTwo_Array};
/*Export*/