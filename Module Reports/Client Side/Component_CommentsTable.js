/*Import*/
import {commentsDetails_Array} from "./Request_CommentReport.js";
/*Import*/


/*Component*/
function CommentsTable(){

	let commentsTable = "";

	if(commentsDetails_Array.length > 0){

		commentsTable = `<button class="normButton_RoClass" onclick="controller_Button_DownloadAsExcel(this)">Download as Excel File</button>
			<table>
				<thead>
					<tr>
						<th>Reference No</th>
						<th>Point of Entry</th>
						<th>Questions</th>
						<th>Answers</th>
						<th>Timestamp</th>								
					</tr>
				</thead>
				<tbody>
		`;
		
		commentsDetails_Array.forEach(function(value, index, array){

			commentsTable += `<tr>
				<td>${value.clientresponse_reference}</td>
				<td>${value.office_value}</td>
				<td>${value.question_value}</td>
				<td>${value.commentresponse_value}</td>
				<td>${value.clientresponse_date}</td>
			</tr>`;
		});	
					
		commentsTable += `</tbody></table>`;
	}
	
	return commentsTable;
}
/*Component*/


/*Export*/
export default CommentsTable;
/*Export*/