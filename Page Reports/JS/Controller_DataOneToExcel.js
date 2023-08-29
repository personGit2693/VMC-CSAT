/*Function for exporting data one table to excel*/
function exportDataOneToExcel(dataOneExportBtn){
	const dataOneTable = dataOneExportBtn.nextElementSibling;

	const table2excel = new Table2Excel();
	table2excel.export(dataOneTable);
}
/*Function for exporting data one table to excel*/