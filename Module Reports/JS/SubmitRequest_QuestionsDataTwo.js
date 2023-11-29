/*Import*/

/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


function submitRequestQuestionsDataTwo(renderer_Param, loader_Param, boxLoader_Id){

	if(blockRequest === false){

		blockRequest = true;
		loader_Param();

		gatewayQuestionsDataTwo()
		.then((gatewayPromise) => {

			if(gatewayPromise === true){

				if(document.getElementById(boxLoader_Id) !== null){
					
					document.getElementById(boxLoader_Id).remove();
				}

				valueDataTwo();
				renderer_Param();

				blockRequest = false;
			}
		});
	}
}


/*Declaire global*/
window.submitRequestQuestionsDataTwo = submitRequestQuestionsDataTwo;
/*Declaire global*/


/*Export*/
export {blockRequest};
/*Export*/
