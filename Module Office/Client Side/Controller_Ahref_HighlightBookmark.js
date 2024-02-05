/*Import*/
import {bookmark} from "./Elements_Page_RatingMonitoring.js";
/*Import*/


/*Controller for highlighting ahref bookmark when selected*/
function controller_Ahref_HightlightBookmark(ahref_BookmarkSelected){

	if(ahref_BookmarkSelected != null){

		let divIconWrapper = ahref_BookmarkSelected.querySelector(".bookmarkIconWrap-Class");

		ahref_BookmarkSelected.classList.remove("subNavMenu_RoClass");
		ahref_BookmarkSelected.classList.remove("activeSubNavMenu_RoClass");
		divIconWrapper.classList.remove("subNavMenuIconWrap_RoClass");		
		divIconWrapper.classList.remove("activeSubNavMenuIconWrap_RoClass");

		ahref_BookmarkSelected.classList.add("activeSubNavMenu_RoClass");
		divIconWrapper.classList.add("activeSubNavMenuIconWrap_RoClass");


		for(let index=0; index < bookmark.length; index++){

			if(bookmark[index] != ahref_BookmarkSelected){

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
/*Controller for highlighting ahref bookmark when selected*/


/*Declare global*/
window.controller_Ahref_HightlightBookmark = controller_Ahref_HightlightBookmark;
/*Declare global*/


/*Export*/
export default controller_Ahref_HightlightBookmark;
/*Export*/