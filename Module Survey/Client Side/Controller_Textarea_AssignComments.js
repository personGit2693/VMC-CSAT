/*Import*/
import {valueComments} from "./Values_Survey.js";
/*Import*/


/*Controller*/
function controller_Textarea_AssignComments(textareaElem){

	valueComments(textareaElem);
}
/*Controller*/


/*Declare Global*/
window.controller_Textarea_AssignComments = controller_Textarea_AssignComments;
/*Declare Global*/


/*Export*/
export default controller_Textarea_AssignComments;
/*Export*/