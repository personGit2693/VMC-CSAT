/*Import*/

/*Import*/


/*Component*/
function Footer(){

	const newDate = new Date();

	let footer = "";

	footer = `<span class="footerTxt_RoClass">&copy; `+ newDate.getFullYear() +` Valenzuela Medical Center. All rights reserved.</span>`;


	return footer;
}
/*Component*/


/*Export*/
export default Footer;
/*Export*/