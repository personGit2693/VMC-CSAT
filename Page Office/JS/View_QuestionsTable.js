/*Import*/
import {questionsTabWrap} from "./JSCollection_Page_Dashboard.js";
import QuestionsTable from "./Component_QuestionsTable.js";
/*Import*/


/*Render*/
function renderQuestionsTable(){
	questionsTabWrap.innerHTML = QuestionsTable();
}
/*Render*/


/*Export*/
export default renderQuestionsTable;
/*Export*/