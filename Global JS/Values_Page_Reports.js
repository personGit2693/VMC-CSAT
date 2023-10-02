/*Import*/
import {selDropOfficeValue, dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal, dateRangeOne, checkboxFilterInternal, checkboxFilterExternal} from "./JSCollection_Page_Reports.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Prep export variables*/
var clientTypeInternal = 1;
var clientTypeExternal = 2;

var selectedOffice_Obj = {office_id:0};
/*Prep export variables*/


/*Assign values*/

/*_Assign value for checkboxFilterInternal and checkboxFilterExternal*/
function valueCheckboxClientype(){
	checkboxFilterInternal.checked = true;
	checkboxFilterExternal.checked = true;
	checkCusCheckBox(checkboxFilterInternal);
	checkCusCheckBox(checkboxFilterExternal);
}
/*_Assign value for checkboxFilterInternal and checkboxFilterExternal*/


/*_Assign default value for dateRangeOneCalLiteFromVal and dateRangeOneCalLiteToVal (Filter Whole Month)*/
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
/*_Assign default value for dateRangeOneCalLiteFromVal and dateRangeOneCalLiteToVal (Filter Whole Month)*/


/*_Assign value clientTypeInternal*/
function valueClientTypeInternal(){

	if(checkboxFilterInternal.checked == true){
		clientTypeInternal = 1;
	}else if(checkboxFilterInternal.checked == false){
		clientTypeInternal = "";
	}
}
/*_Assign value clientTypeInternal*/


/*_Assign value clientTypeExternal*/
function valueClientTypeExternal(){

	if(checkboxFilterExternal.checked == true){
		clientTypeExternal = 2;
	}else if(checkboxFilterExternal.checked == false){
		clientTypeExternal = "";
	}
}
/*_Assign value clientTypeExternal*/


/*_Assign value for selectedOffice_Obj*/
function valueSelectedOfficeObj(){
	selectedOffice_Obj = decodeURIComponent(escape(JSON.parse(atob(selDropOfficeValue.value))));
}
/*_Assign value for selectedOffice_Obj*/

/*Assign values*/


/*Declare global*/
window.valueClientTypeInternal = valueClientTypeInternal;
window.valueClientTypeExternal = valueClientTypeExternal;
window.valueSelectedOfficeObj = valueSelectedOfficeObj;
/*Declare global*/


/*Export*/
export {clientTypeInternal, clientTypeExternal, selectedOffice_Obj, valueCheckboxClientype, valueDateRangeOne};
/*Export*/