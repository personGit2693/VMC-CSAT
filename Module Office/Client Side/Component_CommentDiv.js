/*Import*/
import {commentDetails_Array} from "./Request_Comments.js";
/*Import*/


/*Component*/
async function CommentDiv(){

	const requestPromise = new Promise(function(resolve){

		let commentDiv = "";

		const cards = [];
		for(let index = 0; index < commentDetails_Array.length; index++){
			const c = commentDetails_Array[index];
			const satisLevel = (c.allPassScore / c.allCountedScore * 100).toFixed(0);
			const satisColor = satisLevel >= 80 ? "#0ABE50" : "#BD212F";

			cards.push(`<div class="commentDetailsWrap">
				<div class="commentHeaderFlex">
					<div class="commentIcon-Class"></div>
					<div class="commentRefNo-Class">${c.referenceNo}</div>
					<div class="commentRating-Class">Satisfaction Level: <span class="commentRatingValue-Class" style="color:${satisColor};">${satisLevel}%</span></div>
				</div>
				<div class="commentRespDetFlex">
					<div class="commentRespDetItem-Class">${c.officeAbre}</div>
					<div class="commentRespDetItem-Class">${c.respType}</div>
					<div class="commentRespDetItem-Class">${c.ageRangeValue}</div>
					<div class="commentRespDetItem-Class">${c.gender}</div>
					<div class="commentRespDetItem-Class">${c.clientType}</div>
				</div>
				<div class="commentQuestion-Class">Commented on: <span class="commentQuestionValue-Class">${c.question}</div>
				<div class="commentAnswer-Class">${c.comment}</div>
				<div class="commentedDatetime-Class">${c.datetime}</div>
			</div>`);
		}

		commentDiv = cards.join('');

		resolve(commentDiv);
	});

	return await requestPromise;
}
/*Component*/


/*Export*/
export default CommentDiv;
/*Export*/