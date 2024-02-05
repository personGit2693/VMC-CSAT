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
var endPoint = null;
/*Export variables*/


/*Encode Comments*/
async function requestEncodeComments(submittedRate){
	
	const requestPromise = new Promise(function(resolve){
		
		/*Form data*/
		const fData = new FormData(); 
		fData.append("token", token);
		fData.append("clientResponseRef", submittedRate.respondentDetails.clientResponseRef);
		fData.append("comments_Base", btoa(unescape(encodeURIComponent(JSON.stringify(submittedRate.comments)))));
		/*Form data*/


		/*Fetch method*/
		fetch("../Server Side/Response_EncodeComments.php", {method: "POST", body: fData})
		.then(res => res.json())
		.then(parseObj => {
			
			if(parseObj.validAccess !== true){

				console.log("Invalid Access!");

				validAccess = parseObj.validAccess

				resolve(true);

			}else if(parseObj.serverConnection !== null){

				console.log("Connection Lost!");

				serverConnection = parseObj.serverConnection;

				resolve(true);

			}else if(parseObj.validToken !== null){

				console.log("Invalid Token!");

				validToken = parseObj.validToken;

				resolve(true);

			}else if(parseObj.execution === false){

				console.log("Execution Problem in Encode Comments!");

				execution = parseObj.execution;

				resolve(true);

			}else if(parseObj.validAccess === true && parseObj.serverConnection === null && parseObj.validToken === null && parseObj.execution !== false){

				validAccess = parseObj.validAccess;
				serverConnection = parseObj.serverConnection;
				validToken = parseObj.validToken;								
				execution = parseObj.execution;
				rowAffected = parseObj.rowAffected;
				endPoint = parseObj.endPoint;

				resolve(true);
			}
		});
		/*Fetch method*/
	});


	return await requestPromise;
};
/*Encode Comments*/


/*Export*/
export {execution, validToken, validAccess, serverConnection, endPoint, requestEncodeComments, rowAffected};
/*Export*/