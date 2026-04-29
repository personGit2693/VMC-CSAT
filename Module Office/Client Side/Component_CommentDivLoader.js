/*Import*/

/*Import*/


/*Component*/
async function CommentDivLoader(){

	const requestPromise = new Promise(function(resolve){

		let commentDivLoader = `<div class="boxLoaderWrap_RoClass" id="commentDivLoader-Id" style="display:flex">
			<div class="boxLoaderIcon_RoClass"><img src="../../src/Spinner.gif"></div>
		</div>`;

		resolve(commentDivLoader);
	});

	return await requestPromise;
}
/*Component*/


/*Export*/
export default CommentDivLoader;
/*Export*/