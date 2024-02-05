/*Import*/
import token from "../../Global Client Side/Token.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var endpoint = null;
/*Export variables*/


/*Create Account Session*/
async function requestAccountSession(accountDetails_Obj, accToken){
	
	const requestPromise = new Promise(function(resolve){

		/*Form data*/
		const fData = new FormData(); 
		fData.append("token", token);
		fData.append("account_number", accountDetails_Obj.account_number);				
		fData.append("office_id", accountDetails_Obj.office_id);
		fData.append("account_identifier", accountDetails_Obj.account_identifier);
		fData.append("account_active", accountDetails_Obj.account_active);
		fData.append("accToken", accToken);
		/*Form data*/


		/*Fetch method*/
		fetch("../Server Side/Response_AccountSession.php", {method: "POST", body: fData})
		.then(res => res.json())
		.then(parseObj => {

			if(parseObj.validAccess !== true){

				console.log("Invalid Access!");

			}else if(parseObj.serverConnection !== null){

				console.log("Connection Lost!");

			}else if(parseObj.validToken !== null){

				console.log("Invalid Token!");

			}else if(parseObj.execution !== true){

				console.log("Execution Problem in Request Account Session!");

			}else if(parseObj.validAccess === true && parseObj.serverConnection === null && parseObj.validToken === null && parseObj.execution === true){

				endpoint = parseObj.endpoint;

				resolve(true);
			}
		});
		/*Fetch method*/
		
	});


	return await requestPromise;
};
/*Create Account Session*/


/*Export*/
export {endpoint, requestAccountSession};
/*Export*/