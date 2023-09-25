/*Import*/
import token from "../../Global JS/Token.js";
import {getIdentifier_Obj} from "./Request_GetIdentifier.js";
import {generateAccToken_Obj} from "./Request_GenerateAccToken.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var accountSession_Obj = {};
/*Export variables*/


/*Create Account Session*/
function requestAccountSession(){

	httpRequest.onload = function(){
		if(httpRequest.status == 200){
			try{
				httpResponse = JSON.parse(httpRequest.responseText);
								
				if(httpResponse.serverConnection !== null){
					alert(httpResponse.serverConnection);
				}else if(httpResponse.globalTokenResult !== null){
					alert(httpResponse.globalTokenResult);
				}else if(httpResponse.execution !== true){
					alert("Creating account session has execution problem!");
				}else if(httpResponse.serverConnection === null && httpResponse.execution === true && httpResponse.globalTokenResult === null){
					accountSession_Obj = httpResponse;				
				}
			}catch(httpRequest_Error){
				alert(httpRequest.responseText);
				alert("Response is not an object on creating account session!");
				alert(httpRequest_Error);
			}			
		}else if(httpRequest.status != 200){
			alert(httpRequest.statusText);
		}
	}


	const queryString = "token="+token+
	"&accountNumber="+getIdentifier_Obj.accountNumber+
	"&officeId="+getIdentifier_Obj.officeId+
	"&identifier="+getIdentifier_Obj.identifier+
	"&active="+getIdentifier_Obj.active+
	"&accToken="+generateAccToken_Obj.accToken;	
	
	httpRequest.open("POST", "Response_AccountSession.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(queryString); 	
}
/*Create Account Session*/


/*Export*/
export {requestAccountSession, accountSession_Obj};
/*Export*/