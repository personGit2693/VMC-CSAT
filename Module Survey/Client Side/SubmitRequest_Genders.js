/*Import*/
import gatewayGenders from "./Gateway_Genders.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitGenders(output, boxLoader, boxLoader_Id){

	if(blockRequest === false){

		blockRequest = true;

		boxLoader();

		gatewayGenders()
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
window.submitGenders = submitGenders;
/*Declare global*/


/*Export*/
export {submitGenders, blockRequest};
/*Export*/
