/*Import*/

/*Import*/

/*Export variables*/
let blockRequest = false;
/*Export variables*/


/*Submit function*/
function submitRequestCommentDetails(renderer_Param, boxLoader_Param, boxLoader_Id){

	if(blockRequest === false){

		blockRequest = true;
		boxLoader_Param();		

		gatewayCommentDetails()
		.then(gatewayPromise => {		

			if(gatewayPromise === true){

				document.getElementById(boxLoader_Id).remove();
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