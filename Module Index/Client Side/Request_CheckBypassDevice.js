/*Import*/
import token from "../../Global Client Side/Token.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var bypassIsSet = null;
var officeCodeCreated = null;
var generatedOfficeCode = null;
/*Export variables*/


/*Set bypass*/
async function requestCheckBypassDevice(){	

	const requestPromise = new Promise(function(resolve){
		
		/*Form data*/
		const fData = new FormData(); 
		fData.append("token", token);			
		/*Form data*/


		/*Fetch method*/
		fetch("./Module Index/Server Side/Response_CheckBypassDevice.php", {method: "POST", body: fData})
		.then(res => res.json())
		.then(parseObj => {

			if(parseObj.validAccess !== true){

				console.log("Invalid Access!");

			}else if(parseObj.serverConnection !== null){

				console.log("Connection Lost!");

			}else if(parseObj.validToken !== null){

				console.log("Invalid Token!");

			}else if(parseObj.execution_CheckBypass !== true){

				console.log("Execution Problem in Request Check Bypass Device with checking bypass!");

			}else if(parseObj.execution_CodeCreated === false){

				console.log("Execution Problem in Request Check Bypass Device with code creation!");

			}else if(parseObj.validAccess === true && parseObj.serverConnection === null && parseObj.validToken === null && parseObj.execution_CheckBypass === true && parseObj.execution_CodeCreated !== false){

				bypassIsSet = parseObj.bypassIsSet;
				officeCodeCreated = parseObj.officeCodeCreated;
				generatedOfficeCode = parseObj.generatedOfficeCode;

				resolve(true);
			}
		});
		/*Fetch method*/
		
	});


	return await requestPromise;
};
/*Set bypass*/


/*Export*/
export {
	requestCheckBypassDevice, 
	bypassIsSet,
	officeCodeCreated,
	generatedOfficeCode
};
/*Export*/