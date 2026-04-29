/*Import*/

/*Import*/


/*Component*/
async function RespondentSpanLoader(){

	const requestPromise = new Promise(function(resolve){

		let respondentSpanLoader = `<div class="boxLoaderWrap_RoClass" id="respondentSpanLoader-Id" style="display:flex">
			<div class="boxLoaderIcon_RoClass"><img src="../../src/Spinner.gif"></div>
		</div>`;

		resolve(respondentSpanLoader);
	});

	return await requestPromise;
}
/*Component*/


/*Export*/
export default RespondentSpanLoader;
/*Export*/