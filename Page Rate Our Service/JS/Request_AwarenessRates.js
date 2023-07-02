/*Import*/
import renderAwarenessRateRadioBtn from "./View_AwarenessRateRadioBtn.js";
import token from "../../Global JS/Token.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var awarenessRateDetails_Array = [];
/*Export variables*/


/*Get awareness rates*/
function requestAwarenessRates(){
	httpRequest.onload = function(){
		if(httpRequest.status == 200){
			try{
				httpResponse = JSON.parse(httpRequest.responseText);

				if(httpResponse.serverConnection !== null){
					alert(httpResponse.serverConnection);
				}else if(httpResponse.globalTokenResult !== null){
					alert(httpResponse.globalTokenResult);
				}else if(httpResponse.execution !== true){
					alert("Getting awareness rates has execution problem");
				}else if(httpResponse.serverConnection === null && httpResponse.execution === true && httpResponse.globalTokenResult === null){
					awarenessRateDetails_Array = httpResponse.awarenessRateDetails_Array;
					renderAwarenessRateRadioBtn();
				}
			}catch(httpRequest_Error){
				alert("Response is not an object on getting Awareness Rates");
				alert(httpRequest_Error);
			}			
		}else if(httpRequest.status != 200){
			alert("File not found");
		}
	}


	const queryString = "token="+token;
	httpRequest.open("POST", "../PHP/Response_AwarenessRates.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(queryString);		
}
/*Get awareness rates*/


/*Export*/
export {requestAwarenessRates ,awarenessRateDetails_Array};
/*Export*/