/*Import*/
import {csmDatas_Array} from "./Values_Reports.js";
/*Import*/


/*Component*/
function CsmDataTable(){

	let csmDataTable = "";

	if(csmDatas_Array.length > 0){

		csmDataTable += `<button class="normButton_RoClass" onclick="controller_Button_DownloadAsExcel(this)">Download as Excel File</button>
		<table>
			<thead>
				<tr>
					<th style="background-color: #ffffff;">Control No.</th>
					<th style="background-color: #ffffff;">Point of Entry</th>
					<th class="ccHeader-Class">CC1</th>
					<th class="ccHeader-Class">CC2</th>
					<th class="ccHeader-Class">CC3</th>
					<th class="q1q7Header-Class">Q1 SQD12</th>
					<th class="q1q7Header-Class">Q2 SQD1</th>
					<th class="q1q7Header-Class">Q3 SQD2</th>
					<th class="q1q7Header-Class">Q4 SQD3</th>
					<th class="q1q7Header-Class">Q5 SQD4</th>
					<th class="q1q7Header-Class">Q6 SQD5</th>					
					<th class="q1q7Header-Class">Q7 SQD6</th>
					<th class="q1q7Header-Class">Q8 SQD7</th>
					<th class="q1q7Header-Class">Q9 SQD8</th>							
					<th style="background-color: #ffffff;">AVERAGE</th>
				</tr>
			</thead>
			<tbody>
		`;

		for(let index=0; index < csmDatas_Array.length; index++){

			let controlNo = index + 1;
			let csmRespNumerator = 0;
			let csmRespDenominator = 0;
			let csmRespAverage = 0;

			csmDataTable += `<tr>
				<td>${controlNo}</td>
				<td>${csmDatas_Array[index][1]}</td>
				<td>${csmDatas_Array[index][2][0].ccquestionsrate_rate}</td>
				<td>${csmDatas_Array[index][2][1].ccquestionsrate_rate}</td>
				<td>${csmDatas_Array[index][2][2].ccquestionsrate_rate}</td>
				<td>${csmDatas_Array[index][3][0].score_value}</td>
				<td>${csmDatas_Array[index][3][1].score_value}</td>
				<td>${csmDatas_Array[index][3][2].score_value}</td>
				<td>${csmDatas_Array[index][3][3].score_value}</td>
				<td>${csmDatas_Array[index][3][4].score_value}</td>
				<td>${csmDatas_Array[index][3][5].score_value}</td>
				<td>${csmDatas_Array[index][3][6].score_value}</td>
				<td>${csmDatas_Array[index][3][7].score_value}</td>
				<td>${csmDatas_Array[index][3][8].score_value}</td>
			`;

			for(let indexOne=0; indexOne < csmDatas_Array[index][3].length; indexOne++){

				csmRespNumerator += csmDatas_Array[index][3][indexOne].score_value;

				if(csmDatas_Array[index][3][indexOne].score_value != 0){

					csmRespDenominator++;
				}
			}

			csmRespAverage = csmRespNumerator / csmRespDenominator;

			csmDataTable += `<td>${csmRespAverage.toFixed(2)}</td></tr>`;
		}

		csmDataTable += `</tbody></table>`;
	}

	return csmDataTable;
}
/*Component*/


/*Export*/
export default CsmDataTable;
/*Export*/