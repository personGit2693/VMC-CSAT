/*Import*/
import gatewayOfficeServices from "./Gateway_OfficeServices.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitOfficeServices(output, boxLoader, boxLoader_Id, serviceTypeId, clientTypeId, officeId){

	if(blockRequest === false){

		blockRequest = true;

		boxLoader();

		gatewayOfficeServices(serviceTypeId, clientTypeId, officeId)
		.then(gatewayPromise => {

			if(document.getElementById(boxLoader_Id) !== null){
					
				document.getElementById(boxLoader_Id).remove();
			}
			

			if(gatewayPromise === true){								

				output();
			}

			blockRequest = false;
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitOfficeServices = submitOfficeServices;
/*Declare global*/


/*Export*/
export {submitOfficeServices, blockRequest};
/*Export*/
