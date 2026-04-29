/*Import*/
import {questionsTabWrap} from "./Elements_Page_RatingMonitoring.js";
import QuestionsScoresTable from "./Component_QuestionsScoresTable.js";
/*Import*/


/*Render*/
function viewQuestionsScoresTable(){

	QuestionsScoresTable().then(component => {
		if(component == ""){
			questionsTabWrap.innerHTML = "No Questions Rating Result Found.";
		}else{
			questionsTabWrap.innerHTML = component;
		}
	});
}
/*Render*/


/*Export*/
export default viewQuestionsScoresTable;
/*Export*/