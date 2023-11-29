/*Import*/
import {dataOne_Array} from "./Request_DataOne.js";
/*Import*/


/*Component*/
function DataOneTable(){

	let dataOneTable = "";

	if(dataOne_Array.length > 0){
		dataOneTable += `<button class="normButton_RoClass" onclick="controllerDownloadAsExcelButton(this)">Download as Excel File</button>`+
			`<table>`+
				`<thead>`+
					`<tr>`+
						`<th>Control No.</th>`+
						`<th>RESPONDENT</th>`+
						`<th>AGE</th>`+
						`<th>SEX</th>`+
						`<th>RELIGION</th>`+
						`<th>LEVEL OF EDUCATION</th>`+
						`<th>DATE OF CONSULT/ VISIT</th>`+
						`<th>DEPARTMENT/ OFFICE VISITED</th>`+
						`<th>SERVICE AVAILED</th>`+
						`<th>FREQUENCY OF VISIT</th>`+
					`</tr>`+
				`</thead>`+
				`<tbody>`;
	}

	for(let index=0; index < dataOne_Array.length; index++){
		const controlNo = index + 1;

		dataOneTable += `<tr>`+
			`<td>`+controlNo+`</td>`+
			`<td>`+dataOne_Array[index].respondent_name+`</td>`+
			`<td>`+dataOne_Array[index].clientresponse_age+`</td>`+
			`<td>`+dataOne_Array[index].gender_abbre+`</td>`+
			`<td>`+dataOne_Array[index].religion_name+`</td>`+
			`<td>`+dataOne_Array[index].educattain_value+`</td>`+
			`<td>`+dataOne_Array[index].clientresponse_date+`</td>`+
			`<td>`+dataOne_Array[index].office_value+`</td>`+
			`<td>`+dataOne_Array[index].officeservice_name+`</td>`+
			`<td>`+dataOne_Array[index].visityear_value+`</td>`+
		`</tr>`;
	}

	if(dataOne_Array.length > 0){
		dataOneTable += `</tbody></table>`;
	}

	if(dataOneTable == ""){
		dataOneTable = "No Result";
	}

	return dataOneTable;
}
/*Component*/


/*Export*/
export default DataOneTable;
/*Export*/