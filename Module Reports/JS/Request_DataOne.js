/*Import*/
import token from "../../Global JS/Token.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var dataOne_Array = [];
/*Export variables*/


/*Get Data One Report*/
async function requestDataOne(officeId, dateFrom, dateTo){
	
	const requestPromise = new Promise(function(resolve){

		httpRequest.onload = function(){
			if(httpRequest.status == 200){
				try{
					httpResponse = JSON.parse(httpRequest.responseText);

					if(httpResponse.serverConnection !== null){
						alert(httpResponse.serverConnection);
					}else if(httpResponse.globalTokenResult !== null){
						alert(httpResponse.globalTokenResult);
					}else if(httpResponse.execution !== true){
						alert("Getting Data One Report execution problem!");				
					}else if(httpResponse.serverConnection === null && httpResponse.globalTokenResult === null && httpResponse.execution === true){
						dataOne_Array = httpResponse.dataOne_Array;
						resolve(true);
					}
				}catch(httpRequest_Error){
					alert("Response is not an object on getting Data One Report!");
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

		httpRequest.open("POST", "Response_DataOne.php", true);
		httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		httpRequest.send(queryString);
	});

	return await requestPromise;
};
/*Get Data One Report*/


/*Export*/
export {requestDataOne, dataOne_Array};
/*Export*/