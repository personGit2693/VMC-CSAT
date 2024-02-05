/*Import*/

/*Import*/


/*Component*/
function CommentDivLoader(){

	const loaderGifPath = "../../src/Spinner.gif";

	let commentDivLoader = `<div class="boxLoaderWrap_RoClass" id="commentDivLoader-Id" style="display:flex">`+
		`<div class="boxLoaderIcon_RoClass">`+
			`<img src="`+loaderGifPath+`">`+
		`</div>`+
	`</div>`;

	return commentDivLoader;
}
/*Component*/


/*Export*/
export default CommentDivLoader;
/*Export*/