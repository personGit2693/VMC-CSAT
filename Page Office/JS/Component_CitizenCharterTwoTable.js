/*Import*/
import {citizenCharterTwoScores_Array} from "./Request_CitizenCharterTwoScores.js";
/*Import*/


/*Component*/
function CitizenCharterTwoTable(){

	let citizenCharterTwoTable = "";

	if(citizenCharterTwoScores_Array.length > 0){
		citizenCharterTwoTable += `<table>`+
			`<caption><b>`+citizenCharterTwoScores_Array[0].ccQuestion+`</b></caption>`+
			`<thead>`+
				`<tr>`+
					`<th>Rating Description</th>`+
					`<th>Responses</th>`+
				`</tr>`+
			`</thead>`+
		`<tbody>`;
		for(let index=0; index < citizenCharterTwoScores_Array.length; index++){
			citizenCharterTwoTable += `<tr>`+
				`<td>`+citizenCharterTwoScores_Array[index].ccRate+`</td>`+
				`<td>`+citizenCharterTwoScores_Array[index].responses+`</td>`+
			`</tr>`;
		}
		citizenCharterTwoTable += `</tbody></table>`;					
	}
	

	if(citizenCharterTwoTable == ""){
		citizenCharterTwoTable = "No Citizen Charter Two Table found";
	}


	return citizenCharterTwoTable;
}
/*Component*/


/*Export*/
export default CitizenCharterTwoTable;
/*Export*/