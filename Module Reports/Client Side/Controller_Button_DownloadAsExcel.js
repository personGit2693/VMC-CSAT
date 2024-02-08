/*Import*/

/*Import*/


/*Function for exporting table to excel*/
function controller_Button_DownloadAsExcel(downloadAsExcelButton){
	
	const htmlTable = downloadAsExcelButton.nextElementSibling;

	const table2excel = new Table2Excel();
	table2excel.export(htmlTable);
}
/*Function for exporting table to excel*/


/*Declare Global*/
window.controller_Button_DownloadAsExcel = controller_Button_DownloadAsExcel;
/*Declare Global*/


/*Export*/
export default controller_Button_DownloadAsExcel;
/*Export*/