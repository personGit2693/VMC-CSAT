/*Import*/
import {questionsScoresDetails_Array} from "./Request_QuestionsScoresDetails.js";
/*Import*/


/*Component*/
function QuestionsScoresTable(){

	let questionsScoresTable = "";

	if(questionsScoresDetails_Array.length > 0){

		questionsScoresTable += `<table>`+
			`<thead>`+
				`<tr>`+
					`<th>Numbers</th>`+
					`<th>Questions</th>`+
					`<th>Strongly Agree</th>`+
					`<th>Agree</th>`+
					`<th>Neither Agree nor Disagree</th>`+
					`<th>Disagree</th>`+
					`<th>Strongly disagree</th>`+
					`<th>No Rating</th>`+
					`<th>Percentage</th>`+
				`</tr>`+
			`</thead>`+
		`<tbody>`;

		for(let index=0; index < questionsScoresDetails_Array.length; index++){

			const totalRespPerQuestion = questionsScoresDetails_Array[index].totalStronglyAgree + questionsScoresDetails_Array[index].totalAgree + questionsScoresDetails_Array[index].totalNeither + questionsScoresDetails_Array[index].totalDisagree + questionsScoresDetails_Array[index].totalStronglyDisagree; 
			const totalAgrees = questionsScoresDetails_Array[index].totalStronglyAgree + questionsScoresDetails_Array[index].totalAgree;
			const perQuestionPercent = (totalAgrees / totalRespPerQuestion) * 100;

			questionsScoresTable += `<tr>`+
				`<td>`+questionsScoresDetails_Array[index].questionNo+`</td>`+
				`<td>`+questionsScoresDetails_Array[index].questionValue+`</td>`+
				`<td>`+questionsScoresDetails_Array[index].totalStronglyAgree+`</td>`+
				`<td>`+questionsScoresDetails_Array[index].totalAgree+`</td>`+
				`<td>`+questionsScoresDetails_Array[index].totalNeither+`</td>`+
				`<td>`+questionsScoresDetails_Array[index].totalDisagree+`</td>`+
				`<td>`+questionsScoresDetails_Array[index].totalStronglyDisagree+`</td>`+
				`<td>`+questionsScoresDetails_Array[index].totalNoRating+`</td>`;

				if(perQuestionPercent.toFixed(0) >= 80){

					questionsScoresTable += `<td style="color:#0ABE50;">`+perQuestionPercent.toFixed(0)+`%</td>`;

				}else if(perQuestionPercent.toFixed(0) < 80){

					questionsScoresTable += `<td style="color:#BD212F;">`+perQuestionPercent.toFixed(0)+`%</td>`;
				}

			questionsScoresTable += `</tr>`;
		}
		
		questionsScoresTable += `</tbody></table>`;
	}


	return questionsScoresTable;
}
/*Component*/


/*Export*/
export default QuestionsScoresTable;
/*Export*/