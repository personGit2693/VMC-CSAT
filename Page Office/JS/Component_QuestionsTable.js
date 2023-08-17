/*Import*/
import {questionsScores_Array} from "./Request_QuestionsTable.js";
/*Import*/


/*Component*/
function QuestionsTable(){

	let questionsTable = "";

	if(questionsScores_Array.length > 0){
		questionsTable += `<table>`+
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
				`</tr>`+
			`</thead>`+
		`<tbody>`;
		for(let index=0; index < questionsScores_Array.length; index++){
			questionsTable += `<tr>`+
				`<td>`+questionsScores_Array[index].questionNo+`</td>`+
				`<td>`+questionsScores_Array[index].questionValue+`</td>`+
				`<td>`+questionsScores_Array[index].totalStronglyAgree+`</td>`+
				`<td>`+questionsScores_Array[index].totalAgree+`</td>`+
				`<td>`+questionsScores_Array[index].totalNeither+`</td>`+
				`<td>`+questionsScores_Array[index].totalDisagree+`</td>`+
				`<td>`+questionsScores_Array[index].totalStronglyDisagree+`</td>`+
				`<td>`+questionsScores_Array[index].totalNoRating+`</td>`+
			`</tr>`;
		}
		questionsTable += `</tbody></table>`;
	}


	if(questionsTable == ""){
		questionsTable = "No questions found";
	}


	return questionsTable;
}
/*Component*/


/*Export*/
export default QuestionsTable;
/*Export*/