/*Import*/

/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var commentDetails_Array = null;
/*Export variables*/


/*Get Comment Details*/
async function requestComments(dataObj){

	const requestPromise = new Promise(function(resolve){

		/*Form data*/
		const fData = new FormData();
		fData.append("token", dataObj.token);
		fData.append("officeId", dataObj.officeId);
		fData.append("clientTypeInternal", dataObj.clientTypeInternal);
		fData.append("clientTypeExternal", dataObj.clientTypeExternal);
		fData.append("dateFrom", dataObj.dateFrom);
		fData.append("dateTo", dataObj.dateTo);
		fData.append("stronglyAgree_Id", dataObj.stronglyAgree_Id);
		fData.append("agree_Id", dataObj.agree_Id);
		fData.append("noRating_Id", dataObj.noRating_Id);
		fData.append("commentDisplay", dataObj.commentDisplay);
		fData.append("commentStartIndex", dataObj.commentStartIndex);
		/*Form data*/


		/*Fetch method*/
		fetch(`${dataObj.endpoint}`, {method: "POST", body: fData})
		.then(res => {

			return res.json();
		}).then(parseObj => {

			if(parseObj.validAccess !== true){
				console.log("Invalid Access!");
				resolve(false);
			}else if(parseObj.serverConnection !== null){
				console.log("vmc_csat Connection Lost!");
				resolve(false);
			}else if(parseObj.selectedPdoConn == null){
				console.log("vmc_csat Object Connection Incorrect!");
				resolve(false);
			}else if(parseObj.validToken !== null){
				console.log(parseObj.validToken);
				resolve(false);
			}else if(parseObj.execution !== true){
				console.log("Execution Problem in Request_Comments!");
				console.log(parseObj.execution);
				resolve(false);
			}else{
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
