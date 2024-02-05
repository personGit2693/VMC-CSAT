/*Import*/
import token from "../../Global Client Side/Token.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var newUpdate = null;
/*Export variables*/


/*Get New Respondent*/
async function requestNewRespondentNotifier(currentNewRespondent){
	
	const requestPromise = new Promise(function(resolve){
		
		/*Form data*/
		const fData = new FormData(); 
		fData.append("token", token);
		fData.append("currentNewRespondent", currentNewRespondent)		
		/*Form data*/


		/*Fetch method*/
		fetch("../Server Side/Response_NewRespondentNotifier.php", {method: "POST", body: fData})
		.then(res => res.json())
		.then(parseObj => {

			if(parseObj.validAccess !== true){

				console.log("Invalid Access!");

			}else if(parseObj.serverConnection !== null){

				console.log("Connection Lost!");

			}else if(parseObj.validToken !== null){

				console.log("Invalid Token!");

			}else if(parseObj.execution !== true){

				console.log("Execution Problem in Request New Respondent Notifier!");

			}else if(parseObj.validAccess === true && parseObj.serverConnection === null && parseObj.validToken === null && parseObj.execution === true){

				newUpdate = parseObj.newUpdate;

				resolve(true);
			}
		});
		/*Fetch method*/
		
	});


	return await requestPromise;
};
/*Get New Respondent*/


/*Export*/
export {requestNewRespondentNotifier, newUpdate};
/*Export*/