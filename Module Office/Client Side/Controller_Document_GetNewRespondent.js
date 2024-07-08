/*Import*/
import {currentNewRespondent, valueCurrentNewRespondent} from "./Values_Office.js";
import controller_Document_CountTotalAnsweredQuestions from "./Controller_Document_CountTotalAnsweredQuestions.js";
import {submitGetNewRespondent} from "./SubmitRequest_GetNewRespondent.js";
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
/*Import*/


/*Controller*/
function controller_Document_GetNewRespondent(){
	
	/*
	submitGetNewRespondent(valueCurrentNewRespondent, controllers_Array);
	*/


	if(typeof(EventSource) !== "undefined"){
		
		const controllers_Array = [
			controller_Document_CountTotalAnsweredQuestions, 
			controller_Document_DisplayRespondent,
			controller_Document_DisplayRespondentPerScorePieChart,
			controller_Document_DisplayStronglyAgreeAreaChart,
			controller_Document_DisplayAgreeAreaChart,
			controller_Document_DisplayNeitherNumberAreaChart,
			controller_Document_DisplayDisagreeNumberAreaChart,
			controller_Document_DisplayStronglyDisagreeAreaChart,
			controller_Document_DisplayNoRatingAreaChart,
			controller_Document_DisplayAvailedOfficeServiceBarChart,
			controller_Document_DisplayQuestionsScoresTable,
			controller_Document_DisplayCcOneScoresTable,
			controller_Document_DisplayCcTwoScoresTable,
			controller_Document_DisplayCcThreeScoresTable
		];


		/*EventSource Instance*/
		let source = new EventSource("../Server Side/Response_NewRespondentNotifier.php");
		/*EventSource Instance*/

		/*Response Message*/
		source.onmessage = function(event){

			if(event.data !== currentNewRespondent){

				valueCurrentNewRespondent(event.data);

				controllers_Array.forEach(function(value, index, array){

					value();
				});
			}
		};
		/*Response Message*/

		/*Connection Problem*/
		source.onerror = function(event){

			console.log("An error occurred while attempting to connect.");			
		};
		/*Connection Problem*/
	}else{
		console.log("Sorry, your browser does not support server-sent events...");
	}
}
/*Controller*/


/*Declare Global*/
window.controller_Document_GetNewRespondent = controller_Document_GetNewRespondent;
/*Declare Global*/


/*Export*/
export default controller_Document_GetNewRespondent;
/*Export*/