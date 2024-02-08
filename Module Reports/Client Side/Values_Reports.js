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
/*Prep export variables*/


/*Assign, Reset, Populate*/
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
export {questionActive, resetSelectedOffice, valueSelectedOffice, selectedOffice_Obj, external_clientTypeId, internal_clientTypeId, valueDateRangeOne, valueSearchAreaPointOfEntryStartIndex, valueSearchAreaSearchPointOfEntry, resetSearchAreaPointOfEntryStartIndex, searchArea_SearchPointOfEntry, pointOfEntry_Display, pointOfEntry_StartIndex};
/*Export*/