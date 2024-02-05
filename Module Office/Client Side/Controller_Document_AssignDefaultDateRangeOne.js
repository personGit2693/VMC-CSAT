/*Import*/
import {dateRangeOne, dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_RatingMonitoring.js";
/*Import*/


/*Controller*/
function controller_Document_AssignDefaultDateRangeOne(){

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
/*Controller*/


/*Declare Global*/
window.controller_Document_AssignDefaultDateRangeOne = controller_Document_AssignDefaultDateRangeOne;
/*Declare Global*/


/*Export*/
export default controller_Document_AssignDefaultDateRangeOne;
/*Export*/