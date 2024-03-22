/*Import*/
import {csmDataTableWrap, reportsWrapper, topNavWrapFlexItem, dataOneTableWrap, dataTwoTableWrap} from "./Elements_Page_CSATReports.js";
/*Import*/


/*Controller*/
function controller_Div_DisplaySelectedReportTable(e, selTopNavWrapFlexItem){

	/*Set hide all reportsWrapper*/
	for(let index=0; index < reportsWrapper.length; index++){

		reportsWrapper[index].style.display = "none";		
	}
	/*Set hide all reportsWrapper*/


	/*Highlight selected topNavWrapFlexItem*/
	for(let index=0; index < topNavWrapFlexItem.length; index++){
		
		topNavWrapFlexItem[index].classList.remove("activeTopNavWrapFlexItem-Class");		

		if(topNavWrapFlexItem[index] == selTopNavWrapFlexItem){

			selTopNavWrapFlexItem.classList.toggle("activeTopNavWrapFlexItem-Class");

			/*_Display data one*/
			if(selTopNavWrapFlexItem.classList.contains("dataOneNavigation-Class") == true){
				dataOneTableWrap.style.display = "block";
			}
			/*_Display data one*/

			/*_Display data two*/
			if(selTopNavWrapFlexItem.classList.contains("dataTwoNavigation-Class") == true){
				dataTwoTableWrap.style.display = "block";
			}
			/*_Display data two*/

			/*_Display csm data*/
			if(selTopNavWrapFlexItem.classList.contains("dataCmsNavigation-Class") == true){
				csmDataTableWrap.style.display = "block";
			}
			/*_Display csm data*/
		}
	}
	/*Highlight selected topNavWrapFlexItem*/	
}
/*Controller*/


/*Declare global*/
window.controller_Div_DisplaySelectedReportTable = controller_Div_DisplaySelectedReportTable;
/*Declare global*/


/*Export*/
export default controller_Div_DisplaySelectedReportTable;
/*Export*/