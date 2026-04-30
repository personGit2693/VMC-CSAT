/*Import*/

/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var officeCodeCreated = null;
var generatedOfficeCode = null;
/*Export variables*/


/*Generate Office Code*/
async function requestGenerateOfficeCode(dataObj){

	const requestPromise = new Promise(function(resolve){

		/*Form data*/
		const fData = new FormData();
		fData.append("token", dataObj.token);
		fData.append("officeId", dataObj.officeId);
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
				console.log("Execution Problem in Request_GenerateOfficeCode!");
				console.log(parseObj.execution);
				resolve(false);
			}else{
				officeCodeCreated = parseObj.officeCodeCreated;
				generatedOfficeCode = parseObj.generatedOfficeCode;
				resolve(true);
			}
		});

		/*Fetch method*/

	});


	return await requestPromise;
};
/*Generate Office Code*/


/*Export*/
export {requestGenerateOfficeCode, officeCodeCreated, generatedOfficeCode};
/*Export*/
