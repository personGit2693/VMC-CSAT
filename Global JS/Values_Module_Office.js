/*Import*/
import {commentSectionWrap, selDropOfficeValue, checkboxFilterInternal, checkboxFilterExternal, dateRangeOne, dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./JSCollection_Module_Office.js";
import {overallServRate_Array} from "../Module Office/JS/Request_OverallServRate.js";
import {overallStronglyAgree_Array} from "../Module Office/JS/Request_OverallStronglyAgree.js";
import {overallAgree_Array} from "../Module Office/JS/Request_OverallAgree.js";
import {overallNeither_Array} from "../Module Office/JS/Request_OverallNeither.js";
import {overallDisagree_Array} from "../Module Office/JS/Request_OverallDisagree.js";
import {overallStronglyDisagree_Array} from "../Module Office/JS/Request_OverallStronglyDisagree.js";
import {availedOfficeService_Array} from "../Module Office/JS/Request_AvailedOfficeService.js";
import {overallNoRating_Array} from "../Module Office/JS/Request_OverallNoRating.js";
import {blockRequest as blockRequest_CommentDetails} from "../Module Office/JS/SubmitRequest_CommentDetails.js";
/*Import*/


/*Prep variables*/
var commentDeep = 500;
var commentPage = 1;
/*Prep variables*/


/*Prep export variables*/
var clientTypeInternal = 1;
var clientTypeExternal = 2;

var selectedOffice_Obj = {office_id:0};

var commentStartIndex = 0;
var commentDisplay = 10;

var overallServRateDataColumn_Array = [
	[0, 'FillerOnly'],
	[1,'Strongly Agree'],
	[2,'Agree'],
	[3,'Neither Agree nor Disagree'],
	[4,'Disagree'],
	[5,'Strongly Disagree'],
	[6,'No Rating']
	];
var overallServRateData_Array = [
	['Rating', 'Responses'],
	['Strongly Agree', 0],
	['Agree', 0],
	['Neither Agree nor Disagree', 0],
	['Disagree', 0],
	['Strongly Disagree', 0],
	['No Rating', 0]
	];

var overallStronglyAgreeData_Array = [
	["Dates", "Strongly Agree"],
	["yyyy/mm/dd", 0]
	];

var overallAgreeData_Array = [
	["Dates", "Agree"],
	["yyyy/mm/dd", 0]
	];

var overallNeitherData_Array = [
	["Dates", "Neither Agree nor Disagree"],
	["yyyy/mm/dd", 0]
	];

var overallDisagreeData_Array = [
	["Dates", "Disagree"],
	["yyyy/mm/dd", 0]
	];

var overallStronglyDisagreeData_Array = [
	["Dates", "Strongly Disagree"],
	["yyyy/mm/dd", 0]
	];

var overallNoRatingData_Array = [
	["Dates", "No Rating"],
	["yyyy/mm/dd", 0]
	];

var availedOfficeServiceData_Array = [
	['Services', 'Availed', {role: 'annotation'}],
	['No Services', 0, '0']
	];
/*Prep export variables*/


/*Reset value commentDeep and commentStartIndex and commentPage*/
function valueResetCommentDeep(){

	commentDeep = 500;
	commentStartIndex = 0;
	commentPage = 1;
	commentSectionWrap.innerHTML = "";
}
/*Reset value commentDeep and commentStartIndex and commentPage*/


/*Assign value commentDeep and commentStartIndex and commentPage*/
function valueCommentDeep(commentSectionWrap_Param){

	if(blockRequest_CommentDetails === false){
		
		if((commentSectionWrap_Param.scrollTop + commentSectionWrap_Param.offsetHeight) >= commentSectionWrap_Param.scrollHeight){		
			alert("test");
			commentPage++;

			commentStartIndex = (commentPage - 1) * commentDisplay;			
			
			submitRequestCommentDetails(outputAppendCommentDetails, outputCommentSectionLoader, "commentSectionLoader-Id");
		}
	}
}
/*Assign value commentDeep and commentStartIndex and commentPage*/


/*Assign value for selectedOffice_Obj*/
function valueSelectedOfficeObj(){
	selectedOffice_Obj = JSON.parse(atob(selDropOfficeValue.value));
}
/*Assign value for selectedOffice_Obj*/


/*Assign value for overallServRateData_Array*/
function valueOverallServRate(){
	/*Reset*/
	overallServRateData_Array = [
		['Rating', 'Responses'],
		['Strongly Agree', 0],
		['Agree', 0],
		['Neither Agree nor Disagree', 0],
		['Disagree', 0],
		['Strongly Disagree', 0],
		['No Rating', 0]
		];
	/*Reset*/

	overallServRate_Array.forEach(function(value, index, array){
		for(let indexSet=0; indexSet < overallServRateDataColumn_Array.length; indexSet++){
			if(value.scoreId == overallServRateDataColumn_Array[indexSet][0]){
				overallServRateData_Array[indexSet][1] = value.responses;									
			}
		}
	});
}


/*Assign value for checkboxFilterInternal and checkboxFilterExternal*/
function valueCheckboxClientype(){
	checkboxFilterInternal.checked = true;
	checkboxFilterExternal.checked = true;
	checkCusCheckBox(checkboxFilterInternal);
	checkCusCheckBox(checkboxFilterExternal);
}
/*Assign value for checkboxFilterInternal and checkboxFilterExternal*/


/*Assign default value for dateRangeOneCalLiteFromVal and dateRangeOneCalLiteToVal (Filter Whole Month)*/
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
/*Assign default value for dateRangeOneCalLiteFromVal and dateRangeOneCalLiteToVal (Filter Whole Month)*/


/*Assign value clientTypeInternal*/
function valueClientTypeInternal(){

	if(checkboxFilterInternal.checked == true){
		clientTypeInternal = 1;
	}else if(checkboxFilterInternal.checked == false){
		clientTypeInternal = "";
	}
}
/*Assign value clientTypeInternal*/


/*Assign value clientTypeExternal*/
function valueClientTypeExternal(){

	if(checkboxFilterExternal.checked == true){
		clientTypeExternal = 2;
	}else if(checkboxFilterExternal.checked == false){
		clientTypeExternal = "";
	}
}
/*Assign value clientTypeExternal*/


/*Assign value overallStronglyAgreeData_Array*/
function valueOverallStronglyAgree(){
	overallStronglyAgreeData_Array = overallStronglyAgree_Array;

	/*If no counted Overall strongly agree*/
	if(overallStronglyAgree_Array.length == 1){
		overallStronglyAgreeData_Array = [
			["Dates", "Strongly Agree"],
			["yyyy/mm/dd", 0]
			];
	}
	/*If no counted Overall strongly agree*/	
}
/*Assign value overallStronglyAgreeData_Array*/


/*Assign value overallAgreeData_Array*/
function valueOverallAgree(){
	overallAgreeData_Array = overallAgree_Array;

	/*If no counted Overall agree*/
	if(overallAgree_Array.length == 1){
		overallAgreeData_Array = [
			["Dates", "Agree"],
			["yyyy/mm/dd", 0]
			];
	}
	/*If no counted Overall agree*/	
}
/*Assign value overallAgreeData_Array*/


/*Assign value overallNeitherData_Array*/
function valueOverallNeither(){
	overallNeitherData_Array = overallNeither_Array;

	/*If no counted Overall neither*/
	if(overallNeither_Array.length == 1){
		overallNeitherData_Array = [
			["Dates", "Neither Agree nor Disagree"],
			["yyyy/mm/dd", 0]
			];
	}
	/*If no counted Overall neither*/	
}
/*Assign value overallNeitherData_Array*/


/*Assign value overallDisagreeData_Array*/
function valueOverallDisagree(){
	overallDisagreeData_Array = overallDisagree_Array;

	/*If no counted Overall Disagree*/
	if(overallDisagree_Array.length == 1){
		overallDisagreeData_Array = [
			["Dates", "Disagree"],
			["yyyy/mm/dd", 0]
			];
	}
	/*If no counted Overall Disagree*/	
}
/*Assign value overallDisagreeData_Array*/


/*Assign value overallStronglyDisagreeData_Array*/
function valueOverallStronglyDisagree(){
	overallStronglyDisagreeData_Array = overallStronglyDisagree_Array;

	/*If no counted Overall Strongly Disagree*/
	if(overallStronglyDisagree_Array.length == 1){
		overallStronglyDisagreeData_Array = [
			["Dates", "Strongly Disagree"],
			["yyyy/mm/dd", 0]
			];
	}
	/*If no counted Overall Strongly Disagree*/
}
/*Assign value overallStronglyDisagreeData_Array*/


/*Assign value overallNoRatingData_Array*/
function valueOverallNoRating(){
	overallNoRatingData_Array = overallNoRating_Array;

	/*If no counted Overall No Rating*/
	if(overallNoRating_Array.length == 1){
		overallNoRatingData_Array = [
			["Dates", "No Rating"],
			["yyyy/mm/dd", 0]
			];
	}
	/*If no counted Overall No Rating*/	
}
/*Assign value overallNoRatingData_Array*/


/*Assign value availedOfficeServiceData_Array*/
function valueAvailedOfficeService(){
	
	if(availedOfficeService_Array.length > 1){
		availedOfficeServiceData_Array = availedOfficeService_Array;
	}else if(availedOfficeService_Array.length == 1){
		availedOfficeServiceData_Array = [
			['Services', 'Availed', {role: 'annotation'}],
			['No Services', 0, '0']
			];
	}
}
/*Assign value availedOfficeServiceData_Array*/


/*Declare global*/
window.valueClientTypeInternal = valueClientTypeInternal;
window.valueClientTypeExternal = valueClientTypeExternal;
window.valueSelectedOfficeObj = valueSelectedOfficeObj;
window.valueOverallServRate = valueOverallServRate;
window.valueOverallStronglyAgree = valueOverallStronglyAgree;
window.valueOverallAgree = valueOverallAgree;
window.valueOverallNeither = valueOverallNeither;
window.valueOverallDisagree = valueOverallDisagree;
window.valueOverallStronglyDisagree = valueOverallStronglyDisagree;
window.valueOverallNoRating = valueOverallNoRating;
window.valueAvailedOfficeService = valueAvailedOfficeService;
window.valueCommentDeep = valueCommentDeep;
window.valueResetCommentDeep = valueResetCommentDeep;
/*Declare global*/


/*Export*/
export {commentDisplay, commentStartIndex, valueAvailedOfficeService, availedOfficeServiceData_Array, selectedOffice_Obj, overallNoRatingData_Array, valueOverallNoRating, overallStronglyDisagreeData_Array, valueOverallStronglyDisagree, valueOverallDisagree, overallDisagreeData_Array, valueOverallNeither, overallNeitherData_Array, valueOverallAgree, valueCheckboxClientype, valueDateRangeOne, clientTypeInternal, clientTypeExternal, valueOverallServRate, overallServRateData_Array, valueOverallStronglyAgree, overallStronglyAgreeData_Array, overallAgreeData_Array};
/*Export*/