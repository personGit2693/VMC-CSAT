/*Import*/
import {floorRadioBtnsWrap, officeRadioBtnsWrap, serviceTypeRadioBtnsWrap, officeServiceCheckboxesWrap, cc2RadioBtnsWrap, cc3RadioBtnsWrap, questionsWrap} from "../Page Rate Our Service/JS/JsCollection_Page_RateService.js";
/*Import*/


/*Prep export variables*/
var respondentId = "";
var ageRangeId = "";
var genderId = "";
var genderPreferenceId = "";
var religionId = "";
var educationId = "";
var visityearId = "";
var buildingId = "";
var floorId = "";
var officeId = "";
var clientTypeId = "";
var serviceTypeId = "";
var officeServiceId = "";
var freqVisitId = "";
var awarenessRatingViaId = "";
var visibilityRatingViaId = "";
var helpfulnessRatingViaId = "";


var submittedRate = {
	respondentDetails:{
		respondentId: respondentId, 
		ageRangeId: ageRangeId,
		genderId: genderId,
		genderPreferenceId: genderPreferenceId,
		religionId: religionId,
		educationId: educationId,
		officeId: officeId,
		clientTypeId: clientTypeId,
		freqVisitId: freqVisitId
	},
	availedOfficeServices:[],
	ccRate:{
		awarenessRatingViaId: awarenessRatingViaId,
		visibilityRatingViaId: visibilityRatingViaId,
		helpfulnessRatingViaId: helpfulnessRatingViaId
	},
	respondentRatings:[]
};
/*Prep export variables*/


/*Assign Value for ageRangeId*/
function valueAgeRange(selectedAgeRange_Base){
	const selectedAgeRange_Obj = JSON.parse(atob(selectedAgeRange_Base));

	ageRangeId = selectedAgeRange_Obj.agerange_id;

	submittedRate.respondentDetails.ageRangeId = ageRangeId;
}
/*Assign Value for ageRangeId*/


/*Assign Value for genderId*/
function valueGender(selectedGender_Base){
	const selectedGender_Obj = JSON.parse(atob(selectedGender_Base));

	genderId = selectedGender_Obj.gender_id ;

	submittedRate.respondentDetails.genderId = genderId;
}
/*Assign Value for genderId*/


/*Assign Value for genderPreferenceId*/
function valueGenderPref(selectedGenderPref_Base){
	const selectedGenderPref_Obj = JSON.parse(atob(selectedGenderPref_Base));

	genderPreferenceId = selectedGenderPref_Obj.genderpreference_id;

	submittedRate.respondentDetails.genderPreferenceId = genderPreferenceId;
}
/*Assign Value for genderPreferenceId*/


/*Assign Value for religionId*/
function valueReligion(selectedReligion_Base){
	const selectedReligion_Obj = JSON.parse(atob(selectedReligion_Base));

	religionId = selectedReligion_Obj.religion_id;

	submittedRate.respondentDetails.religionId = religionId;
}
/*Assign Value for religionId*/


/*Assign Value for educationId*/
function valueEducAttain(selectedEducAttain_Base){
	const selectedEducAttain_Obj = JSON.parse(atob(selectedEducAttain_Base));

	educationId = selectedEducAttain_Obj.educattain_id;

	submittedRate.respondentDetails.educationId = educationId;
}
/*Assign Value for educationId*/


/*Assign Value for buildingId*/
function valueBuilding(selectedBuilding_Base){
	const selectedBuilding_Obj = JSON.parse(atob(selectedBuilding_Base));

	floorId = "";
	officeId = "";
	buildingId = selectedBuilding_Obj.building_id;

	submittedRate.respondentDetails.officeId = officeId;

	floorRadioBtnsWrap.innerHTML = "Choose building first.";
	officeRadioBtnsWrap.innerHTML = "Select building and floor.";
}
/*Assign Value for buildingId*/


/*Assign Value for floorId*/
function valueFloor(selectedFloor_Base){
	const selectedFloor_Obj = JSON.parse(atob(selectedFloor_Base));

	officeId = "";
	floorId = selectedFloor_Obj.floorId;

	submittedRate.respondentDetails.officeId = officeId;

	officeRadioBtnsWrap.innerHTML = "Select building and floor.";
}
/*Assign Value for floorId*/


/*Assign Value for clientTypeId, respondentId*/
function valueRespondentType(selectedRespondentType_Base){
	const selectedRespondentType_Obj = JSON.parse(atob(selectedRespondentType_Base));

	serviceTypeId = "";
	submittedRate.availedOfficeServices = [];
	submittedRate.respondentRatings = [];

	respondentId = selectedRespondentType_Obj.respondent_id ;
	clientTypeId = selectedRespondentType_Obj.clienttype_id;	

	submittedRate.respondentDetails.respondentId = respondentId;
	submittedRate.respondentDetails.clientTypeId = clientTypeId;
	submittedRate.respondentDetails.serviceTypeId = serviceTypeId;	

	serviceTypeRadioBtnsWrap.innerHTML = "Select Respondent and Point of Entry Department Visited first.";
	officeServiceCheckboxesWrap.innerHTML = "Select Respondent, Point of Entry Department Visited and Service-Type first.";
	questionsWrap.innerHTML = "Please select Respondent-Type and Point of Entry first.";
}
/*Assign Value for clientTypeId, respondentId*/


/*Assign Value for officeId*/
function valueOffice(selectedOffice_Base){
	const selectedOffice_Obj = JSON.parse(atob(selectedOffice_Base));

	serviceTypeId = "";
	submittedRate.availedOfficeServices = [];
	submittedRate.respondentRatings = [];

	officeId = selectedOffice_Obj.office_id;

	submittedRate.respondentDetails.officeId = officeId;
	submittedRate.respondentDetails.serviceTypeId = serviceTypeId;

	serviceTypeRadioBtnsWrap.innerHTML = "Select Respondent and Point of Entry Department Visited first.";
	officeServiceCheckboxesWrap.innerHTML = "Select Respondent, Point of Entry Department Visited and Service-Type first.";
	questionsWrap.innerHTML = "Please select Respondent-Type and Point of Entry first.";
}
/*Assign Value for officeId*/


/*Assign Value for serviceTypeId*/
function valueServiceType(selectedServiceType_Base){
	const selectedServiceType_Obj = JSON.parse(atob(selectedServiceType_Base));

	submittedRate.availedOfficeServices = [];

	serviceTypeId = selectedServiceType_Obj.serviceTypeId;

	submittedRate.respondentDetails.serviceTypeId = serviceTypeId;

	officeServiceCheckboxesWrap.innerHTML = "Select Respondent, Point of Entry Department Visited and Service-Type first.";
}
/*Assign Value for serviceTypeId*/


/*Assign Value for officeServiceId*/
function valueOfficeServices(selectedOfficeService_Base, officeServiceCheckbox){
	const selectedOfficeService_Obj = JSON.parse(atob(selectedOfficeService_Base));

	officeServiceId = selectedOfficeService_Obj.officeservice_id;
	
	if(officeServiceCheckbox.checked === true){
		submittedRate.availedOfficeServices.push(officeServiceId);
	}else if(officeServiceCheckbox.checked === false){
		submittedRate.availedOfficeServices = submittedRate.availedOfficeServices.filter(function(value, index, array){
			return value != officeServiceId;
		});
	}
}
/*Assign Value for officeServiceId*/


/*Assign Value for freqVisitId*/
function valueFreqVisit(selectedFreqVisit_Base){
	const selectedFreqVisit_Obj = JSON.parse(atob(selectedFreqVisit_Base));

	freqVisitId = selectedFreqVisit_Obj.visityear_id;

	submittedRate.respondentDetails.freqVisitId = freqVisitId;
}
/*Assign Value for freqVisitId*/


/*Assign Value for awarenessRatingViaId*/
function valueAwarenessRating(selectedAwarenessRating_Base){
	const selectedAwarenessRating_Obj = JSON.parse(atob(selectedAwarenessRating_Base));

	awarenessRatingViaId = selectedAwarenessRating_Obj.ccquestionsrate_id;
	visibilityRatingViaId = "";
	helpfulnessRatingViaId = "";

	submittedRate.ccRate.awarenessRatingViaId = awarenessRatingViaId;	
	submittedRate.ccRate.visibilityRatingViaId = visibilityRatingViaId;
	submittedRate.ccRate.helpfulnessRatingViaId = helpfulnessRatingViaId;

	cc2RadioBtnsWrap.innerHTML = "No options for Visibility Rating to select!";
	cc3RadioBtnsWrap.innerHTML = "No options for Helpfulness Rating to select!";

	if(awarenessRatingViaId == 4){
		visibilityRatingViaId = 12;
		helpfulnessRatingViaId = 13;

		submittedRate.ccRate.visibilityRatingViaId = visibilityRatingViaId;
		submittedRate.ccRate.helpfulnessRatingViaId = helpfulnessRatingViaId;

		cc2RadioBtnsWrap.innerHTML = "Not Applicable";
		cc3RadioBtnsWrap.innerHTML = "Not Applicable";
	}	
}
/*Assign Value for awarenessRatingViaId*/


/*Assign Value for visibilityRatingViaId*/
function valueVisibilityRating(selectedVisibilityRating_Base){
	const selectedVisibilityRating_Obj = JSON.parse(atob(selectedVisibilityRating_Base));

	visibilityRatingViaId = selectedVisibilityRating_Obj.ccquestionsrate_id;
	helpfulnessRatingViaId = "";

	submittedRate.ccRate.visibilityRatingViaId = visibilityRatingViaId;
	submittedRate.ccRate.helpfulnessRatingViaId = helpfulnessRatingViaId;
	
	cc3RadioBtnsWrap.innerHTML = "No options for Helpfulness Rating to select!";

	if(visibilityRatingViaId == 8){
		helpfulnessRatingViaId = 13;

		submittedRate.ccRate.helpfulnessRatingViaId = helpfulnessRatingViaId;

		cc3RadioBtnsWrap.innerHTML = "Not Applicable";
	}	
}
/*Assign Value for visibilityRatingViaId*/


/*Assign Value for helpfulnessRatingViaId*/
function valueHelpfulnessRating(selectedHelpfulnessRating_Base){
	const selectedHelpfulnessRating_Obj = JSON.parse(atob(selectedHelpfulnessRating_Base));

	helpfulnessRatingViaId = selectedHelpfulnessRating_Obj.ccquestionsrate_id;

	submittedRate.ccRate.helpfulnessRatingViaId = helpfulnessRatingViaId;	
}
/*Assign Value for helpfulnessRatingViaId*/


/*Assign Value for respondentRatings*/
function valueRespondentRatings(selectedQuestionScore_Base, questionScoreRadioBtn){
	const selectedQuestionScore_Obj = JSON.parse(atob(selectedQuestionScore_Base));
	const questionId = selectedQuestionScore_Obj.questionId;


	if(questionScoreRadioBtn.checked === true){
		/*_Remove first the previous selected rating via questionId if any*/
		submittedRate.respondentRatings = submittedRate.respondentRatings.filter(function(value, index, array){
			return questionId != value.questionId;
		});
		/*_Remove first the previous selected rating from the question via questionId if any*/

		/*_Add new selected selectedQuestionScore_Obj*/
		submittedRate.respondentRatings.push(selectedQuestionScore_Obj);
		/*_Add new selected selectedQuestionScore_Obj*/
	}else if(questionScoreRadioBtn.checked === false){
		submittedRate.respondentRatings = submittedRate.respondentRatings.filter(function(value, index, array){
			return value != selectedQuestionScore_Obj;
		});
	}
}
/*Assign Value for respondentRatings*/


/*Declare global*/
window.valueBuilding = valueBuilding;
window.valueFloor = valueFloor;
window.valueRespondentType = valueRespondentType;
window.valueOffice = valueOffice;
window.valueServiceType = valueServiceType;
window.valueOfficeServices = valueOfficeServices;
window.valueFreqVisit = valueFreqVisit;
window.valueAgeRange = valueAgeRange;
window.valueGender = valueGender;
window.valueGenderPref = valueGenderPref;
window.valueReligion = valueReligion;
window.valueEducAttain = valueEducAttain;
window.valueAwarenessRating = valueAwarenessRating;
window.valueVisibilityRating = valueVisibilityRating;
window.valueHelpfulnessRating = valueHelpfulnessRating;
window.valueRespondentRatings = valueRespondentRatings;
/*Declare global*/


/*Export*/
export {buildingId, floorId, officeId, clientTypeId, serviceTypeId, officeServiceId, freqVisitId, submittedRate, awarenessRatingViaId, visibilityRatingViaId};
/*Export*/