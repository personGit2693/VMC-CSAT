/*Show Rate Our Service Button*/
async function showRateOurServiceBtn(){	

	const promiseShowRateOurServiceBtn = new Promise((showRateOurServiceBtn_Resolve) => {
		setTimeout(function(){
			rateOurServBtn.visibility = "visible";
			showRateOurServiceBtn_Resolve();
		}, 3000);		
	});
	await promiseShowRateOurServiceBtn;
}
/*Show Rate Our Service Button*/