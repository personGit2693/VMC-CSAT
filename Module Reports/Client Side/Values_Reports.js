/*Import*/
import {dateRangeOne, dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_CSATReports.js";
/*Import*/


/*Prep variables*/
var searchArea_PointOfEntryPageNo = 1;
/*Prep variables*/


/*Prep export variables*/
var searchArea_SearchPointOfEntry = "";
var pointOfEntry_StartIndex = 0;
var pointOfEntry_Display = 10;

var internal_clientTypeId = 1;
var external_clientTypeId = 2;

var selectedOffice_Obj = {office_id:0};

var questionActive = 1;

var dataTwo_Array = []; 
var respondentRatingsDetails_Array = [];
var respondentsReferenceNo_Array = [];
var respondentsCcRatings_Array = [];
var respondentsQuestionsRatings_Array = [];
/*Prep export variables*/


/*Assign, Reset, Populate*/
/*_Rest dataTwo_Array*/
function restDataTwoArray(){

	dataTwo_Array[];
}
/*_Reset dataTwo_Array*/


/*_Assign dataTwo_Array*/
function valueDataTwoArray(respondentRatingsDetails_Param){

	dataTwo_Array.push(respondentRatingsDetails_Param);
}
/*_Assign dataTwo_Array*/


/*_Reset respondentRatingsDetails_Array*/
function resetRespondentRatingsDetailsArray(){

	respondentRatingsDetails_Array = [];
}
/*_Reset respondentRatingsDetails_Array*/


/*_Assign respondentRatingsDetails_Array*/
function valueRespondentRatingsDetailsArray(){

	for(let index=0; index < respondentsReferenceNo_Array.length; index++){		

		for(let indexOne=0; indexOne < respondentsCcRatings_Array.length; indexOne++){

			let ccRatingsDetails_Array = [];

			if(respondentsReferenceNo_Array[index] == respondentsCcRatings_Array[indexOne].referenceNo){

				ccRatingsDetails_Array.push(respondentsCcRatings_Array[indexOne]);	
			}
		}

		for(let indexOne=0; indexOne < respondentsQuestionsRatings_Array.length; indexOne++){

			let questionsRatingsDetails_Array = [];

			if(respondentsReferenceNo_Array[index] == respondentsQuestionsRatings_Array[indexOne].referenceNo){

				questionsRatingsDetails_Array.push(respondentsQuestionsRatings_Array[indexOne]);
			}
		}

		respondentRatingsDetails_Array.push(respondentsReferenceNo_Array[index]);
		respondentRatingsDetails_Array.push(ccRatingsDetails_Array);
		respondentRatingsDetails_Array.push(questionsRatingsDetails_Array);
		
		valueDataTwoArray(respondentRatingsDetails_Array);
	}
}
/*_Assign respondentRatingsDetails_Array*/


/*_Reset respondentsQuestionsRatings_Array*/
function resetRespondentsQuestionsRatingsArray(){

	respondentsQuestionsRatings_Array = [];
}
/*_Reset respondentsQuestionsRatings_Array*/


/*_Assign respondentsQuestionsRatings_Array*/
function valueRespondentsQuestionsRatingsArray(respondentsQuestionsRatingsArray_Param){

	respondentsQuestionsRatingsArray_Param.forEach(function(value, index, array){

		const respondentQuestionRateDetails_Obj = {referenceNo: value.clientresponse_reference, questionNo: value.question_number, score: value.score_value};

		respondentsQuestionsRatings_Array.push(respondentQuestionRateDetails_Obj);
	})
}
/*_Assign respondentsQuestionsRatings_Array*/


/*_Reset respondentsCcRatings_Array*/
function resetRespondentsCcRatingsArray(){

	respondentsCcRatings_Array = [];
}
/*_Reset respondentsCcRatings_Array*/


/*_Assign respondentsCcRatings_Array*/
function valueRespondentsCcRatingsArray(respondentsCcRatingsArray_Param){

	respondentsCcRatingsArray_Param.forEach(function(value, index, array){

		const respondentCcRateDetails_Obj = {referenceNo: value.clientresponse_reference, ccNo: value.ccquestion_id, ccClientRate: value.ccquestionsrate_rate};

		respondentsCcRatings_Array.push(respondentCcRateDetails_Obj);
	})
}
/*_Assign respondentsCcRatings_Array*/

/*_Assign respondentReferenceNo_Array*/
function valueReferenceNoArray(dataOneArray_Param){

	dataOneArray_Param.forEach(function(value, index, array){

		respondentReferenceNo_Array.push(value.clientresponse_reference);
	})
}
/*_Assign respondentReferenceNo_Array*/


/*_Reset respondentReferenceNo_Array*/
function resetReferenceNoArray(){

	respondentReferenceNo_Array = [];
}
/*_Reset respondentReferenceNo_Array*/


/*_Reset selectedOffice_Obj*/
function resetSelectedOffice(){

	selectedOffice_Obj = {office_id:0};
}
/*_Reset selectedOffice_Obj*/


/*_Assign selectedOffice_Obj*/
function valueSelectedOffice(searchAreaSelectedPointOfEntry){

	selectedOffice_Obj = JSON.parse(atob(searchAreaSelectedPointOfEntry));
}
/*_Assign selectedOffice_Obj*/

/*_Assign pointOfEntry_StartIndex*/
function valueSearchAreaPointOfEntryStartIndex(){

	searchArea_PointOfEntryPageNo++;

	pointOfEntry_StartIndex = (searchArea_PointOfEntryPageNo - 1) * pointOfEntry_Display;
}
/*_Assign pointOfEntry_StartIndex*/


/*_Reset pointOfEntry_StartIndex*/
function valueDateRangeOne(){
	
	const todayDate = new Date();
	let todayDateYear = todayDate.getFullYear();
	let todayDateMonth = todayDate.getMonth()+1;
	let todayDateDay = todayDate.getDate();

	let month = "";
	let day = "";

	if(todayDateMonth < 10){

		month = "0"+todayDateMonth;

	}else if(todayDateMonth >= 10){

		month = todayDateMonth;
	}

	if(todayDateDay < 10){

		day = "0"+todayDate.getDate();

	}else if(todayDateDay >= 10){

		day = todayDateDay;

	}

	dateRangeOneCalLiteFromVal.value = todayDateYear+"-"+month+"-01";

	dateRangeOneCalLiteToVal.value = todayDateYear+"-"+month+"-"+new Date(todayDateYear, todayDateMonth, 0).getDate();

	setDateRangeFromText(dateRangeOne, dateRangeOneCalLiteFromVal);
	setDateRangeToText(dateRangeOne, dateRangeOneCalLiteToVal);
}


function resetSearchAreaPointOfEntryStartIndex(){

	pointOfEntry_StartIndex = 0;

	searchArea_PointOfEntryPageNo = 1;
}
/*_Reset pointOfEntry_StartIndex*/


/*_Assign searchArea_SearchPointOfEntry*/
function valueSearchAreaSearchPointOfEntry(searchPointOfEntry_Param){

	searchArea_SearchPointOfEntry = searchPointOfEntry_Param;
}
/*_Assign searchArea_SearchPointOfEntry*/
/*Assign, Reset, Populate*/


/*Export*/
export {resetRespondentRatingsDetailsArray,
	valueRespondentRatingsDetailsArray,
	respondentsQuestionsRatings_Array, 
	valueRespondentsQuestionsRatingsArray, 
	resetRespondentsQuestionsRatingsArray, 
	valueRespondentsCcRatingsArray, 
	resetRespondentsCcRatingsArray, 
	respondentsCcRatings_Array, 
	dataTwo_Array, 
	respondentRatingsDetails_Array, 
	resetReferenceNoArray, 
	valueReferenceNoArray, 
	respondentReferenceNo_Array, 
	questionActive, 
	resetSelectedOffice, 
	valueSelectedOffice, 
	selectedOffice_Obj, 
	external_clientTypeId, 
	internal_clientTypeId, 
	valueDateRangeOne, 
	valueSearchAreaPointOfEntryStartIndex, 
	valueSearchAreaSearchPointOfEntry, 
	resetSearchAreaPointOfEntryStartIndex, 
	searchArea_SearchPointOfEntry, 
	pointOfEntry_Display, 
	pointOfEntry_StartIndex
};
/*Export*/