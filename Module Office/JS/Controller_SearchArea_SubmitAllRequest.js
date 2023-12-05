/*Import*/
import {valueOverallStronglyDisagree, valueOverallStronglyAgree, valueOverallServRate, valueOverallNoRating, valueOverallNeither, valueOverallDisagree, valueOverallAgree, commentDisplay, commentStartIndex, selectedOffice_Obj, clientTypeInternal, clientTypeExternal, valueAvailedOfficeService, valueResetCommentSection} from "../../Global JS/Values_Module_Office.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "../../Global JS/JSCollection_Module_Office.js";
import {submitRequestOverallEngagement} from "./SubmitRequest_OverallEngagement.js";
import {submitRequestTotalRespondent} from "./SubmitRequest_TotalRespondent.js";
import {submitRequestQuestionsTable} from "./SubmitRequest_QuestionsTable.js";
import {submitRequestCitizenCharterOneScores} from "./SubmitRequest_CitizenCharterOneScores.js";
import {submitRequestCitizenCharterTwoScores} from "./SubmitRequest_CitizenCharterTwoScores.js";
import {submitRequestCitizenCharterThreeScores} from "./SubmitRequest_CitizenCharterThreeScores.js";
import {submitRequestOverallServRate} from "./SubmitRequest_OverallServRate.js";
import {submitRequestOverallStronglyAgree} from "./SubmitRequest_OverallStronglyAgree.js";
import {submitRequestOverallAgree} from "./SubmitRequest_OverallAgree.js";
import {submitRequestOverallNeither} from "./SubmitRequest_OverallNeither.js";
import {submitRequestOverallDisagree} from "./SubmitRequest_OverallDisagree.js";
import {submitRequestOverallStronglyDisagree} from "./SubmitRequest_OverallStronglyDisagree.js";
import {submitRequestOverallNoRating} from "./SubmitRequest_OverallNoRating.js";
import {submitRequestAvailedOfficeService} from "./SubmitRequest_AvailedOfficeService.js";
import {submitRequestCommentDetails} from "./SubmitRequest_CommentDetails.js";
import {submitRequestCountPassScore} from "./SubmitRequest_CountPassScore.js";
import outputOverallEngagementVal from "./Output_OverallEngagementVal.js";
import outputOverallEngagementValLoader from "./Output_OverallEngagementValLoader.js";
import outputRespondentVal from "./Output_RespondentVal.js";
import outputRespondentValLoader from "./Output_RespondentValLoader.js";
import outputQuestionsTable from "./Output_QuestionsTable.js";
import outputQuestionsTableLoader from "./Output_QuestionsTableLoader.js";
import outputCitizenCharterOneTable from "./Output_CitizenCharterOneTable.js";
import outputCitizenCharterOneTableLoader from "./Output_CitizenCharterOneTableLoader.js";
import outputCitizenCharterTwoTable from "./Output_CitizenCharterTwoTable.js";
import outputCitizenCharterTwoTableLoader from "./Output_CitizenCharterTwoTableLoader.js";
import outputCitizenCharterThreeTable from "./Output_CitizenCharterThreeTable.js";
import outputCitizenCharterThreeTableLoader from "./Output_CitizenCharterThreeTableLoader.js";
import outputOverallServRatePieChart from "./Output_OverallServRatePieChart.js";
import outputOverallServRatePieChartLoader from "./Output_OverallServRatePieChartLoader.js";
import outputOverallStronglyAgreeLineChart from "./Output_OverallStronglyAgreeLineChart.js";
import outputOverallStronglyAgreeLineChartLoader from "./Output_OverallStronglyAgreeLineChartLoader.js";
import outputOverallAgreeLineChart from "./Output_OverallAgreeLineChart.js";
import outputOverallAgreeLineChartLoader from "./Output_OverallAgreeLineChartLoader.js";
import outputOverallNeitherLineChart from "./Output_OverallNeitherLineChart.js";
import outputOverallNeitherLineChartLoader from "./Output_OverallNeitherLineChartLoader.js";
import outputOverallDisagreeLineChart from "./Output_OverallDisagreeLineChart.js";
import outputOverallDisagreeLineChartLoader from "./Output_OverallDisagreeLineChartLoader.js";
import outputOverallStronglyDisagreeLineChart from "./Output_OverallStronglyDisagreeLineChart.js";
import outputOverallStronglyDisagreeLineChartLoader from "./Output_OverallStronglyDisagreeLineChartLoader.js";
import outputOverallNoRatingLineChart from "./Output_OverallNoRatingLineChart.js";
import outputOverallNoRatingLineChartLoader from "./Output_OverallNoRatingLineChartLoader.js";
import outputAvailedOfficeServiceChart from "./Output_AvailedOfficeService.js";
import outputAvailedOfficeServiceLoader from "./Output_AvailedOfficeServiceLoader.js";
import outputCommentDetails from "./Output_CommentDetails.js";
import outputCommentSectionLoader from "./Output_CommentSectionLoader.js";
import outputRatingSpan from "./Output_RatingSpan.js";
import outputRatingSpanLoader from "./Output_RatingSpanLoader.js";
/*Import*/


/*Controller for invoking some Submit Request Functions to ouput some data and the function for reseting comment content*/
function controller_SearchArea_SubmitAllRequest(){

	valueResetCommentSection();
	
	submitRequestOverallEngagement(outputOverallEngagementVal, outputOverallEngagementValLoader, "overallEngagementValLoader-Id", submitRequestCountPassScore, outputRatingSpan, outputRatingSpanLoader, "ratingSpanLoader-Id", selectedOffice_Obj.office_id, clientTypeInternal, clientTypeExternal, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value);
	
	submitRequestTotalRespondent(outputRespondentVal, outputRespondentValLoader, "respondentValLoader-Id", selectedOffice_Obj.office_id, clientTypeInternal, clientTypeExternal, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value);

	submitRequestQuestionsTable(outputQuestionsTable, outputQuestionsTableLoader, "questionsTableLoader-Id", selectedOffice_Obj.office_id, clientTypeInternal, clientTypeExternal, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value);	
	submitRequestCitizenCharterOneScores(outputCitizenCharterOneTable, outputCitizenCharterOneTableLoader, "citizenCharterOneTableLoader-Id", selectedOffice_Obj.office_id, clientTypeInternal, clientTypeExternal, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value);	
	submitRequestCitizenCharterTwoScores(outputCitizenCharterTwoTable, outputCitizenCharterTwoTableLoader, "citizenCharterTwoTableLoader-Id", selectedOffice_Obj.office_id, clientTypeInternal, clientTypeExternal, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value);
	submitRequestCitizenCharterThreeScores(outputCitizenCharterThreeTable, outputCitizenCharterThreeTableLoader, "citizenCharterThreeTableLoader-Id", selectedOffice_Obj.office_id, clientTypeInternal, clientTypeExternal, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value);

	submitRequestOverallServRate(outputOverallServRatePieChart, outputOverallServRatePieChartLoader, "overallServRatePieChartLoader-Id", valueOverallServRate, selectedOffice_Obj.office_id, clientTypeInternal, clientTypeExternal, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value);
	submitRequestOverallStronglyAgree(outputOverallStronglyAgreeLineChart, outputOverallStronglyAgreeLineChartLoader, "overallStronglyAgreeLineChartLoader-Id", valueOverallStronglyAgree, selectedOffice_Obj.office_id, clientTypeInternal, clientTypeExternal, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value);
	submitRequestOverallAgree(outputOverallAgreeLineChart, outputOverallAgreeLineChartLoader, "overallAgreeLineChartLoader-Id", valueOverallAgree, selectedOffice_Obj.office_id, clientTypeInternal, clientTypeExternal, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value);
	submitRequestOverallNeither(outputOverallNeitherLineChart, outputOverallNeitherLineChartLoader, "overallNeitherLineChartLoader-Id", valueOverallNeither, selectedOffice_Obj.office_id, clientTypeInternal, clientTypeExternal, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value);
	submitRequestOverallDisagree(outputOverallDisagreeLineChart, outputOverallDisagreeLineChartLoader, "overallDisagreeLineChartLoader-Id", valueOverallDisagree, selectedOffice_Obj.office_id, clientTypeInternal, clientTypeExternal, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value);
	submitRequestOverallStronglyDisagree(outputOverallStronglyDisagreeLineChart, outputOverallStronglyDisagreeLineChartLoader, "overallStronglyDisagreeLineChartLoader-Id", valueOverallStronglyDisagree, selectedOffice_Obj.office_id, clientTypeInternal, clientTypeExternal, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value);
	submitRequestOverallNoRating(outputOverallNoRatingLineChart, outputOverallNoRatingLineChartLoader, "overallNoRatingLineChartLoader-Id", valueOverallNoRating, selectedOffice_Obj.office_id, clientTypeInternal, clientTypeExternal, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value);
	submitRequestAvailedOfficeService(outputAvailedOfficeServiceChart, outputAvailedOfficeServiceLoader, "availedOfficeServiceLoader-Id", valueAvailedOfficeService, selectedOffice_Obj.office_id, clientTypeInternal, clientTypeExternal, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value);

	submitRequestCommentDetails(outputCommentDetails, outputCommentSectionLoader, "commentSectionLoader-Id", selectedOffice_Obj.office_id, clientTypeInternal, clientTypeExternal, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value, commentStartIndex, commentDisplay);
}
/*Controller for invoking some Submit Request Functions to ouput some data and the function for reseting comment content*/


/*Declare Global*/
window.controller_SearchArea_SubmitAllRequest = controller_SearchArea_SubmitAllRequest;
/*Declare Global*/


/*Export*/
export default controller_SearchArea_SubmitAllRequest;
/*Export*/