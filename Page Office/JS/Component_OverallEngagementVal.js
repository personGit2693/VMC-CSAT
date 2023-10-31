/*Import*/
import {overallEngagement} from "./Request_OverallEngagement.js";
/*Import*/


/*Component*/
function OverallEngagementVal(){

	let overallEngagementVal = "";
	

	if(isNaN(overallEngagement) === false){
		overallEngagementVal = `<span>`+overallEngagement+`</span>`;
	}	


	if(overallEngagementVal == ""){
		overallEngagementVal = "No Result";
	}

	return overallEngagementVal;
}
/*Component*/


/*Export*/
export default OverallEngagementVal;
/*Export*/