/*Import*/
import {officeServiceRadioBtnsWrap} from "./Elements_Page_RateServey.js";
import OfficeServicesRadioBtn from "./Component_OfficeServicesRadioBtn.js";
/*Import*/


/*Render*/
function viewOfficeServicesRadioBtn(){

	if(OfficeServicesRadioBtn() == ""){

		officeServiceRadioBtnsWrap.innerHTML = "Select Respondent and Service-Type.";

	}else{
		
		officeServiceRadioBtnsWrap.innerHTML = OfficeServicesRadioBtn();
	}	
}
/*Render*/


/*Export*/
export default viewOfficeServicesRadioBtn;
/*Export*/