/*Import*/
import token from "../../Global Client Side/Token.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var commentDetails_Array = null;
/*Export variables*/


/*Get Comment Details*/
async function requestComments(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo, stronglyAgree_Id, agree_Id, noRating_Id, commentDisplay, commentStartIndex){
	
	const requestPromise = new Promise(function(resolve){
		
		/*Form data*/
		const fData = new FormData(); 
		fData.append("token", token);
		fData.append("officeId", officeId);
		fData.append("clientTypeInternal", clientTypeInternal);
		fData.append("clientTypeExternal", clientTypeExternal);
		fData.append("dateFrom", dateFrom);
		fData.append("dateTo", dateTo);	
		fData.append("stronglyAgree_Id", stronglyAgree_Id);		
		fData.append("agree_Id", agree_Id);
		fData.append("noRating_Id", noRating_Id);
		fData.append("commentDisplay", commentDisplay);
		fData.append("commentStartIndex", commentStartIndex);
		/*Form data*/


		/*Fetch method*/
		fetch("../Server Side/Response_Comments.php", {method: "POST", body: fData})
		.then(res => res.json())
		.then(parseObj => {

			if(parseObj.validAccess !== true){

				console.log("Invalid Access!");

			}else if(parseObj.serverConnection !== null){

				console.log("Connection Lost!");

			}else if(parseObj.validToken !== null){

				console.log("Invalid Token!");

			}else if(parseObj.execution === false){

				console.log("Execution Problem in Request Commments!");

			}else if(parseObj.validAccess === true && parseObj.serverConnection === null && parseObj.validToken === null && parseObj.execution !== false){

				commentDetails_Array = parseObj.commentDetails_Array;

				resolve(true);
			}
		});
		/*Fetch method*/
		
	});


	return await requestPromise;
};
/*Get Comment Details*/


/*Export*/
export {requestComments, commentDetails_Array};
/*Export*/