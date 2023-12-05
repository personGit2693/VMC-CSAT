/*Import*/
import {questionsTabWrap} from "../../Global JS/JSCollection_Module_Office.js";
import QuestionsTable from "./Component_QuestionsTable.js";
/*Import*/


/*Render*/
function viewQuestionsTable(){
	questionsTabWrap.innerHTML = QuestionsTable();
}
/*Render*/


/*Export*/
export default viewQuestionsTable;
/*Export*/