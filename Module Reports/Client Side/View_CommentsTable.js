/*Import*/
import {commentsTableWrap} from "./Elements_Page_CSATReports.js";
import CommentsTable from "./Component_CommentsTable.js";
/*Import*/


/*Render*/
function viewCommentsTable(){
	
	commentsTableWrap.innerHTML = CommentsTable();
}
/*Render*/


/*Export*/
export default viewCommentsTable;
/*Export*/