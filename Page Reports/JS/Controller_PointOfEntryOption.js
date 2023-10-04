/*When Point of Entry Option from search was selected*/
function controllerPointOfEntryOption(selectedPointOfEntryOpt, selectDropdownHeight){
	displaySelectedOpt(selectedPointOfEntryOpt, selectDropdownHeight);
	valueSelectedOfficeObj();

	showSpinningLoad();

	submitRequestDataOne();	

	submitRequestCcDataTwo();
	submitRequestQuestionsDataTwo();
	valueDataTwo();

	removeSpinningLoad();
}
/*When Point of Entry Option from search was selected*/