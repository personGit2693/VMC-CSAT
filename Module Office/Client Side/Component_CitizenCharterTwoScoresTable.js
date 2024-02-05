/*Import*/
import {citizenCharterTwoScoresDetails_Array} from "./Request_CitizenCharterTwoScores.js";
/*Import*/


/*Component*/
function CitizenCharterTwoScoresTable(){

	let citizenCharterTwoScoresTable = "";

	if(citizenCharterTwoScoresDetails_Array.length > 0){

		citizenCharterTwoScoresTable += `<table>`+
			`<caption><b>`+citizenCharterTwoScoresDetails_Array[0].ccQuestion+`</b></caption>`+
			`<thead>`+
				`<tr>`+
					`<th>Number</th>`+
					`<th>Rating Description</th>`+
					`<th>Responses</th>`+
				`</tr>`+
			`</thead>`+
		`<tbody>`;

		for(let index=0; index < citizenCharterTwoScoresDetails_Array.length; index++){
			
			citizenCharterTwoScoresTable += `<tr>`+
				`<td>`+citizenCharterTwoScoresDetails_Array[index].ccNumbering+`</td>`+
				`<td>`+citizenCharterTwoScoresDetails_Array[index].ccRate+`</td>`+
				`<td>`+citizenCharterTwoScoresDetails_Array[index].responses+`</td>`+
			`</tr>`;
		}

		citizenCharterTwoScoresTable += `</tbody></table>`;					
	}

	return citizenCharterTwoScoresTable;
}
/*Component*/


/*Export*/
export default CitizenCharterTwoScoresTable;
/*Export*/