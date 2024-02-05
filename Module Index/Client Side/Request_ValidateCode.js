/*Import*/
import token from "../../Global Client Side/Token.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var validCode = false;
/*Export variables*/


/*Validate Input Code*/
async function requestValidateCode(inputCode){
	
	const requestPromise = new Promise(function(resolve){
		
		/*Form data*/
		const fData = new FormData();
		fData.append("token", token);
		fData.append("inputCode", inputCode);
		/*Form data*/


		/*Fetch method*/
		fetch("./Module Index/Server Side/Response_ValidateCode.php", {method: "POST", body: fData})
		.then(res => res.json())
		.then(parseObj => {

			if(parseObj.validAccess !== true){

				alert("Invalid Access!");

			}else if(parseObj.serverConnection !== null){

				alert("Connection Lost!");

			}else if(parseObj.validToken !== null){

				alert("Invalid Token!");

			}else if(parseObj.execution !== true){

				alert("Execution Problem in Validate Code!");

			}else if(parseObj.validAccess === true && parseObj.serverConnection === null && parseObj.validToken === null && parseObj.execution === true){

				validCode = parseObj.validCode;

				resolve(true);
			}
		});
		/*Fetch method*/
	});


	return await requestPromise;
};
/*Validate Input Code*/


/*Export*/
export {requestValidateCode, validCode};
/*Export*/