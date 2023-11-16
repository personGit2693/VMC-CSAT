/*Import*/
//import {selectedOffice_Obj, valueOverallAgree, clientTypeInternal, clientTypeExternal} from "../../Global JS/Values_Page_Dashboard.js";
//import {overallFromDate, overallToDate} from "./JSCollection_Page_Dashboard.js";
//import loadOverallAgreeLineChart from "./Controller_OverallAgreeLineChart.js";
import token from "../../Global JS/Token.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var overallAgree_Array = [];
/*Export variables*/


/*Count overall Agree*/
async function requestOverallAgree(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){

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
						alert("Getting Overall Agree has execution problem!");
					}else if(httpResponse.execution === null && (clientTypeInternal !== "" || clientTypeExternal !== "") && dateFrom !== "" && dateTo !== ""){
						alert("Getting Overall Agree has never been executed!");
					}else if(httpResponse.serverConnection === null && httpResponse.execution !== false && httpResponse.globalTokenResult === null){
						overallAgree_Array = httpResponse.overallAgree_Array;
						resolve(true);
						//valueOverallAgree();
						//loadOverallAgreeLineChart();					
					}
				}catch(httpRequest_Error){
					alert("Response is not an object on getting overall Agree");
					alert(httpRequest_Error);
					alert(httpRequest.responseText);
				}			
			}else if(httpRequest.status != 200){
				alert(httpRequest.statusText+" on Request_OverallAgree.js");
			}
		}


		const queryString = "token="+token+
		"&officeId="+officeId+
		"&clientTypeInternal="+clientTypeInternal+
		"&clientTypeExternal="+clientTypeExternal+
		"&dateFrom="+dateFrom+
		"&dateTo="+dateTo;

		httpRequest.open("POST", "Response_OverallAgree.php", true);
		httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		httpRequest.send(queryString);
	});

	return await requestPromise;
};
/*Count overall Agree*/


/*Export*/
export {requestOverallAgree, overallAgree_Array};
/*Export*/