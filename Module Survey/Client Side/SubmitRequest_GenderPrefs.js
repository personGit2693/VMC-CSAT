/*Import*/
import gatewayGenderPrefs from "./Gateway_GenderPrefs.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitGenderPrefs(output, boxLoader, boxLoader_Id){

	if(blockRequest === false){

		blockRequest = true;

		boxLoader();

		gatewayGenderPrefs()
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
window.submitGenderPrefs = submitGenderPrefs;
/*Declare global*/


/*Export*/
export {submitGenderPrefs, blockRequest};
/*Export*/
