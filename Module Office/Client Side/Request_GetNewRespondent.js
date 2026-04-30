/*Import*/

/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var countedNewRespondent = null;
/*Export variables*/


/*Get New Respondent*/
async function requestGetNewRespondent(dataObj){

	const requestPromise = new Promise(function(resolve){

		/*Form data*/
		const fData = new FormData();
		fData.append("token", dataObj.token);
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
				console.log("Execution Problem in Request_GetNewRespondent!");
				console.log(parseObj.execution);
				resolve(false);
			}else{
				countedNewRespondent = parseObj.countedNewRespondent;
				resolve(true);
			}
		});

		/*Fetch method*/

	});


	return await requestPromise;
};
/*Get New Respondent*/


/*Export*/
export {requestGetNewRespondent, countedNewRespondent};
/*Export*/
