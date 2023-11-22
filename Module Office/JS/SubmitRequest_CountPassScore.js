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

				document.getElementById(boxLoader_Id).remove();
				blockRequest = false;
				renderer_Param();
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