/*Import*/
import {questionsTabWrap} from "./Elements_Page_RatingMonitoring.js";
import QuestionsScoresTable from "./Component_QuestionsScoresTable.js";
/*Import*/


/*Render*/
function viewQuestionsScoresTable(){
	
	const questionsScoresTable_Handler = QuestionsScoresTable();

	if(questionsScoresTable_Handler != ""){

		questionsTabWrap.innerHTML = questionsScoresTable_Handler;

	}else if(questionsScoresTable_Handler == ""){

		questionsTabWrap.innerHTML = "No Questions Rating Result Found.";
	}

}
/*Render*/


/*Export*/
export default viewQuestionsScoresTable;
/*Export*/