/*Import*/
import {reportsWrapper, topNavWrapFlexItem, dataOneTableWrap, dataTwoTableWrap} from "../../Global JS/JSCollection_Page_Reports.js";
/*Import*/


/*When user select from top navigation*/
function controllerTopNavigation(e, selTopNavWrapFlexItem){

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
		}
	}
	/*Highlight selected topNavWrapFlexItem*/	
}
/*When user select from top navigation*/


/*Declare global*/
window.controllerTopNavigation = controllerTopNavigation;
/*Declare global*/