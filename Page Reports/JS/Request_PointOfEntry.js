/*Import*/
import token from "../../Global JS/Token.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var pointOfEntry_Array = [];
/*Export variables*/


/*Get Point Of Entry*/
function requestPointOfEntry(searchPointOfEntry, renderPointOfEntryOption){
	
	httpRequest.onreadystatechange = function(){
		if(this.status == 200 && this.readyState == 4){
			try{
				httpResponse = JSON.parse(this.responseText);

				if(httpResponse.serverConnection !== null){
					alert(httpResponse.serverConnection);
				}else if(httpResponse.globalTokenResult !== null){
					alert(httpResponse.globalTokenResult);
				}else if(httpResponse.execution !== true){
					alert("Getting Point Of Entry execution problem!");				
				}else if(httpResponse.serverConnection === null && httpResponse.globalTokenResult === null && httpResponse.execution === true){
					pointOfEntry_Array = httpResponse.pointOfEntry_Array;
					renderPointOfEntryOption();									
				}
			}catch(httpRequest_Error){
				alert("Response is not an object on getting Point Of Entry!");
				alert(httpRequest_Error);
				alert(this.responseText);
			}			
		}
	}

	const queryString = "token="+token+
	"&searchPointOfEntry="+encodeURIComponent(searchPointOfEntry.value);

	httpRequest.open("POST", "Response_PointOfEntry.php", true);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(queryString);
};
/*Get Point Of Entry*/


/*Export*/
export {requestPointOfEntry, pointOfEntry_Array};
/*Export*/