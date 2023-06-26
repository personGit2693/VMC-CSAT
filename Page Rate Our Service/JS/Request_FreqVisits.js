/*Import*/
import renderFreqVisitRadioBtn from "./View_FreqVisitRadioBtn.js";
import token from "../../Global JS/Token.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var freqVisitDetails_Array = [];
/*Export variables*/


/*Get Frequently Visits details*/
function requestFreqVisits(){
	httpRequest.onload = function(){
		if(httpRequest.status == 200){
			try{
				httpResponse = JSON.parse(httpRequest.responseText);

				if(httpResponse.serverConnection !== null){
					alert(httpResponse.serverConnection);
				}else if(httpResponse.globalTokenResult !== null){
					alert(httpResponse.globalTokenResult);
				}else if(httpResponse.execution !== true){
					alert("Getting frequently visits has execution problem");
				}else if(httpResponse.serverConnection === null && httpResponse.execution === true && httpResponse.globalTokenResult === null){
					freqVisitDetails_Array = httpResponse.freqVisitDetails_Array;
					renderFreqVisitRadioBtn();
				}
			}catch(httpRequest_Error){
				alert("Response is not an object on getting Frequenly Visits");
				alert(httpRequest_Error);
			}			
		}else if(httpRequest.status != 200){
			alert("File not found");
		}
	}


	const queryString = "token="+token;
	httpRequest.open("POST", "../PHP/Response_FreqVisits.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(queryString);		
}
/*Get Frequently Visits details*/


/*Export*/
export {requestFreqVisits, freqVisitDetails_Array};
/*Export*/