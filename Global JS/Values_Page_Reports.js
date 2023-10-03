/*Import*/
import {selDropOfficeValue, dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal, dateRangeOne, checkboxFilterInternal, checkboxFilterExternal} from "./JSCollection_Page_Reports.js";
import {ccDataTwo_Array} from "../Page Reports/JS/Request_CcDataTwo.js";
/*Import*/


/*Prep variables*/
var clientReferenceNo_Array = [];
/*Prep variables*/


/*Prep export variables*/
var clientTypeInternal = 1;
var clientTypeExternal = 2;

var selectedOffice_Obj = {office_id:0};

var respondentRateDetails_Array = [];
/*Prep export variables*/


/*Assign values*/

/*_Assign value for clientReferenceNo_Array*/
function valueClientReferenceNo_Array(){
	/*Reset value*/
	clientReferenceNo_Array = [];
	/*Reset value*/

	/*Add found reference number in clientReferenceNo_Array*/
	for(let index=0; index < ccDataTwo_Array.length; index++){
		if(clientReferenceNo_Array.includes(ccDataTwo_Array[index].clientresponse_reference) == false){
			clientReferenceNo_Array.push(ccDataTwo_Array[index].clientresponse_reference);
		}
	}
	/*Add found reference number in clientReferenceNo_Array*/

	for(let indexOne=0; indexOne < clientReferenceNo_Array.length; indexOne++){
		for(let indexTwo=0; indexTwo < ccDataTwo_Array.length; indexTwo++){
			if(clientReferenceNo_Array[indexOne] == ccDataTwo_Array[indexTwo]){
				respondentRateDetails_Array.push
			}
		}
	}
}
/*_Assign value for clientReferenceNo_Array*/


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
window.valueClientReferenceNo_Array = valueClientReferenceNo_Array;
/*Declare global*/


/*Export*/
export {valueClientReferenceNo_Array, clientTypeInternal, clientTypeExternal, selectedOffice_Obj, valueCheckboxClientype, valueDateRangeOne};
/*Export*/