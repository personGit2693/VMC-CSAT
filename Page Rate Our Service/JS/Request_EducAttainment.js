/*Import*/
import renderEducAttainmentRadioBtn from "./View_EducAttainmentRadioBtn.js";
import token from "../../Global JS/Token.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var educAttainmentDetails_Array = [];
/*Export variables*/


/*Get respondent type details*/
function requestEducAttainment(){
	httpRequest.onload = function(){
		if(httpRequest.status == 200){
			try{
				httpResponse = JSON.parse(httpRequest.responseText);

				if(httpResponse.serverConnection !== null){
					alert(httpResponse.serverConnection);
				}else if(httpResponse.globalTokenResult !== null){
					alert(httpResponse.globalTokenResult);
				}else if(httpResponse.execution !== true){
					alert("Getting Educational Attainment has execution problem");
				}else if(httpResponse.serverConnection === null && httpResponse.execution === true && httpResponse.globalTokenResult === null){
					educAttainmentDetails_Array = httpResponse.educAttainmentDetails_Array;
					renderEducAttainmentRadioBtn();
				}
			}catch(httpRequest_Error){
				alert("Response is not an object on getting educational attainment");
				alert(httpRequest_Error);
			}			
		}else if(httpRequest.status != 200){
			alert("File not found");
		}
	}


	const queryString = "token="+token;
	httpRequest.open("POST", "../PHP/Response_EducAttainment.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(queryString);		
}
/*Get respondent type details*/


/*Export*/
export {requestEducAttainment ,educAttainmentDetails_Array};
/*Export*/