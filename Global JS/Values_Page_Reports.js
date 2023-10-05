/*Import*/
import {selDropOfficeValue, dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal, dateRangeOne, checkboxFilterInternal, checkboxFilterExternal} from "./JSCollection_Page_Reports.js";
import {dataOne_Array} from "../Page Reports/JS/Request_DataOne.js";
import {ccDataTwo_Array} from "../Page Reports/JS/Request_CcDataTwo.js";
import {questionsDataTwo_Array} from "../Page Reports/JS/Request_QuestionsDataTwo.js";
import renderDataTwoTable from "../Page Reports/JS/View_DataTwoTable.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Prep export variables*/
var clientTypeInternal = 1;
var clientTypeExternal = 2;

var selectedOffice_Obj = {office_id:0};

var dataTwo_Array = [];
/*Prep export variables*/


/*Assign values*/

/*_Assign value for dataTwo_Array*/
function valueDataTwo(){

	/*Reset value*/
	let respondentReferenceNo_Array = [];	
	dataTwo_Array = [];
	/*Reset value*/

	/*Collect respondent reference number*/
	for(let index=0; index<dataOne_Array.length; index++){
		if(respondentReferenceNo_Array.includes(dataOne_Array[index].clientresponse_reference) == false){
			respondentReferenceNo_Array.push(dataOne_Array[index].clientresponse_reference);
		}
	}
	/*Collect respondent reference number*/

	/*dataTwo_Array arrangement*/
	for(let index=0; index<respondentReferenceNo_Array.length; index++){
		let respondentRateDetails_Array = [];
		let respondentCcRateDetails_Array = [];
		let respondentQuestionRateDetails_Array = [];

		/*_Setting up the respondentCcRateDetails_Array or Respondent CC Data Two*/		
		for(let indexOne=0; indexOne<ccDataTwo_Array.length; indexOne++){
			if(respondentReferenceNo_Array[index] == ccDataTwo_Array[indexOne].clientresponse_reference){
				const respondentCcRateDetails_Obj = {ccNo: ccDataTwo_Array[indexOne].ccquestion_id, ccClientRate: ccDataTwo_Array[indexOne].ccquestionsrate_rate};
				respondentCcRateDetails_Array.push(respondentCcRateDetails_Obj);
			}
		}
		/*_Setting up the respondentCcRateDetails_Array or Respondent CC Data Two*/

		/*_Setting up the respondentQuestionRateDetails_Array or Respondent Questions Data Two*/
		for(let indexOne=0; indexOne<questionsDataTwo_Array.length; indexOne++){
			if(respondentReferenceNo_Array[index] == questionsDataTwo_Array[indexOne].clientresponse_reference){
				const respondentQuestionRateDetails_Obj = {questionNo: questionsDataTwo_Array[indexOne].question_number, score: questionsDataTwo_Array[indexOne].score_value};
				respondentQuestionRateDetails_Array.push(respondentQuestionRateDetails_Obj);
			}
		}
		/*_Setting up the respondentQuestionRateDetails_Array or Respondent Questions Data Two*/

		/*_Inserting into dataTwo_Array as value*/
		respondentRateDetails_Array.push(respondentReferenceNo_Array[index]);
		respondentRateDetails_Array.push(respondentCcRateDetails_Array);
		respondentRateDetails_Array.push(respondentQuestionRateDetails_Array);
		dataTwo_Array.push(respondentRateDetails_Array);
		/*_Inserting into dataTwo_Array as value*/
	}
	/*dataTwo_Array arrangement*/

	console.log(JSON.stringify(dataTwo_Array));
	renderDataTwoTable();
	
	/*
	let currentRefNo = "";
	for(let index=0; index < ccDataTwo_Array.length; index++){
		if(currentRefNo != ccDataTwo_Array[index].clientresponse_reference){						

			if(respondentRateDetails_Array.length != 0){
				respondentQuestionRateDetails_Array = [];

				for(let indexOne=0; indexOne < questionsDataTwo_Array.length; indexOne++){
					if(currentRefNo == questionsDataTwo_Array[indexOne].clientresponse_reference){						
						let respondentQuestionRateDetails_Obj = {questionNo: questionsDataTwo_Array[indexOne].question_number, score: questionsDataTwo_Array[indexOne].score_value};			 
						respondentQuestionRateDetails_Array.push(respondentQuestionRateDetails_Obj); 
					}
				}

				respondentRateDetails_Array.push(respondentCcRateDetails_Array);
				respondentRateDetails_Array.push(respondentQuestionRateDetails_Array);

				dataTwo_Array.push(respondentRateDetails_Array);				
			}			

			currentRefNo = ccDataTwo_Array[index].clientresponse_reference;

			respondentRateDetails_Array = [];

			respondentCcRateDetails_Array = [];
			let respondentCcRateDetails_Obj = {ccNo: ccDataTwo_Array[index].ccquestion_id, ccClientRate: ccDataTwo_Array[index].ccquestionsrate_rate};			
			respondentCcRateDetails_Array.push(respondentCcRateDetails_Obj);

			respondentRateDetails_Array.push(currentRefNo);
		}else if(currentRefNo == ccDataTwo_Array[index].clientresponse_reference){			
			let respondentCcRateDetails_Obj = {ccNo: ccDataTwo_Array[index].ccquestion_id, ccClientRate: ccDataTwo_Array[index].ccquestionsrate_rate};			
			respondentCcRateDetails_Array.push(respondentCcRateDetails_Obj);			
		}
	}

	console.log(JSON.stringify(dataTwo_Array));
	renderDataTwoTable();
	*/
}
/*_Assign value for dataTwo_Array*/


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
window.valueDataTwo = valueDataTwo;
/*Declare global*/


/*Export*/
export {dataTwo_Array, clientTypeInternal, clientTypeExternal, selectedOffice_Obj, valueCheckboxClientype, valueDateRangeOne};
/*Export*/