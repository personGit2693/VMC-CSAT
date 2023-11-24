/*Import*/

/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


/*Submit function*/
function submitRequestCommentDetails(renderer_Param, loader_Param, boxLoader_Id){

	if(blockRequest === false){

		blockRequest = true;
		loader_Param();		

		gatewayCommentDetails()
		.then(gatewayPromise => {		

			if(gatewayPromise === true){

				if(document.getElementById(boxLoader_Id) !== null){
					
					document.getElementById(boxLoader_Id).remove();
				}
																		
				renderer_Param();
				blockRequest = false;					
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