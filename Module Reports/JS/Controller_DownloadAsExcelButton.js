/*Function for exporting table to excel*/
function controllerDownloadAsExcelButton(downloadAsExcelButton){
	const htmlTable = downloadAsExcelButton.nextElementSibling;

	const table2excel = new Table2Excel();
	table2excel.export(htmlTable);
}
/*Function for exporting table to excel*/