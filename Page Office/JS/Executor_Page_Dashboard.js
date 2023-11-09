/*Import*/
import {valueCheckboxClientype, valueDateRangeOne}from "../../Global JS/Values_Page_Dashboard.js";
/*Import*/


/*Call required function for Select Dropdown Rogrid*/
document.body.addEventListener("click", closeSelectDropdownOpts, true);
/*Call required function for Select Dropdown Rogrid*/


/*Render calendar lite in date range*/
renderCalLite(getNumberOfDays(month_Rogrid, year_Rogrid), month_Rogrid, year_Rogrid, "dateRangeOneCalLiteFrom");
renderCalLite(getNumberOfDays(month_Rogrid, year_Rogrid), month_Rogrid, year_Rogrid, "dateRangeOneCalLiteTo");
/*Render calendar lite in date range*/


/*Assign initial value for search client-type checkboxes and daterange*/
valueCheckboxClientype();
valueDateRangeOne();
/*Assign initial value for search client-type checkboxes and daterange*/


/*Populate data viewing*/
controllerSearchArea();
/*Populate data viewing*/


/*Populate search point of entry*/
submitRequestPointOfEntry(outputPointOfEntryOption);
/*Populate search point of entry*/