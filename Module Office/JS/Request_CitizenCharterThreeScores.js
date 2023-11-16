/*Import*/
//import {selectedOffice_Obj, clientTypeInternal, clientTypeExternal} from "../../Global JS/Values_Page_Dashboard.js";
//import {overallFromDate, overallToDate} from "./JSCollection_Page_Dashboard.js";
//import renderCitizenCharterThreeTable from "./View_CitizenCharterThreeTable.js";
import token from "../../Global JS/Token.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var citizenCharterThreeScores_Array = [];
/*Export variables*/


/*Get Citizen Charter Three Scores*/
async function requestCitizenCharterThreeScores(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){
	
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
						alert("Getting citizen charter three scores has execution problem!");
					}else if(httpResponse.execution === null && (clientTypeInternal !== "" || clientTypeExternal !== "") && dateFrom !== "" && dateTo !== ""){
						alert("Getting citizen charter three scores has never been executed!");
					}else if(httpResponse.serverConnection === null && httpResponse.execution !== false && httpResponse.globalTokenResult === null){	
						citizenCharterThreeScores_Array = httpResponse.citizenCharterThreeScores_Array;
						resolve(true);					
					}
				}catch(httpRequest_Error){
					alert("Response is not an object on getting citizen charter three scores");
					alert(httpRequest_Error);
					alert(httpResponse);
					alert(httpRequest.responseText);
				}			
			}else if(httpRequest.status != 200){
				alert(httpRequest.statusText+" on Request_CitizenCharterThreeScores.js");
			}
		}


		const queryString = "token="+token+
		"&officeId="+officeId+
		"&clientTypeInternal="+clientTypeInternal+
		"&clientTypeExternal="+clientTypeExternal+
		"&dateFrom="+dateFrom+
		"&dateTo="+dateTo;

		httpRequest.open("POST", "Response_CitizenCharterThreeScores.php", true);
		httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		httpRequest.send(queryString);
	});

	return await requestPromise;
};
/*Get Citizen Charter Three Scores*/


/*Export*/
export {requestCitizenCharterThreeScores, citizenCharterThreeScores_Array};
/*Export*/