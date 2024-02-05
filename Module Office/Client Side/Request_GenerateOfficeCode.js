/*Import*/
import token from "../../Global Client Side/Token.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var officeCodeCreated = null;
var generatedOfficeCode = null;
/*Export variables*/


/*Generate Office Code*/
async function requestGenerateOfficeCode(officeId){
	
	const requestPromise = new Promise(function(resolve){
		
		/*Form data*/
		const fData = new FormData(); 
		fData.append("token", token);
		fData.append("officeId", officeId);		
		/*Form data*/


		/*Fetch method*/
		fetch("../Server Side/Response_GenerateOfficeCode.php", {method: "POST", body: fData})
		.then(res => res.json())
		.then(parseObj => {

			if(parseObj.validAccess !== true){

				console.log("Invalid Access!");

			}else if(parseObj.serverConnection !== null){

				console.log("Connection Lost!");

			}else if(parseObj.validToken !== null){

				console.log("Invalid Token!");

			}else if(parseObj.execution === false){

				console.log("Execution Problem in Request Generate Office Code!");

			}else if(parseObj.validAccess === true && parseObj.serverConnection === null && parseObj.validToken === null && parseObj.execution !== false){

				officeCodeCreated = parseObj.officeCodeCreated;
				generatedOfficeCode = parseObj.generatedOfficeCode;

				resolve(true);
			}
		});
		/*Fetch method*/
		
	});


	return await requestPromise;
};
/*Generate Office Code*/


/*Export*/
export {requestGenerateOfficeCode, officeCodeCreated, generatedOfficeCode};
/*Export*/