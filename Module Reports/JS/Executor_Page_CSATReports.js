/*Import*/
import {valueDateRangeOne} from "../../Global JS/Values_Module_Reports.js";
/*Import*/


/*Call required function for Select Dropdown Rogrid*/
document.body.addEventListener("click", closeSelectDropdownOpts, true);
/*Call required function for Select Dropdown Rogrid*/


/*Render calendar lite in date range*/
renderCalLite(getNumberOfDays(month_Rogrid, year_Rogrid), month_Rogrid, year_Rogrid, "dateRangeOneCalLiteFrom");
renderCalLite(getNumberOfDays(month_Rogrid, year_Rogrid), month_Rogrid, year_Rogrid, "dateRangeOneCalLiteTo");
/*Render calendar lite in date range*/


/*Assign Initial Values for date range*/
valueDateRangeOne();
/*Assign Initial Values for date range*/


/*Populate point of entry dropdown menu*/
controllerPointOfEntrySearch();
/*Populate point of entry dropdown menu*/


/*Get data one, data two*/
controllerSearchArea();
/*Get data one, data two*/