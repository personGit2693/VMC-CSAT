/*Import*/
import {floorRadioBtnsWrap, officeRadioBtnsWrap, serviceTypeRadioBtnsWrap, officeServiceCheckboxesWrap} from "../Page Rate Our Service/JS/JsCollection_Page_RateService.js";
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
	availedOfficeServices:[]
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
	buildingId = selectedBuilding_Obj.building_id;

	floorRadioBtnsWrap.innerHTML = "Choose building first.";
}
/*Assign Value for buildingId*/


/*Assign Value for floorId*/
function valueFloor(selectedFloor_Base){
	const selectedFloor_Obj = JSON.parse(atob(selectedFloor_Base));

	officeId = "";
	floorId = selectedFloor_Obj.floorId;

	officeRadioBtnsWrap.innerHTML = "Select building and floor.";
}
/*Assign Value for floorId*/


/*Assign Value for clientTypeId, respondentId*/
function valueRespondentType(selectedRespondentType_Base){
	const selectedRespondentType_Obj = JSON.parse(atob(selectedRespondentType_Base));

	serviceTypeId = "";
	submittedRate.availedOfficeServices = [];

	respondentId = selectedRespondentType_Obj.respondent_id ;
	clientTypeId = selectedRespondentType_Obj.clienttype_id;	

	submittedRate.respondentDetails.respondentId = respondentId;
	submittedRate.respondentDetails.clientTypeId = clientTypeId;	

	serviceTypeRadioBtnsWrap.innerHTML = "Select Respondent and Point of Entry Department Visited first.";
	officeServiceCheckboxesWrap.innerHTML = "Select Respondent, Point of Entry Department Visited and Service-Type first.";
}
/*Assign Value for clientTypeId, respondentId*/


/*Assign Value for officeId*/
function valueOffice(selectedOffice_Base){
	const selectedOffice_Obj = JSON.parse(atob(selectedOffice_Base));

	serviceTypeId = "";
	submittedRate.availedOfficeServices = [];

	officeId = selectedOffice_Obj.office_id;

	submittedRate.respondentDetails.officeId = officeId;

	serviceTypeRadioBtnsWrap.innerHTML = "Select Respondent and Point of Entry Department Visited first.";
	officeServiceCheckboxesWrap.innerHTML = "Select Respondent, Point of Entry Department Visited and Service-Type first.";
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
function availedOfficeServices(selectedOfficeService_Base, officeServiceCheckbox){
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


/*Declare global*/
window.valueBuilding = valueBuilding;
window.valueFloor = valueFloor;
window.valueRespondentType = valueRespondentType;
window.valueOffice = valueOffice;
window.valueServiceType = valueServiceType;
window.availedOfficeServices = availedOfficeServices;
window.valueFreqVisit = valueFreqVisit;
window.valueAgeRange = valueAgeRange;
window.valueGender = valueGender;
window.valueGenderPref = valueGenderPref;
window.valueReligion = valueReligion;
window.valueEducAttain = valueEducAttain;
/*Declare global*/


/*Export*/
export {buildingId, floorId, officeId, clientTypeId, serviceTypeId, officeServiceId, freqVisitId, submittedRate};
/*Export*/