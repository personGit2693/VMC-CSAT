/*Import*/
import {bookmark} from "../../Global JS/JSCollection_Page_Dashboard.js";
/*Import*/


/*Function for highlighting the selected bookmark*/
function controllerBookmark(bookmarkSelected){

	if(bookmarkSelected != null){

		let divIconWrapper = bookmarkSelected.querySelector(".mainNavIconSize-Class");

		bookmarkSelected.classList.remove("activeMainNavMenu_RoClass");
		divIconWrapper.classList.remove("activeMainNavMenuIconWrap_RoClass");
		bookmarkSelected.classList.remove("mainNavMenu_RoClass");
		divIconWrapper.classList.remove("mainNavMenuIconWrap_RoClass");

		bookmarkSelected.classList.add("activeMainNavMenu_RoClass");
		divIconWrapper.classList.add("activeMainNavMenuIconWrap_RoClass");


		for(let index=0; index < bookmark.length; index++){

			if(bookmark[index] != bookmarkSelected){

				bookmark[index].classList.remove("activeMainNavMenu_RoClass");
				bookmark[index].classList.remove("mainNavMenu_RoClass");

				bookmark[index].classList.add("mainNavMenu_RoClass");


				bookmark[index].querySelector(".mainNavIconSize-Class").classList.remove("activeMainNavMenuIconWrap_RoClass");
				bookmark[index].querySelector(".mainNavIconSize-Class").classList.remove("mainNavMenuIconWrap_RoClass");

				bookmark[index].querySelector(".mainNavIconSize-Class").classList.add("mainNavMenuIconWrap_RoClass");
			}
		}			
	}	
}
/*Function for highlighting the selected bookmark*/


/*Declare global*/
window.controllerBookmark = controllerBookmark;
/*Declare global*/