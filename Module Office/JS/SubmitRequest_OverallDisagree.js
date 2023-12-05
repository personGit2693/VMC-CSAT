/*Import*/
import {valueOverallDisagree} from "../../Global JS/Values_Module_Office.js";
/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


function submitRequestOverallDisagree(renderer_Param, loader_Param, boxLoader_Id){

	if(blockRequest === false){

		blockRequest = true;
		loader_Param();

		gatewayOverallDisagree()
		.then(gatewayPromise => {
			if(gatewayPromise === true){

				if(document.getElementById(boxLoader_Id) !== null){
					
					document.getElementById(boxLoader_Id).remove();
				}

				valueOverallDisagree();
				renderer_Param();
				blockRequest = false;			
			}
		});
	}
}


/*Declaire global*/
window.submitRequestOverallDisagree = submitRequestOverallDisagree;
/*Declaire global*/


/*Export*/
export {submitRequestOverallDisagree, blockRequest};
/*Export*/