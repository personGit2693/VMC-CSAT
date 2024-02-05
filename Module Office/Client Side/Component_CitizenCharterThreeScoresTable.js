/*Import*/
import {citizenCharterThreeScoresDetails_Array} from "./Request_CitizenCharterThreeScores.js";
/*Import*/


/*Component*/
function CitizenCharterThreeScoresTable(){

	let citizenCharterThreeScoresTable = "";

	if(citizenCharterThreeScoresDetails_Array.length > 0){

		citizenCharterThreeScoresTable += `<table>`+
			`<caption><b>`+citizenCharterThreeScoresDetails_Array[0].ccQuestion+`</b></caption>`+
			`<thead>`+
				`<tr>`+
					`<th>Number</th>`+
					`<th>Rating Description</th>`+
					`<th>Responses</th>`+
				`</tr>`+
			`</thead>`+
		`<tbody>`;

		for(let index=0; index < citizenCharterThreeScoresDetails_Array.length; index++){
			
			citizenCharterThreeScoresTable += `<tr>`+
				`<td>`+citizenCharterThreeScoresDetails_Array[index].ccNumbering+`</td>`+
				`<td>`+citizenCharterThreeScoresDetails_Array[index].ccRate+`</td>`+
				`<td>`+citizenCharterThreeScoresDetails_Array[index].responses+`</td>`+
			`</tr>`;
		}
		
		citizenCharterThreeScoresTable += `</tbody></table>`;					
	}

	return citizenCharterThreeScoresTable;
}
/*Component*/


/*Export*/
export default CitizenCharterThreeScoresTable;
/*Export*/