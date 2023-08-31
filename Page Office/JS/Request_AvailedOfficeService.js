/*Import*/
import {valueAvailedOfficeService, selectedOffice_Obj, clientTypeInternal, clientTypeExternal} from "../../Global JS/Values_Page_Dashboard.js";
import {overallFromDate, overallToDate} from "./JSCollection_Page_Dashboard.js";
import loadAvailedOfficeServiceChart from "./Controller_AvailedOfficeService.js";
import token from "../../Global JS/Token.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var availedOfficeService_Array = [];
/*Export variables*/


/*Get office services with how many times the service availed*/
function requestAvailedOfficeService(drawBarChart){

	httpRequest.onload = function(){
		if(httpRequest.status == 200){
			try{
				httpResponse = JSON.parse(httpRequest.responseText);

				if(httpResponse.serverConnection !== null){
					alert(httpResponse.serverConnection);
				}else if(httpResponse.globalTokenResult !== null){
					alert(httpResponse.globalTokenResult);
				}else if(httpResponse.execution === false){
					alert("Getting Availed Office Service has execution problem!");
				}else if(httpResponse.execution === null && (clientTypeInternal !== "" || clientTypeExternal !== "") && overallFromDate.value !== "" && overallToDate.value !== ""){
					alert("Getting OAvailed Office Service has never been executed!");
				}else if(httpResponse.serverConnection === null && httpResponse.execution !== false && httpResponse.globalTokenResult === null){
					availedOfficeService_Array = httpResponse.availedOfficeService_Array;
					valueAvailedOfficeService();
					loadAvailedOfficeServiceChart(drawBarChart);					
				}
			}catch(httpRequest_Error){
				alert("Response is not an object on getting overall Agree");
				alert(httpRequest_Error);
				alert(httpRequest.responseText);
			}			
		}else if(httpRequest.status != 200){
			alert("File not found");
		}
	}


	const queryString = "token="+token+
	"&officeId="+selectedOffice_Obj.office_id+
	"&clientTypeInternal="+clientTypeInternal+
	"&clientTypeExternal="+clientTypeExternal+
	"&overallFromDate="+overallFromDate.value+
	"&overallToDate="+overallToDate.value;

	httpRequest.open("POST", "Response_AvailedOfficeService.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(queryString);
};
/*Get office services with how many times the service availed*/


/*Export*/
export {requestAvailedOfficeService, availedOfficeService_Array};
/*Export*/