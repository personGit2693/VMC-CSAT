/*Import*/
import renderAgeRangesRadioBtns from "./View_AgeRangesRadioBtns.js";
import token from "../../Global JS/Token.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var ageRangeDetails_Array = [];
/*Export variables*/


/*Get age range details*/
function requestAgeRanges(){
	httpRequest.onload = function(){
		if(httpRequest.status == 200){
			try{
				httpResponse = JSON.parse(httpRequest.responseText);

				if(httpResponse.serverConnection !== null){
					alert(httpResponse.serverConnection);
				}else if(httpResponse.globalTokenResult !== null){
					alert(httpResponse.globalTokenResult);
				}else if(httpResponse.execution !== true){
					alert("Getting ages has execution problem");
				}else if(httpResponse.serverConnection === null && httpResponse.execution === true && httpResponse.globalTokenResult === null){
					ageRangeDetails_Array = httpResponse.ageRangeDetails_Array;
					renderAgeRangesRadioBtns();
				}
			}catch(httpRequest_Error){
				alert("Response is not an object on getting Age Ranges");
				alert(httpRequest_Error);
			}			
		}else if(httpRequest.status != 200){
			alert("File not found");
		}
	}


	const queryString = "token="+token;
	httpRequest.open("POST", "../PHP/Response_AgeRanges.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(queryString);		
}
/*Get age range details*/


/*Export*/
export {requestAgeRanges ,ageRangeDetails_Array};
/*Export*/