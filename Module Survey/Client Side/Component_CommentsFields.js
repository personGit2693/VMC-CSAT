/*Import*/
import {commentQuestionDetails_Array} from "./Request_CommentQuestions.js";
/*Import*/


/*Component*/
function CommentsFields(){

	let elemValue = "";

	let commentsFields = "";

	if(commentQuestionDetails_Array.length > 0){

		commentsFields += `<div class="stepSetPerFieldWrap commentsFields-Class">`+
			`<div class="stepSetPerFieldTitle-Class">Contact Details</div>`+
			`<div class="stepSetPerFieldFlex">`+
				`<textarea class="suggestionTextArea-Class" placeholder="Optional" onkeyup="controller_Textarea_AssignContactDetails(this.value)"></textarea>`+				
			`</div>`+
		`</div>`;
	}

	for(let index=0; index < commentQuestionDetails_Array.length; index++){

		elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(commentQuestionDetails_Array[index]))));

		commentsFields += `<div class="stepSetPerFieldWrap commentsFields-Class">`+
			`<div class="stepSetPerFieldTitle-Class">`+commentQuestionDetails_Array[index].question_value+`</div>`+
			`<div class="stepSetPerFieldFlex">`+
				`<textarea class="suggestionTextArea-Class" placeholder="Optional" onkeyup="controller_Textarea_AssignComments(this)"></textarea>`+
				`<input type="hidden" value="`+elemValue+`" />`+
			`</div>`+
		`</div>`;
	}

	return commentsFields;
}
/*Component*/


/*Export*/
export default CommentsFields;
/*Export*/