/*Import*/
import {inputRespondentReligionValue} from "./Elements_Page_RateServey.js";
/*Import*/


/*Prep variables*/
var cc2NotApp_QuestionRateId = 12;
var cc3NotApp_QuestionRateId = 13;

var defaultScoreId = 6;
/*Prep variables*/


/*Prep export variables*/
var cc1TriggerNotApp_QuestionRateId = 4;
var cc2TriggerNotApp_QuestionRateId = 8;

var searchReligion = "";

var requiredQuestionsGroups_Array = [];
var selectedQuestionsGroups_Array = [];

var submittedRate = {
	respondentDetails:{
		clientResponseRef: "",
		respondentId: "", 
		clientResponseAge: "",
		ageRangeId: "",
		genderId: "",
		genderPreferenceId: "",
		religionId: "",
		educationId: "",
		officeId: "",
		serviceTypeId: "",
		clientTypeId: "",
		freqVisitId: "",
		officeServiceId: "",
		contactDetails: ""
	},
	availedOfficeServices:[],
	ccRate:{
		awarenessRatingViaId: "",
		visibilityRatingViaId: "",
		helpfulnessRatingViaId: ""
	},
	respondentRatings:[],
	comments:[]
};
/*Prep export variables*/


/*Assign, Reset, Populate*/
/*_Assign Value for clientResponseRef*/
function valueClientResponseRef(){
	
	const toDate = new Date();
	
	submittedRate.respondentDetails.clientResponseRef = toDate.getFullYear()+"-"+"VMCCSAT-"+toDate.getMonth()+toDate.getDate()+toDate.getHours()+toDate.getMinutes()+toDate.getSeconds()+toDate.getMilliseconds();
}
/*_Assign Value for clientResponseRef*/



/*_Assign Value for contactDetails*/
function valueContactDetails(contactDetails){

	submittedRate.respondentDetails.contactDetails = contactDetails;
}
/*_Assign Value for contactDetails*/


/*_Assign Value for comments*/
function valueComments(textareaElem){

	const commentQuestionDetails_Obj = JSON.parse(atob(textareaElem.nextElementSibling.value));

	const commentsDetails_Obj = {
		question_id: commentQuestionDetails_Obj.question_id,
		respondentComment: textareaElem.value
	};
	
	submittedRate.comments = submittedRate.comments.filter(function(value, index, array){
		
		return commentQuestionDetails_Obj.question_id != value.question_id;
	});

	submittedRate.comments.push(commentsDetails_Obj);
}
/*_Assign Value for comments*/


/*_Assign Value selectedQuestionsGroups_Array*/
function valueSelectedQuestionsGroups(selectedQuestionScore_Base){

	const selectedQuestionScore_Obj = JSON.parse(atob(selectedQuestionScore_Base));

	const questionGroupDetails_Obj = {
		question_id: selectedQuestionScore_Obj.questionDetails_Obj.question_id,
		questionsgroup_id: selectedQuestionScore_Obj.questionDetails_Obj.questionsgroup_id
	};

	const questionGroupDetails_Base = btoa(unescape(encodeURIComponent(JSON.stringify(questionGroupDetails_Obj))));

	if(selectedQuestionsGroups_Array.includes(questionGroupDetails_Base) == false){

		selectedQuestionsGroups_Array.push(questionGroupDetails_Base);
	}
}
/*_Assign Value selectedQuestionsGroups_Array*/


/*_Reset Value selectedQuestionsGroups_Array*/
function resetSelectedQuestionsGroups(selectedQuestionScore_Base){

	const selectedQuestionScore_Obj = JSON.parse(atob(selectedQuestionScore_Base));

	const questionGroupDetails_Obj = {
		question_id: selectedQuestionScore_Obj.questionDetails_Obj.question_id,
		questionsgroup_id: selectedQuestionScore_Obj.questionDetails_Obj.questionsgroup_id
	};

	const questionGroupDetails_Base = btoa(unescape(encodeURIComponent(JSON.stringify(questionGroupDetails_Obj))));

	const index = selectedQuestionsGroups_Array.indexOf(questionGroupDetails_Base);

	selectedQuestionsGroups_Array.splice(index, 1);
}
/*_Reset Value selectedQuestionsGroups_Array*/


/*_Assign Value requiredQuestionsGroups_Array*/
function valueRequiredQuestionsGroups(createdQuestionsGroups_Array){

	requiredQuestionsGroups_Array = createdQuestionsGroups_Array;
}
/*_Assign Value requiredQuestionsGroups_Array*/


/*_Populate Value respondentRatings*/
function popRespondentRatings(defaultRespondentRatings_Array){

	submittedRate.respondentRatings = defaultRespondentRatings_Array;
}
/*_Populate Value respondentRatings*/


/*_Assign Value respondentRatings*/
function valueRespondentRatings(selectedQuestionScore_Base){

	const selectedQuestionScore_Obj = JSON.parse(atob(selectedQuestionScore_Base));

	/*Remove the default respondentRatings value from respondentRatings array to update and add the latest value*/
	submittedRate.respondentRatings = submittedRate.respondentRatings.filter(function(value, index, array){

		return value.questionDetails_Obj.question_id != selectedQuestionScore_Obj.questionDetails_Obj.question_id
	});
	/*Remove the default respondentRatings value from respondentRatings array to update and add the latest value*/


	/*Add the latest value with selected score*/
	submittedRate.respondentRatings.push(selectedQuestionScore_Obj);
	/*Add the latest value with selected score*/
}
/*_Assign Value respondentRatings*/


/*_Reset Value respondentRatings*/
function resetRespondentRatings(selectedQuestionScore_Base){

	const selectedQuestionScore_Obj = JSON.parse(atob(selectedQuestionScore_Base));

	/*Remove the default respondentRatings value from respondentRatings array to reset to default value*/
	submittedRate.respondentRatings = submittedRate.respondentRatings.filter(function(value, index, array){

		return value.questionDetails_Obj.question_id != selectedQuestionScore_Obj.questionDetails_Obj.question_id
	});
	/*Remove the default respondentRatings value from respondentRatings array to reset to default value*/


	/*_Reset the score to default value*/
	selectedQuestionScore_Obj.score_id = defaultScoreId;

	submittedRate.respondentRatings.push(selectedQuestionScore_Obj);
	/*_Reset the latest value with selected score*/
}
/*_Reset Value respondentRatings*/


/*_Assign Value awarenessRatingViaId*/
function valueAwarenessRatingViaId(selectedCcAwarenessRate_Base){

	const selectedCcAwarenessRate_Obj = JSON.parse(atob(selectedCcAwarenessRate_Base));

	submittedRate.ccRate.awarenessRatingViaId = selectedCcAwarenessRate_Obj.ccquestionsrate_id;

	if(selectedCcAwarenessRate_Obj.ccquestionsrate_id == cc1TriggerNotApp_QuestionRateId){

		submittedRate.ccRate.visibilityRatingViaId = cc2NotApp_QuestionRateId;
		submittedRate.ccRate.helpfulnessRatingViaId = cc3NotApp_QuestionRateId;
	}
}
/*_Assign Value awarenessRatingViaId*/


/*_Reset Value awarenessRatingViaId*/
function resetAwarenessRatingViaId(){

	submittedRate.ccRate.awarenessRatingViaId = "";
}
/*_Reset Value awarenessRatingViaId*/


/*_Assign Value visibilityRatingViaId*/
function valueVisibilityRatingViaId(selectedCcVisibilityRate_Base){

	const selectedCcVisibilityRate_Obj = JSON.parse(atob(selectedCcVisibilityRate_Base));

	submittedRate.ccRate.visibilityRatingViaId = selectedCcVisibilityRate_Obj.ccquestionsrate_id;

	if(selectedCcVisibilityRate_Obj.ccquestionsrate_id == cc2TriggerNotApp_QuestionRateId){

		submittedRate.ccRate.helpfulnessRatingViaId = cc3NotApp_QuestionRateId;
	}
}
/*_Assign Value visibilityRatingViaId*/


/*_Reset Value visibilityRatingViaId*/
function resetVisibilityRatingViaId(){

	submittedRate.ccRate.visibilityRatingViaId = "";
}
/*_Reset Value visibilityRatingViaId*/


/*_Assign Value helpfulnessRatingViaId*/
function valueHelpfulnessRatingViaId(selectedCcHelpfulnessRate_Base){

	const selectedCcHelpfulnessRate_Obj = JSON.parse(atob(selectedCcHelpfulnessRate_Base));

	submittedRate.ccRate.helpfulnessRatingViaId = selectedCcHelpfulnessRate_Obj.ccquestionsrate_id;
}
/*_Assign Value helpfulnessRatingViaId*/


/*_Reset Value helpfulnessRatingViaId*/
function resetHelpfulnessRatingViaId(){

	submittedRate.ccRate.helpfulnessRatingViaId = "";
}
/*_Reset Value helpfulnessRatingViaId*/


/*_Assign Value religionId*/
function valueReligionId(){

	const selectedReligion_Obj = JSON.parse(atob(inputRespondentReligionValue.value));

	submittedRate.respondentDetails.religionId = selectedReligion_Obj.religion_id;
}
/*_Assign Value religionId*/


/*_Reset Value religionId*/
function resetReligionId(){

	submittedRate.respondentDetails.religionId = "";
}
/*_Reset Value religionId*/


/*_Assign Value searchReligion*/
function valueSearchReligion(searchReligionValue){

	searchReligion = searchReligionValue;
}
/*_Assign Value searchReligion*/


/*_Assign Value respondentId*/
function valueRespondentId(selectedRespondent_Base){

	const selectedRespondent_Obj = JSON.parse(atob(selectedRespondent_Base));

	submittedRate.respondentDetails.respondentId = selectedRespondent_Obj.respondent_id;
}
/*_Assign Value respondentId*/


/*_Reset Value respondentId*/
function resetRespondentId(){

	submittedRate.respondentDetails.respondentId = "";
}
/*_Reset Value respondentId*/


/*_Assign Value clientTypeId*/
function valueClientTypeId(selectedRespondent_Base){

	const selectedRespondent_Obj = JSON.parse(atob(selectedRespondent_Base));

	submittedRate.respondentDetails.clientTypeId = selectedRespondent_Obj.clienttype_id;
}
/*_Assign Value clientTypeId*/


/*_Reset Value clientTypeId*/
function resetClientTypeId(){

	submittedRate.respondentDetails.clientTypeId = "";
}
/*_Reset Value clientTypeId*/


/*_Assign Value officeId*/
function valueOfficeId(codeDetails_Base){

	const codeDetails_Obj = JSON.parse(atob(codeDetails_Base));

	submittedRate.respondentDetails.officeId = codeDetails_Obj.office_id;
}
/*_Assign Value officeId*/


/*_Reset Value officeId*/
function resetOfficeId(){

	submittedRate.respondentDetails.officeId = "";
}
/*_Reset Value officeId*/


/*_Assign Value for genderId*/
function valueGender(selectedGender_Base){

	const selectedGender_Obj = JSON.parse(atob(selectedGender_Base));

	submittedRate.respondentDetails.genderId = selectedGender_Obj.gender_id;
}
/*_Assign Value for genderId*/


/*_Reset Value for genderId*/
function resetGender(){

	submittedRate.respondentDetails.genderId = "";
}
/*_Reset Value for genderId*/


/*_Assign Value for genderPreferenceId*/
function valueGenderPref(selectedGenderPref_Base){

	const selectedGenderPref_Obj = JSON.parse(atob(selectedGenderPref_Base));

	submittedRate.respondentDetails.genderPreferenceId = selectedGenderPref_Obj.genderpreference_id;
}
/*_Assign Value for genderPreferenceId*/


/*_Reset Value for genderPreferenceId*/
function resetGenderPref(){

	submittedRate.respondentDetails.genderPreferenceId = "";
}
/*_Reset Value for genderPreferenceId*/


/*_Assign Value for educationId*/
function valueEducationAttain(selectedEducAttain_Base){

	const selectedEducAttain_Obj = JSON.parse(atob(selectedEducAttain_Base));

	submittedRate.respondentDetails.educationId = selectedEducAttain_Obj.educattain_id;
}
/*_Assign Value for educationId*/


/*_Reset Value for educationId*/
function resetEducationAttain(){

	submittedRate.respondentDetails.educationId = "";
}
/*_Reset Value for educationId*/


/*_Assign Value for serviceTypeId*/
function valueServiceTypeId(selectedServiceType_Base){

	const selectedServiceType_Obj = JSON.parse(atob(selectedServiceType_Base));

	submittedRate.respondentDetails.serviceTypeId = selectedServiceType_Obj.serviceTypeId;
}
/*_Assign Value for serviceTypeId*/


/*_Reset Value for serviceTypeId*/
function resetServiceTypeId(){

	submittedRate.respondentDetails.serviceTypeId = "";
}
/*_Reset Value for serviceTypeId*/


/*_Assign Value for officeServiceId*/
function valueOfficeServiceId(selectedService_Base){

	const selectedService_Obj = JSON.parse(atob(selectedService_Base));

	submittedRate.respondentDetails.officeServiceId = selectedService_Obj.officeservice_id;
}
/*_Assign Value for officeServiceId*/


/*_Reset Value for officeServiceId*/
function resetOfficeServiceId(){

	submittedRate.respondentDetails.officeServiceId = "";
}
/*_Reset Value for officeServiceId*/


/*_Assign Value for freqVisitId*/
function valuefreqVisitId(selectedFreqVisit_Base){

	const selectedFreqVisit_Obj = JSON.parse(atob(selectedFreqVisit_Base));

	submittedRate.respondentDetails.freqVisitId = selectedFreqVisit_Obj.visityear_id;	
}
/*_Assign Value for freqVisitId*/


/*_Reset Value for freqVisitId*/
function resetfreqVisitId(){

	submittedRate.respondentDetails.freqVisitId = "";	
}
/*_Reset Value for freqVisitId*/


/*_Assign Value for ageRangeId, clientResponseAge*/
function valueAgeRange(ageInputVal){		

	if(ageInputVal == ""){

		submittedRate.respondentDetails.ageRangeId = "";

	}else if(parseInt(ageInputVal) <= 19){

		submittedRate.respondentDetails.ageRangeId = 1;

	}else if(parseInt(ageInputVal) > 19 && parseInt(ageInputVal) <= 34){

		submittedRate.respondentDetails.ageRangeId = 2;

	}else if(parseInt(ageInputVal) > 34 && parseInt(ageInputVal) <= 49){

		submittedRate.respondentDetails.ageRangeId = 3;

	}else if(parseInt(ageInputVal) > 49 && parseInt(ageInputVal) <= 64){

		submittedRate.respondentDetails.ageRangeId = 4;

	}else if(parseInt(ageInputVal) > 64){

		submittedRate.respondentDetails.ageRangeId = 5;
	}	

	submittedRate.respondentDetails.clientResponseAge = ageInputVal;
}
/*_Assign Value for ageRangeId, clientResponseAge*/
/*Assign, Reset, Populate*/


/*Export*/
export {valueClientResponseRef, valueComments, valueContactDetails, selectedQuestionsGroups_Array, resetSelectedQuestionsGroups, valueSelectedQuestionsGroups, requiredQuestionsGroups_Array, valueRequiredQuestionsGroups, popRespondentRatings, resetRespondentRatings, valueRespondentRatings, resetHelpfulnessRatingViaId, valueHelpfulnessRatingViaId, resetVisibilityRatingViaId, valueVisibilityRatingViaId, cc2TriggerNotApp_QuestionRateId, cc1TriggerNotApp_QuestionRateId, resetAwarenessRatingViaId, valueAwarenessRatingViaId, resetReligionId, valueReligionId, valueSearchReligion, searchReligion, valueAgeRange, resetServiceTypeId, resetOfficeServiceId, resetGender, resetGenderPref, resetEducationAttain, resetOfficeId, resetRespondentId, resetClientTypeId, resetfreqVisitId, valuefreqVisitId, valueOfficeServiceId, valueServiceTypeId, valueClientTypeId, valueRespondentId, valueEducationAttain, valueGenderPref, valueGender, valueOfficeId, submittedRate};
/*Export*/