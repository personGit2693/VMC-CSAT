/*Import*/
import token from "../../Global Client Side/Token.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var dataUpdated = null;
var validAccess = null;
var serverConnection = null;
var validToken = null;
var execution = null;
var endPoint = null;
/*Export variables*/


/*Encode New Respondent in file*/
async function requestEncodeNewRespondent(){
	
	const requestPromise = new Promise(function(resolve){
		
		/*Form data*/
		const fData = new FormData(); 
		fData.append("token", token);
		/*Form data*/


		/*Fetch method*/
		fetch("../Server Side/Response_EncodeNewRespondent.php", {method: "POST", body: fData})
		.then(res => res.json())
		.then(parseObj => {

			if(parseObj.validAccess !== true){

				console.log("Invalid Access!");

				validAccess = parseObj.validAccess;

				resolve(true);

			}else if(parseObj.serverConnection !== null){

				console.log("Connection Lost!");

				serverConnection = parseObj.serverConnection;

				resolve(true);

			}else if(parseObj.validToken !== null){

				console.log("Invalid Token!");

				validToken = parseObj.validToken;

				resolve(true);

			}else if(parseObj.execution !== true){

				console.log("Execution Problem in Request Encode New Respondent!");

				execution = parseObj.execution;

				resolve(true);

			}else if(parseObj.validAccess === true && parseObj.serverConnection === null && parseObj.validToken === null && parseObj.execution === true){

				validAccess = parseObj.validAccess;
				serverConnection = parseObj.serverConnection;
				validToken = parseObj.validToken;
				execution = parseObj.execution;				
				dataUpdated = parseObj.dataUpdated;
				endPoint = parseObj.endPoint;

				resolve(true);
			}
		});
		/*Fetch method*/
		
	});


	return await requestPromise;
};
/*Encode New Respondent in file*/


/*Export*/
export {endPoint, execution, validToken, serverConnection, validAccess, requestEncodeNewRespondent, dataUpdated};
/*Export*/