/*Import*/
import {questionsWrap} from "./JsCollection_Page_RateService.js";
import QuestionScoreRadioBtn from "./Component_QuestionScoreRadioBtn.js";
/*Import*/


/*Render*/
function renderQuestionScoreRadioBtn(){
	questionsWrap.innerHTML = QuestionScoreRadioBtn();
}
/*Render*/


/*Export*/
export default renderQuestionScoreRadioBtn;
/*Export*/