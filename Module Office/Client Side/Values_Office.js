/*Import*/
import {checkboxFilterExternal, checkboxFilterInternal, selectedPointOfEntry} from "./Elements_Page_RatingMonitoring.js";
/*Import*/


/*Prep variables*/
var searchArea_PointOfEntry_PageNo = 1;

var comments_PageNo = 1;

var scoresDetails_Array = [
	[0, 'FillerOnly'],
	[1,'Strongly Agree'],
	[2,'Agree'],
	[3,'Neither Agree nor Disagree'],
	[4,'Disagree'],
	[5,'Strongly Disagree'],
	[6,'No Rating']
];
/*Prep variables*/


/*Prep export variables*/
var searchPointOfEntry_Value = "";
var pointOfEntry_StartIndex = 0;
var pointOfEntry_Display = 10;
var selectedPointOfEntry_Obj = {office_id:0};

var clientTypeInternal = 1;
var clientTypeExternal = 2;

var currentNewRespondent = 0;

var stronglyAgree_Id = 1;
var agree_Id = 2;
var noRating_Id = 6;
var neither_Id = 3;
var disagree_Id = 4;
var stronglyDisagree_Id = 5;
var dimensionComment_Id = 10;

var ccOne_Id = "CC1";
var ccTwo_Id = "CC2";
var ccThree_Id = "CC3";

var commentStartIndex = 0;
var commentDisplay = 10;

var respondentPerScoreDetails_Array = [
	['Rating', 'Responses'],
	['Strongly Agree', 0],
	['Agree', 0],
	['Neither Agree nor Disagree', 0],
	['Disagree', 0],
	['Strongly Disagree', 0],
	['No Rating', 0]
];

var stronglyAgreeNumberDetails_Array = [
	["Dates", "Strongly Agree"],
	["yyyy/mm/dd", 0]
];

var agreeNumberDetails_Array = [
	["Dates", "Agree"],
	["yyyy/mm/dd", 0]
];

var neitherNumberDetails_Array = [
	["Dates", "Neither Agree nor Disagree"],
	["yyyy/mm/dd", 0]
];

var disagreeNumberDetails_Array = [
	["Dates", "Disagree"],
	["yyyy/mm/dd", 0]
];

var stronglyDisagreeNumberDetails_Array = [
	["Dates", "Strongly Disagree"],
	["yyyy/mm/dd", 0]
];

var noRatingNumberDetails_Array = [
	["Dates", "No Rating"],
	["yyyy/mm/dd", 0]
];

var availedOfficeService_Array = [
	['Services', 'Availed', {role: 'annotation'}],
	['No Services', 0, '0']
];
/*Prep export variables*/


/*Assign, Reset, Populate*/
/*_Assign commentStartIndex*/
function valueCommentStartIndex(){	

	comments_PageNo++;

	commentStartIndex = (comments_PageNo - 1) * commentDisplay;

	console.log(comments_PageNo);	
}
/*_Assign commentStartIndex*/


/*_Reset commentStartIndex*/
function resetCommentStartIndex(){	

	comments_PageNo = 1;

	commentStartIndex = 0;	
}
/*_Reset commentStartIndex*/


/*_Assign availedOfficeService_Array*/
function valueAvailedOfficeService(availedOfficeService_Param){
	
	availedOfficeService_Array = availedOfficeService_Param;

	if(availedOfficeService_Param.length == 1){
		
		resetAvailedOfficeService();
	}
}
/*_Assign availedOfficeService_Array*/


/*_Reset availedOfficeService_Array*/
function resetAvailedOfficeService(){
	
	availedOfficeService_Array = [
		['Services', 'Availed', {role: 'annotation'}],
		['No Services', 0, '0']
	];
	
}
/*_Reset availedOfficeService_Array*/


/*_Assign noRatingNumberDetails_Array*/
function valueNoRatingNumberDetails(noRatingNumberDetails_Param){

	noRatingNumberDetails_Array = noRatingNumberDetails_Param;

	/*If no counted Overall No Rating*/
	if(noRatingNumberDetails_Param.length == 1){
		
		resetNoRatingNumberDetails();
	}
	/*If no counted Overall No Rating*/	
}
/*_Assign noRatingNumberDetails_Array*/


/*_Reset noRatingNumberDetails_Array*/
function resetNoRatingNumberDetails(){

	noRatingNumberDetails_Array = [
		["Dates", "No Rating"],
		["yyyy/mm/dd", 0]
	];
}
/*_Reset noRatingNumberDetails_Array*/


/*_Assign stronglyDisagreeNumberDetails_Array*/
function valueStronglyDisagreeNumberDetails(stronglyDisagreeNumberDetails_Param){

	stronglyDisagreeNumberDetails_Array = stronglyDisagreeNumberDetails_Param;

	/*If no counted Overall Strongly Disagree*/
	if(stronglyDisagreeNumberDetails_Param.length == 1){
		
		resetStronglyDisagreeNumberDetails();
	}
	/*If no counted Overall Strongly Disagree*/
}
/*_Assign stronglyDisagreeNumberDetails_Array*/


/*_Reset stronglyDisagreeNumberDetails_Array*/
function resetStronglyDisagreeNumberDetails(){
	
	stronglyDisagreeNumberDetails_Array = [
		["Dates", "Strongly Disagree"],
		["yyyy/mm/dd", 0]
	];
}
/*_Reset stronglyDisagreeNumberDetails_Array*/


/*_Assign disagreeNumberDetails_Array*/
function valueDisagreeNumberDetails(disagreeNumberDetails_Param){

	disagreeNumberDetails_Array = disagreeNumberDetails_Param;

	/*If no counted Overall Disagree*/
	if(disagreeNumberDetails_Param.length == 1){
		
		resetDisagreeNumberDetails();	
	}
	/*If no counted Overall Disagree*/	
}
/*_Assign disagreeNumberDetails_Array*/


/*_Reset disagreeNumberDetails_Array*/
function resetDisagreeNumberDetails(){

	disagreeNumberDetails_Array = [
		["Dates", "Disagree"],
		["yyyy/mm/dd", 0]
	];
}
/*_Reset disagreeNumberDetails_Array*/


/*_Assign neitherNumberDetails_Array*/
function valueNeitherNumberDetails(neitherNumberDetails_Param){

	neitherNumberDetails_Array = neitherNumberDetails_Param;

	/*If no counted Overall neither*/
	if(neitherNumberDetails_Param.length == 1){
		
		resetNeitherNumberDetails();
	}
	/*If no counted Overall neither*/	
}
/*_Assign neitherNumberDetails_Array*/


/*_Reset neitherNumberDetails_Array*/
function resetNeitherNumberDetails(){

	neitherNumberDetails_Array = [
		["Dates", "Neither Agree nor Disagree"],
		["yyyy/mm/dd", 0]
	];
}
/*_Reset neitherNumberDetails_Array*/


/*_Assign agreeNumberDetails_Array*/
function valueAgreeNumberDetails(agreeNumberDetails_Param){

	agreeNumberDetails_Array = agreeNumberDetails_Param;

	/*If no counted Overall agree*/
	if(agreeNumberDetails_Param.length == 1){

		resetAgreeNumberDetails();
	}
	/*If no counted Overall agree*/	
}
/*_Assign agreeNumberDetails_Array*/


function resetAgreeNumberDetails(){

	agreeNumberDetails_Array = [
		["Dates", "Agree"],
		["yyyy/mm/dd", 0]
	];
}


/*Assign stronglyAgreeNumberDetails_Array*/
function valueStronglyAgreeNumberDetails(stronglyAgreeNumberDetails_Param){

	stronglyAgreeNumberDetails_Array = stronglyAgreeNumberDetails_Param;

	/*If no counted Overall strongly agree*/
	if(stronglyAgreeNumberDetails_Param.length == 1){
		
		resetStronglyAgreeNumberDetails();
	}
	/*If no counted Overall strongly agree*/	
}
/*Assign stronglyAgreeNumberDetails_Array*/


/*Reset stronglyAgreeNumberDetails_Array*/
function resetStronglyAgreeNumberDetails(){
		
	stronglyAgreeNumberDetails_Array = [
		["Dates", "Strongly Agree"],
		["yyyy/mm/dd", 0]
	];	
}
/*Reset stronglyAgreeNumberDetails_Array*/


/*_Assign respondentPerScoreDetails_Array*/
function valueRespondentPerScoreDetails(respondentPerScoreDetails_Param){
	
	resetRespondentPerScoreDetails();

	respondentPerScoreDetails_Param.forEach(function(value, index, array){

		for(let indexSet=0; indexSet < scoresDetails_Array.length; indexSet++){

			if(value.scoreId == scoresDetails_Array[indexSet][0]){
				
				respondentPerScoreDetails_Array[indexSet][1] = value.responses;									
			}
		}
	});
}
/*_Assign respondentPerScoreDetails_Array*/


/*_Reset respondentPerScoreDetails_Array*/
function resetRespondentPerScoreDetails(){

	respondentPerScoreDetails_Array = [
		['Rating', 'Responses'],
		['Strongly Agree', 0],
		['Agree', 0],
		['Neither Agree nor Disagree', 0],
		['Disagree', 0],
		['Strongly Disagree', 0],
		['No Rating', 0]
	];
}
/*_Reset respondentPerScoreDetails_Array*/

/*_Assign currentNewRespondent*/
function valueCurrentNewRespondent(detectedNewRespondent){

	currentNewRespondent = detectedNewRespondent;
}
/*_Assign currentNewRespondent*/

/*_Assign value clientTypeInternal*/
function valueClientTypeInternal(){

	if(checkboxFilterInternal.checked == true){

		clientTypeInternal = 1;

	}else if(checkboxFilterInternal.checked == false){
		
		clientTypeInternal = 0;
	}
}
/*_Assign value clientTypeInternal*/


/*Assign value clientTypeExternal*/
function valueClientTypeExternal(){

	if(checkboxFilterExternal.checked == true){
		
		clientTypeExternal = 2;

	}else if(checkboxFilterExternal.checked == false){
		
		clientTypeExternal = 0;
	}
}
/*Assign value clientTypeExternal*/


/*_Assign selectedPointOfEntry_Obj*/
function valueSelectedPointOfEntry(){

	selectedPointOfEntry_Obj = JSON.parse(atob(selectedPointOfEntry.value));
}
/*_Assign selectedPointOfEntry_Obj*/


/*_Reset selectedPointOfEntry_Obj*/
function resetSelectedPointOfEntry(){

	selectedPointOfEntry_Obj = {office_id:0};
}
/*_Reset selectedPointOfEntry_Obj*/


/*_Assign searchPointOfEntry_Value*/
function valueSearchPointOfEntry(searchPointOfEntryValue){

	searchPointOfEntry_Value = searchPointOfEntryValue;
}
/*_Assign searchPointOfEntry_Value*/


/*_Reset searchPointOfEntry_Value*/
function resetSearchPointOfEntry(){

	searchPointOfEntry_Value = "";
}
/*_Reset searchPointOfEntry_Value*/


/*_Assign pointOfEntry_StartIndex*/
function valuePointOfEntry_StartIndex(){	

	pointOfEntry_StartIndex = (searchArea_PointOfEntry_PageNo - 1) * pointOfEntry_Display;

	searchArea_PointOfEntry_PageNo++;
}
/*_Assign pointOfEntry_StartIndex*/


/*_Reset pointOfEntry_StartIndex*/
function resetPointOfEntry_StartIndex(){

	pointOfEntry_StartIndex = 0;
}
/*_Reset pointOfEntry_StartIndex*/
/*Assign, Reset, Populate*/


/*Export*/
export {resetCommentStartIndex, valueCommentStartIndex, commentDisplay, commentStartIndex, dimensionComment_Id, ccThree_Id, ccTwo_Id, ccOne_Id, availedOfficeService_Array, resetAvailedOfficeService, valueAvailedOfficeService, resetNoRatingNumberDetails, valueNoRatingNumberDetails, noRatingNumberDetails_Array, resetStronglyDisagreeNumberDetails, valueStronglyDisagreeNumberDetails, stronglyDisagreeNumberDetails_Array, stronglyDisagree_Id, resetDisagreeNumberDetails, valueDisagreeNumberDetails, disagreeNumberDetails_Array, disagree_Id, neither_Id, resetNeitherNumberDetails, valueNeitherNumberDetails, neitherNumberDetails_Array, agreeNumberDetails_Array, valueAgreeNumberDetails, resetAgreeNumberDetails, resetStronglyAgreeNumberDetails, valueStronglyAgreeNumberDetails, stronglyAgreeNumberDetails_Array, resetRespondentPerScoreDetails, valueRespondentPerScoreDetails, respondentPerScoreDetails_Array, noRating_Id, agree_Id, stronglyAgree_Id, selectedPointOfEntry_Obj, valueCurrentNewRespondent, currentNewRespondent, valueClientTypeExternal, valueClientTypeInternal, clientTypeExternal, clientTypeInternal, valueSelectedPointOfEntry, resetSelectedPointOfEntry, valuePointOfEntry_StartIndex, resetPointOfEntry_StartIndex, resetSearchPointOfEntry, pointOfEntry_Display, pointOfEntry_StartIndex, valueSearchPointOfEntry, searchPointOfEntry_Value};
/*Export*/