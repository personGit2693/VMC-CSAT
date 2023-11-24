/*Import*/
import {questionsTabWrap} from "../../Global JS/JSCollection_Module_Office.js";
import QuestionsTableLoader from "./Component_QuestionsTableLoader.js";
/*Import*/


/*Render*/
function renderQuestionsTableLoader(){
	
	questionsTabWrap.innerHTML = QuestionsTableLoader();
}
/*Render*/


/*Export*/
export default renderQuestionsTableLoader;
/*Export*/