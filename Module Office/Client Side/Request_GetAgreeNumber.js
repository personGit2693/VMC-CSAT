/*Import*/

/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var agreeNumberDetails_Array = null;
/*Export variables*/


/*Get Agree Number*/
async function requestGetAgreeNumber(dataObj){

	const requestPromise = new Promise(function(resolve){

		/*Form data*/
		const fData = new FormData();
		fData.append("token", dataObj.token);
		fData.append("officeId", dataObj.officeId);
		fData.append("clientTypeInternal", dataObj.clientTypeInternal);
		fData.append("clientTypeExternal", dataObj.clientTypeExternal);
		fData.append("dateFrom", dataObj.dateFrom);
		fData.append("dateTo", dataObj.dateTo);
		fData.append("agree_Id", dataObj.agree_Id);
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
				console.log("Execution Problem in Request_GetAgreeNumber!");
				console.log(parseObj.execution);
				resolve(false);
			}else{
				agreeNumberDetails_Array = parseObj.agreeNumberDetails_Array;
				resolve(true);
			}
		});

		/*Fetch method*/

	});


	return await requestPromise;
};
/*Get Agree Number*/


/*Export*/
export {requestGetAgreeNumber, agreeNumberDetails_Array};
/*Export*/
