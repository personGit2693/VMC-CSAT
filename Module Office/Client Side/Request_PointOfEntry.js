/*Import*/
import token from "../../Global Client Side/Token.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var pointOfEntry_Array = null;
/*Export variables*/


/*Get Point Of Entries*/
async function requestPointOfEntry(searchPointOfEntry, startIn, maxDisplayRow){
	
	const requestPromise = new Promise(function(resolve){
		
		/*Form data*/
		const fData = new FormData(); 
		fData.append("token", token);
		fData.append("searchPointOfEntry", searchPointOfEntry);
		fData.append("startIn", startIn);
		fData.append("maxDisplayRow", maxDisplayRow);
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

				pointOfEntry_Array = parseObj.pointOfEntry_Array;

				resolve(true);
			}
		});
		/*Fetch method*/
		
	});


	return await requestPromise;
};
/*Get Point Of Entries*/


/*Export*/
export {requestPointOfEntry, pointOfEntry_Array};
/*Export*/