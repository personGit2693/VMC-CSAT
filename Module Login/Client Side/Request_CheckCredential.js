/*Import*/
import token from "../../Global Client Side/Token.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var validAccount = null;
/*Export variables*/


/*Check Credential*/
async function requestCheckCredential(usernInput, passInput, account_identifier){
	
	const requestPromise = new Promise(function(resolve){
		
		/*Form data*/
		const fData = new FormData(); 
		fData.append("token", token);
		fData.append("usernInput", usernInput);		
		fData.append("passInput", passInput);
		fData.append("account_identifier", account_identifier);
		/*Form data*/


		/*Fetch method*/
		fetch("../Server Side/Response_CheckCredential.php", {method: "POST", body: fData})
		.then(res => res.json())
		.then(parseObj => {

			if(parseObj.validAccess !== true){

				console.log("Invalid Access!");

			}else if(parseObj.serverConnection !== null){

				console.log("Connection Lost!");

			}else if(parseObj.validToken !== null){

				console.log("Invalid Token!");

			}else if(parseObj.execution !== true){

				console.log("Execution Problem in Request Check Credential!");

			}else if(parseObj.validAccess === true && parseObj.serverConnection === null && parseObj.validToken === null && parseObj.execution === true){

				validAccount = parseObj.validAccount;

				resolve(true);
			}
		});
		/*Fetch method*/
		
	});


	return await requestPromise;
};
/*Check Credential*/


/*Export*/
export {validAccount, requestCheckCredential};
/*Export*/