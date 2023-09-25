import {inputCode} from "./JSCollection_IndexModule.js";


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Prep Export variables*/
var codeDetails_Base = null;
/*Prep Export variables*/


/*Function for submitting request for generate rate token*/
const requestRateToken = (buttonElemUsed) => {
	
	buttonElemUsed.disabled = true;

	/*Receive Response*/
	httpRequest.onload = function(){
		if(httpRequest.status == 200){									
			try{				
				const httpResponse = JSON.parse(httpRequest.responseText);				

				if(httpResponse.getCodeDetails != null){
					alert(httpResponse.getCodeDetails);
					buttonElemUsed.disabled = false;
				}else if(httpResponse.genRateTok != null){					
					alert(httpResponse.genRateTok);
					buttonElemUsed.disabled = false;
				}else if(httpResponse.getCodeDetails == null && httpResponse.genRateTok == null){
					codeDetails_Base = btoa(unescape(encodeURIComponent(JSON.stringify(httpResponse.codeDetails))));
					window.location.href = httpResponse.page_RateService+"?rateToken="+httpResponse.rateToken+"&codeDetailsBase="+codeDetails_Base;
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
	const requestRateToken_Gate = "DkosdJIOJSDA0221";

	const stringQuery = "requestRateToken_Gate="+requestRateToken_Gate+
	"&inputCode="+encodeURIComponent(inputCode.value);	

	httpRequest.open("POST", "Response_GenerateRateToken.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(stringQuery);
	/*Send Request*/
}
/*Function for submitting request for generate rate token*/


/*Export*/
export {codeDetails_Base, requestRateToken};
/*Export*/