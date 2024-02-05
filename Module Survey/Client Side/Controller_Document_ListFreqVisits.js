/*Import*/
import {submitFreqVisits} from "./SubmitRequest_FreqVisits.js";
import outputFreqVisitsRadioBtn from "./Output_FreqVisitsRadioBtn.js";
import outputFreqVisitsRadioBtnLoader from "./Output_FreqVisitsRadioBtnLoader.js";
/*Import*/


/*Controller*/
function controller_Document_ListFreqVisits(){

	submitFreqVisits(outputFreqVisitsRadioBtn, outputFreqVisitsRadioBtnLoader, "freqVisitsRadioBtnLoader-Id");	
}
/*Controller*/


/*Declare Global*/
window.controller_Document_ListFreqVisits = controller_Document_ListFreqVisits;
/*Declare Global*/


/*Export*/
export default controller_Document_ListFreqVisits;
/*Export*/