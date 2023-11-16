/*Import*/
import {citizenCharterOneScores_Array} from "./Request_CitizenCharterOneScores.js";
/*Import*/


/*Component*/
function CitizenCharterOneTable(){

	let citizenCharterOneTable = "";

	if(citizenCharterOneScores_Array.length > 0){
		citizenCharterOneTable += `<table>`+
			`<caption><b>`+citizenCharterOneScores_Array[0].ccQuestion+`</b></caption>`+
			`<thead>`+
				`<tr>`+
					`<th>Number</th>`+
					`<th>Rating Description</th>`+
					`<th>Responses</th>`+
				`</tr>`+
			`</thead>`+
		`<tbody>`;
		for(let index=0; index < citizenCharterOneScores_Array.length; index++){
			citizenCharterOneTable += `<tr>`+
				`<td>`+citizenCharterOneScores_Array[index].ccNumbering+`</td>`+
				`<td>`+citizenCharterOneScores_Array[index].ccRate+`</td>`+
				`<td>`+citizenCharterOneScores_Array[index].responses+`</td>`+
			`</tr>`;
		}
		citizenCharterOneTable += `</tbody></table>`;					
	}
	

	if(citizenCharterOneTable == ""){
		citizenCharterOneTable = "No Citizen Charter One Table found";
	}


	return citizenCharterOneTable;
}
/*Component*/


/*Export*/
export default CitizenCharterOneTable;
/*Export*/