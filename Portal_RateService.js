/*Redirect to rate service*/
const redirectToRateServ = () =>{
	if(proceedToRateServ === true){
		requestRateToken();
	}else if(proceedToRateServ === false){
		alert('Please READ and AGREE to Data Privacy first.');
	}
}
/*Redirect to rate service*/