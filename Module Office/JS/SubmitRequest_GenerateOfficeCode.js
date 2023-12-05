/*Import*/

/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


function submitGenerateOfficeCode(){
	
	if(blockRequest === false){

		gatewayGenerateOfficeCode()
		.then(gatewayPromise => {
			
			if(gatewayPromise === true){

				blockRequest = false;
			}
		});	
	}
}


/*Declaire global*/
window.submitGenerateOfficeCode = submitGenerateOfficeCode;
/*Declaire global*/


/*Export*/
export {submitGenerateOfficeCode, blockRequest};
/*Export*/