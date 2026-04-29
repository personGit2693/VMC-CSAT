/*Import*/
import {citizenCharterTwoScoresDetails_Array} from "./Request_CitizenCharterTwoScores.js";
/*Import*/


/*Component*/
async function CitizenCharterTwoScoresTable(){

	const requestPromise = new Promise(function(resolve){

		let citizenCharterTwoScoresTable = "";

		if(citizenCharterTwoScoresDetails_Array.length > 0){

			const rows = [];
			for(let index = 0; index < citizenCharterTwoScoresDetails_Array.length; index++){
				const row = citizenCharterTwoScoresDetails_Array[index];
				rows.push(`<tr><td>${row.ccNumbering}</td><td>${row.ccRate}</td><td>${row.responses}</td></tr>`);
			}

			citizenCharterTwoScoresTable = `<table>
				<caption><b>${citizenCharterTwoScoresDetails_Array[0].ccQuestion}</b></caption>
				<thead><tr><th>Number</th><th>Rating Description</th><th>Responses</th></tr></thead>
				<tbody>${rows.join('')}</tbody>
			</table>`;
		}

		resolve(citizenCharterTwoScoresTable);
	});

	return await requestPromise;
}
/*Component*/


/*Export*/
export default CitizenCharterTwoScoresTable;
/*Export*/