/*Import*/
import {rateOurServBtn, modalme} from "./Elements_Index.js";
/*Import*/


/*Controller for displaying Rate Our Service Button and close enter code modal*/
function controller_Document_ShowRateOurServBtn(){	

	/*Close modal enter code modal*/
	for(let index=0; index < modalme.length; index++){

		if(modalme[index].classList.contains("enterCodeModal-Class") === true){
			
			closeMyMod('modalme_RoClass', index);
		}	
	}
	/*Close modal enter code modal*/


	/*Show Rate Our Service Button*/
	rateOurServBtn.style.visibility = "visible";
	/*Show Rate Our Service Button*/

	
}
/*Controller for displaying Rate Our Service Button and close enter code modal*/


/*Declare Global*/
window.controller_Document_ShowRateOurServBtn = controller_Document_ShowRateOurServBtn;
/*Declare Global*/


/*Export*/
export default controller_Document_ShowRateOurServBtn;
/*Export*/