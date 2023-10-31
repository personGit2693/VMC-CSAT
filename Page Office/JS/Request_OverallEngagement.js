/*Import*/
//import {selectedOffice_Obj, valueOverallEngagementVal, clientTypeInternal, clientTypeExternal} from "../../Global JS/Values_Page_Dashboard.js";
//import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./JSCollection_Page_Dashboard.js";
import token from "../../Global JS/Token.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var overallEngagement = 0;
/*Export variables*/


/*Count overall engagement*/
async function requestOverallEngagement(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){
	
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
						alert("Counting overall engagement has execution problem!");
					}else if(httpResponse.execution === null && (clientTypeInternal !== "" || clientTypeExternal !== "") && dateRangeOneCalLiteFromVal.value !== "" && dateRangeOneCalLiteToVal.value !== ""){
						alert("Counting overall engagement has never been executed!");
					}else if(httpResponse.serverConnection === null && httpResponse.execution !== false && httpResponse.globalTokenResult === null){
						overallEngagement = httpResponse.overallEngagement;
						resolve(true);					
					}
				}catch(httpRequest_Error){
					alert("Response is not an object on Counting overall engagement");
					alert(httpRequest_Error);
					alert(httpResponse.responseText);
				}			
			}else if(httpRequest.status != 200){
				alert(httpRequest.statusText+" on Request_OverallEngagement.js");
			}
		}	

		const queryString = "token="+token+
		"&officeId="+officeId+
		"&clientTypeInternal="+clientTypeInternal+
		"&clientTypeExternal="+clientTypeExternal+
		"&dateFrom="+dateFrom+
		"&dateTo="+dateTo;

		httpRequest.open("POST", "Response_OverallEngagement.php", true);
		httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		httpRequest.send(queryString);
	});

	return await requestPromise;
};
/*Count overall engagement*/


/*Export*/
export {requestOverallEngagement, overallEngagement};
/*Export*/