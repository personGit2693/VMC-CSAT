/*Import*/
import token from "../../Global JS/Token.js";
import {submittedRate} from "../../Global JS/Values_Page_RateService.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var encodeCommentsResp_Obj = {};
/*Export variables*/


/*Encode respondent ratings*/
function requestEncodeComments(){

	httpRequest.onload = function(){
		if(httpRequest.status == 200){
			try{
				httpResponse = JSON.parse(httpRequest.responseText);

				if(httpResponse.serverConnection !== null){
					alert(httpResponse.serverConnection);
				}else if(httpResponse.globalTokenResult !== null){
					alert(httpResponse.globalTokenResult);
				}else if(httpResponse.execution_Array.includes(false) != false){
					alert("Encoding comments has execution problem!");
				}else if(httpResponse.serverConnection === null && httpResponse.execution_Array.includes(false) == false && httpResponse.globalTokenResult === null){
					encodeCommentsResp_Obj = httpResponse;				
				}
			}catch(httpRequest_Error){
				alert("Response is not an object on encoding comments!");
				alert(httpRequest_Error);
			}			
		}else if(httpRequest.status != 200){
			alert("File not found");
		}
	}


	const comments_Base = btoa(unescape(encodeURIComponent(JSON.stringify(submittedRate.comments))));

	const queryString = "token="+token+
	"&clientResponseRef="+submittedRate.respondentDetails.clientResponseRef+
	"&comments_Base="+comments_Base;
	
	
	httpRequest.open("POST", "Response_EncodeComments.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(queryString); 	
}
/*Encode respondent ratings*/


/*Export*/
export {requestEncodeComments, encodeCommentsResp_Obj};
/*Export*/