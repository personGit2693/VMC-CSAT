/*Import*/
import {valueCheckboxClientype, valueDateRangeOne} from "../../Global JS/Values_Page_Reports.js";
import {searchPointOfEntry} from "../../Global JS/JSCollection_Page_Reports.js";
import renderPointOfEntryOption from "./View_PointOfEntryOption.js";
import {requestPointOfEntry} from "./Request_PointOfEntry.js";
/*Import*/


/*Call required function for Select Dropdown Rogrid*/
document.body.addEventListener("click", closeSelectDropdownOpts, true);
/*Call required function for Select Dropdown Rogrid*/

/*Render calendar lite in date range*/
renderCalLite(getNumberOfDays(month_Rogrid, year_Rogrid), month_Rogrid, year_Rogrid, "dateRangeFrom");
renderCalLite(getNumberOfDays(month_Rogrid, year_Rogrid), month_Rogrid, year_Rogrid, "dateRangeTo");
/*Render calendar lite in date range*/


/*Assign Initial Values for filter client-type and date range*/
valueCheckboxClientype();
valueDateRangeOne();
/*Assign Initial Values for filter client-type and date range*/


/*Populate point of entry dropdown menu*/
requestPointOfEntry(searchPointOfEntry, renderPointOfEntryOption);
/*Populate point of entry dropdown menu*/

submitRequestDataOne();