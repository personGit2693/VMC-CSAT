/*Import*/
import {selectedOffice_Obj, clientTypeInternal, clientTypeExternal} from "../../Global JS/Values_Page_Dashboard.js";
import {overallFromDate, overallToDate} from "./JSCollection_Page_Dashboard.js";
import renderCitizenCharterTwoTable from "./View_CitizenCharterTwoTable.js";
import token from "../../Global JS/Token.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var citizenCharterTwoScores_Array = [];
/*Export variables*/


/*Get Citizen Charter Two Scores*/
function requestCitizenCharterTwoScores(){	

	httpRequest.onload = function(){
		if(httpRequest.status == 200){
			try{				
				httpResponse = JSON.parse(httpRequest.responseText);
				
				if(httpResponse.serverConnection !== null){
					alert(httpResponse.serverConnection);
				}else if(httpResponse.globalTokenResult !== null){
					alert(httpResponse.globalTokenResult);
				}else if(httpResponse.execution === false){
					alert("Getting citizen charter two scores has execution problem!");
				}else if(httpResponse.execution === null && (clientTypeInternal !== "" || clientTypeExternal !== "") && overallFromDate.value !== "" && overallToDate.value !== ""){
					alert("Getting citizen charter two scores has never been executed!");
				}else if(httpResponse.serverConnection === null && httpResponse.execution !== false && httpResponse.globalTokenResult === null){	
					citizenCharterTwoScores_Array = httpResponse.citizenCharterTwoScores_Array;
					renderCitizenCharterTwoTable();					
				}
			}catch(httpRequest_Error){
				alert("Response is not an object on getting citizen charter two scores");
				alert(httpRequest_Error);
				alert(httpRequest.responseText);
			}			
		}else if(httpRequest.status != 200){
			alert(httpRequest.statusText);
		}
	}


	const queryString = "token="+token+
	"&officeId="+selectedOffice_Obj.office_id+
	"&clientTypeInternal="+clientTypeInternal+
	"&clientTypeExternal="+clientTypeExternal+
	"&overallFromDate="+overallFromDate.value+
	"&overallToDate="+overallToDate.value;

	httpRequest.open("POST", "Response_CitizenCharterTwoScores.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(queryString);
};
/*Get Citizen Charter Two Scores*/


/*Export*/
export {requestCitizenCharterTwoScores, citizenCharterTwoScores_Array};
/*Export*/