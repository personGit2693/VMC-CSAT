/*Import*/
import {valueOverallServRate} from "../../Global JS/Values_Module_Office.js";
/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


function submitRequestOverallServRate(renderer_Param, loader_Param, boxLoader_Id){
	
	if(blockRequest === false){

		blockRequest = true;
		loader_Param();

		gatewayOverallServRate()
		.then(gatewayPromise => {
			if(gatewayPromise === true){

				if(document.getElementById(boxLoader_Id) !== null){
					
					document.getElementById(boxLoader_Id).remove();
				}

				valueOverallServRate();
				renderer_Param();					
				blockRequest = false;
			}
		});
	}
}


/*Declaire global*/
window.submitRequestOverallServRate = submitRequestOverallServRate;
/*Declaire global*/


/*Export*/
export {submitRequestOverallServRate, blockRequest};
/*Export*/