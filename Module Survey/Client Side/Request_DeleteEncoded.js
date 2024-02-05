/*Import*/
import token from "../../Global Client Side/Token.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var rowAffected = null;
/*Export variables*/


/*Delete Encoded Survey*/
async function requestDeleteEncoded(submittedRate){
	
	const requestPromise = new Promise(function(resolve){
		
		/*Form data*/
		const fData = new FormData(); 
		fData.append("token", token);
		fData.append("clientResponseRef", submittedRate.respondentDetails.clientResponseRef);
		/*Form data*/


		/*Fetch method*/
		fetch("../Server Side/Response_DeleteEncoded.php", {method: "POST", body: fData})
		.then(res => res.json())
		.then(parseObj => {
			
			if(parseObj.validAccess !== true){

				console.log("Invalid Access!");

			}else if(parseObj.serverConnection !== null){

				console.log("Connection Lost!");

			}else if(parseObj.validToken !== null){

				console.log("Invalid Token!");

			}else if(parseObj.execution !== true){

				console.log("Execution Problem in Encode Delete Encoded!");

			}else if(parseObj.validAccess === true && parseObj.serverConnection === null && parseObj.validToken === null && parseObj.execution === true){

				rowAffected = parseObj.rowAffected;

				resolve(true);
			}
		});
		/*Fetch method*/
	});


	return await requestPromise;
};
/*Delete Encoded Survey*/


/*Export*/
export {requestDeleteEncoded, rowAffected};
/*Export*/