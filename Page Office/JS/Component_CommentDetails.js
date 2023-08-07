/*Import*/
import {commentDetails_Array} from "./Request_CommentDetails.js";
/*Import*/


/*Component*/
function CommentDetails(){

	let commentDetails = "";
	for(let index=0; index < commentDetails_Array.length; index++){
		commentDetails += `<div class="commentDetailsWrap">`+
			`<div class="commentHeaderFlex">`+
				`<div class="commentIcon-Class"></div>`+
				`<div class="commentRefNo-Class">`+commentDetails_Array[index].referenceNo+`</div>`+
				`<div class="commentRating-Class">Satisfaction Level: <span class="commentRatingValue-Class" style="color: #BD212F;">`+commentDetails_Array[index].percent+`</span></div>`+
			`</div>`+
			`<div class="commentRespDetFlex">`+
				`<div class="commentRespDetItem-Class">`+commentDetails_Array[index].officeAbre+`</div>`+
				`<div class="commentRespDetItem-Class">`+commentDetails_Array[index].respType+`</div>`+
				`<div class="commentRespDetItem-Class">`+commentDetails_Array[index].ageRangeValue+`</div>`+
				`<div class="commentRespDetItem-Class">`+commentDetails_Array[index].gender+`</div>`+
				`<div class="commentRespDetItem-Class">`+commentDetails_Array[index].clientType+`</div>`+
			`</div>`;
	}

	if(commentDetails == ""){
		awarenessRateRadioBtn = "No comment yet!";
	}

	return awarenessRateRadioBtn;
}
/*Component*/


/*Export*/
export default AwarenessRateRadioBtn;
/*Export*/