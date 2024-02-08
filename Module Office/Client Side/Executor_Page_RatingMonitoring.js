/*Import*/
import controller_Document_SearchPopulatePointOfEntry from "./Controller_Document_SearchPopulatePointOfEntry.js";
import controller_Document_AssignDefaultFilterClientTypes from "./Controller_Document_AssignDefaultFilterClientTypes.js";
import controller_Document_AssignDefaultDateRangeOne from "./Controller_Document_AssignDefaultDateRangeOne.js";
import controller_Document_GetNewRespondent from "./Controller_Document_GetNewRespondent.js";
import controller_Document_DisplayComments from "./Controller_Document_DisplayComments.js";
/*Import*/


/*Call required function for Select Dropdown Rogrid*/
document.body.addEventListener("click", closeSelectDropdownOpts, true);
/*Call required function for Select Dropdown Rogrid*/


/*Render calendar lite in date range*/
renderCalLite(getNumberOfDays(month_Rogrid, year_Rogrid), month_Rogrid, year_Rogrid, "dateRangeOneCalLiteFrom");
renderCalLite(getNumberOfDays(month_Rogrid, year_Rogrid), month_Rogrid, year_Rogrid, "dateRangeOneCalLiteTo");
/*Render calendar lite in date range*/


/*Populate search point of entry*/
controller_Document_SearchPopulatePointOfEntry();
/*Populate search point of entry*/


/*Check both filter client types checkboxes*/
controller_Document_AssignDefaultFilterClientTypes();
/*Check both filter client types checkboxes*/


/*Assign default value for date range one*/
controller_Document_AssignDefaultDateRangeOne();
/*Assign default value for date range one*/


/*Get New Respondent*/
controller_Document_GetNewRespondent();
/*Get New Respondent*/


/*Display comments*/
controller_Document_DisplayComments();
/*Display comments*/