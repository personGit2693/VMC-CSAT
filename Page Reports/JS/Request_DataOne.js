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
function requestDataOne(officeId, dataOneFromDate, dataOneToDate, functions_Array){
	
	httpRequest.onreadystatechange = function(){
		if(this.status == 200 && this.readyState == 4){
			try{
				httpResponse = JSON.parse(this.responseText);

				if(httpResponse.serverConnection !== null){
					alert(httpResponse.serverConnection);
				}else if(httpResponse.globalTokenResult !== null){
					alert(httpResponse.globalTokenResult);
				}else if(httpResponse.execution !== true){
					alert("Getting Data One Report execution problem!");				
				}else if(httpResponse.serverConnection === null && httpResponse.globalTokenResult === null && httpResponse.execution === true){
					dataOne_Array = httpResponse.dataOne_Array;

					/*Invoke all functions in functions_Array*/
					for(let index=0; index < functions_Array.length; index++){
						const perFunction = functions_Array[index];
						perFunction();
					}
					/*Invoke all functions in functions_Array*/													
				}
			}catch(httpRequest_Error){
				alert("Response is not an object on getting Data One Report!");
				alert(httpRequest_Error);
				alert(this.responseText);
			}			
		}
	}

	const queryString = "token="+token+
	"&officeId="+officeId+	
	"&dataOneFromDate="+dataOneFromDate+
	"&dataOneToDate="+dataOneToDate;

	httpRequest.open("POST", "Response_DataOne.php", true);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(queryString);
};
/*Get Data One Report*/


/*Export*/
export {requestDataOne, dataOne_Array};
/*Export*/