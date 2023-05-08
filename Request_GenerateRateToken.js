/*Function for submitting request for generate rate token*/
const requestRateToken = () => {
	
	/*Receive Response*/
	requestRateToken_Xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			removeSpinningLoad();
						
			try{				
				const reqRateToken_Resp = JSON.parse(this.responseText);				

				if(reqRateToken_Resp.genRateTok_Resp.genRateTok_Exec !== true){					
					alert("Generating token has execution problem!");
				}else if(reqRateToken_Resp.genRateTok_Resp.genRateTok_Count === 0){
					alert("No token has been generated!");
				}else if(reqRateToken_Resp.genRateTok_Resp.genRateTok_Exec === true && reqRateToken_Resp.genRateTok_Resp.genRateTok_Count !== 0){
					window.location.href = reqRateToken_Resp.page_RateService;
				}				
			}catch(requestRateToken_Error){
				alert(requestRateToken_Error);
				alert(this.responseText);					
			}			
		}else if(this.readyState != 4 || this.status != 200){
			showSpinningLoad();			
		}		
	}
	/*Receive Response*/


	/*Send Request*/
	const requestRateToken_Gate = "DkosdJIOJSDA0221";

	const requestRateToken_StringQuery = "requestRateToken_Gate="+requestRateToken_Gate;	

	requestRateToken_Xhttp.open("POST", "Response_GenerateRateToken.php", true);
	requestRateToken_Xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	requestRateToken_Xhttp.send(requestRateToken_StringQuery);
	/*Send Request*/
}
/*Function for submitting request for generate rate token*/