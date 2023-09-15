/*Hide Rate our service button*/
rateOurServBtn.style.visibility = "hidden";

/*Show modal enter code modal*/
for(let index=0; index < modalme.length; index++){
	if(modalme[index].classList.contains("enterCodeModal-Class") === true){
		showMyMod('modalme_RoClass', index);
	}	
}
/*Show modal enter code modal*/