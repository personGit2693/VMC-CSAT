/*When Point of Entry Option from search was selected*/
function controllerPointOfEntryOption(selectedPointOfEntryOpt, selectDropdownHeight){
	showSpinningLoad();
	
	displaySelectedOpt(selectedPointOfEntryOpt, selectDropdownHeight);
	valueSelectedOfficeObj();	

	submitRequestDataOne(outputDataOneTable);	

	submitRequestCcDataTwo();

	removeSpinningLoad();
}
/*When Point of Entry Option from search was selected*/