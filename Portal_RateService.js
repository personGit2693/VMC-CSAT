/*Import*/
import {requestRateToken} from "./Request_GenerateRateToken.js";
/*Import*/

/*Redirect to rate service*/
const redirectToRateServ = (buttonElemUsed) =>{
	if(proceedToRateServ === true){
		showSpinningLoad();
		requestRateToken(buttonElemUsed);
		removeSpinningLoad();
	}else if(proceedToRateServ === false){
		alert('Please READ and AGREE to Data Privacy first.');
	}
}
/*Redirect to rate service*/


window.redirectToRateServ = redirectToRateServ;