/*Import*/
import token from "../../Global JS/Token.js";
import {requestEncodeRespondentDetails, encodeRespondentDetailsResp_Obj} from "./Request_EncodeRespondentDetails.js";
/*import {requestEncodeAvailedOfficeServices, encodeAvailedOfficeServicesResp_Obj} from "./Request_EncodeAvailedOfficeServices.js";*/
import {requestEncodeCcRate, encodeCcRateResp_Obj} from "./Request_EncodeCcRate.js";
import {requestEncodeRespondentRatings, encodeRespondentRatingsResp_Obj} from "./Request_EncodeRespondentRatings.js";
import {requestEncodeComments, encodeCommentsResp_Obj} from "./Request_EncodeComments.js";
import {requestDeleteEncoded} from "./Request_DeleteEncoded.js";
/*Import*/

function requestEncodeRating(submitScoreBtn){
	submitScoreBtn.disabled = true;

	
	/*Encode Respondent Details*/
	requestEncodeRespondentDetails();

	if(Object.keys(encodeRespondentDetailsResp_Obj).length != 0 && ("execution" in encodeRespondentDetailsResp_Obj) == true){
		if(encodeRespondentDetailsResp_Obj.execution == false){
			requestDeleteEncoded();
			submitScoreBtn.disabled = false;
			return;
		}
	}else if(Object.keys(encodeRespondentDetailsResp_Obj).length == 0 || ("execution" in encodeRespondentDetailsResp_Obj) == false){
		requestDeleteEncoded();
		submitScoreBtn.disabled = false;
		return;		
	}
	/*Encode Respondent Details*/

	
	/*Encode Availed Services*/
	/*
	requestEncodeAvailedOfficeServices();

	if(Object.keys(encodeAvailedOfficeServicesResp_Obj).length != 0 && ("execution_Array" in encodeAvailedOfficeServicesResp_Obj) == true){
		if(encodeAvailedOfficeServicesResp_Obj.execution_Array.includes(false) == true){
			requestDeleteEncoded();
			submitScoreBtn.disabled = false;
			return;
		}
	}else if(Object.keys(encodeAvailedOfficeServicesResp_Obj).length == 0 || ("execution_Array" in encodeAvailedOfficeServicesResp_Obj) == false){
		requestDeleteEncoded();
		submitScoreBtn.disabled = false;
		return;
	}
	*/
	/*Encode Availed Services*/


	/*Encode Citizen Charter*/
	requestEncodeCcRate();

	if(Object.keys(encodeCcRateResp_Obj).length != 0 && ("execution_Array" in encodeCcRateResp_Obj) == true){
		if(encodeCcRateResp_Obj.execution_Array.includes(false) == true){
			requestDeleteEncoded();
			submitScoreBtn.disabled = false;
			return;
		}
	}else if(Object.keys(encodeCcRateResp_Obj).length == 0 || ("execution_Array" in encodeCcRateResp_Obj) == false){
		requestDeleteEncoded();
		submitScoreBtn.disabled = false;
		return;
	}
	/*Encode Citizen Charter*/


	/*Encode Respondent Ratings*/
	requestEncodeRespondentRatings();

	if(Object.keys(encodeRespondentRatingsResp_Obj).length != 0 && ("execution_Array" in encodeRespondentRatingsResp_Obj) == true){
		if(encodeRespondentRatingsResp_Obj.execution_Array.includes(false) == true){
			requestDeleteEncoded();
			submitScoreBtn.disabled = false;
			return;
		}
	}else if(Object.keys(encodeRespondentRatingsResp_Obj).length == 0 || ("execution_Array" in encodeRespondentRatingsResp_Obj) == false){
		requestDeleteEncoded();
		submitScoreBtn.disabled = false;
		return;
	}
	/*Encode Respondent Ratings*/


	/*Encode Comments*/
	requestEncodeComments();

	if(Object.keys(encodeCommentsResp_Obj).length != 0 && ("execution_Array" in encodeCommentsResp_Obj) == true){
		if(encodeCommentsResp_Obj.execution_Array.includes(false) == true){
			requestDeleteEncoded();
			submitScoreBtn.disabled = false;
			return;
		}
	}else if(Object.keys(encodeCommentsResp_Obj).length == 0 || ("execution_Array" in encodeCommentsResp_Obj) == false){
		requestDeleteEncoded();
		submitScoreBtn.disabled = false;
		return;
	}
	/*Encode Comments*/


	/*Redirect to success page*/
	window.location.href = "Page_SuccessRatingSubmit.php?token="+token;
	/*Redirect to success page*/
}

/*Export*/
export {requestEncodeRating};
/*Export*/