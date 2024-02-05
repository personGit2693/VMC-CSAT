/*Import*/
import token from "../../Global Client Side/Token.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var accountDetails_Obj = null;
var found = null;
/*Export variables*/


/*Get Identifier*/
async function requestGetIdentifier(usernInput){
	
	const requestPromise = new Promise(function(resolve){
		
		/*Form data*/
		const fData = new FormData(); 
		fData.append("token", token);
		fData.append("usernInput", usernInput);		
		/*Form data*/


		/*Fetch method*/
		fetch("../Server Side/Response_GetIdentifier.php", {method: "POST", body: fData})
		.then(res => res.json())
		.then(parseObj => {

			if(parseObj.validAccess !== true){

				console.log("Invalid Access!");

			}else if(parseObj.serverConnection !== null){

				console.log("Connection Lost!");

			}else if(parseObj.validToken !== null){

				console.log("Invalid Token!");

			}else if(parseObj.execution !== true){

				console.log("Execution Problem in Request Get Identifier!");

			}else if(parseObj.validAccess === true && parseObj.serverConnection === null && parseObj.validToken === null && parseObj.execution === true){

				accountDetails_Obj = parseObj.accountDetails_Obj;
				found = parseObj.found;

				resolve(true);
			}
		});
		/*Fetch method*/
		
	});


	return await requestPromise;
};
/*Get Identifier*/


/*Export*/
export {found, accountDetails_Obj, requestGetIdentifier};
/*Export*/