/*Import*/
import {countedPassScore} from "./Request_CountPassScore.js";
import {overallEngagement} from "./Request_OverallEngagement.js";
/*Import*/


/*Component*/
function RatingSpan(){

	let ratingSpan = "";

	
	/*Compute Point of entry rating*/
	if(overallEngagement != 0){
		const pointOfEntryRate = (countedPassScore / overallEngagement) * 100;

		if(pointOfEntryRate.toFixed(0) >= 95){
			ratingSpan = `<span style="color: #036939;">`+pointOfEntryRate.toFixed(0)+`% (Excellent)</span>`;
		}else if(pointOfEntryRate.toFixed(0) >= 90 && pointOfEntryRate.toFixed(0) < 95){
			ratingSpan = `<span style="color: #036939;">`+pointOfEntryRate.toFixed(0)+`% (Very Satisfactory)</span>`;
		}else if(pointOfEntryRate.toFixed(0) >= 85 && pointOfEntryRate.toFixed(0) < 90){
			ratingSpan = `<span style="color: #8EC63F;">`+pointOfEntryRate.toFixed(0)+`% (Satisfactory)</span>`;
		}else if(pointOfEntryRate.toFixed(0) >= 80 && pointOfEntryRate.toFixed(0) < 85){
			ratingSpan = `<span style="color: #FAB042;">`+pointOfEntryRate.toFixed(0)+`% (Compliant)</span>`;
		}else if(pointOfEntryRate.toFixed(0) >= 75 && pointOfEntryRate.toFixed(0) < 80){
			ratingSpan = `<span style="color: #E15268;">`+pointOfEntryRate.toFixed(0)+`% (Needs Improvement)</span>`;
		}else if(pointOfEntryRate.toFixed(0) < 75){
			ratingSpan = `<span style="color: #BD212F;">`+pointOfEntryRate.toFixed(0)+`% (Poor)</span>`;
		}
	}
	/*Compute Point of entry rating*/
	

	if(ratingSpan == ""){
		ratingSpan = "No Rating Yet!";
	}


	return ratingSpan;
}
/*Component*/


/*Export*/
export default RatingSpan;
/*Export*/