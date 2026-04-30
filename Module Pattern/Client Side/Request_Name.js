/*Import*/

/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Export variables*/
var sample1 = null;
var sample2 = null;
/*Export variables*/


/*Get Consultation Details*/
async function requestName(dataObj){
	
	const requestPromise = new Promise(function(resolve){

		/*Form data*/
		const fData = new FormData(); 							
		fData.append("token", dataObj.token);
		fData.append("data1", dataObj.data1);
		fData.append("data2", dataObj.data2);
		/*Form data*/


		/*Fetch method*/		
		fetch(`${dataObj.endpoint}`, {method: "POST", body: fData})
		.then(res => {		

			return res.json();

			/*
			const contentType = res.headers.get('content-type');

			if(res.status === 404 || res.status === 500 || !contentType || !contentType.includes("application/json")){
				return {success: null};
			}else{
				return res.json();
			}
			*/
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
				console.log("Execution Problem in Request_Name!");
				console.log(parseObj.execution);
				resolve(false);
			}else{
				sample1 = parseObj.sample1;
				sample2 = parseObj.sample2;								
				resolve(true);
			}
		});
		
		/*Fetch method*/
		
	});


	return await requestPromise;
};
/*Get Consultation Details*/


/*Export*/
export {requestName, sample1, sample2};
/*Export*/