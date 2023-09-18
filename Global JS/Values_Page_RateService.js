/*Import*/
import {serviceTypeRadioBtnsWrap, officeServiceRadioWrap, cc2RadioBtnsWrap, cc3RadioBtnsWrap, questionsWrap, commentsWrap} from "../Page Rate Our Service/JS/JsCollection_Page_RateService.js";
import {questionDetails_Array} from "../Page Rate Our Service/JS/Request_Questions.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Prep export variables*/
var clientResponseRef = "";
var respondentId = "";
var clientResponseAge = "";
var ageRangeId = "";
var genderId = "";
var genderPreferenceId = "";
var religionId = "";
var educationId = "";
var visityearId = "";
var officeId = "";
var clientTypeId = "";
var serviceTypeId = "";
var officeServiceId = "";
var freqVisitId = "";
var contactDetails = "";
var awarenessRatingViaId = "";
var visibilityRatingViaId = "";
var helpfulnessRatingViaId = "";
var questionGroups = [];
var selectedQuestionGroups = [];
var codeDetails_Obj = {};


var submittedRate = {
	respondentDetails:{
		clientResponseRef: clientResponseRef,
		respondentId: respondentId, 
		clientResponseAge: clientResponseAge,
		ageRangeId: ageRangeId,
		genderId: genderId,
		genderPreferenceId: genderPreferenceId,
		religionId: religionId,
		educationId: educationId,
		officeId: officeId,
		serviceTypeId: serviceTypeId,
		clientTypeId: clientTypeId,
		freqVisitId: freqVisitId,
		officeServiceId: officeServiceId,
		contactDetails: contactDetails
	},
	availedOfficeServices:[],
	ccRate:{
		awarenessRatingViaId: awarenessRatingViaId,
		visibilityRatingViaId: visibilityRatingViaId,
		helpfulnessRatingViaId: helpfulnessRatingViaId
	},
	respondentRatings:[],
	comments:[]
};
/*Prep export variables*/


/*Assign Value for codeDetails_Obj and officeId*/
function valueCodeDetailsObj(codeDetails_Base){
	codeDetails_Obj = JSON.parse(atob(codeDetails_Base));

	officeId = codeDetails_Obj.office_id;

	submittedRate.respondentDetails.officeId = officeId;
}
/*Assign Value for codeDetails_Obj and officeId*/


/*Assign Value for ageRangeId*/
function valueAgeRange(ageInputVal){	

	clientResponseAge = ageInputVal;
	if(parseInt(ageInputVal) <= 19){
		ageRangeId = 1;		
	}else if(parseInt(ageInputVal) > 19 && parseInt(ageInputVal) <= 34){
		ageRangeId = 2;
	}else if(parseInt(ageInputVal) > 34 && parseInt(ageInputVal) <= 49){
		ageRangeId = 3;
	}else if(parseInt(ageInputVal) > 49 && parseInt(ageInputVal) <= 64){
		ageRangeId = 4;
	}else if(parseInt(ageInputVal) > 64){
		ageRangeId = 5;
	}	

	submittedRate.respondentDetails.ageRangeId = ageRangeId;
	submittedRate.respondentDetails.clientResponseAge = clientResponseAge;
}
/*Assign Value for ageRangeId*/


/*Assign Value for genderId*/
function valueGender(selectedGender_Base){
	const selectedGender_Obj = JSON.parse(atob(selectedGender_Base));

	genderId = selectedGender_Obj.gender_id;

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


/*Assign Value for clientTypeId, respondentId*/
function valueRespondentType(selectedRespondentType_Base){
	const selectedRespondentType_Obj = JSON.parse(atob(selectedRespondentType_Base));	
	
	serviceTypeId = "";

	respondentId = selectedRespondentType_Obj.respondent_id;
	clientTypeId = selectedRespondentType_Obj.clienttype_id;	

	submittedRate.respondentDetails.respondentId = respondentId;
	submittedRate.respondentDetails.clientTypeId = clientTypeId;
	submittedRate.respondentDetails.serviceTypeId = serviceTypeId;
}
/*Assign Value for clientTypeId, respondentId*/


/*Assign Value for serviceTypeId*/
function valueServiceType(selectedServiceType_Base){
	const selectedServiceType_Obj = JSON.parse(atob(selectedServiceType_Base));

	officeServiceId = "";

	serviceTypeId = selectedServiceType_Obj.serviceTypeId;

	submittedRate.respondentDetails.serviceTypeId = serviceTypeId;
	submittedRate.respondentDetails.officeServiceId = officeServiceId;	
}
/*Assign Value for serviceTypeId*/


/*Assign Value for officeServiceId*/
function valueOfficeService(selectedOfficeService_Base){
	const selectedOfficeService_Obj = JSON.parse(atob(selectedOfficeService_Base));

	officeServiceId = selectedOfficeService_Obj.officeservice_id;

	submittedRate.respondentDetails.officeServiceId = officeServiceId;	
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
function valuePopRespondentRatings(){
	 questionDetails_Array.forEach(function(value, index, array){
	 	const preQuestionValue_Obj = {questionId: value.question_id, questionGroupId: value.questionsgroup_id, scoreId: 6};

		submittedRate.respondentRatings.push(preQuestionValue_Obj);

		if(questionGroups.includes(value.questionsgroup_id) == false){
			questionGroups.push(value.questionsgroup_id);
		}		
	});
}

function valueRespondentRatings(selectedQuestionScore_Base, questionScoreRadioBtn){
	const selectedQuestionScore_Obj = JSON.parse(atob(selectedQuestionScore_Base));
	const questionId = selectedQuestionScore_Obj.questionId;
	const questionGroupId = selectedQuestionScore_Obj.questionGroupId;

	if(questionScoreRadioBtn.checked === true){
		/*_Remove first the previous selected rating via questionId*/
		submittedRate.respondentRatings = submittedRate.respondentRatings.filter(function(value, index, array){
			return questionId != value.questionId;
		});
		/*_Remove first the previous selected rating via questionId*/


		/*_Add new selected selectedQuestionScore_Obj*/
		submittedRate.respondentRatings.push(selectedQuestionScore_Obj);
		/*_Add new selected selectedQuestionScore_Obj*/


		/*_Add to selectedQuestionGroups for validation of at least one question group has rating*/
		selectedQuestionGroups.push(selectedQuestionScore_Obj.questionGroupId);
		/*_Add to selectedQuestionGroups for validation of at least one question group has rating*/

	}else if(questionScoreRadioBtn.checked === false){
		submittedRate.respondentRatings = submittedRate.respondentRatings.filter(function(value, index, array){
			return questionId != value.questionId;
		});


		/*_Return the unselected questionScore to default value then add*/
		selectedQuestionScore_Obj.scoreId = 6;
		submittedRate.respondentRatings.push(selectedQuestionScore_Obj);
		/*_Return the unselected questionScore to default value then add*/


		/*_Remove one similar questionGroupId from selectedQuestionGroups*/
		for(let index=0; index<selectedQuestionGroups.length; index++){
			if(selectedQuestionGroups[index] == questionGroupId){
				selectedQuestionGroups.splice(index, 1);
			}
		}
		/*_Remove one similar questionGroupId from selectedQuestionGroups*/
	}
}
/*Assign Value for respondentRatings*/


/*Assign Value for comments*/
function valueComments(suggestionTextArea){
	const commentQuestionDet_Obj = JSON.parse(atob(suggestionTextArea.nextElementSibling.value));
	const questionId = commentQuestionDet_Obj.question_id;	


	const commentsDetails_Obj = {};
	commentsDetails_Obj.questionId = commentQuestionDet_Obj.question_id;
	commentsDetails_Obj.respondentComment = suggestionTextArea.value;

	submittedRate.comments = submittedRate.comments.filter(function(value, index, array){
		return questionId != value.questionId;
	});


	if(suggestionTextArea.value != ""){
		submittedRate.comments.push(commentsDetails_Obj);
	}	
}
/*Assign Value for comments*/


/*Assign Value for contactDetails*/
function valueContactDetails(contactDetailsTextArea){	
	submittedRate.respondentDetails.contactDetails = contactDetailsTextArea.value;
}
/*Assign Value for contactDetails*/


/*Assign Value for clientResponseRef*/
function valueClientResponseRef(){
	const toDate = new Date();
	
	clientResponseRef = toDate.getFullYear()+"-"+"VMCCSAT-"+toDate.getMonth()+toDate.getDate()+toDate.getHours()+toDate.getMinutes()+toDate.getSeconds()+toDate.getMilliseconds();
	submittedRate.respondentDetails.clientResponseRef = clientResponseRef;
}
/*Assign Value for clientResponseRef*/


/*Declare global*/
window.valueRespondentType = valueRespondentType;
window.valueServiceType = valueServiceType;
window.valueOfficeService = valueOfficeService;
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
window.valueComments = valueComments;
window.valueContactDetails = valueContactDetails;
window.valueClientResponseRef = valueClientResponseRef;
/*Declare global*/


/*Export*/
export {valueCodeDetailsObj, codeDetails_Obj, respondentId, officeId, clientTypeId, serviceTypeId, officeServiceId, freqVisitId, submittedRate, awarenessRatingViaId, visibilityRatingViaId, valuePopRespondentRatings, questionGroups, selectedQuestionGroups};
/*Export*/