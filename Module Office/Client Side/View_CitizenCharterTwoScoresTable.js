/*Import*/
import {cc2TabWrap} from "./Elements_Page_RatingMonitoring.js";
import CitizenCharterTwoScoresTable from "./Component_CitizenCharterTwoScoresTable.js";
/*Import*/


/*Render*/
function viewCitizenCharterTwoScoresTable(){

	CitizenCharterTwoScoresTable().then(component => {
		if(component == ""){
			cc2TabWrap.innerHTML = "No CC2 Scores Result";
		}else{
			cc2TabWrap.innerHTML = component;
		}
	});
}
/*Render*/


/*Export*/
export default viewCitizenCharterTwoScoresTable;
/*Export*/