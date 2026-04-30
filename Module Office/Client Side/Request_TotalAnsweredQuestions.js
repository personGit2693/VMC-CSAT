/*Import*/

/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var totalAnsweredQuestions = null;
/*Export variables*/


/*Count Total Answered Questions*/
async function requestTotalAnsweredQuestions(dataObj){

	const requestPromise = new Promise(function(resolve){

		/*Form data*/
		const fData = new FormData();
		fData.append("token", dataObj.token);
		fData.append("officeId", dataObj.officeId);
		fData.append("noRating_Id", dataObj.noRating_Id);
		fData.append("clientTypeInternal", dataObj.clientTypeInternal);
		fData.append("clientTypeExternal", dataObj.clientTypeExternal);
		fData.append("dateFrom", dataObj.dateFrom);
		fData.append("dateTo", dataObj.dateTo);
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
				console.log("Execution Problem in Request_TotalAnsweredQuestions!");
				console.log(parseObj.execution);
				resolve(false);
			}else{
				totalAnsweredQuestions = parseObj.totalAnsweredQuestions;
				resolve(true);
			}
		});

		/*Fetch method*/

	});


	return await requestPromise;
};
/*Count Total Answered Questions*/


/*Export*/
export {requestTotalAnsweredQuestions, totalAnsweredQuestions};
/*Export*/
