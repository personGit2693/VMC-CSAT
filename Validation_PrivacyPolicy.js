/*Enable/Disable Rate our service button*/
const switchRateOurServBtn = () =>{
	if(agreeTermsCheckbox.checked === false){
		rateOurServBtn.classList.add('disabledBtn-Class');
		rateOurServBtn.disabled = true;
		proceedToRateServ = false;
	}else if(agreeTermsCheckbox.checked === true){
		rateOurServBtn.classList.remove('disabledBtn-Class');
		rateOurServBtn.disabled = false;
		proceedToRateServ = true;
	}
}

switchRateOurServBtn();
/*Enable/Disable Rate our service button*/