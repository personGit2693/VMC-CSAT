/*Import*/
import {searchReligion} from "./Values_Survey.js";
import {submitReligions} from "./SubmitRequest_Religions.js";
import outputReligionOptions from "./Output_ReligionOptions.js";
import outputReligionOptionsLoader from "./Output_ReligionOptionsLoader.js";
/*Import*/


/*Controller*/
function controller_Document_PopulateReligionsDropdown(){

	submitReligions(outputReligionOptions, outputReligionOptionsLoader, "religionOptionsLoader-Id", searchReligion);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_PopulateReligionsDropdown = controller_Document_PopulateReligionsDropdown;
/*Declare Global*/


/*Export*/
export default controller_Document_PopulateReligionsDropdown;
/*Export*/