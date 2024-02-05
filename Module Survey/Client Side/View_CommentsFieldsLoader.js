/*Import*/
import {commentsWrap} from "./Elements_Page_RateServey.js";
import CommentsFieldsLoader from "./Component_CommentsFieldsLoader.js";
/*Import*/


/*Render*/
function viewCommentsFieldsLoader(){

	commentsWrap.innerHTML = CommentsFieldsLoader();
}
/*Render*/


/*Export*/
export default viewCommentsFieldsLoader;
/*Export*/