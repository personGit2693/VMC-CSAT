/*Import*/
import token from "../../Global JS/Token.js";
import {usernInput} from "./JSCollection_Page_Login.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var generateAccToken_Obj = {};
/*Export variables*/


/*Generate account token*/
function requestGenerateAccToken(){

	httpRequest.onload = function(){
		if(httpRequest.status == 200){
			try{
				httpResponse = JSON.parse(httpRequest.responseText);
								
				if(httpResponse.serverConnection !== null){
					alert(httpResponse.serverConnection);
				}else if(httpResponse.globalTokenResult !== null){
					alert(httpResponse.globalTokenResult);
				}else if(httpResponse.execution !== true){
					alert("Generating token has execution problem!");
				}else if(httpResponse.tokenCreated == 0){
					alert("No token has been generated! cannot login as of this momment.");
				}else if(httpResponse.serverConnection === null && httpResponse.execution === true && httpResponse.globalTokenResult === null && httpResponse.tokenCreated != 0){
					generateAccToken_Obj = httpResponse;				
				}
			}catch(httpRequest_Error){
				alert(httpRequest.responseText);
				alert("Response is not an object on generating token!");
				alert(httpRequest_Error);
			}			
		}else if(httpRequest.status != 200){
			alert("File not found");
		}
	}


	const queryString = "token="+token+
	"&usernInput="+encodeURIComponent(usernInput.value);	
	
	httpRequest.open("POST", "Response_GenerateAccToken.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(queryString); 	
}
/*Generate account token*/


/*Export*/
export {requestGenerateAccToken, generateAccToken_Obj};
/*Export*/