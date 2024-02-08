/*Import*/
import controller_Document_PopulateSearchAreaPointOfEntry from "./Controller_Document_PopulateSearchAreaPointOfEntry.js";
import controller_Document_ValueDateRangeOne from "./Controller_Document_ValueDateRangeOne.js";
import controller_Document_GetDataOne from "./Controller_Document_GetDataOne.js";
/*Import*/


/*Dependencies*/
/*_Select Dropdown Rogrid*/
document.body.addEventListener("click", closeSelectDropdownOpts, true);
/*_Select Dropdown Rogrid*/

/*_Calendar Lite Rogrid*/
renderCalLite(getNumberOfDays(month_Rogrid, year_Rogrid), month_Rogrid, year_Rogrid, "dateRangeOneCalLiteFrom");
renderCalLite(getNumberOfDays(month_Rogrid, year_Rogrid), month_Rogrid, year_Rogrid, "dateRangeOneCalLiteTo");
/*_Calendar Lite Rogrid*/
/*Dependencies*/


/*Populate Search Area Point Of Entry Select Dropdown*/
controller_Document_PopulateSearchAreaPointOfEntry();
/*Populate Search Area Point Of Entry Select Dropdown*/


/*Default value for daterange one*/
controller_Document_ValueDateRangeOne();
/*Default value for daterange one*/


/*Display Data One Table*/
controller_Document_GetDataOne();
/*Display Data One Table*/