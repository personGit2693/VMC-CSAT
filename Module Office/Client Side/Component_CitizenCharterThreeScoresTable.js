/*Import*/
import {citizenCharterThreeScoresDetails_Array} from "./Request_CitizenCharterThreeScores.js";
/*Import*/


/*Component*/
async function CitizenCharterThreeScoresTable(){

	const requestPromise = new Promise(function(resolve){

		let citizenCharterThreeScoresTable = "";

		if(citizenCharterThreeScoresDetails_Array.length > 0){

			const rows = [];
			for(let index = 0; index < citizenCharterThreeScoresDetails_Array.length; index++){
				const row = citizenCharterThreeScoresDetails_Array[index];
				rows.push(`<tr><td>${row.ccNumbering}</td><td>${row.ccRate}</td><td>${row.responses}</td></tr>`);
			}

			citizenCharterThreeScoresTable = `<table>
				<caption><b>${citizenCharterThreeScoresDetails_Array[0].ccQuestion}</b></caption>
				<thead><tr><th>Number</th><th>Rating Description</th><th>Responses</th></tr></thead>
				<tbody>${rows.join('')}</tbody>
			</table>`;
		}

		resolve(citizenCharterThreeScoresTable);
	});

	return await requestPromise;
}
/*Component*/


/*Export*/
export default CitizenCharterThreeScoresTable;
/*Export*/