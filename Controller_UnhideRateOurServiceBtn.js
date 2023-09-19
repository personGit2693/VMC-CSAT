/*Show Rate Our Service Button and close enter code modal*/
async function showRateOurServiceBtn(){	

	const promiseShowRateOurServiceBtn = new Promise((showRateOurServiceBtn_Resolve) => {
		setTimeout(function(){
			/*Close modal enter code modal*/
			for(let index=0; index < modalme.length; index++){
				if(modalme[index].classList.contains("enterCodeModal-Class") === true){
					closeMyMod('modalme_RoClass', index);
				}	
			}
			/*Close modal enter code modal*/

			/*Show Rate Our Service Button*/
			rateOurServBtn.style.visibility = "visible";
			/*Show Rate Our Service Button*/

			showRateOurServiceBtn_Resolve();
		}, 2000);		
	});
	await promiseShowRateOurServiceBtn;
}
/*Show Rate Our Service Button and close enter code modal*/