/*When Point of Entry Option from search was selected*/
function controllerPointOfEntryOption(selectedPointOfEntryOpt, selectDropdownHeight){
	displaySelectedOpt(selectedPointOfEntryOpt, selectDropdownHeight);
	valueSelectedOfficeObj();

	submitRequestDataOne();	

	submitRequestCcDataTwo();
	valueDataTwo();
}
/*When Point of Entry Option from search was selected*/