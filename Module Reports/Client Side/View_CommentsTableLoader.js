/*Import*/
import {commentsTableWrap} from "./Elements_Page_CSATReports.js";
import CommentsTableLoader from "./Component_CommentsTableLoader.js";
/*Import*/


/*Render*/
function viewCommentsTableLoader(){
	
	commentsTableWrap.innerHTML = CommentsTableLoader();
}
/*Render*/


/*Export*/
export default viewCommentsTableLoader;
/*Export*/