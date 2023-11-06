/*Import*/
//import {selectedOffice_Obj, clientTypeInternal, clientTypeExternal} from "../../Global JS/Values_Page_Dashboard.js";
//import {overallFromDate, overallToDate} from "./JSCollection_Page_Dashboard.js";
//import renderCitizenCharterOneTable from "./View_CitizenCharterOneTable.js";
import token from "../../Global JS/Token.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var citizenCharterOneScores_Array = [];
/*Export variables*/


/*Get Citizen Charter One Scores*/
async function requestCitizenCharterOneScores(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){
	
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
						alert("Getting citizen charter one scores has execution problem!");
					}else if(httpResponse.execution === null && (clientTypeInternal !== "" || clientTypeExternal !== "") && dateFrom !== "" && dateTo !== ""){
						alert("Getting citizen charter one scores has never been executed!");
					}else if(httpResponse.serverConnection === null && httpResponse.execution !== false && httpResponse.globalTokenResult === null){	
						citizenCharterOneScores_Array = httpResponse.citizenCharterOneScores_Array;
						resolve(true);
					}
				}catch(httpRequest_Error){
					alert("Response is not an object on getting citizen charter one scores");
					alert(httpRequest_Error);
					alert(httpResponse.responseText);
				}			
			}else if(httpRequest.status != 200){
				alert(httpRequest.statusText+" on Request_CitizenCharterOneScores.js");
			}
		}


		const queryString = "token="+token+
		"&officeId="+officeId+
		"&clientTypeInternal="+clientTypeInternal+
		"&clientTypeExternal="+clientTypeExternal+
		"&dateFrom="+dateFrom+
		"&dateTo="+dateTo;

		httpRequest.open("POST", "Response_CitizenCharterOneScores.php", true);
		httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		httpRequest.send(queryString);
	});

	return await requestPromise;
};
/*Get Citizen Charter One Scores*/


/*Export*/
export {requestCitizenCharterOneScores, citizenCharterOneScores_Array};
/*Export*/