/*Import*/

/*Import*/


/*Component*/
async function PointOfEntryOptionLoader(){

	const requestPromise = new Promise(function(resolve){

		let pointOfEntryOptionLoader = `<div class="boxLoaderWrap_RoClass" id="pointOfEntryOptionLoader-Id" style="display:flex">
			<div class="boxLoaderIcon_RoClass"><img src="../../src/Spinner.gif"></div>
		</div>`;

		resolve(pointOfEntryOptionLoader);
	});

	return await requestPromise;
}
/*Component*/


/*Export*/
export default PointOfEntryOptionLoader;
/*Export*/