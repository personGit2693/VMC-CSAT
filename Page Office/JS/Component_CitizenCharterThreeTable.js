/*Import*/
import {citizenCharterThreeScores_Array} from "./Request_CitizenCharterThreeScores.js";
/*Import*/


/*Component*/
function CitizenCharterThreeTable(){

	let citizenCharterThreeTable = "";

	if(citizenCharterThreeScores_Array.length > 0){
		citizenCharterThreeTable += `<table>`+
			`<caption><b>`+citizenCharterThreeScores_Array[0].ccQuestion+`</b></caption>`+
			`<thead>`+
				`<tr>`+
					`<th>Number</th>`+
					`<th>Rating Description</th>`+
					`<th>Responses</th>`+
				`</tr>`+
			`</thead>`+
		`<tbody>`;
		for(let index=0; index < citizenCharterThreeScores_Array.length; index++){
			citizenCharterThreeTable += `<tr>`+
				`<td>`+citizenCharterThreeScores_Array[index].ccNumbering+`</td>`+
				`<td>`+citizenCharterThreeScores_Array[index].ccRate+`</td>`+
				`<td>`+citizenCharterThreeScores_Array[index].responses+`</td>`+
			`</tr>`;
		}
		citizenCharterThreeTable += `</tbody></table>`;					
	}
	

	if(citizenCharterThreeTable == ""){
		citizenCharterThreeTable = "No Citizen Charter Three Table found";
	}


	return citizenCharterThreeTable;
}
/*Component*/


/*Export*/
export default CitizenCharterThreeTable;
/*Export*/