/*Import*/
import {totalRespondent} from "./Request_TotalRespondent.js";
/*Import*/


/*Component*/
function RespondentSpan(){

	let respondentSpan = "";
	
	if(isNaN(totalRespondent) === false){
		
		respondentSpan = `<span>`+totalRespondent+`</span>`;
	}	

	return respondentSpan;
}
/*Component*/


/*Export*/
export default RespondentSpan;
/*Export*/