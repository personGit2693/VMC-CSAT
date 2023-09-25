/*Import*/
import token from "../../Global JS/Token.js";
import {usernInput} from "./JSCollection_Page_Login.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var getIdentifier_Obj = {};
/*Export variables*/


/*Get Identifier*/
function requestGetIdentifier(){

	httpRequest.onload = function(){
		if(httpRequest.status == 200){
			try{
				httpResponse = JSON.parse(httpRequest.responseText);

				if(httpResponse.serverConnection !== null){
					alert(httpResponse.serverConnection);
				}else if(httpResponse.globalTokenResult !== null){
					alert(httpResponse.globalTokenResult);
				}else if(httpResponse.execution !== true){
					alert("Getting Identifier has execution problem!");
				}else if(httpResponse.found == 0){
					alert("Wrong username or password");
				}else if(httpResponse.found != 0 && httpResponse.active == 0){
					alert("Account is deactivated!");
				}else if(httpResponse.serverConnection === null && httpResponse.execution === true && httpResponse.globalTokenResult === null && httpResponse.found != 0 && httpResponse.active == 1){
					getIdentifier_Obj = httpResponse;				
				}
			}catch(httpRequest_Error){
				alert("Response is not an object on getting Identifier!");
				alert(httpRequest_Error);
			}			
		}else if(httpRequest.status != 200){
			alert(httpRequest.statusText);
		}
	}


	const queryString = "token="+token+
	"&usernInput="+encodeURIComponent(usernInput.value);
	
	httpRequest.open("POST", "Response_GetIdentifier.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(queryString); 	
}
/*Get Identifier*/


/*Export*/
export {requestGetIdentifier, getIdentifier_Obj};
/*Export*/