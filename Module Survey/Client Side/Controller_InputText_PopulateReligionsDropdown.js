/*Import*/
import {searchReligion} from "./Values_Survey.js";
import {submitReligions} from "./SubmitRequest_Religions.js";
import outputReligionOptions from "./Output_ReligionOptions.js";
import outputReligionOptionsLoader from "./Output_ReligionOptionsLoader.js";
/*Import*/


/*Controller*/
function controller_InputText_PopulateReligionsDropdown(){

	submitReligions(outputReligionOptions, outputReligionOptionsLoader, "religionOptionsLoader-Id", searchReligion);
}
/*Controller*/


/*Declare Global*/
window.controller_InputText_PopulateReligionsDropdown = controller_InputText_PopulateReligionsDropdown;
/*Declare Global*/


/*Export*/
export default controller_InputText_PopulateReligionsDropdown;
/*Export*/