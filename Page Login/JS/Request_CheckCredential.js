/*Import*/
import token from "../../Global JS/Token.js";
import {usernInput, passInput} from "./JSCollection_Page_Login.js";
import {getIdentifier_Obj} from "./Request_GetIdentifier.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var checkCredential_Obj = {};
/*Export variables*/


/*Check Credential*/
function requestCheckCredential(){

	httpRequest.onload = function(){
		if(httpRequest.status == 200){
			try{
				httpResponse = JSON.parse(httpRequest.responseText);
								
				if(httpResponse.serverConnection !== null){
					alert(httpResponse.serverConnection);
				}else if(httpResponse.globalTokenResult !== null){
					alert(httpResponse.globalTokenResult);
				}else if(httpResponse.execution !== true){
					alert("Checking credential has execution problem!");
				}else if(httpResponse.validAccount == 0){
					alert("Wrong Account username or password!");
				}else if(httpResponse.serverConnection === null && httpResponse.execution === true && httpResponse.globalTokenResult === null && httpResponse.validAccount != 0){
					checkCredential_Obj = httpResponse;				
				}
			}catch(httpRequest_Error){
				alert("Response is not an object on checking Credential!");
				alert(httpRequest_Error);
			}			
		}else if(httpRequest.status != 200){
			alert("File not found");
		}
	}


	const queryString = "token="+token+
	"&usernInput="+encodeURIComponent(usernInput.value)+
	"&passInput="+encodeURIComponent(passInput.value)+
	"&identifier="+getIdentifier_Obj.identifier;
	
	httpRequest.open("POST", "Response_CheckCredential.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(queryString); 	
}
/*Check Credential*/


/*Export*/
export {requestCheckCredential, checkCredential_Obj};
/*Export*/