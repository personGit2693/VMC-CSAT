import token from "../Global JS/Token.js";


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Prep Export variables*/

/*Prep Export variables*/


/*Updating Question*/
const requestUpdateQuestion = (newQuestion, questionId) => {
	
	/*Receive Response*/
	httpRequest.onload = function(){
		if(httpRequest.status == 200){									
			try{				
				const httpResponse = JSON.parse(httpRequest.responseText);				

				if(httpResponse.serverConnection != null){
					alert(httpResponse.serverConnection);
				}else if(httpResponse.globalTokenResult != null){					
					alert(httpResponse.globalTokenResult);
				}else if(httpResponse.updateQuestionResult != null){					
					alert(httpResponse.updateQuestionResult);
				}else if(httpResponse.serverConnection == null && httpResponse.globalTokenResult == null && httpResponse.updateQuestionResult == null){					
					alert("Updated!");
				}				
			}catch(requestUpdateQuestion_Error){
				alert(requestUpdateQuestion_Error);
				alert(httpRequest.responseText);					
			}			
		}else if(httpRequest.status != 200){
			alert(httpRequest.statusText);
		}		
	}
	/*Receive Response*/


	/*Send Request*/
	const stringQuery = "token="+token+
	"&newQuestion="+encodeURIComponent(newQuestion.value)+
	"&questionId="+encodeURIComponent(questionId.value);	

	httpRequest.open("POST", "Response_UpdateQuestion.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(stringQuery);
	/*Send Request*/
}
/*Updating Question*/


/*Export*/
export {requestUpdateQuestion};
/*Export*/