/*Import*/
import {requestOverallStronglyAgree} from "./Request_OverallStronglyAgree.js";
import loadOverallServRatePieChart from "./Controller_OverallServRatePieChart.js";
import loadOverallStronglyAgreeLineChart from "./Controller_OverallStronglyAgreeLineChart.js";
import loadOverallAgreeLineChart from "./Controller_OverallAgreeLineChart.js";
/*Import*/


/*Render calendar lite in date range*/
renderCalLite(getNumberOfDays(month_Rogrid, year_Rogrid), month_Rogrid, year_Rogrid, "dateRangeFrom");
renderCalLite(getNumberOfDays(month_Rogrid, year_Rogrid), month_Rogrid, year_Rogrid, "dateRangeTo");
/*Render calendar lite in date range*/


/*Get the overall strongly agree response*/
//requestOverallStronglyAgree();
/*Get the overall strongly agree response*/


/*Chart tempo*/
loadOverallStronglyAgreeLineChart();
loadOverallAgreeLineChart();
loadOverallServRatePieChart();
/*Chart tempo*/