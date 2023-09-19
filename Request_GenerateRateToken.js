/*Function for submitting request for generate rate token*/
const requestRateToken = () => {
	showSpinningLoad();

	/*Receive Response*/
	requestRateToken_Xhttp.onload = function(){
		if(requestRateToken_Xhttp.status == 200){
			removeSpinningLoad();
						
			try{				
				const reqRateToken_Resp = JSON.parse(requestRateToken_Xhttp.responseText);				

				if(reqRateToken_Resp.genRateTok != null){					
					alert(reqRateToken_Resp.genRateTok);
				}else if(reqRateToken_Resp.getCodeDetails != null){
					alert(reqRateToken_Resp.getCodeDetails);
				}else if(reqRateToken_Resp.genRateTok == null && reqRateToken_Resp.getCodeDetails == null){
					window.location.href = reqRateToken_Resp.page_RateService+"?rateToken="+reqRateToken_Resp.rateToken+"&codeId="+reqRateToken_Resp.codeId;
				}				
			}catch(requestRateToken_Error){
				alert(requestRateToken_Error);
				alert(requestRateToken_Xhttp.responseText);					
			}			
		}else if(requestRateToken_Xhttp.status != 200){
			alert(requestRateToken_Xhttp.statusText);
		}		
	}
	/*Receive Response*/


	/*Send Request*/
	const requestRateToken_Gate = "DkosdJIOJSDA0221";

	const requestRateToken_StringQuery = "requestRateToken_Gate="+requestRateToken_Gate
	+"&inputCode="+encodeURIComponent(inputCode.value);	

	requestRateToken_Xhttp.open("POST", "Response_GenerateRateToken.php", false);
	requestRateToken_Xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	requestRateToken_Xhttp.send(requestRateToken_StringQuery);
	/*Send Request*/
}
/*Function for submitting request for generate rate token*/