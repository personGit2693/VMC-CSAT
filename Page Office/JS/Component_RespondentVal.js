/*Import*/
import {totalRespondent} from "./Request_TotalRespondent.js";
/*Import*/


/*Component*/
function RespondentVal(){

	let respondentVal = "";
	

	if(isNaN(totalRespondent) === false){
		respondentVal = `<span>`+totalRespondent+`</span>`;
	}	


	if(respondentVal == ""){
		respondentVal = "No Result";
	}

	return respondentVal;
}
/*Component*/


/*Export*/
export default RespondentVal;
/*Export*/