/*Submitting request for validating code*/
const requestValidateCode = () => {
	showSpinningLoad();

	/*Receive Response*/
	validateCode_Xhttp.onload = function(){
		if(validateCode_Xhttp.status == 200){
			removeSpinningLoad();
						
			try{				
				const validateCode_Resp = JSON.parse(validateCode_Xhttp.responseText);				

				if(validateCode_Resp.genRateTok != null){					
					alert(validateCode_Resp.genRateTok);
				}else if(validateCode_Resp.getCodeDetails != null){
					alert(validateCode_Resp.getCodeDetails);
				}else if(validateCode_Resp.genRateTok == null && validateCode_Resp.getCodeDetails == null){
					notifyNodeBox(true, "Success", "notiEnterCodeModal-Id");
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