/*Import*/
import token from "../../Global Client Side/Token.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var awarenessRateDetails_Array = null;
/*Export variables*/


/*Get Genders*/
async function requestAwarenessRates(){
	
	const requestPromise = new Promise(function(resolve){
		
		/*Form data*/
		const fData = new FormData(); 
		fData.append("token", token);
		/*Form data*/


		/*Fetch method*/
		fetch("../Server Side/Response_AwarenessRates.php", {method: "POST", body: fData})
		.then(res => res.json())
		.then(parseObj => {
			
			if(parseObj.validAccess !== true){

				console.log("Invalid Access!");

			}else if(parseObj.serverConnection !== null){

				console.log("Connection Lost!");

			}else if(parseObj.validToken !== null){

				console.log("Invalid Token!");

			}else if(parseObj.execution !== true){

				console.log("Execution Problem in Request Awareness Rates!");

			}else if(parseObj.validAccess === true && parseObj.serverConnection === null && parseObj.validToken === null && parseObj.execution === true){

				awarenessRateDetails_Array = parseObj.awarenessRateDetails_Array;

				resolve(true);
			}
		});
		/*Fetch method*/
	});


	return await requestPromise;
};
/*Get Genders*/


/*Export*/
export {requestAwarenessRates, awarenessRateDetails_Array};
/*Export*/