/*Import*/
import token from "../../Global Client Side/Token.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var setBypass = null;
/*Export variables*/


/*Set bypass*/
async function requestSetBypassDevice(bypassPassCodeChecked){	

	const requestPromise = new Promise(function(resolve){
		
		/*Form data*/
		const fData = new FormData(); 
		fData.append("token", token);
		fData.append("bypassPassCodeChecked", bypassPassCodeChecked);		
		/*Form data*/


		/*Fetch method*/
		fetch("../Server Side/Response_SetBypassDevice.php", {method: "POST", body: fData})
		.then(res => res.json())
		.then(parseObj => {

			if(parseObj.validAccess !== true){

				console.log("Invalid Access!");

			}else if(parseObj.serverConnection !== null){

				console.log("Connection Lost!");

			}else if(parseObj.validToken !== null){

				console.log("Invalid Token!");

			}else if(parseObj.execution !== true){

				console.log("Execution Problem in Request Set Bypass Device!");

			}else if(parseObj.validAccess === true && parseObj.serverConnection === null && parseObj.validToken === null && parseObj.execution === true){

				setBypass = parseObj.setBypass;

				resolve(true);
			}
		});
		/*Fetch method*/
		
	});


	return await requestPromise;
};
/*Set bypass*/


/*Export*/
export {requestSetBypassDevice, setBypass};
/*Export*/