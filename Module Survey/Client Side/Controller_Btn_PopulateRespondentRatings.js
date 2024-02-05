/*Import*/
import {popRespondentRatings} from "./Values_Survey.js";
import {questionDetails_Array} from "./Request_Questions.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Controller*/
function controller_Btn_PopulateRespondentRatings(){

	let defaultRespondentRatings_Array = [];

	for(let index=0; questionDetails_Array.length > index; index++){

		const defaultRatingDetails_Obj = {
			questionDetails_Obj: questionDetails_Array[index], 
			score_id: 6
		}

		defaultRespondentRatings_Array.push(defaultRatingDetails_Obj);
	}


	popRespondentRatings(defaultRespondentRatings_Array);
}
/*Controller*/


/*Declare Global*/
window.controller_Btn_PopulateRespondentRatings = controller_Btn_PopulateRespondentRatings;
/*Declare Global*/


/*Export*/
export default controller_Btn_PopulateRespondentRatings;
/*Export*/