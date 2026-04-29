/*Import*/
import {totalAnsweredQuestions} from "./Request_TotalAnsweredQuestions.js";
import {countedPassScore} from "./Request_CountPassScore.js";
/*Import*/


/*Component*/
async function RatingSpan(){

	const requestPromise = new Promise(function(resolve){

		let ratingSpan = "";

		if(totalAnsweredQuestions != 0){

			const pct = ((countedPassScore / totalAnsweredQuestions) * 100).toFixed(0);

			let color, label;
			if(pct >= 95){
				color = "#036939"; label = "Excellent";
			}else if(pct >= 90){
				color = "#036939"; label = "Very Satisfactory";
			}else if(pct >= 85){
				color = "#8EC63F"; label = "Satisfactory";
			}else if(pct >= 80){
				color = "#FAB042"; label = "Compliant";
			}else if(pct >= 75){
				color = "#E15268"; label = "Needs Improvement";
			}else{
				color = "#BD212F"; label = "Poor";
			}

			ratingSpan = `<span style="color:${color};">${pct}% (${label})</span>`;
		}

		resolve(ratingSpan);
	});

	return await requestPromise;
}
/*Component*/


/*Export*/
export default RatingSpan;
/*Export*/