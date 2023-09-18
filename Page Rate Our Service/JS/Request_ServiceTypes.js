/*Import*/
import renderServiceTypeRadioBtn from "./View_ServiceTypeRadioBtn.js";
import token from "../../Global JS/Token.js";
import {respondentId, officeId, clientTypeId} from "../../Global JS/Values_Page_RateService.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var serviceTypeDetails_Array = [];
/*Export variables*/


/*Get office details*/
function requestServiceTypes(){

	httpRequest.onload = function(){
		if(httpRequest.status == 200){			
			try{
				httpResponse = JSON.parse(httpRequest.responseText);

				if(httpResponse.serverConnection !== null){
					alert(httpResponse.serverConnection);
				}else if(httpResponse.globalTokenResult !== null){
					alert(httpResponse.globalTokenResult);
				}else if(httpResponse.execution !== true){
					alert("Getting service types has execution problem");
				}else if(httpResponse.serverConnection === null && httpResponse.execution === true && httpResponse.globalTokenResult === null){
					serviceTypeDetails_Array = httpResponse.serviceTypeDetails_Array;
					renderServiceTypeRadioBtn();						
				}
			}catch(httpRequest_Error){
				alert("Response is not an object on getting Service-Type");
				alert(httpRequest_Error);
			}			
		}else if(httpRequest.status != 200){
			alert("File not found");
		}
	}

	const queryString = "token="+token+
	"&respondentId="+respondentId+
	"&officeId="+officeId+
	"&clientTypeId="+clientTypeId;
	
	httpRequest.open("POST", "Response_ServiceTypes.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(queryString); 	
}
/*Get office details*/


/*Export*/
export {requestServiceTypes ,serviceTypeDetails_Array};
/*Export*/