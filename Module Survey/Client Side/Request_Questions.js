/*Import*/
import token from "../../Global Client Side/Token.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var questionDetails_Array = null;
/*Export variables*/


/*Get Genders*/
async function requestQuestions(officeId, clientTypeId){
	
	const requestPromise = new Promise(function(resolve){
		
		/*Form data*/
		const fData = new FormData(); 
		fData.append("token", token);
		fData.append("officeId", officeId);
		fData.append("clientTypeId", clientTypeId);
		/*Form data*/


		/*Fetch method*/
		fetch("../Server Side/Response_Questions.php", {method: "POST", body: fData})
		.then(res => res.json())
		.then(parseObj => {
			
			if(parseObj.validAccess !== true){

				console.log("Invalid Access!");

			}else if(parseObj.serverConnection !== null){

				console.log("Connection Lost!");

			}else if(parseObj.validToken !== null){

				console.log("Invalid Token!");

			}else if(parseObj.execution !== true){

				console.log("Execution Problem in Request Questions!");

			}else if(parseObj.validAccess === true && parseObj.serverConnection === null && parseObj.validToken === null && parseObj.execution === true){

				questionDetails_Array = parseObj.questionDetails_Array;

				resolve(true);
			}
		});
		/*Fetch method*/
	});


	return await requestPromise;
};
/*Get Genders*/


/*Export*/
export {requestQuestions, questionDetails_Array};
/*Export*/