/*Import*/
import {respondentId, officeId} from "../../Global JS/Values_Page_RateService.js";
import {commentQuestionDetails_Array} from "./Request_CommentQuestions.js";
/*Import*/


/*Component*/
function CommentField(){
	let elemValue = "";

	let commentField = "";

	if(commentQuestionDetails_Array.length > 0){
		commentField += `<div class="stepSetPerFieldWrap commentField-Class">`+
			`<div class="stepSetPerFieldTitle-Class">Contact Details</div>`+
			`<div class="stepSetPerFieldFlex">`+
				`<textarea class="suggestionTextArea-Class" placeholder="Optional" onkeyup="valueContactDetails(this)"></textarea>`+				
			`</div>`+
		`</div>`;
	}

	for(let index=0; index < commentQuestionDetails_Array.length; index++){
		elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(commentQuestionDetails_Array[index]))));

		commentField += `<div class="stepSetPerFieldWrap commentField-Class">`+
			`<div class="stepSetPerFieldTitle-Class">`+commentQuestionDetails_Array[index].question_value+`</div>`+
			`<div class="stepSetPerFieldFlex">`+
				`<textarea class="suggestionTextArea-Class" placeholder="Optional" onkeyup="valueComments(this)"></textarea>`+
				`<input type="hidden" value="`+elemValue+`" />`+
			`</div>`+
		`</div>`;
	}

	if(commentField == ""){
		if(respondentId == "" && officeId == ""){
			commentField = "Select Respondent and Point of Entry.";	
		}else if(respondentId == ""){
			commentField = "Select Respondent.";	
		}else if(officeId == ""){
			commentField = "Select Point of Entry.";
		}else if(respondentId != "" && officeId != ""){
			commentField = "No Fields to provide your comments and suggestions!";
		}		
	}

	return commentField;
}
/*Component*/


/*Export*/
export default CommentField;
/*Export*/