/*Import*/
import {valueOverallNeither, clientTypeInternal, clientTypeExternal} from "../../Global JS/Values_Page_Dashboard.js";
import {overallFromDate, overallToDate} from "./JSCollection_Page_Dashboard.js";
import loadOverallNeitherLineChart from "./Controller_OverallNeitherLineChart.js";
import token from "../../Global JS/Token.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var overallNeither_Array = [];
/*Export variables*/


/*Count overall Agree*/
function requestOverallNeither(){
	
	httpRequest.onload = function(){
		if(httpRequest.status == 200){
			try{
				httpResponse = JSON.parse(httpRequest.responseText);

				if(httpResponse.serverConnection !== null){
					alert(httpResponse.serverConnection);
				}else if(httpResponse.globalTokenResult !== null){
					alert(httpResponse.globalTokenResult);
				}else if(httpResponse.execution === false){
					alert("Getting Overall Neither Agree nor Disagree has execution problem!");
				}else if(httpResponse.execution === null && (clientTypeInternal !== "" || clientTypeExternal !== "") && overallFromDate.value !== "" && overallToDate.value !== ""){
					alert("Getting Overall Neither Agree nor Disagree has never been executed!");
				}else if(httpResponse.serverConnection === null && httpResponse.execution !== false && httpResponse.globalTokenResult === null){
					overallNeither_Array = httpResponse.overallNeither_Array;
					valueOverallNeither();
					loadOverallNeitherLineChart();					
				}
			}catch(httpRequest_Error){
				alert("Response is not an object on getting overall Neither Agree nor Disagree");
				alert(httpRequest_Error);
				alert(httpRequest.responseText);
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

	httpRequest.open("POST", "Response_OverallNeither.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(queryString);
};
/*Count overall Agree*/


/*Export*/
export {requestOverallNeither, overallNeither_Array};
/*Export*/