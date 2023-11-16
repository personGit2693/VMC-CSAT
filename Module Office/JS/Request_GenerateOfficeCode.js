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
async function requestGenerateOfficeCode(officeId){
	
	const requestPromise = new Promise(function(resolve){

		httpRequest.onload = function(){
			if(httpRequest.status == 200){
				try{
					httpResponse = JSON.parse(httpRequest.responseText);

					if(httpResponse.serverConnection !== null){
						alert(httpResponse.serverConnection);
						resolve(true);
					}else if(httpResponse.globalTokenResult !== null){
						alert(httpResponse.globalTokenResult);
						resolve(true);
					}else if(httpResponse.execution === false){
						alert("Generating office code has execution problem!");
						resolve(true);
					}else if(httpResponse.count == 0){
						alert("No code to generate, please try again with selected point of entry.");
						resolve(true);
					}else if(httpResponse.serverConnection === null && httpResponse.execution !== false && httpResponse.globalTokenResult === null && httpResponse.count != 0){
						generatedOfficeCode = httpResponse.generatedOfficeCode;
						resolve(true);					
					}
				}catch(httpRequest_Error){
					alert("Response is not an object on generating office code");
					alert(httpRequest_Error);
					alert(httpRequest.responseText);
					resolve(true);
				}			
			}else if(httpRequest.status != 200){
				alert(httpRequest.statusText+" on Request_GenerateOfficeCode.js");
				resolve(true);
			}
		}


		const queryString = "token="+token+
		"&officeId="+officeId;		

		httpRequest.open("POST", "Response_GenerateOfficeCode.php", true);
		httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		httpRequest.send(queryString);
	});

	return await requestPromise;
};
/*Generate Office Code*/


/*Export*/
export {requestGenerateOfficeCode, generatedOfficeCode};
/*Export*/