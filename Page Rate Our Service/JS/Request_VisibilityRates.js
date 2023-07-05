/*Import*/
import renderVisibilityRateRadioBtn from "./View_VisibilityRateRadioBtn.js";
import token from "../../Global JS/Token.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var visibilityRateDetails_Array = [];
/*Export variables*/


/*Get visibility rates*/
function requestVisibilityRates(){
	httpRequest.onload = function(){
		if(httpRequest.status == 200){
			try{
				httpResponse = JSON.parse(httpRequest.responseText);

				if(httpResponse.serverConnection !== null){
					alert(httpResponse.serverConnection);
				}else if(httpResponse.globalTokenResult !== null){
					alert(httpResponse.globalTokenResult);
				}else if(httpResponse.execution !== true){
					alert("Getting visibility rates has execution problem");
				}else if(httpResponse.serverConnection === null && httpResponse.execution === true && httpResponse.globalTokenResult === null){
					visibilityRateDetails_Array = httpResponse.visibilityRateDetails_Array;
					renderVisibilityRateRadioBtn();
				}
			}catch(httpRequest_Error){
				alert("Response is not an object on getting Visibility Rates");
				alert(httpRequest_Error);
			}			
		}else if(httpRequest.status != 200){
			alert("File not found");
		}
	}


	const queryString = "token="+token;
	httpRequest.open("POST", "../PHP/Response_VisibilityRates.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(queryString);		
}
/*Get visibility rates*/


/*Export*/
export {requestVisibilityRates ,visibilityRateDetails_Array};
/*Export*/