/****************************************************************************************************************************************************************************/
/*For Calender Lite*/


/*Current Date*/

/*_Current Day*/
var day_Rogrid = new Date().getDate();
var dayValue_Rogrid = day_Rogrid;
if(dayValue_Rogrid < 10){
	dayValue_Rogrid = "0"+dayValue_Rogrid;
}else if(dayValue_Rogrid >= 10){
	dayValue_Rogrid = dayValue_Rogrid;
}
/*_Current Day*/


/*_Current Month*/
var month_Rogrid = new Date().getMonth();
var monthValue_Rogrid = month_Rogrid+1;
if(monthValue_Rogrid < 10){
	monthValue_Rogrid = "0"+monthValue_Rogrid;
}else if(monthValue_Rogrid >= 10){
	monthValue_Rogrid = monthValue_Rogrid;
}
/*_Current Month*/


/*_Current Year*/
var year_Rogrid = new Date().getFullYear();
/*_Current Year*/


/*_Calendar Lite Hidden input for Calendar Lite Value*/
//var hiddenCalLiteVal_ID_Rogrid = document.getElementById("calLite_ID");
//hiddenCalLiteVal_ID_Rogrid.value = year_Rogrid+"-"+monthValue_Rogrid+"-"+dayValue_Rogrid;
//hiddenCalLiteVal_ID_Rogrid.value = "";
/*_Calendar Lite Hidden input for Calendar Lite Value*/

/*Current Date*/



/*Months Text Collection*/
const monthsTxt_Array = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var filteredDate = []; /*Editable, filtered date is a collection of date which have other details aside than normal date.*/
/*Months Text Collection*/



/*Get the number of days of the month*/
const getNumberOfDays = (month_Param, year_Param) =>{
	let numDays = new Date(year_Param, month_Param+1, 0).getDate();
	return numDays;
}
/*Get the number of days of the month*/



/*Function to Populate Calendar Lite*/
const renderCalLite = (getNumberOfDays_Param, month_Param, year_Param, calLite_Param) => {
	const calLite = document.getElementById(calLite_Param);
	const calLiteMonthText = calLite.querySelector(".calLiteMonthText_RoClass");
	const calLiteYearText = calLite.querySelector(".calLiteYearText_RoClass");
	const calLiteDaysIndex = calLite.querySelector(".calLiteDaysIndex_RoClass");
	const calLiteValue = calLite.querySelector(".calLiteValue_RoClass");
	const calLiteMonthBtnValue = calLite.querySelector(".calLiteMonthBtnValue_RoClass");
	const calLiteYearBtnValue = calLite.querySelector(".calLiteYearBtnValue_RoClass");
	

	/*_Assign inital value for month button*/
	calLiteMonthBtnValue.value = month_Param;
	calLiteYearBtnValue.value = year_Param;
	/*_Assign inital value for month button*/


	/*_Print Month and Year Inner Text*/
	const monthTxt_Rogrid = monthsTxt_Array[month_Param];
	calLiteMonthText.innerText = monthTxt_Rogrid;
	
	calLiteYearText.innerText = year_Param;
	/*_Print Month and Year Inner Text*/



	/*_Clear days text to avoid overlaping*/
	for(let index=0; index < calLiteDaysIndex.children.length; index++){
		calLiteDaysIndex.children[index].innerHTML = "";
	}	
	/*_Clear days text to avoid overlaping*/



	/*_Align the days index to days text until first day*/
	const firstDay_Rogrid = monthTxt_Rogrid+" "+1+", "+year_Param;
	const firstdayOfMonth_Rogrid = new Date(firstDay_Rogrid).getDay();

	for(let index=0; index<firstdayOfMonth_Rogrid; index++){		
		const blankDayText_Rogrid = document.createTextNode("0");
		const blankDayTxtDiv_Rogrid = document.createElement("div");		
		blankDayTxtDiv_Rogrid.style.visibility = "hidden";

		blankDayTxtDiv_Rogrid.appendChild(blankDayText_Rogrid);

		calLiteDaysIndex.children[index].appendChild(blankDayTxtDiv_Rogrid);
	}
	/*_Align the days index to days text until first day*/



	/*_Creating days per week loop*/
	for(let index=1; index <= getNumberOfDays_Param; index++){
		const dayText_Rogrid = document.createTextNode(index);
		const dayTxtDiv_Rogrid = document.createElement("div");		
		dayTxtDiv_Rogrid.appendChild(dayText_Rogrid);		
		dayTxtDiv_Rogrid.style.cursor = "pointer";
		dayTxtDiv_Rogrid.className = "calLiteDayNum_RoClass";		
		dayTxtDiv_Rogrid.addEventListener("click", function(){
			/*Editable, you can add more event when date was selected*/
			getCalendarLiteValue(year_Param, month_Param+1, this, calLite, calLiteValue);

			/*For VMC CSAT*/
			/*_Page Office JS*/
			if(calLite.classList.contains("overallCalendar-Class") === true){
				submitRequestCitizenCharterThreeScores();
				submitRequestCitizenCharterTwoScores();
				submitRequestCitizenCharterOneScores();
				submitRequestQuestionsTable();
				submitRequestOverallEngagement();
				submitRequestTotalRespondent();
				submitRequestOverallServRate();
				submitRequestOverallStronglyAgree();
				submitRequestOverallAgree();
				submitRequestOverallNeither();
				submitRequestOverallDisagree();
				submitRequestOverallStronglyDisagree();
				submitRequestOverallNoRating();
				submitRequestAvailedOfficeService();
				submitRequestCountPassScore();

				submitRequestCommentDetails();				
			}
			/*_Page Office JS*/

			/*_Page Data One Report JS*/
			if(calLite.classList.contains("dataOneReportCalLite-Class") === true){
				submitRequestDataOne();			
			}
			/*_Page Data One Report JS*/			
			/*For VMC CSAT*/
			/*Editable, you can add more event when date was selected*/

			/*For Date Range only*/
			/*Editable*/
			if(calLite.classList.contains("dateRangeCalLite_RoClass") === true){
				if(calLite.classList.contains("dateRangeCalLiteFrom_RoClass") === true){
					setDateRangeFromText(calLite.parentElement.previousElementSibling, calLiteValue);
				}else if(calLite.classList.contains("dateRangeCalLiteTo_RoClass") === true){
					setDateRangeToText(calLite.parentElement.previousElementSibling, calLiteValue);
				}				
			}			
			/*Editable*/
			/*For Date Range only*/
		});



		/*_ _Setting Attribute per day number div*/
		let attriMonth_Rogrid = month_Param+1;
		if(attriMonth_Rogrid < 10){
			attriMonth_Rogrid = "0"+attriMonth_Rogrid;
		}

		attriDay_Rogrid = index;
		if(attriDay_Rogrid < 10){
			attriDay_Rogrid = "0"+attriDay_Rogrid;
		}
		dayTxtDiv_Rogrid.setAttribute("data-dayDate", year_Param+"-"+attriMonth_Rogrid+"-"+attriDay_Rogrid);
		/*_ _Setting Attribute per day number div*/		

		
		const perDate_Rogrid = year_Param+"-"+attriMonth_Rogrid+"-"+attriDay_Rogrid;
		if(filteredDate.includes(perDate_Rogrid)){
			/*Editable, change font color and bg color when perDate is on filtered date*/
			dayTxtDiv_Rogrid.style.backgroundColor = "green";
			dayTxtDiv_Rogrid.style.color = "#ffffff";
			/*Editable, change font color and bg color when perDate is on filtered date*/
		}else if(!filteredDate.includes(perDate_Rogrid)){
			/*Editable, change font color and bg color when perDate is not on filtered date*/
			dayTxtDiv_Rogrid.style.backgroundColor = "transparent";
			dayTxtDiv_Rogrid.style.color = "black";
			/*Editable, change font color and bg color when perDate is not on filtered date*/
		}		


		const createdDate_Rogrid = monthTxt_Rogrid+" "+index+", "+year_Param;		

		const dayOfWeek_Rogrid = new Date(createdDate_Rogrid).getDay();

		calLiteDaysIndex.children[dayOfWeek_Rogrid].appendChild(dayTxtDiv_Rogrid);
	}
	/*_Creating days per week loop*/
}
/*Function to Populate Calendar Lite*/




/*Function to Change calendar lite month*/
const changeCalLiteMonth = (addMinusMonth_Param, calLite_Param) => {
	const calLite = document.getElementById(calLite_Param);
	const calLiteMonthBtnValue = calLite.querySelector(".calLiteMonthBtnValue_RoClass");
	const calLiteYearBtnValue = calLite.querySelector(".calLiteYearBtnValue_RoClass");

	let calLiteMonthBtnValue_Int = parseInt(calLiteMonthBtnValue.value);
	let calLiteYearBtnValue_Int = parseInt(calLiteYearBtnValue.value);

	if(addMinusMonth_Param === "minus"){
		if(calLiteMonthBtnValue_Int !== 0){
			calLiteMonthBtnValue_Int -= 1;
			renderCalLite(getNumberOfDays(calLiteMonthBtnValue_Int, calLiteYearBtnValue_Int), calLiteMonthBtnValue_Int, calLiteYearBtnValue_Int, calLite_Param);
		}else if(calLiteMonthBtnValue_Int === 0){
			calLiteMonthBtnValue_Int = 11;
			calLiteYearBtnValue_Int -= 1;
			renderCalLite(getNumberOfDays(calLiteMonthBtnValue_Int, calLiteYearBtnValue_Int), calLiteMonthBtnValue_Int, calLiteYearBtnValue_Int, calLite_Param);
		}
	}else if(addMinusMonth_Param === "add"){
		if(calLiteMonthBtnValue_Int !== 11){
			calLiteMonthBtnValue_Int += 1;
			renderCalLite(getNumberOfDays(calLiteMonthBtnValue_Int, calLiteYearBtnValue_Int), calLiteMonthBtnValue_Int, calLiteYearBtnValue_Int, calLite_Param);
		}else if(calLiteMonthBtnValue_Int === 11){
			calLiteMonthBtnValue_Int = 0;
			calLiteYearBtnValue_Int += 1;
			renderCalLite(getNumberOfDays(calLiteMonthBtnValue_Int, calLiteYearBtnValue_Int), calLiteMonthBtnValue_Int, calLiteYearBtnValue_Int, calLite_Param);
		}
	}
}
/*Function to Change calendar lite month*/




/*Function to Change calendar lite year*/
const changeCalLiteYear = (addMinusYear_Param, calLite_Param) => {
	const calLite = document.getElementById(calLite_Param);
	const calLiteMonthBtnValue = calLite.querySelector(".calLiteMonthBtnValue_RoClass");
	const calLiteYearBtnValue = calLite.querySelector(".calLiteYearBtnValue_RoClass");

	let calLiteMonthBtnValue_Int = parseInt(calLiteMonthBtnValue.value);
	let calLiteYearBtnValue_Int = parseInt(calLiteYearBtnValue.value);

	if(addMinusYear_Param === "minus"){
		calLiteYearBtnValue_Int -= 1;
		renderCalLite(getNumberOfDays(calLiteMonthBtnValue_Int, calLiteYearBtnValue_Int), calLiteMonthBtnValue_Int, calLiteYearBtnValue_Int, calLite_Param);		
	}else if(addMinusYear_Param === "add"){
		calLiteYearBtnValue_Int += 1;
		renderCalLite(getNumberOfDays(calLiteMonthBtnValue_Int, calLiteYearBtnValue_Int), calLiteMonthBtnValue_Int, calLiteYearBtnValue_Int, calLite_Param);		
	}
}
/*Function to Change calendar lite year*/






/*Function for clicking days on calender lite*/ 
const getCalendarLiteValue = (calLiteYearVal_Param, calLiteMonth_Param, dayNumDivElem_Param, calLite_Param, calLiteValue_Param) => {	
	if(calLiteMonth_Param < 10){
		calLiteMonth_Param = "0"+calLiteMonth_Param;
	}

	calLiteDay_Param = dayNumDivElem_Param.innerText;
	if(calLiteDay_Param < 10){
		calLiteDay_Param = "0"+calLiteDay_Param;
	}

	calLiteValue_Param.value = calLiteYearVal_Param+"-"+calLiteMonth_Param+"-"+calLiteDay_Param;
	

	/*_Coloring bg and font selected day*/
	const dayNumber_Rogrid_Coll = calLite_Param.querySelectorAll(".calLiteDayNum_RoClass");
	for(let index=0; index<dayNumber_Rogrid_Coll.length; index++){
		if(dayNumber_Rogrid_Coll[index] == dayNumDivElem_Param){
			/*Editable, change font color and bg color of the selected date*/
			dayNumber_Rogrid_Coll[index].style.backgroundColor = "#44D3A3"; 
			dayNumber_Rogrid_Coll[index].style.color = "#ffffff";
			/*Editable, change font color and bg color of the selected date*/
		}else if(dayNumber_Rogrid_Coll[index] != dayNumDivElem_Param){
			/*Editable, logic and action for not selected date*/
			if(filteredDate.includes(dayNumber_Rogrid_Coll[index].getAttribute("data-dayDate"))){
				dayNumber_Rogrid_Coll[index].style.backgroundColor = "green";
				dayNumber_Rogrid_Coll[index].style.color = "#ffffff";
			}else{
				dayNumber_Rogrid_Coll[index].style.backgroundColor = "transparent";
				dayNumber_Rogrid_Coll[index].style.color = "black";
			}
			/*Editable, logic and action for not selected date*/					
		}
	}	
	/*_Coloring bg and font selected day*/	
}
/*Function for clicking days on calender lite*/

/*For Calender Lite*/
/****************************************************************************************************************************************************************************/