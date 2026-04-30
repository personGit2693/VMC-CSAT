/*Import*/

/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var citizenCharterOneScoresDetails_Array = null;
/*Export variables*/


/*Get Citizen Charter One Scores*/
async function requestCitizenCharterOneScores(dataObj){

	const requestPromise = new Promise(function(resolve){

		/*Form data*/
		const fData = new FormData();
		fData.append("token", dataObj.token);
		fData.append("officeId", dataObj.officeId);
		fData.append("clientTypeInternal", dataObj.clientTypeInternal);
		fData.append("clientTypeExternal", dataObj.clientTypeExternal);
		fData.append("dateFrom", dataObj.dateFrom);
		fData.append("dateTo", dataObj.dateTo);
		fData.append("ccOne_Id", dataObj.ccOne_Id);
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
				console.log("Execution Problem in Request_CitizenCharterOneScores!");
				console.log(parseObj.execution);
				resolve(false);
			}else{
				citizenCharterOneScoresDetails_Array = parseObj.citizenCharterOneScoresDetails_Array;
				resolve(true);
			}
		});

		/*Fetch method*/

	});


	return await requestPromise;
};
/*Get Citizen Charter One Scores*/


/*Export*/
export {requestCitizenCharterOneScores, citizenCharterOneScoresDetails_Array};
/*Export*/
