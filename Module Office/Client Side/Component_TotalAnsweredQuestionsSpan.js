/*Import*/
import {totalAnsweredQuestions} from "./Request_TotalAnsweredQuestions.js";
/*Import*/


/*Component*/
function TotalAnsweredQuestionsSpan(){

	let totalAnsweredQuestionsSpan = "";
	

	if(isNaN(totalAnsweredQuestions) === false){

		totalAnsweredQuestionsSpan = `<span>`+totalAnsweredQuestions+`</span>`;
	}	

	return totalAnsweredQuestionsSpan;
}
/*Component*/


/*Export*/
export default TotalAnsweredQuestionsSpan;
/*Export*/