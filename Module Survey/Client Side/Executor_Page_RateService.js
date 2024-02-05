/*Import*/
import controller_Document_ListRespondentTypes from "./Controller_Document_ListRespondentTypes.js";
import controller_Document_ListGenders from "./Controller_Document_ListGenders.js";
import controller_Document_ListGenderPrefs from "./Controller_Document_ListGenderPrefs.js";
import controller_Document_ListEducAttainments from "./Controller_Document_ListEducAttainments.js";
import controller_Document_ListFreqVisits from "./Controller_Document_ListFreqVisits.js";
import controller_Document_ExecuteRogridDropdownBodyEvent from "./Controller_Document_ExecuteRogridDropdownBodyEvent.js";
import controller_Document_PopulateReligionsDropdown from "./Controller_Document_PopulateReligionsDropdown.js";
import controller_Btn_Steps from "./Controller_Btn_Steps.js";
/*Import*/


/*To execute body event for Rogrid dropdown*/
controller_Document_ExecuteRogridDropdownBodyEvent();
/*To execute body event for Rogrid dropdown*/


/*To list the respondent types radio btn*/
controller_Document_ListRespondentTypes();
/*To list the respondent types radio btn*/


/*To list genders radio btn*/
controller_Document_ListGenders();
/*To list genders radio btn*/


/*To list gender preferences radio btn*/
controller_Document_ListGenderPrefs();
/*To list gender preferences radio btn*/


/*To list Educational Attainments radio btn*/
controller_Document_ListEducAttainments();
/*To list Educational Attainments radio btn*/


/*To list Frequently Visits radio btn*/
controller_Document_ListFreqVisits();
/*To list Frequently Visits radio btn*/


/*To populate rogrid dropdown for respondent religion*/
controller_Document_PopulateReligionsDropdown();
/*To populate rogrid dropdown for respondent religion*/


/*To display first step*/
controller_Btn_Steps("next");
/*To display first step*/