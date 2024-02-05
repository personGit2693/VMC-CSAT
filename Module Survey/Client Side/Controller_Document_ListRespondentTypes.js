/*Import*/
import {submitRespondentTypes} from "./SubmitRequest_RespondentTypes.js";
import outputRespondentTypesRadioBtn from "./Output_RespondentTypesRadioBtn.js";
import outputRespondentTypesRadioBtnLoader from "./Output_RespondentTypesRadioBtnLoader.js";
/*Import*/


/*Controller*/
function controller_Document_ListRespondentTypes(){


	submitRespondentTypes(outputRespondentTypesRadioBtn, outputRespondentTypesRadioBtnLoader, "respondentTypesRadioBtnLoader-Id");	
}
/*Controller*/


/*Declare Global*/
window.controller_Document_ListRespondentTypes = controller_Document_ListRespondentTypes;
/*Declare Global*/


/*Export*/
export default controller_Document_ListRespondentTypes;
/*Export*/