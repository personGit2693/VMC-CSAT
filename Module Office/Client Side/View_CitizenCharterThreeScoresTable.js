/*Import*/
import {cc3TabWrap} from "./Elements_Page_RatingMonitoring.js";
import CitizenCharterThreeScoresTable from "./Component_CitizenCharterThreeScoresTable.js";
/*Import*/


/*Render*/
function viewCitizenCharterThreeScoresTable(){
	
	const citizenCharterThreeScoresTable_Handler = CitizenCharterThreeScoresTable();

	if(citizenCharterThreeScoresTable_Handler == ""){

		cc3TabWrap.innerHTML = "No CC3 Scores Result";

	}else if(citizenCharterThreeScoresTable_Handler != ""){

		cc3TabWrap.innerHTML = citizenCharterThreeScoresTable_Handler;
	}		
}
/*Render*/


/*Export*/
export default viewCitizenCharterThreeScoresTable;
/*Export*/