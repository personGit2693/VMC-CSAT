/*Import*/
import {respondentVal} from "./Elements_Page_RatingMonitoring.js";
import RespondentSpanLoader from "./Component_RespondentSpanLoader.js";
/*Import*/


/*Render*/
function viewRespondentSpanLoader(){

	RespondentSpanLoader().then(component => {
		respondentVal.innerHTML = component;
	});
}
/*Render*/


/*Export*/
export default viewRespondentSpanLoader;
/*Export*/