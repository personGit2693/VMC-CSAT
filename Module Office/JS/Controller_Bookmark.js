/*Import*/
import {bookmark} from "../../Global JS/JSCollection_Module_Office.js";
/*Import*/


/*Function for highlighting the selected bookmark*/
function controllerBookmark(bookmarkSelected){

	if(bookmarkSelected != null){

		let divIconWrapper = bookmarkSelected.querySelector(".bookmarkIconWrap-Class");

		bookmarkSelected.classList.remove("subNavMenu_RoClass");
		bookmarkSelected.classList.remove("activeSubNavMenu_RoClass");
		divIconWrapper.classList.remove("subNavMenuIconWrap_RoClass");		
		divIconWrapper.classList.remove("activeSubNavMenuIconWrap_RoClass");

		bookmarkSelected.classList.add("activeSubNavMenu_RoClass");
		divIconWrapper.classList.add("activeSubNavMenuIconWrap_RoClass");


		for(let index=0; index < bookmark.length; index++){

			if(bookmark[index] != bookmarkSelected){

				bookmark[index].classList.remove("subNavMenu_RoClass");
				bookmark[index].classList.remove("activeSubNavMenu_RoClass");

				bookmark[index].classList.add("subNavMenu_RoClass");


				bookmark[index].querySelector(".bookmarkIconWrap-Class").classList.remove("subNavMenuIconWrap_RoClass");
				bookmark[index].querySelector(".bookmarkIconWrap-Class").classList.remove("activeSubNavMenuIconWrap_RoClass");

				bookmark[index].querySelector(".bookmarkIconWrap-Class").classList.add("subNavMenuIconWrap_RoClass");
			}
		}			
	}	
}
/*Function for highlighting the selected bookmark*/


/*Declare global*/
window.controllerBookmark = controllerBookmark;
/*Declare global*/