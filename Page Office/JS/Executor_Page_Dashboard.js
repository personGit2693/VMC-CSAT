/*Import*/
import {valueCheckboxClientype, valueDateRangeOne}from "../../Global JS/Values_Page_Dashboard.js";
import {requestOverallServRate} from "./Request_OverallServRate.js";
import {requestOverallStronglyAgree} from "./Request_OverallStronglyAgree.js";
import {requestOverallAgree} from "./Request_OverallAgree.js";
import {requestOverallNeither} from "./Request_OverallNeither.js";
import {requestOverallDisagree} from "./Request_OverallDisagree.js";
import {requestOverallStronglyDisagree} from "./Request_OverallStronglyDisagree.js";
import {requestOverallNoRating} from "./Request_OverallNoRating.js";
/*Import*/


/*Render calendar lite in date range*/
renderCalLite(getNumberOfDays(month_Rogrid, year_Rogrid), month_Rogrid, year_Rogrid, "dateRangeFrom");
renderCalLite(getNumberOfDays(month_Rogrid, year_Rogrid), month_Rogrid, year_Rogrid, "dateRangeTo");
/*Render calendar lite in date range*/


/*Get the initial value for overall service rates response*/
valueCheckboxClientype();
valueDateRangeOne();

requestOverallServRate();
requestOverallStronglyAgree();
requestOverallAgree();
requestOverallNeither();
requestOverallDisagree();
requestOverallStronglyDisagree();
requestOverallNoRating();
/*Get the initial value for overall service rates response*/