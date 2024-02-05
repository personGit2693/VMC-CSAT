/*Import*/
import {resetfreqVisitId, valuefreqVisitId} from "./Values_Survey.js";
/*Import*/


/*Controller*/
function controller_RadioBtn_AssignFreqVisitValue(selectedFreqVisit_Base, radioBtnElement){

	const radioBtnElement_Checked = radioBtnElement.getAttribute("data-rogridradio-check");
	
	if(radioBtnElement_Checked == "true"){
		
		valuefreqVisitId(selectedFreqVisit_Base);

	}else if(radioBtnElement_Checked == "false"){

		resetfreqVisitId();
	} 
}
/*Controller*/


/*Declare Global*/
window.controller_RadioBtn_AssignFreqVisitValue = controller_RadioBtn_AssignFreqVisitValue;
/*Declare Global*/


/*Export*/
export default controller_RadioBtn_AssignFreqVisitValue;
/*Export*/