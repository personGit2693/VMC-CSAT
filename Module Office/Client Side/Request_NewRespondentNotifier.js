/*Import*/

/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var newUpdate = null;
var newRespondent = null;
/*Export variables*/


/*Get New Respondent Notifier*/
async function requestNewRespondentNotifier(dataObj){

	const requestPromise = new Promise(function(resolve){

		/*Form data*/
		const fData = new FormData();
		fData.append("token", dataObj.token);
		fData.append("currentNewRespondent", dataObj.currentNewRespondent);
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
				console.log("Execution Problem in Request_NewRespondentNotifier!");
				console.log(parseObj.execution);
				resolve(false);
			}else{
				newUpdate = parseObj.newUpdate;
				newRespondent = parseObj.newRespondent;
				resolve(true);
			}
		});

		/*Fetch method*/

	});


	return await requestPromise;
};
/*Get New Respondent Notifier*/


/*Export*/
export {requestNewRespondentNotifier, newUpdate, newRespondent};
/*Export*/
