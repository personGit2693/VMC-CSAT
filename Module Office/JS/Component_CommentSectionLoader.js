/*Import*/

/*Import*/


/*Component*/
function CommentSectionLoader(){

	const loaderGifPath = "../../src/Spinner.gif";

	let commentSectionLoader = `<div class="boxLoaderWrap_RoClass" id="commentSectionLoader-Id" style="display:flex">`+
		`<div class="boxLoaderIcon_RoClass">`+
			`<img src="`+loaderGifPath+`">`+
		`</div>`+
	`</div>`;

	return commentSectionLoader;
}
/*Component*/


/*Export*/
export default CommentSectionLoader;
/*Export*/