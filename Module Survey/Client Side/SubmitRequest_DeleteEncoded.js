/*Import*/
import gatewayDeleteEncoded from "./Gateway_DeleteEncoded.js";
import {rowAffected as deleteEncoded_RowAffected} from "./Request_DeleteEncoded.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitDeleteEncoded(showSpinningLoad, removeSpinningLoad, submittedRate){

	if(blockRequest === false){

		blockRequest = true;

		showSpinningLoad();

		gatewayDeleteEncoded(submittedRate)
		.then(gatewayPromise => {			
			
			if(gatewayPromise === true){								

				if(deleteEncoded_RowAffected != 0){

					alert("Survey ratings did not proceed! Please try again.");

				}else if(deleteEncoded_RowAffected == 0){

					alert("Some details did not encode properly! Survey should not proceed! Please report to IMISS!");
				}
			}

			removeSpinningLoad();

			blockRequest = false;
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitDeleteEncoded = submitDeleteEncoded;
/*Declare global*/


/*Export*/
export {submitDeleteEncoded, blockRequest};
/*Export*/
