/*Import*/
import {citizenCharterOneScoresDetails_Array} from "./Request_CitizenCharterOneScores.js";
/*Import*/


/*Component*/
async function CitizenCharterOneScoresTable(){

	const requestPromise = new Promise(function(resolve){

		let citizenCharterOneScoresTable = "";

		if(citizenCharterOneScoresDetails_Array.length > 0){

			const rows = [];
			for(let index = 0; index < citizenCharterOneScoresDetails_Array.length; index++){
				const row = citizenCharterOneScoresDetails_Array[index];
				rows.push(`<tr><td>${row.ccNumbering}</td><td>${row.ccRate}</td><td>${row.responses}</td></tr>`);
			}

			citizenCharterOneScoresTable = `<table>
				<caption><b>${citizenCharterOneScoresDetails_Array[0].ccQuestion}</b></caption>
				<thead><tr><th>Number</th><th>Rating Description</th><th>Responses</th></tr></thead>
				<tbody>${rows.join('')}</tbody>
			</table>`;
		}

		resolve(citizenCharterOneScoresTable);
	});

	return await requestPromise;
}
/*Component*/


/*Export*/
export default CitizenCharterOneScoresTable;
/*Export*/