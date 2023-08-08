/*Import*/
import {clientTypeInternal, clientTypeExternal} from "../../Global JS/Values_Page_Dashboard.js";
import {overallFromDate, overallToDate} from "./JSCollection_Page_Dashboard.js";
import renderCommentDetails from "./View_CommentDetails.js";
import token from "../../Global JS/Token.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var commentDetails_Array = [];
/*Export variables*/


/*Get Comment Details*/
function requestCommentDetails(){
	
	httpRequest.onload = function(){
		if(httpRequest.status == 200){
			try{
				httpResponse = JSON.parse(httpRequest.responseText);

				if(httpResponse.serverConnection !== null){
					alert(httpResponse.serverConnection);
				}else if(httpResponse.globalTokenResult !== null){
					alert(httpResponse.globalTokenResult);
				}else if(httpResponse.execution === false){
					alert("Getting Comment Details has execution problem!");
				}else if(httpResponse.execution === null && (clientTypeInternal !== "" || clientTypeExternal !== "") && overallFromDate.value !== "" && overallToDate.value !== ""){
					alert("Getting Comment Details has never been executed!");
				}else if(httpResponse.serverConnection === null && httpResponse.execution !== false && httpResponse.globalTokenResult === null){
					commentDetails_Array = httpResponse.commentDetails_Array;
					renderCommentDetails();									
				}
			}catch(httpRequest_Error){
				alert("Response is not an object on getting Comment Details");
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

	httpRequest.open("POST", "Response_CommentDetails.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(queryString);
};
/*Get Comment Details*/


/*Export*/
export {requestCommentDetails, commentDetails_Array};
/*Export*/