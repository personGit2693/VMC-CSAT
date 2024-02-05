/*Import*/
import {cc2TabWrap} from "./Elements_Page_RatingMonitoring.js";
import CitizenCharterTwoScoresTable from "./Component_CitizenCharterTwoScoresTable.js";
/*Import*/


/*Render*/
function viewCitizenCharterTwoScoresTable(){
	
	const citizenCharterTwoScoresTable_Handler = CitizenCharterTwoScoresTable();

	if(citizenCharterTwoScoresTable_Handler == ""){

		cc2TabWrap.innerHTML = "No CC2 Scores Result";

	}else if(citizenCharterTwoScoresTable_Handler != ""){

		cc2TabWrap.innerHTML = citizenCharterTwoScoresTable_Handler;
	}		
}
/*Render*/


/*Export*/
export default viewCitizenCharterTwoScoresTable;
/*Export*/