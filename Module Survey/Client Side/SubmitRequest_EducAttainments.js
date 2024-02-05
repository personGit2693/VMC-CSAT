/*Import*/
import gatewayEducAttainments from "./Gateway_EducAttainments.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitEducAttainments(output, boxLoader, boxLoader_Id){

	if(blockRequest === false){

		blockRequest = true;

		boxLoader();

		gatewayEducAttainments()
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
window.submitEducAttainments = submitEducAttainments;
/*Declare global*/


/*Export*/
export {submitEducAttainments, blockRequest};
/*Export*/
