/*Import*/
import {valueOverallServRate, clientTypeInternal, clientTypeExternal} from "../../Global JS/Values_Page_Dashboard.js";
import {overallFromDate, overallToDate} from "./JSCollection_Page_Dashboard.js";
import loadOverallServRatePieChart from "./Controller_OverallServRatePieChart.js";
import token from "../../Global JS/Token.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var overallServRate_Array = [];
/*Export variables*/


/*Count overall service rating rating*/
function requestOverallServRate(){
	
	httpRequest.onload = function(){
		if(httpRequest.status == 200){
			try{
				httpResponse = JSON.parse(httpRequest.responseText);

				if(httpResponse.serverConnection !== null){
					alert(httpResponse.serverConnection);
				}else if(httpResponse.globalTokenResult !== null){
					alert(httpResponse.globalTokenResult);
				}else if(httpResponse.execution === false){
					alert("Getting Overall Client Satisfaction has execution problem!");
				}else if(httpResponse.execution === null && (clientTypeInternal !== "" || clientTypeExternal !== "") && overallFromDate.value !== "" && overallToDate.value !== ""){
					alert("Getting Overall Client Satisfaction has never been executed!");
				}else if(httpResponse.serverConnection === null && httpResponse.execution !== false && httpResponse.globalTokenResult === null){
					overallServRate_Array = httpResponse.overallServRate_Array;
					valueOverallServRate();
					loadOverallServRatePieChart();
				}
			}catch(httpRequest_Error){
				alert("Response is not an object on getting Overall Client Satisfaction");
				alert(httpRequest_Error);
			}			
		}else if(httpRequest.status != 200){
			alert("File not found");
		}
	}


	const queryString = "token="+token+
	"&officeId="+3+
	"&clientTypeInternal="+clientTypeInternal+
	"&clientTypeExternal="+clientTypeExternal+
	"&overallFromDate="+overallFromDate.value+
	"&overallToDate="+overallToDate.value;

	httpRequest.open("POST", "Response_OverallServRate.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(queryString);
};
/*Count overall service rating rating*/


/*Export*/
export {requestOverallServRate, overallServRate_Array};
/*Export*/