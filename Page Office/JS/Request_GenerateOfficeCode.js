/*Import*/
import token from "../../Global JS/Token.js";
/*Import*/


/*Prep variables*/
const httpRequest = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
var httpResponse = null;
/*Prep variables*/


/*Export variables*/
var generatedOfficeCode = null;
/*Export variables*/


/*Generate Office Code*/
function requestGenerateOfficeCode(selectedOffice_Obj){
	
	httpRequest.onload = function(){
		if(httpRequest.status == 200){
			try{
				httpResponse = JSON.parse(httpRequest.responseText);

				if(httpResponse.serverConnection !== null){
					alert(httpResponse.serverConnection);
				}else if(httpResponse.globalTokenResult !== null){
					alert(httpResponse.globalTokenResult);
				}else if(httpResponse.execution === false){
					alert("Generating office code has execution problem!");
				}else if(httpResponse.count == 0){
					alert("No code to generate, please try again with selected point of entry.");
				}else if(httpResponse.serverConnection === null && httpResponse.execution !== false && httpResponse.globalTokenResult === null && httpResponse.count != 0){
					generatedOfficeCode = httpResponse.generatedOfficeCode;					
				}
			}catch(httpRequest_Error){
				alert("Response is not an object on generating office code");
				alert(httpRequest_Error);
				alert(httpRequest.responseText);
			}			
		}else if(httpRequest.status != 200){
			alert(httpRequest.statusText);
		}
	}


	const queryString = "token="+token+
	"&officeId="+selectedOffice_Obj.office_id;		

	httpRequest.open("POST", "Response_GenerateOfficeCode.php", false);
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.send(queryString);
};
/*Generate Office Code*/


/*Export*/
export {requestGenerateOfficeCode, generatedOfficeCode};
/*Export*/