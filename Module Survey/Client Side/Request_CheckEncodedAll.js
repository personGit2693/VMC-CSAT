/*Import*/
import token from "../../Global Client Side/Token.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var found = null;
var endPoint = null;
/*Export variables*/


/*Check if all details was encoded*/
async function requestCheckEncodedAll(submittedRate){
	
	const requestPromise = new Promise(function(resolve){
		
		/*Form data*/
		const fData = new FormData(); 
		fData.append("token", token);
		fData.append("clientResponseRef", submittedRate.respondentDetails.clientResponseRef);
		/*Form data*/


		/*Fetch method*/
		fetch("../Server Side/Response_CheckEncodedAll.php", {method: "POST", body: fData})
		.then(res =>{
			
			if(res.ok !== true){

				resolve(true);
			}else if(res.ok === true){

				return res.json();
			}
		})
		.then(parseObj => {

			if(parseObj.validAccess !== true){

				console.log("Invalid Access!");								

			}else if(parseObj.serverConnection !== null || parseObj.selectedPdoConn == null){

				console.log("Connection Lost!");				

			}else if(parseObj.validToken !== null){

				console.log("Invalid Token!");

			}else if(parseObj.execution !== true){

				console.log("Execution Problem in Check encoded all!");				

			}else if(parseObj.validAccess === true && parseObj.serverConnection === null && parseObj.selectedPdoConn != null && parseObj.validToken === null && parseObj.execution === true){

				found = parseObj.found;
				endPoint = parseObj.endPoint;

				resolve(true);
			}
		});
		/*Fetch method*/
		
	});


	return await requestPromise;
};
/*Check if all details was encoded*/


/*Export*/
export {endPoint, found, requestCheckEncodedAll};
/*Export*/