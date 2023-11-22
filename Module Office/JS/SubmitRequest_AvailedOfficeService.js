/*Import*/

/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


/*Submit function*/
function submitRequestAvailedOfficeService(renderer_Param, loader_Param, boxLoader_Id){
	
	if(blockRequest === false){

		blockRequest = true;
		loader_Param();

		gatewayAvailedOfficeService()
		.then(gatewayPromise => {

			if(gatewayPromise === true){

				valueAvailedOfficeService();
				document.getElementById(boxLoader_Id).remove();
				blockRequest = false;
				renderer_Param();			
			}
		});
	}
}
/*Submit function*/


/*Declaire global*/
window.submitRequestAvailedOfficeService = submitRequestAvailedOfficeService;
/*Declaire global*/


/*Export*/
export {blockRequest};
/*Export*/