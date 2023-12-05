/*Import*/
import gatewayAvailedOfficeService from "./Gateway_AvailedOfficeService.js";
/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


/*Submit function*/
function submitRequestAvailedOfficeService(renderer_Param, loader_Param, boxLoader_Id, valueAvailedOfficeService, officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){
	
	if(blockRequest === false){

		blockRequest = true;
		loader_Param();

		gatewayAvailedOfficeService(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo)
		.then(gatewayPromise => {

			if(gatewayPromise === true){				

				if(document.getElementById(boxLoader_Id) !== null){
					
					document.getElementById(boxLoader_Id).remove();
				}
				
				valueAvailedOfficeService();				
				renderer_Param();			
				blockRequest = false;
			}
		});
	}
}
/*Submit function*/


/*Declaire global*/
window.submitRequestAvailedOfficeService = submitRequestAvailedOfficeService;
/*Declaire global*/


/*Export*/
export {submitRequestAvailedOfficeService, blockRequest};
/*Export*/