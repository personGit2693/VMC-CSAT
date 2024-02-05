/*Import*/
import gatewayReligions from "./Gateway_Religions.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitReligions(output, boxLoader, boxLoader_Id, searchReligionValue){

	if(blockRequest === false){

		blockRequest = true;

		boxLoader();

		gatewayReligions(searchReligionValue)
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
window.submitReligions = submitReligions;
/*Declare global*/


/*Export*/
export {submitReligions, blockRequest};
/*Export*/
