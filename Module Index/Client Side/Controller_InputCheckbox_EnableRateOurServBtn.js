/*Import*/
import {rateOurServBtn, agreeTermsCheckbox} from "./Elements_Index.js";
import {assignProceedToRateServ} from "./Values_Index.js";
/*Import*/


/*Enable/Disable Rate our service button*/
function controller_InputCheckbox_EnableRateOurServBtn(){

	if(agreeTermsCheckbox.checked === false){

		rateOurServBtn.classList.add('disabledBtn-Class');
		rateOurServBtn.classList.remove('enabledBtn-Class');
		
		assignProceedToRateServ(false);

	}else if(agreeTermsCheckbox.checked === true){

		rateOurServBtn.classList.add('enabledBtn-Class');
		rateOurServBtn.classList.remove('disabledBtn-Class');
		
		assignProceedToRateServ(true);
	}
}
/*Enable/Disable Rate our service button*/


/*Declare Global*/
window.controller_InputCheckbox_EnableRateOurServBtn = controller_InputCheckbox_EnableRateOurServBtn;
/*Declare Global*/


/*Export*/
export default controller_InputCheckbox_EnableRateOurServBtn;
/*Export*/