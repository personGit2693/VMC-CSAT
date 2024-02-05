/*Import*/
import {cc1TabWrap} from "./Elements_Page_RatingMonitoring.js";
import CitizenCharterOneScoresTable from "./Component_CitizenCharterOneScoresTable.js";
/*Import*/


/*Render*/
function viewCitizenCharterOneScoresTable(){
	
	const citizenCharterOneScoresTable_Handler = CitizenCharterOneScoresTable();

	if(citizenCharterOneScoresTable_Handler == ""){

		cc1TabWrap.innerHTML = "No CC1 Scores Result";

	}else if(citizenCharterOneScoresTable_Handler != ""){

		cc1TabWrap.innerHTML = citizenCharterOneScoresTable_Handler;
	}		
}
/*Render*/


/*Export*/
export default viewCitizenCharterOneScoresTable;
/*Export*/