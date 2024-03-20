/*Import*/
import {submitAccountSession} from "./SubmitRequest_AccountSession.js";
import {accountDetails_Obj} from "./Request_GetIdentifier.js";
import {accToken} from "./Request_GenerateAccToken.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Controller*/
function controller_Document_AccountSession(showSpinningLoad, removeSpinningLoad){

	submitAccountSession(showSpinningLoad, removeSpinningLoad, accountDetails_Obj, accToken);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_AccountSession = controller_Document_AccountSession;
/*Declare Global*/


/*Export*/
export default controller_Document_AccountSession;
/*Export*/