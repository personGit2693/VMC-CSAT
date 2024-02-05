/*Import*/
import {citizenCharterOneScoresDetails_Array} from "./Request_CitizenCharterOneScores.js";
/*Import*/


/*Component*/
function CitizenCharterOneScoresTable(){

	let citizenCharterOneScoresTable = "";

	if(citizenCharterOneScoresDetails_Array.length > 0){

		citizenCharterOneScoresTable += `<table>`+
			`<caption><b>`+citizenCharterOneScoresDetails_Array[0].ccQuestion+`</b></caption>`+
			`<thead>`+
				`<tr>`+
					`<th>Number</th>`+
					`<th>Rating Description</th>`+
					`<th>Responses</th>`+
				`</tr>`+
			`</thead>`+
		`<tbody>`;

		for(let index=0; index < citizenCharterOneScoresDetails_Array.length; index++){
			citizenCharterOneScoresTable += `<tr>`+
				`<td>`+citizenCharterOneScoresDetails_Array[index].ccNumbering+`</td>`+
				`<td>`+citizenCharterOneScoresDetails_Array[index].ccRate+`</td>`+
				`<td>`+citizenCharterOneScoresDetails_Array[index].responses+`</td>`+
			`</tr>`;
		}

		citizenCharterOneScoresTable += `</tbody></table>`;					
	}


	return citizenCharterOneScoresTable;
}
/*Component*/


/*Export*/
export default CitizenCharterOneScoresTable;
/*Export*/