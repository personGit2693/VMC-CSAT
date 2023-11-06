/*Import*/
//import {selectedOffice_Obj, valueOverallServRate, clientTypeInternal, clientTypeExternal} from "../../Global JS/Values_Page_Dashboard.js";
//import {overallFromDate, overallToDate} from "./JSCollection_Page_Dashboard.js";
//import loadOverallServRatePieChart from "./Controller_OverallServRatePieChart.js";
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
async function requestOverallServRate(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){
	
	const requestPromise = new Promise(function(resolve){

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
					}else if(httpResponse.execution === null && (clientTypeInternal !== "" || clientTypeExternal !== "") && dateFrom !== "" && dateTo !== ""){
						alert("Getting Overall Client Satisfaction has never been executed!");
					}else if(httpResponse.serverConnection === null && httpResponse.execution !== false && httpResponse.globalTokenResult === null){
						overallServRate_Array = httpResponse.overallServRate_Array;
						resolve(true);
						//valueOverallServRate();
						//loadOverallServRatePieChart();
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
		"&officeId="+officeId+
		"&clientTypeInternal="+clientTypeInternal+
		"&clientTypeExternal="+clientTypeExternal+
		"&dateFrom="+dateFrom+
		"&dateTo="+dateTo;

		httpRequest.open("POST", "Response_OverallServRate.php", true);
		httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		httpRequest.send(queryString);
	});

	return await requestPromise;
};
/*Count overall service rating rating*/


/*Export*/
export {requestOverallServRate, overallServRate_Array};
/*Export*/