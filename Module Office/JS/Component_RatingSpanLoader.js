/*Import*/

/*Import*/


/*Component*/
function RatingSpanLoader(){

	const loaderGifPath = "../../src/Spinner.gif";

	let ratingSpanLoader = `<div class="boxLoaderWrap_RoClass" id="ratingSpanLoader-Id" style="display:flex">`+
		`<div class="boxLoaderIcon_RoClass">`+
			`<img src="`+loaderGifPath+`">`+
		`</div>`+
	`</div>`;

	return ratingSpanLoader;
}
/*Component*/


/*Export*/
export default RatingSpanLoader;
/*Export*/