/*Import*/

/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


function submitGenerateOfficeCode(){
	
	if(blockRequest === false){

		showSpinningLoad();

		gatewayGenerateOfficeCode()
		.then(gatewayPromise => {
			if(gatewayPromise === true){

				removeSpinningLoad();
				blockRequest = false;
			}
		});	
	}
}


/*Declaire global*/
window.submitGenerateOfficeCode = submitGenerateOfficeCode;
/*Declaire global*/


/*Export*/
export {blockRequest};
/*Export*/