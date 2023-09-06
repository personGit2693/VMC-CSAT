/*Import*/
import {countedPassScore} from "./Request_CountPassScore.js";
import {overallEngagement} from "./Request_OverallEngagement.js";
/*Import*/


/*Component*/
function RatingSpan(){

	let ratingSpan = "";

	if(citizenCharterOneScores_Array.length > 0){
		ratingSpan += `<table>`+
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
			ratingSpan += `<tr>`+
				`<td>`+citizenCharterOneScores_Array[index].ccNumbering+`</td>`+
				`<td>`+citizenCharterOneScores_Array[index].ccRate+`</td>`+
				`<td>`+citizenCharterOneScores_Array[index].responses+`</td>`+
			`</tr>`;
		}
		ratingSpan += `</tbody></table>`;					
	}
	

	if(ratingSpan == ""){
		ratingSpan = "No Rating Yet!";
	}


	return ratingSpan;
}
/*Component*/


/*Export*/
export default RatingSpan;
/*Export*/