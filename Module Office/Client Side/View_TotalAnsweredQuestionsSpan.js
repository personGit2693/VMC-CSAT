/*Import*/
import {overallEngagementVal} from "./Elements_Page_RatingMonitoring.js";
import TotalAnsweredQuestionsSpan from "./Component_TotalAnsweredQuestionsSpan.js";
/*Import*/


/*Render*/
function viewTotalAnsweredQuestionsSpan(){

	TotalAnsweredQuestionsSpan().then(component => {
		overallEngagementVal.innerHTML = component;
	});
}
/*Render*/


/*Export*/
export default viewTotalAnsweredQuestionsSpan;
/*Export*/