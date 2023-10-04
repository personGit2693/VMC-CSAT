/*Import*/
import token from "../../Global JS/Token.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var ccDataTwo_Array = [];
/*Export variables*/


/*Get CC Data Two Report*/
function requestCcDataTwo(officeId, dateFrom, dateTo){
	
	httpRequest.onload = function(){
		if(httpRequest.status == 200){
			try{
				httpResponse = JSON.parse(httpRequest.responseText);

				if(httpResponse.serverConnection !== null){
					alert(httpResponse.serverConnection);
				}else if(httpResponse.globalTokenResult !== null){
					alert(httpResponse.globalTokenResult);
				}else if(httpResponse.execution !== true){
					alert("Getting CC Data Two execution problem!");				
				}else if(httpResponse.serverConnection === null && httpResponse.globalTokenResult === null && httpResponse.execution === true){
					ccDataTwo_Array = httpResponse.ccDataTwo_Array;													
				}
			}catch(httpRequest_Error){
				alert("Response is not an object on getting CC Data Two!");
				alert(httpRequest_Error);
				alert(httpRequest.responseText);
			}			
		}else if(httpRequest.status != 200){
			alert(httpRequest.statusText);
		}
	}

	const queryString = "token="+token+
	"&officeId="+officeId+	
	"&dateFrom="+dateFrom+
	"&dateTo="+dateTo;

	httpRequest.open("POST", "Response_CcDataTwo.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(queryString);
};
/*Get CC Data Two Report*/


/*Export*/
export {requestCcDataTwo, ccDataTwo_Array};
/*Export*/