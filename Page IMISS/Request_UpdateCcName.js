import token from "../Global JS/Token.js";


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Prep Export variables*/

/*Prep Export variables*/


/*Updating Point of Entry*/
const requestUpdateCcName = (newCitizenCharterName, citizenCharterId) => {
	
	/*Receive Response*/
	httpRequest.onload = function(){
		if(httpRequest.status == 200){									
			try{				
				const httpResponse = JSON.parse(httpRequest.responseText);				

				if(httpResponse.serverConnection != null){
					alert(httpResponse.serverConnection);
				}else if(httpResponse.globalTokenResult != null){					
					alert(httpResponse.globalTokenResult);
				}else if(httpResponse.updateCcNameResult != null){					
					alert(httpResponse.updateCcNameResult);
				}else if(httpResponse.serverConnection == null && httpResponse.globalTokenResult == null && httpResponse.updateCcNameResult == null){					
					alert("Updated!");
				}				
			}catch(requestUpdateCcName_Error){
				alert(requestUpdateCcName_Error);
				alert(httpRequest.responseText);					
			}			
		}else if(httpRequest.status != 200){
			alert(httpRequest.statusText);
		}		
	}
	/*Receive Response*/


	/*Send Request*/
	const stringQuery = "token="+token+
	"&newCitizenCharterName="+encodeURIComponent(newCitizenCharterName.value)+
	"&citizenCharterId="+encodeURIComponent(citizenCharterId.value);	

	httpRequest.open("POST", "Response_UpdateCcName.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(stringQuery);
	/*Send Request*/
}
/*Updating Point of Entry*/


/*Export*/
export {requestUpdateCcName};
/*Export*/