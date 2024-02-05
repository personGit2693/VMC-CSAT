/*Import*/
import token from "../../Global Client Side/Token.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var tokenCreated = null;
var accToken = null;
/*Export variables*/


/*Generate Account Token*/
async function requestGenerateAccToken(usernInput){
	
	const requestPromise = new Promise(function(resolve){
		
		/*Form data*/
		const fData = new FormData(); 
		fData.append("token", token);
		fData.append("usernInput", usernInput);				
		/*Form data*/


		/*Fetch method*/
		fetch("../Server Side/Response_GenerateAccToken.php", {method: "POST", body: fData})
		.then(res => res.json())
		.then(parseObj => {

			if(parseObj.validAccess !== true){

				console.log("Invalid Access!");

			}else if(parseObj.serverConnection !== null){

				console.log("Connection Lost!");

			}else if(parseObj.validToken !== null){

				console.log("Invalid Token!");

			}else if(parseObj.execution !== true){

				console.log("Execution Problem in Request Generate Acc Token!");

			}else if(parseObj.validAccess === true && parseObj.serverConnection === null && parseObj.validToken === null && parseObj.execution === true){

				tokenCreated = parseObj.tokenCreated;
				accToken = parseObj.accToken;

				resolve(true);
			}
		});
		/*Fetch method*/
		
	});


	return await requestPromise;
};
/*Generate Account Token*/


/*Export*/
export {accToken, tokenCreated, requestGenerateAccToken};
/*Export*/