/*Import*/
import {overallStronglyAgree} from "../Page Office/JS/Request_OverallStronglyAgree.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Prep export variables*/
var overallServRateData_Array = [['Rating','Responses'],
	['Strongly Agree', 20],
	['Agree', 15],
	['Neither Agree nor Disagree', 12],
	['Disagree', 10],
	['Strongly Disagree', 9],
	['No Rating', 5]
];

var overallStronglyAgreeData_Array = [["Dates", "Strongly Agree"],
	["2023/07/01", 5],
	["2023/07/02", 3],
	["2023/07/03", 0],
	["2023/07/04", 4],
	["2023/07/05", 8],	
];

var overallAgreeData_Array = [["Dates", "Agree"],
	["2023/07/01", 1],
	["2023/07/02", 4],
	["2023/07/03", 6],
	["2023/07/04", 3],
	["2023/07/05", 1],
];
/*Prep export variables*/


/*Assign Value for overallServRateData_Array Strongly Agree*/
function valueOverAllStronglyAgree(){
	overallServRateData_Array[1][1] = overallStronglyAgree;
}
/*Assign Value for overallServRateData_Array Strongly Agree*/


/*Declare global*/

/*Declare global*/


/*Export*/
export {valueOverAllStronglyAgree, overallServRateData_Array, overallStronglyAgreeData_Array, overallAgreeData_Array};
/*Export*/