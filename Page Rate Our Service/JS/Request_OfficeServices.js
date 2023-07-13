/*Import*/
import renderOfficeServiceCheckbox from "./View_OfficeServiceCheckbox.js";
import token from "../../Global JS/Token.js";
import {officeId, serviceTypeId, clientTypeId} from "../../Global JS/Values_Page_RateService.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var officeServiceDetails_Array = [];
/*Export variables*/


/*Get office services details*/
function requestOfficeServices(){

	httpRequest.onload = function(){
		if(httpRequest.status == 200){
			try{
				httpResponse = JSON.parse(httpRequest.responseText);

				if(httpResponse.serverConnection !== null){
					alert(httpResponse.serverConnection);
				}else if(httpResponse.globalTokenResult !== null){
					alert(httpResponse.globalTokenResult);
				}else if(httpResponse.execution !== true){
					alert("Getting office services has execution problem");
				}else if(httpResponse.serverConnection === null && httpResponse.execution === true && httpResponse.globalTokenResult === null){
					officeServiceDetails_Array = httpResponse.officeServiceDetails_Array;
					renderOfficeServiceCheckbox();						
				}
			}catch(httpRequest_Error){
				alert("Response is not an object on getting Office Services");
				alert(httpRequest_Error);
			}			
		}else if(httpRequest.status != 200){
			alert("File not found");
		}
	}

	const queryString = "token="+token+
	"&officeId="+officeId+
	"&serviceTypeId="+serviceTypeId+
	"&clientTypeId="+clientTypeId;
	
	httpRequest.open("POST", "../PHP/Response_OfficeServices.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(queryString); 	
}
/*Get office services details*/


/*Export*/
export {requestOfficeServices, officeServiceDetails_Array};
/*Export*/