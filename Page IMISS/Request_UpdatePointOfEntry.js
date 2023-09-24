import token from "../Global JS/Token.js";


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Prep Export variables*/

/*Prep Export variables*/


/*Updating Point of Entry*/
const requestUpdatePointOfEntry = (newPointOfEntry, officeId) => {
	
	/*Receive Response*/
	httpRequest.onload = function(){
		if(httpRequest.status == 200){									
			try{				
				const httpResponse = JSON.parse(httpRequest.responseText);				

				if(httpResponse.serverConnection != null){
					alert(httpResponse.serverConnection);
				}else if(httpResponse.globalTokenResult != null){					
					alert(httpResponse.globalTokenResult);
				}else if(httpResponse.updatePointOfEntryResult != null){					
					alert(httpResponse.updatePointOfEntryResult);
				}else if(httpResponse.serverConnection == null && httpResponse.globalTokenResult == null && httpResponse.updatePointOfEntryResult == null){					
					alert("Updated!");
				}				
			}catch(requestUpdatePointOfEntry_Error){
				alert(requestUpdatePointOfEntry_Error);
				alert(httpRequest.responseText);					
			}			
		}else if(httpRequest.status != 200){
			alert(httpRequest.statusText);
		}		
	}
	/*Receive Response*/


	/*Send Request*/
	const stringQuery = "token="+token+
	"&newPointOfEntryName="+encodeURIComponent(newPointOfEntryName.value)+
	"&officeId="+encodeURIComponent(officeId.value);	

	httpRequest.open("POST", "Response_UpdatePointOfEntry.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(stringQuery);
	/*Send Request*/
}
/*Updating Point of Entry*/


/*Export*/
export {requestUpdatePointOfEntry};
/*Export*/