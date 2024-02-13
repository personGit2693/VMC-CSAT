/*Import*/
import {footerWrap} from "./Elements_Page_Login.js";
import Footer from "./Component_Footer.js";
/*Import*/


/*Render*/
function viewFooter(){
	
	footerWrap.innerHTML = Footer();	
}
/*Render*/


/*Export*/
export default viewFooter;
/*Export*/