/*Import*/
import {valueCheckboxClientype, valueDateRangeOne}from "../../Global JS/Values_Page_Dashboard.js";
import {requestOverallEngagement} from "./Request_OverallEngagement.js";
import {requestTotalRespondent} from "./Request_TotalRespondent.js";
import {requestOverallServRate} from "./Request_OverallServRate.js";
import {requestOverallStronglyAgree} from "./Request_OverallStronglyAgree.js";
import {requestOverallAgree} from "./Request_OverallAgree.js";
import {requestOverallNeither} from "./Request_OverallNeither.js";
import {requestOverallDisagree} from "./Request_OverallDisagree.js";
import {requestOverallStronglyDisagree} from "./Request_OverallStronglyDisagree.js";
import {requestOverallNoRating} from "./Request_OverallNoRating.js";
import {requestCommentDetails} from "./Request_CommentDetails.js";
import {requestPointOfEntry} from "./Request_PointOfEntry.js";
import {requestQuestionsScores} from "./Request_QuestionsTable.js";
import {requestCitizenCharterOneScores} from "./Request_CitizenCharterOneScores.js";
import {requestCitizenCharterTwoScores} from "./Request_CitizenCharterTwoScores.js";
import {requestCitizenCharterThreeScores} from "./Request_CitizenCharterThreeScores.js";
/*Import*/


/*Call required function for Select Dropdown Rogrid*/
document.body.addEventListener("click", closeSelectDropdownOpts, true);
/*Call required function for Select Dropdown Rogrid*/

/*Render calendar lite in date range*/
renderCalLite(getNumberOfDays(month_Rogrid, year_Rogrid), month_Rogrid, year_Rogrid, "dateRangeOneCalLiteFrom");
renderCalLite(getNumberOfDays(month_Rogrid, year_Rogrid), month_Rogrid, year_Rogrid, "dateRangeOneCalLiteTo");
/*Render calendar lite in date range*/


/*Get the initial value for overall service rates response*/
valueCheckboxClientype();
valueDateRangeOne();

submitRequestOverallEngagement(renderOverallEngagementVal);
requestTotalRespondent();

requestQuestionsScores();
requestCitizenCharterOneScores();
requestCitizenCharterTwoScores();
requestCitizenCharterThreeScores();

requestOverallServRate();
requestOverallStronglyAgree();
requestOverallAgree();
requestOverallNeither();
requestOverallDisagree();
requestOverallStronglyDisagree();
requestOverallNoRating();
submitRequestAvailedOfficeService();
submitRequestCountPassScore();

requestPointOfEntry();
/*Get the initial value for overall service rates response*/


/*Get the comment details*/
requestCommentDetails();
/*Get the comment details*/