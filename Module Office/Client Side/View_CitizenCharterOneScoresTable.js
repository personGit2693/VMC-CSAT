/*Import*/
import {cc1TabWrap} from "./Elements_Page_RatingMonitoring.js";
import CitizenCharterOneScoresTable from "./Component_CitizenCharterOneScoresTable.js";
/*Import*/


/*Render*/
function viewCitizenCharterOneScoresTable(){

	CitizenCharterOneScoresTable().then(component => {
		if(component == ""){
			cc1TabWrap.innerHTML = "No CC1 Scores Result";
		}else{
			cc1TabWrap.innerHTML = component;
		}
	});
}
/*Render*/


/*Export*/
export default viewCitizenCharterOneScoresTable;
/*Export*/