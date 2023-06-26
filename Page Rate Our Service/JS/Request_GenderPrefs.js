/*Import*/
import renderGenderPrefRadioBtn from "./View_GenderPrefRadioBtn.js";
import token from "../../Global JS/Token.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var genderPrefDetails_Array = [];
/*Export variables*/


/*Get gender preferences details*/
function requestGenderPrefs(){
	httpRequest.onload = function(){
		if(httpRequest.status == 200){
			try{
				httpResponse = JSON.parse(httpRequest.responseText);

				if(httpResponse.serverConnection !== null){
					alert(httpResponse.serverConnection);
				}else if(httpResponse.globalTokenResult !== null){
					alert(httpResponse.globalTokenResult);
				}else if(httpResponse.execution !== true){
					alert("Getting genders has execution problem");
				}else if(httpResponse.serverConnection === null && httpResponse.execution === true && httpResponse.globalTokenResult === null){
					genderPrefDetails_Array = httpResponse.genderPrefDetails_Array;
					renderGenderPrefRadioBtn();
				}
			}catch(httpRequest_Error){
				alert("Response is not an object on getting Genders");
				alert(httpRequest_Error);
			}			
		}else if(httpRequest.status != 200){
			alert("File not found");
		}
	}


	const queryString = "token="+token;
	httpRequest.open("POST", "../PHP/Response_GenderPrefs.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(queryString);		
}
/*Get gender preferences details*/


/*Export*/
export {requestGenderPrefs, genderPrefDetails_Array};
/*Export*/