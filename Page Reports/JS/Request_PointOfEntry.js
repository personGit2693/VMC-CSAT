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
function requestPointOfEntry(searchPointOfEntry){
	
	httpRequest.onload = function(){
		if(httpRequest.status == 200){
			try{				
				httpResponse = JSON.parse(httpRequest.responseText);

				if(httpResponse.serverConnection !== null){
					alert(httpResponse.serverConnection);
				}else if(httpResponse.globalTokenResult !== null){
					alert(httpResponse.globalTokenResult);
				}else if(httpResponse.execution !== true){
					alert("Getting Point Of Entry execution problem!");
				}else if(httpResponse.serverConnection === null && httpResponse.globalTokenResult === null && httpResponse.execution === true){
					pointOfEntry_Array = httpResponse.pointOfEntry_Array;

					/*Invoke all functions in functions_Array*/	
					/*				
					for(let index=0; index < functions_Array.length; index++){
						const perFunction = functions_Array[index];
						perFunction();
					}
					*/					
					/*Invoke all functions in functions_Array*/
				}
			}catch(httpRequest_Error){
				alert("Response is not an object on getting Point Of Entry!");
				alert(httpRequest_Error);
				alert(httpRequest.responseText);
			}			
		}else if(httpRequest.status != 200){
			alert(httpRequest.statusText);
		}
	}

	const queryString = "token="+token+
	"&searchPointOfEntry="+encodeURIComponent(searchPointOfEntry);

	httpRequest.open("POST", "Response_PointOfEntry.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(queryString);
};
/*Get Point Of Entry*/


/*Export*/
export {requestPointOfEntry, pointOfEntry_Array};
/*Export*/