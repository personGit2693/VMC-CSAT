/*Import*/

/*Import*/


/*Controller*/
function controller_Btn_Steps(stepDirectionValue){

	if(stepDirectionValue == "next"){

		nextStep("stepByStepItem-Class", "headerDynamicSubTxt-Id", "stepSets-Class");

	}else if(stepDirectionValue == "back"){
		
		backStep("stepByStepItem-Class", "headerDynamicSubTxt-Id", "stepSets-Class");
	}	
}
/*Controller*/


/*Declare Global*/
window.controller_Btn_Steps = controller_Btn_Steps;
/*Declare Global*/


/*Export*/
export default controller_Btn_Steps;
/*Export*/