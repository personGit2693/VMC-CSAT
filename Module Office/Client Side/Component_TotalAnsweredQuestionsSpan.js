/*Import*/
import {totalAnsweredQuestions} from "./Request_TotalAnsweredQuestions.js";
/*Import*/


/*Component*/
async function TotalAnsweredQuestionsSpan(){

	const requestPromise = new Promise(function(resolve){

		let totalAnsweredQuestionsSpan = "";

		if(isNaN(totalAnsweredQuestions) === false){
			totalAnsweredQuestionsSpan = `<span>${totalAnsweredQuestions}</span>`;
		}

		resolve(totalAnsweredQuestionsSpan);
	});

	return await requestPromise;
}
/*Component*/


/*Export*/
export default TotalAnsweredQuestionsSpan;
/*Export*/