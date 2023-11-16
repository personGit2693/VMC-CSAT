/*Import*/
//import {selectedOffice_Obj, clientTypeInternal, clientTypeExternal} from "../../Global JS/Values_Page_Dashboard.js";
//import {overallFromDate, overallToDate} from "./JSCollection_Page_Dashboard.js";
//import renderRatingSpan from "./View_RatingSpan.js";
import token from "../../Global JS/Token.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var countedPassScore = 0;
/*Export variables*/


/*Count Passing score only*/
async function requestCountPassScore(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){
	
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
						alert("Counting passing score has execution problem!");
					}else if(httpResponse.execution === null && (clientTypeInternal !== "" || clientTypeExternal !== "") && dateFrom !== "" && dateTo !== ""){
						alert("Counting passing score has never been executed!");
					}else if(httpResponse.serverConnection === null && httpResponse.execution !== false && httpResponse.globalTokenResult === null){
						countedPassScore = httpResponse.countedPassScore;
						resolve(true);
					}
				}catch(httpRequest_Error){
					alert("Response is not an object on counting passing score");
					alert(httpRequest_Error);
					alert(httpResponse);
				}			
			}else if(httpRequest.status != 200){
				alert(httpRequest.statusText+" on Request_CountPassScore.js");
			}
		}


		const queryString = "token="+token+
		"&officeId="+officeId+
		"&clientTypeInternal="+clientTypeInternal+
		"&clientTypeExternal="+clientTypeExternal+
		"&dateFrom="+dateFrom+
		"&dateTo="+dateTo;

		httpRequest.open("POST", "Response_CountPassScore.php", true);
		httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		httpRequest.send(queryString);
	});

	return await requestPromise;
};
/*Count Passing score only*/


/*Export*/
export {requestCountPassScore, countedPassScore};
/*Export*/