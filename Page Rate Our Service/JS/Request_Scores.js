/*Import*/
import token from "../../Global JS/Token.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var scoreDetails_Array = [];
/*Export variables*/


/*Get scores*/
function requestScores(){
	httpRequest.onload = function(){
		if(httpRequest.status == 200){
			try{
				httpResponse = JSON.parse(httpRequest.responseText);

				if(httpResponse.serverConnection !== null){
					alert(httpResponse.serverConnection);
				}else if(httpResponse.globalTokenResult !== null){
					alert(httpResponse.globalTokenResult);
				}else if(httpResponse.execution !== true){
					alert("Getting scores has execution problem");
				}else if(httpResponse.serverConnection === null && httpResponse.execution === true && httpResponse.globalTokenResult === null){
					scoreDetails_Array = httpResponse.scoreDetails_Array;				
				}
			}catch(httpRequest_Error){
				alert("Response is not an object on getting Scores");
				alert(httpRequest_Error);
			}			
		}else if(httpRequest.status != 200){
			alert("File not found!");
		}
	}


	const queryString = "token="+token;
	httpRequest.open("POST", "Response_Scores.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(queryString);		
}
/*Get scores*/


/*Export*/
export {requestScores ,scoreDetails_Array};
/*Export*/