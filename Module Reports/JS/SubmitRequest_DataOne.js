/*Import*/

/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


function submitRequestDataOne(renderer_Param, loader_Param, boxLoader_Id){
	
	gatewayDataOne()
	.then((gatewayPromise) => {

		blockRequest = true;
		loader_Param();

		if(gatewayPromise === true){

			if(document.getElementById(boxLoader_Id) !== null){
					
				document.getElementById(boxLoader_Id).remove();
			}

			renderer_Param();

			blockRequest = false;
		}
	});
}


/*Declaire global*/
window.submitRequestDataOne = submitRequestDataOne;
/*Declaire global*/


/*Export*/
export {blockRequest};
/*Export*/