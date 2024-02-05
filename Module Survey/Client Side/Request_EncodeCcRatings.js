/*Import*/
import token from "../../Global Client Side/Token.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var validAccess = null;
var serverConnection = null;
var validToken = null;
var execution = null;
var rowAffected = null;
/*Export variables*/


/*Encode Cc Ratings*/
async function requestEncodeCcRatings(submittedRate){
	
	const requestPromise = new Promise(function(resolve){
		
		/*Form data*/
		const fData = new FormData(); 
		fData.append("token", token);
		fData.append("clientResponseRef", submittedRate.respondentDetails.clientResponseRef);
		fData.append("ccRate_Base", btoa(unescape(encodeURIComponent(JSON.stringify(submittedRate.ccRate)))));		
		/*Form data*/


		/*Fetch method*/
		fetch("../Server Side/Response_EncodeCcRatings.php", {method: "POST", body: fData})
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

				console.log("Execution Problem in Encode Cc Ratings!");

				execution = parseObj.execution;

				resolve(true);

			}else if(parseObj.validAccess === true && parseObj.serverConnection === null && parseObj.validToken === null && parseObj.execution === true){

				validAccess = parseObj.validAccess;
				serverConnection = parseObj.serverConnection;
				validToken = parseObj.validToken;				
				execution = parseObj.execution;
				rowAffected = parseObj.rowAffected;

				resolve(true);
			}
		});
		/*Fetch method*/
	});


	return await requestPromise;
};
/*Encode Cc Ratings*/


/*Export*/
export {execution, validToken, validAccess, serverConnection, requestEncodeCcRatings, rowAffected};
/*Export*/