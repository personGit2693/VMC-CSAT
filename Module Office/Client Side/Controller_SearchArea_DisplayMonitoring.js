/*Import*/
import controller_Document_CountTotalAnsweredQuestions from "./Controller_Document_CountTotalAnsweredQuestions.js";
import controller_Document_DisplayRespondent from "./Controller_Document_DisplayRespondent.js";
import controller_Document_DisplayRespondentPerScorePieChart from "./Controller_Document_DisplayRespondentPerScorePieChart.js";
import controller_Document_DisplayStronglyAgreeAreaChart from "./Controller_Document_DisplayStronglyAgreeAreaChart.js";
import controller_Document_DisplayAgreeAreaChart from "./Controller_Document_DisplayAgreeAreaChart.js";
import controller_Document_DisplayNeitherNumberAreaChart from "./Controller_Document_DisplayNeitherNumberAreaChart.js";
import controller_Document_DisplayDisagreeNumberAreaChart from "./Controller_Document_DisplayDisagreeNumberAreaChart.js";
import controller_Document_DisplayStronglyDisagreeAreaChart from "./Controller_Document_DisplayStronglyDisagreeAreaChart.js";
import controller_Document_DisplayNoRatingAreaChart from "./Controller_Document_DisplayNoRatingAreaChart.js";
import controller_Document_DisplayAvailedOfficeServiceBarChart from "./Controller_Document_DisplayAvailedOfficeServiceBarChart.js";
import controller_Document_DisplayQuestionsScoresTable from "./Controller_Document_DisplayQuestionsScoresTable.js";
import controller_Document_DisplayCcOneScoresTable from "./Controller_Document_DisplayCcOneScoresTable.js";
import controller_Document_DisplayCcTwoScoresTable from "./Controller_Document_DisplayCcTwoScoresTable.js";
import controller_Document_DisplayCcThreeScoresTable from "./Controller_Document_DisplayCcThreeScoresTable.js";
import controller_Document_DisplayComments from "./Controller_Document_DisplayComments.js";
/*Import*/


/*Controller*/
function controller_SearchArea_DisplayMonitoring(){

	controller_Document_CountTotalAnsweredQuestions();
	controller_Document_DisplayRespondent();
	controller_Document_DisplayRespondentPerScorePieChart();
	controller_Document_DisplayStronglyAgreeAreaChart();
	controller_Document_DisplayAgreeAreaChart();
	controller_Document_DisplayNeitherNumberAreaChart();
	controller_Document_DisplayDisagreeNumberAreaChart();
	controller_Document_DisplayStronglyDisagreeAreaChart();
	controller_Document_DisplayNoRatingAreaChart();
	controller_Document_DisplayAvailedOfficeServiceBarChart();
	controller_Document_DisplayQuestionsScoresTable();
	controller_Document_DisplayCcOneScoresTable();
	controller_Document_DisplayCcTwoScoresTable();
	controller_Document_DisplayCcThreeScoresTable();
	controller_Document_DisplayComments();
}
/*Controller*/


/*Declare Global*/
window.controller_SearchArea_DisplayMonitoring = controller_SearchArea_DisplayMonitoring;
/*Declare Global*/


/*Export*/
export default controller_SearchArea_DisplayMonitoring;
/*Export*/