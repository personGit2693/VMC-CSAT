/*Import*/
import {dateRangeOne, dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_CSATReports.js";
/*Import*/


/*Prep variables*/
var searchArea_PointOfEntryPageNo = 1;

var csmRespondentDetails_Array = [];
var csmRespondentCc_Array = [];
var csmRespondentScores_Array = [];
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

var csmDatas_Array = [];
/*Prep export variables*/

/*Assign, Reset, Populate*/

/*_Reset csmRespondentScores_Array*/
function resetCsmRespondentScores(){

	csmRespondentScores_Array = [];
}
/*_Reset csmRespondentScores_Array*/


/*_Assign csmRespondentScores_Array*/
function assignCsmRespondentScores(csmRespondentsScores_Array){

	csmDatas_Array.forEach(function(csmData_Array, index, array){

		resetCsmRespondentScores();

		csmRespondentsScores_Array.forEach(function(csmRespondentScores_Obj, index, array){

			if(csmData_Array[0] === csmRespondentScores_Obj.clientresponse_reference){

				csmRespondentScores_Array.push(csmRespondentScores_Obj);
			}
		});

		csmData_Array.push(csmRespondentScores_Array);
	});
}
/*_Assign csmRespondentScores_Array*/


/*_Reset csmRespondentCc_Array*/
function resetCsmRespondentCc(){

	csmRespondentCc_Array = [];
}
/*_Reset csmRespondentCc_Array*/


/*_Assign csmRespondentCc_Array*/
function assignCsmRespondentCc(csmRespondentsCc_Array){

	csmDatas_Array.forEach(function(csmData_Array, index, array){

		resetCsmRespondentCc();

		csmRespondentsCc_Array.forEach(function(csmRespondentCc_Obj, index, array){

			if(csmData_Array[0] === csmRespondentCc_Obj.clientresponse_reference){

				csmRespondentCc_Array.push(csmRespondentCc_Obj);
			}
		});

		csmData_Array.push(csmRespondentCc_Array);
	});	
}
/*_Assign csmRespondentCc_Array*/


/*_Reset csmDatas_Array*/
function resetCsmData(){

	csmDatas_Array = [];
}
/*_Reset csmDatas_Array*/


/*_Reset csmRespondentDetails_Array*/
function resetCsmRespondentDetails(){

	csmRespondentDetails_Array = [];
}
/*_Reset csmRespondentDetails_Array*/


/*_Assign csmRespondentDetails_Array*/
function assignCsmRespondentDetails(csmRespondentsDetails_Param){

	csmRespondentsDetails_Param.forEach(function(value){

		resetCsmRespondentDetails();

		csmRespondentDetails_Array.push(value.clientresponse_reference);
		csmRespondentDetails_Array.push(value.office_value);

		csmDatas_Array.push(csmRespondentDetails_Array);
	});
}
/*_Assign csmRespondentDetails_Array*/


/*_Reset dataTwo_Array*/
function resetDataTwoArray(){

	dataTwo_Array = [];
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

		resetRespondentRatingsDetailsArray();
		let ccRatingsDetails_Array = [];
		let questionsRatingsDetails_Array = [];

		for(let indexOne=0; indexOne < respondentsCcRatings_Array.length; indexOne++){			

			if(respondentsReferenceNo_Array[index] == respondentsCcRatings_Array[indexOne].referenceNo){

				ccRatingsDetails_Array.push(respondentsCcRatings_Array[indexOne]);	
			}
		}

		for(let indexOne=0; indexOne < respondentsQuestionsRatings_Array.length; indexOne++){			

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

/*_Assign respondentsReferenceNo_Array*/
function valueReferenceNoArray(dataOneArray_Param){

	dataOneArray_Param.forEach(function(value, index, array){

		respondentsReferenceNo_Array.push(value.clientresponse_reference);
	})
}
/*_Assign respondentsReferenceNo_Array*/


/*_Reset respondentsReferenceNo_Array*/
function resetReferenceNoArray(){

	respondentsReferenceNo_Array = [];
}
/*_Reset respondentsReferenceNo_Array*/


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
export {
	assignCsmRespondentScores,
	assignCsmRespondentCc,
	resetCsmData,
	csmDatas_Array,
	assignCsmRespondentDetails,
	resetCsmRespondentDetails,
	resetDataTwoArray,
	resetRespondentRatingsDetailsArray,
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
	respondentsReferenceNo_Array, 
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