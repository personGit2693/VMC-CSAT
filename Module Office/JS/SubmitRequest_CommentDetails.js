/*Export variables*/
let blockRequest = false;
/*Export variables*/


/*Submit function*/
function submitRequestCommentDetails(renderer_Param){

	if(blockRequest === false){

		blockRequest = true;

		gatewayCommentDetails()
		.then(gatewayPromise => {		

			if(gatewayPromise === true){
				blockRequest = false;						
				renderer_Param();					
			}
		});
	}
}
/*Submit function*/


/*Declaire global*/
window.submitRequestCommentDetails = submitRequestCommentDetails;
/*Declaire global*/


/*Export*/
export {blockRequest};
/*Export*/