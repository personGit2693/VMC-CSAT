/*Import*/
import {dropdownReligionSearch} from "./JsCollection_Page_RateService.js";
import renderReligionDropdownMenu from "./View_ReligionDropdownMenu.js";
import token from "../../Global JS/Token.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var religionDetails_Array = [];
/*Export variables*/


/*Get religion details*/
function requestReligions(){
	httpRequest.onload = function(){
		if(httpRequest.status == 200){
			try{
				httpResponse = JSON.parse(httpRequest.responseText);

				if(httpResponse.serverConnection !== null){
					alert(httpResponse.serverConnection);
				}else if(httpResponse.globalTokenResult !== null){
					alert(httpResponse.globalTokenResult);
				}else if(httpResponse.execution !== true){
					alert("Getting religions has execution problem");
				}else if(httpResponse.serverConnection === null && httpResponse.execution === true && httpResponse.globalTokenResult === null){
					religionDetails_Array = httpResponse.religionDetails_Array;
					renderReligionDropdownMenu();						
				}
			}catch(httpRequest_Error){
				alert("Response is not an object on getting Religions");
				alert(httpRequest_Error);
			}			
		}else if(httpRequest.status != 200){
			alert("File not found");
		}
	}

	const queryString = "token="+token+
	"&dropdownReligionSearch="+encodeURIComponent(dropdownReligionSearch.value);
	
	httpRequest.open("POST", "../PHP/Response_Religions.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(queryString); 	
}
/*Get religion details*/


/*Export*/
export {requestReligions ,religionDetails_Array};
/*Export*/