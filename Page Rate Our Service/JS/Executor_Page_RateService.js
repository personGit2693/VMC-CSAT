/*Import*/
import {dropdownReligion} from "./JsCollection_Page_RateService.js";
import {renderStepOneBtns, renderStepTwoBtns, renderStepThreeBtns, renderStepFourBtns} from "./View_StepByStepBtns.js";
import {requestRespondentType} from "./Request_RespondentType.js";
import {requestAgeRanges} from "./Request_AgeRanges.js";
import {requestGenders} from "./Request_Genders.js";
import {requestReligions} from "./Request_Religions.js";
import {requestEducAttainment} from "./Request_EducAttainment.js";
import {requestBuildings} from "./Request_Buildings.js";
/*Import*/


/*To Highlight step one*/
nextStep("stepByStepItem-Class", "headerDynamicSubTxt-Id", "stepSets-Class");
/*To Highlight step one*/


/*To render RespondentTypeRadioBtn component*/
requestRespondentType();
/*To render RespondentTypeRadioBtn component*/


/*To render AgeRangesRadioBtns component*/
requestAgeRanges();
/*To render AgeRangesRadioBtns component*/


/*To render GenderRadioBtn component*/
requestGenders();
/*To render GenderRadioBtn component*/


/*To render ReligionDropdownMenu component*/
requestReligions();
createCusDropOptWoRogrid(dropdownReligion);
/*To render ReligionDropdownMenu component*/


/*To render EducAttainmentRadioBtn component*/
requestEducAttainment();
/*To render EducAttainmentRadioBtn component*/


/*To render buildings*/
requestBuildings();
/*To render buildings*/


/*To render StepByStepBtns component*/
renderStepOneBtns();
renderStepTwoBtns();
renderStepThreeBtns();
renderStepFourBtns();
/*To render StepByStepBtns component*/