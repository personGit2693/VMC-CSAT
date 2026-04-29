/*Import*/
import {questionsScoresDetails_Array} from "./Request_QuestionsScoresDetails.js";
/*Import*/


/*Component*/
async function QuestionsScoresTable(){

	const requestPromise = new Promise(function(resolve){

		let questionsScoresTable = "";

		if(questionsScoresDetails_Array.length > 0){

			const rows = [];
			for(let index = 0; index < questionsScoresDetails_Array.length; index++){
				const q = questionsScoresDetails_Array[index];
				const totalRespPerQuestion = q.totalStronglyAgree + q.totalAgree + q.totalNeither + q.totalDisagree + q.totalStronglyDisagree;
				const pct = ((q.totalStronglyAgree + q.totalAgree) / totalRespPerQuestion * 100).toFixed(0);
				const pctColor = pct >= 80 ? "#0ABE50" : "#BD212F";

				rows.push(`<tr>
					<td>${q.questionNo}</td>
					<td>${q.questionValue}</td>
					<td>${q.totalStronglyAgree}</td>
					<td>${q.totalAgree}</td>
					<td>${q.totalNeither}</td>
					<td>${q.totalDisagree}</td>
					<td>${q.totalStronglyDisagree}</td>
					<td>${q.totalNoRating}</td>
					<td style="color:${pctColor};">${pct}%</td>
				</tr>`);
			}

			questionsScoresTable = `<table>
				<thead><tr>
					<th>Numbers</th><th>Questions</th>
					<th>Strongly Agree</th><th>Agree</th><th>Neither Agree nor Disagree</th>
					<th>Disagree</th><th>Strongly disagree</th><th>No Rating</th><th>Percentage</th>
				</tr></thead>
				<tbody>${rows.join('')}</tbody>
			</table>`;
		}

		resolve(questionsScoresTable);
	});

	return await requestPromise;
}
/*Component*/


/*Export*/
export default QuestionsScoresTable;
/*Export*/