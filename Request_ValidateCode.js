/*Import*/
import {inputCode} from "./JSCollection_IndexModule.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Prep export variables*/
let validCode = false;
let requestValidateCode_Obj = {execution:null, count:0};
/*Prep export variables*/


/*Submitting request for validating code*/
const requestValidateCode = (buttonElemUsed) => {

	buttonElemUsed.disabled = true;

	/*Receive Response*/
	httpRequest.onload = function(){
		if(httpRequest.status == 200){			
			try{				
				const httpResponse = JSON.parse(httpRequest.responseText);				

				if(httpResponse.execution != true){										
					buttonElemUsed.disabled = false;
				}else if(httpResponse.count == 0){					
					buttonElemUsed.disabled = false;
				}else if(httpResponse.execution == true && httpResponse.count != 0){
					validCode = true;
					requestValidateCode_Obj = httpResponse;
				}				
			}catch(requestRateToken_Error){
				alert(requestRateToken_Error);
				alert(httpRequest.responseText);
				buttonElemUsed.disabled = false;					
			}			
		}else if(httpRequest.status != 200){
			alert(httpRequest.statusText);			
			buttonElemUsed.disabled = false;
		}		
	}
	/*Receive Response*/


	/*Send Request*/
	const validateCodeToken = "DkosdJIOJSDA0221";

	const stringQuery = "validateCodeToken="+validateCodeToken+
	"&inputCode="+encodeURIComponent(inputCode.value);	

	httpRequest.open("POST", "Response_ValidateCode.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(stringQuery);
	/*Send Request*/
}
/*Submitting request for validating code*/

export {requestValidateCode, validCode, requestValidateCode_Obj};