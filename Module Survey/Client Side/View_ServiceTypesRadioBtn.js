/*Import*/
import {serviceTypeRadioBtnsWrap} from "./Elements_Page_RateServey.js";
import ServiceTypesRadioBtn from "./Component_ServiceTypesRadioBtn.js";
/*Import*/


/*Render*/
function viewServiceTypesRadioBtn(){
	
	if(ServiceTypesRadioBtn() == ""){
		
		serviceTypeRadioBtnsWrap.innerHTML = "Select Respondent Type";
	}else{
		
		serviceTypeRadioBtnsWrap.innerHTML = ServiceTypesRadioBtn();
	}	
}
/*Render*/


/*Export*/
export default viewServiceTypesRadioBtn;
/*Export*/