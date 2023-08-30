/*Import*/
import token from "../../Global JS/Token.js";
import {submittedRate} from "../../Global JS/Values_Page_RateService.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var deleteEncodedResp_Obj = {};
/*Export variables*/


/*Delete failed encoded*/
function requestDeleteEncoded(){

	httpRequest.onload = function(){
		if(httpRequest.status == 200){
			try{
				httpResponse = JSON.parse(httpRequest.responseText);

				if(httpResponse.serverConnection !== null){
					alert(httpResponse.serverConnection);
				}else if(httpResponse.globalTokenResult !== null){
					alert(httpResponse.globalTokenResult);
				}else if(httpResponse.execution != true){
					alert("Removing failed encoding of reference number "+submittedRate.respondentDetails.clientResponseRef+" has execution problem!");
				}else if(httpResponse.serverConnection === null && httpResponse.execution == true && httpResponse.globalTokenResult === null){
					deleteEncodedResp_Obj = httpResponse;				
				}
			}catch(httpRequest_Error){
				alert("Response is not an object on removing failed encoded details with reference number "+submittedRate.respondentDetails.clientResponseRef);
				alert(httpRequest_Error);
				alert(httpRequest.responseText);
			}			
		}else if(httpRequest.status != 200){
			alert("File not found");
		}
	}


	const queryString = "token="+token+
	"&clientResponseRef="+submittedRate.respondentDetails.clientResponseRef;
	
	
	httpRequest.open("POST", "Response_DeleteEncoded.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(queryString); 	
}
/*Delete failed encoded*/


/*Export*/
export {requestDeleteEncoded, deleteEncodedResp_Obj};
/*Export*/