/*Import*/

/*Import*/


/*Component*/
function CommentsTableLoader(){

	const loaderGifPath = "../../src/Spinner.gif";

	let commentsTableLoader = `<div class="boxLoaderWrap_RoClass" id="commentsTableLoader-Id" style="display:flex">`+
		`<div class="boxLoaderIcon_RoClass">`+
			`<img src="`+loaderGifPath+`">`+
		`</div>`+
	`</div>`;

	return commentsTableLoader;
}
/*Component*/


/*Export*/
export default CommentsTableLoader;
/*Export*/