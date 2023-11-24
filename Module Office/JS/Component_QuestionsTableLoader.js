/*Import*/

/*Import*/


/*Component*/
function QuestionsTableLoader(){

	const loaderGifPath = "../../src/Spinner.gif";

	let questionsTableLoader = `<div class="boxLoaderWrap_RoClass" id="questionsTableLoader-Id" style="display:flex">`+
		`<div class="boxLoaderIcon_RoClass">`+
			`<img src="`+loaderGifPath+`">`+
		`</div>`+
	`</div>`;

	return questionsTableLoader;
}
/*Component*/


/*Export*/
export default QuestionsTableLoader;
/*Export*/