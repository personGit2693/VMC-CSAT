/*Import*/
import {valueOverAllStronglyAgree} from "../../Global JS/Values_Page_Dashboard.js";
import token from "../../Global JS/Token.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var overallStronglyAgree = 0;
/*Export variables*/


/*Count overall strongly agree rating*/
function requestOverallStronglyAgree(){
	overallStronglyAgree = 5;
	valueOverAllStronglyAgree();
}
/*Count overall strongly agree rating*/


/*Export*/
export {requestOverallStronglyAgree, overallStronglyAgree};
/*Export*/