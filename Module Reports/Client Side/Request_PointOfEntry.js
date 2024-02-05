/*Import*/
import token from "../../Global Client Side/Token.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var pointOfEntryDetails_Array = null;
/*Export variables*/


/*Get Point Of Entry Details*/
async function requestPointOfEntry(searchPointOfEntry, pointOfEntry_StartIndex, pointOfEntry_Display){
	
	const requestPromise = new Promise(function(resolve){
		
		/*Form data*/
		const fData = new FormData(); 
		fData.append("token", token);
		fData.append("searchPointOfEntry", searchPointOfEntry);
		fData.append("pointOfEntry_StartIndex", pointOfEntry_StartIndex);
		fData.append("pointOfEntry_Display", pointOfEntry_Display);
		/*Form data*/


		/*Fetch method*/
		fetch("../Server Side/Response_PointOfEntry.php", {method: "POST", body: fData})
		.then(res => res.json())
		.then(parseObj => {

			if(parseObj.validAccess !== true){

				console.log("Invalid Access!");

			}else if(parseObj.serverConnection !== null){

				console.log("Connection Lost!");

			}else if(parseObj.validToken !== null){

				console.log("Invalid Token!");

			}else if(parseObj.execution !== true){

				console.log("Execution Problem in Request Point of Entry!");

			}else if(parseObj.validAccess === true && parseObj.serverConnection === null && parseObj.validToken === null && parseObj.execution === true){

				pointOfEntryDetails_Array = parseObj.pointOfEntryDetails_Array;

				resolve(true);
			}
		});
		/*Fetch method*/
		
	});


	return await requestPromise;
};
/*Get Point Of Entry Details*/


/*Export*/
export {requestPointOfEntry, pointOfEntryDetails_Array};
/*Export*/