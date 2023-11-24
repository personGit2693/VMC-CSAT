/*Import*/

/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


function submitRequestCountPassScore(renderer_Param, loader_Param, boxLoader_Id){	
	
	if(blockRequest === false){

		blockRequest = true;
		loader_Param();

		gatewayCountPassScore()
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


/*Declaire global*/
window.submitRequestCountPassScore = submitRequestCountPassScore;
/*Declaire global*/


/*Export*/
export {blockRequest};
/*Export*/