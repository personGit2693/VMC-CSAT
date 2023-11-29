/*Import*/

/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


function submitRequestCcDataTwo(renderer_Param, loader_Param, boxLoader_Id){
	
	if(blockRequest === false){

		blockRequest = true;
		loader_Param();

		gatewayCcDataTwo()
		.then((gatewayPromise) => {

			if(gatewayPromise === true){				

				if(document.getElementById(boxLoader_Id) !== null){
					
					document.getElementById(boxLoader_Id).remove();
				}

				submitRequestQuestionsDataTwo(renderer_Param, loader_Param, boxLoader_Id);
				
				blockRequest = false;
			}		
		});
	}
}


/*Declaire global*/
window.submitRequestCcDataTwo = submitRequestCcDataTwo;
/*Declaire global*/


/*Export*/
export {blockRequest};
/*Export*/