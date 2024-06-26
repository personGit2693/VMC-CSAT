/*Import*/
import {commentDetails_Array} from "./Request_Comments.js";
/*Import*/


/*Component*/
function CommentDiv(){

	let commentDiv = "";

	for(let index=0; index < commentDetails_Array.length; index++){

		/*Compute Satisfaction Level*/
		const satisLevelResult = (commentDetails_Array[index].allPassScore / commentDetails_Array[index].allCountedScore) * 100;
		/*Compute Satisfaction Level*/

		commentDiv += `<div class="commentDetailsWrap">`+
			`<div class="commentHeaderFlex">`+
				`<div class="commentIcon-Class"></div>`+
				`<div class="commentRefNo-Class">`+commentDetails_Array[index].referenceNo+`</div>`;
				
				if(satisLevelResult.toFixed(0) >= 80){

					commentDiv += `<div class="commentRating-Class">Satisfaction Level: <span class="commentRatingValue-Class" style="color: #0ABE50;">`+satisLevelResult.toFixed(0)+`%</span></div>`;

				}else if(satisLevelResult.toFixed(0) <= 79){

					commentDiv += `<div class="commentRating-Class">Satisfaction Level: <span class="commentRatingValue-Class" style="color: #BD212F;">`+satisLevelResult.toFixed(0)+`%</span></div>`;
				}
			commentDiv += `</div>`+
			`<div class="commentRespDetFlex">`+
				`<div class="commentRespDetItem-Class">`+commentDetails_Array[index].officeAbre+`</div>`+
				`<div class="commentRespDetItem-Class">`+commentDetails_Array[index].respType+`</div>`+
				`<div class="commentRespDetItem-Class">`+commentDetails_Array[index].ageRangeValue+`</div>`+
				`<div class="commentRespDetItem-Class">`+commentDetails_Array[index].gender+`</div>`+
				`<div class="commentRespDetItem-Class">`+commentDetails_Array[index].clientType+`</div>`+
			`</div>`+
			`<div class="commentQuestion-Class">Commented on: <span class="commentQuestionValue-Class">`+commentDetails_Array[index].question+`</div>`+
			`<div class="commentAnswer-Class">`+commentDetails_Array[index].comment+`</div>`+
			`<div class="commentedDatetime-Class">`+commentDetails_Array[index].datetime+`</div>`+
		`</div>`;
	}

	return commentDiv;
}
/*Component*/


/*Export*/
export default CommentDiv;
/*Export*/