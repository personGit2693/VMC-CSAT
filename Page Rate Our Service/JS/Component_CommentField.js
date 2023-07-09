/*Import*/
import {commentQuestionDetails_Array} from "./Request_CommentQuestions.js";
/*Import*/


/*Component*/
function CommentField(){
	let elemValue = "";

	let commentField = "";
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
		commentField = "No Fields to provide your comments and suggestions!";
	}

	return commentField;
}
/*Component*/


/*Export*/
export default CommentField;
/*Export*/