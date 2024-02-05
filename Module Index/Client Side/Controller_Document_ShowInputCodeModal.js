/*Import*/
import {modalme} from "./Elements_Index.js";
/*Import*/


/*Controller for Showing modal enter code modal*/
function controller_Document_ShowInputCodeModal(){

	for(let index=0; index < modalme.length; index++){
	
		if(modalme[index].classList.contains("enterCodeModal-Class") === true){
			showMyMod('modalme_RoClass', index);
		}
	}	
}
/*Controller for Showing modal enter code modal*/


/*Declare Global*/
window.controller_Document_ShowInputCodeModal = controller_Document_ShowInputCodeModal;
/*Declare Global*/


/*Export*/
export default controller_Document_ShowInputCodeModal;
/*Export*/