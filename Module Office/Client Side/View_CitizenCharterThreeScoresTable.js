/*Import*/
import {cc3TabWrap} from "./Elements_Page_RatingMonitoring.js";
import CitizenCharterThreeScoresTable from "./Component_CitizenCharterThreeScoresTable.js";
/*Import*/


/*Render*/
function viewCitizenCharterThreeScoresTable(){

	CitizenCharterThreeScoresTable().then(component => {
		if(component == ""){
			cc3TabWrap.innerHTML = "No CC3 Scores Result";
		}else{
			cc3TabWrap.innerHTML = component;
		}
	});
}
/*Render*/


/*Export*/
export default viewCitizenCharterThreeScoresTable;
/*Export*/