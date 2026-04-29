/*Import*/
import {totalRespondent} from "./Request_TotalRespondent.js";
/*Import*/


/*Component*/
async function RespondentSpan(){

	const requestPromise = new Promise(function(resolve){

		let respondentSpan = "";

		if(isNaN(totalRespondent) === false){
			respondentSpan = `<span>${totalRespondent}</span>`;
		}

		resolve(respondentSpan);
	});

	return await requestPromise;
}
/*Component*/


/*Export*/
export default RespondentSpan;
/*Export*/