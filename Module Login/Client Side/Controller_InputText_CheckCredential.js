/*Import*/
import controller_Btn_Login from "./Controller_Btn_Login.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Controller*/
function controller_InputText_CheckCredential(e){

	if(e.key === "Enter"){

		controller_Btn_Login();
	}
}
/*Controller*/


/*Declare Global*/
window.controller_InputText_CheckCredential = controller_InputText_CheckCredential
/*Declare Global*/


/*Export*/
export default controller_InputText_CheckCredential;
/*Export*/