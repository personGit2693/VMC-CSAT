/*Import*/

/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var disagreeNumberDetails_Array = null;
/*Export variables*/


/*Get Disagree Number*/
async function requestGetDisagreeNumber(dataObj){

	const requestPromise = new Promise(function(resolve){

		/*Form data*/
		const fData = new FormData();
		fData.append("token", dataObj.token);
		fData.append("officeId", dataObj.officeId);
		fData.append("clientTypeInternal", dataObj.clientTypeInternal);
		fData.append("clientTypeExternal", dataObj.clientTypeExternal);
		fData.append("dateFrom", dataObj.dateFrom);
		fData.append("dateTo", dataObj.dateTo);
		fData.append("disagree_Id", dataObj.disagree_Id);
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
				console.log("Execution Problem in Request_GetDisagreeNumber!");
				console.log(parseObj.execution);
				resolve(false);
			}else{
				disagreeNumberDetails_Array = parseObj.disagreeNumberDetails_Array;
				resolve(true);
			}
		});

		/*Fetch method*/

	});


	return await requestPromise;
};
/*Get Disagree Number*/


/*Export*/
export {requestGetDisagreeNumber, disagreeNumberDetails_Array};
/*Export*/
