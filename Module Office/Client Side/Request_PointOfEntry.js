/*Import*/

/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var pointOfEntry_Array = null;
/*Export variables*/


/*Get Point Of Entries*/
async function requestPointOfEntry(dataObj){

	const requestPromise = new Promise(function(resolve){

		/*Form data*/
		const fData = new FormData();
		fData.append("token", dataObj.token);
		fData.append("searchPointOfEntry", dataObj.searchPointOfEntry);
		fData.append("startIn", dataObj.startIn);
		fData.append("maxDisplayRow", dataObj.maxDisplayRow);
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
				console.log("Execution Problem in Request_PointOfEntry!");
				console.log(parseObj.execution);
				resolve(false);
			}else{
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
