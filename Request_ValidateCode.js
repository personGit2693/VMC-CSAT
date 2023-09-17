/*Import*/
import {inputCode} from "./JSCollection_IndexModule.js";
/*Import*/


/*Prep export variables*/
let validCode = false;
/*Prep export variables*/


/*Submitting request for validating code*/
const requestValidateCode = () => {

	/*Receive Response*/
	validateCode_Xhttp.onload = function(){
		if(validateCode_Xhttp.status == 200){			
			try{				
				const validateCode_Resp = JSON.parse(validateCode_Xhttp.responseText);				

				if(validateCode_Resp.execution != true){					
					alert("Validating code has execution problem!");
				}else if(validateCode_Resp.count == 0){
					notifyNodeBox(false, "Invalid code", "notiEnterCodeModal-Id");
				}else if(validateCode_Resp.execution == true && validateCode_Resp.count != 0){
					validCode = true;
					notifyNodeBox(true, "Please proceed", "notiEnterCodeModal-Id");					
				}				
			}catch(requestRateToken_Error){
				alert(requestRateToken_Error);
				alert(validateCode_Xhttp.responseText);					
			}			
		}else if(validateCode_Xhttp.status != 200){
			alert(validateCode_Xhttp.statusText);
		}		
	}
	/*Receive Response*/


	/*Send Request*/
	const validateCodeToken = "DkosdJIOJSDA0221";

	const validateCode_StringQuery = "validateCodeToken="+validateCodeToken
	+"&inputCode="+encodeURIComponent(inputCode.value);	

	validateCode_Xhttp.open("POST", "Response_ValidateCode.php", false);
	validateCode_Xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	validateCode_Xhttp.send(validateCode_StringQuery);
	/*Send Request*/
}
/*Submitting request for validating code*/

export {requestValidateCode, validCode};