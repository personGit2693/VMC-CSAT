/*Import*/
import {valueOverallNoRating} from "../../Global JS/Values_Module_Office.js";
/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


function submitRequestOverallNoRating(renderer_Param, loader_Param, boxLoader_Id){
	
	if(blockRequest === false){

		blockRequest = true;
		loader_Param();

		gatewayOverallNoRating()
		.then(gatewayPromise => {
			if(gatewayPromise === true){

				if(document.getElementById(boxLoader_Id) !== null){
					
					document.getElementById(boxLoader_Id).remove();
				}

				valueOverallNoRating();
				renderer_Param();				
				blockRequest = false;
			}
		});
	}
}


/*Declaire global*/
window.submitRequestOverallNoRating = submitRequestOverallNoRating;
/*Declaire global*/


/*Export*/
export {submitRequestOverallNoRating, blockRequest};
/*Export*/