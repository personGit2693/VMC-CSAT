/*Import*/
import {dataTwo_Array} from "../../Global JS/Values_Module_Reports.js";
/*Import*/


/*Component*/
function DataTwoTable(){

	let dataTwoTable = "";

	if(dataTwo_Array.length > 0){
		dataTwoTable += `<button class="normButton_RoClass" onclick="controllerDownloadAsExcelButton(this)">Download as Excel File</button>`+
			`<table>`+
				`<thead>`+
					`<tr>`+
						`<th style="background-color: #ffffff;">Control No.</th>`+
						`<th class="ccHeader-Class">CC1</th>`+
						`<th class="ccHeader-Class">CC2</th>`+
						`<th class="ccHeader-Class">CC3</th>`+
						`<th class="q1q7Header-Class">Q1</th>`+
						`<th class="q1q7Header-Class">Q2</th>`+
						`<th class="q1q7Header-Class">Q3</th>`+
						`<th class="q1q7Header-Class">Q4 SQD3</th>`+
						`<th class="q1q7Header-Class">Q5 SQD2</th>`+
						`<th class="q1q7Header-Class">Q6 SQD4</th>`+						
						`<th class="q1q7Header-Class">Q7 SQD1</th>`+
						`<th class="q8q12Header-Class">Q8</th>`+
						`<th class="q8q12Header-Class">Q9</th>`+
						`<th class="q8q12Header-Class">Q10</th>`+
						`<th class="q8q12Header-Class">Q11 SQD8</th>`+
						`<th class="q8q12Header-Class">Q12 SQD5</th>`+
						`<th class="q13q28Header-Class">Q13 SQD7</th>`+
						`<th class="q13q28Header-Class">Q14 SQD7</th>`+
						`<th class="q13q28Header-Class">Q15 SQD7</th>`+
						`<th class="q13q28Header-Class">Q16 SQD7</th>`+
						`<th class="q13q28Header-Class">Q17 SQD7</th>`+
						`<th class="q13q28Header-Class">Q18 SQD7</th>`+
						`<th class="q13q28Header-Class">Q19 SQD7</th>`+
						`<th class="q13q28Header-Class">Q20 SQD7</th>`+
						`<th class="q13q28Header-Class">Q21 SQD7</th>`+
						`<th class="q13q28Header-Class">Q22 SQD7</th>`+
						`<th class="q13q28Header-Class">Q23 SQD7</th>`+
						`<th class="q13q28Header-Class">Q24 SQD7</th>`+
						`<th class="q13q28Header-Class">Q25 SQD7</th>`+
						`<th class="q13q28Header-Class">Q26 SQD7</th>`+
						`<th class="q13q28Header-Class">Q27 SQD6</th>`+
						`<th class="q13q28Header-Class">Q28 SQD0</th>`+
						`<th style="background-color: #ffffff;">AVE SQD7</th>`+
					`</tr>`+
				`</thead>`+
				`<tbody>`;

		for(let index=0; index < dataTwo_Array.length; index++){		
			/*alert(dataTwo_Array.length);
			
			if(index == 86){
				alert(JSON.stringify(dataTwo_Array[index]));
			}
			*/
			
			const controlNo = index + 1;

			let sumSQD7Score = 0;
			let sqd7Denominator = 0;

			for(let indexOne=12; indexOne <=25 ; indexOne++){
				sumSQD7Score += dataTwo_Array[index][2][indexOne].score;

				if(dataTwo_Array[index][2][indexOne].score != 0){
					sqd7Denominator++;
				}

			}

			const averageSQD7 = sumSQD7Score / sqd7Denominator;
			
			dataTwoTable += `<tr>`+
				`<td>`+controlNo+`</td>`+
				`<td>`+dataTwo_Array[index][1][0].ccClientRate+`</td>`+
				`<td>`+dataTwo_Array[index][1][1].ccClientRate+`</td>`+
				`<td>`+dataTwo_Array[index][1][2].ccClientRate+`</td>`+
				`<td>`+dataTwo_Array[index][2][0].score+`</td>`+
				`<td>`+dataTwo_Array[index][2][1].score+`</td>`+
				`<td>`+dataTwo_Array[index][2][2].score+`</td>`+
				`<td>`+dataTwo_Array[index][2][3].score+`</td>`+
				`<td>`+dataTwo_Array[index][2][4].score+`</td>`+
				`<td>`+dataTwo_Array[index][2][5].score+`</td>`+
				`<td>`+dataTwo_Array[index][2][6].score+`</td>`+
				`<td>`+dataTwo_Array[index][2][7].score+`</td>`+
				`<td>`+dataTwo_Array[index][2][8].score+`</td>`+
				`<td>`+dataTwo_Array[index][2][9].score+`</td>`+
				`<td>`+dataTwo_Array[index][2][10].score+`</td>`+
				`<td>`+dataTwo_Array[index][2][11].score+`</td>`+
				`<td>`+dataTwo_Array[index][2][12].score+`</td>`+
				`<td>`+dataTwo_Array[index][2][13].score+`</td>`+
				`<td>`+dataTwo_Array[index][2][14].score+`</td>`+
				`<td>`+dataTwo_Array[index][2][15].score+`</td>`+
				`<td>`+dataTwo_Array[index][2][16].score+`</td>`+
				`<td>`+dataTwo_Array[index][2][17].score+`</td>`+
				`<td>`+dataTwo_Array[index][2][18].score+`</td>`+
				`<td>`+dataTwo_Array[index][2][19].score+`</td>`+
				`<td>`+dataTwo_Array[index][2][20].score+`</td>`+
				`<td>`+dataTwo_Array[index][2][21].score+`</td>`+
				`<td>`+dataTwo_Array[index][2][22].score+`</td>`+
				`<td>`+dataTwo_Array[index][2][23].score+`</td>`+
				`<td>`+dataTwo_Array[index][2][24].score+`</td>`+
				`<td>`+dataTwo_Array[index][2][25].score+`</td>`+
				`<td>`+dataTwo_Array[index][2][26].score+`</td>`+
				`<td>`+dataTwo_Array[index][2][27].score+`</td>`+
				`<td>`+averageSQD7.toFixed(2)+`</td>`+
			`</tr>`;
		}

		dataTwoTable += `</tbody></table>`;
	}
	

	if(dataTwoTable == ""){
		dataTwoTable = "No Result";
	}

	return dataTwoTable;
}
/*Component*/


/*Export*/
export default DataTwoTable;
/*Export*/