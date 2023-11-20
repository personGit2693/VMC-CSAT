/*Import*/
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
async function requestCommentDetails(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo, commentStartIndex, commentDisplay){

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
						alert("Getting Comment Details has execution problem!");
					}else if(httpResponse.execution === null && (clientTypeInternal !== "" || clientTypeExternal !== "") && dateFrom !== "" && dateTo !== ""){
						alert("Getting Comment Details has never been executed!");
					}else if(httpResponse.serverConnection === null && httpResponse.execution !== false && httpResponse.globalTokenResult === null){
						commentDetails_Array = httpResponse.commentDetails_Array;
						resolve(true);
					}
				}catch(httpRequest_Error){
					alert("Response is not an object on getting Comment Details");
					alert(httpRequest_Error);
					alert(httpRequest.responseText);
				}			
			}else if(httpRequest.status != 200){
				alert(httpRequest.statusText+" on Request_CommentDetails.js");
			}
		}


		const queryString = "token="+token+
		"&officeId="+officeId+
		"&clientTypeInternal="+clientTypeInternal+
		"&clientTypeExternal="+clientTypeExternal+
		"&dateFrom="+dateFrom+
		"&dateTo="+dateTo+
		"&commentStartIndex="+commentStartIndex+
		"&commentDisplay="+commentDisplay;

		httpRequest.open("POST", "Response_CommentDetails.php", true);
		httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		httpRequest.send(queryString);
	});

	return await requestPromise;
};
/*Get Comment Details*/


/*Export*/
export {requestCommentDetails, commentDetails_Array};
/*Export*/