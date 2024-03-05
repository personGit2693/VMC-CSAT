/*Import*/
import token from "../../Global Client Side/Token.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
let codeDetails = null;
let endPoint = null;
let rateToken = null;
/*Export variables*/


/*Generate Rate Token*/
async function requestGenerateRateToken(inputCode){
	
	const requestPromise = new Promise(function(resolve){
		
		/*Form data*/
		const fData = new FormData();
		fData.append("token", token);
		fData.append("inputCode", inputCode);
		/*Form data*/


		/*Fetch method*/
		fetch("./Module Index/Server Side/Response_GenerateRateToken.php", {method: "POST", body: fData})
		.then(res => res.json())
		.then(parseObj => {

			if(parseObj.validAccess !== true){

				alert("Invalid Access!");

			}else if(parseObj.serverConnection !== null){

				alert("Connection Lost!");

			}else if(parseObj.validToken !== null){

				alert("Invalid Token!");

			}else if(parseObj.execution !== true){
				
				alert("Execution Problem in Generate Rate Token!");

			}else if(parseObj.newRateToken === 0){

				alert("No Rate Token Created!");

			}else if(parseObj.validAccess === true && parseObj.serverConnection === null && parseObj.validToken === null && parseObj.execution === true && parseObj.newRateToken !== 0){

				codeDetails = parseObj.codeDetails;
				endPoint = parseObj.endPoint;
				rateToken = parseObj.rateToken;

				resolve(true);
			}
		});
		/*Fetch method*/
	});


	return await requestPromise;
};
/*Generate Rate Token*/


/*Export*/
export {rateToken, endPoint, requestGenerateRateToken, codeDetails};
/*Export*/