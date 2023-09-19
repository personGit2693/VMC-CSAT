/*Import*/
import {respondentId, officeId} from "../../Global JS/Values_Page_RateService.js";
import {questionDetails_Array} from "./Request_Questions.js";
import {scoreDetails_Array} from "./Request_Scores.js";
/*Import*/


/*Components*/
function QuestionScoreRadioBtn(){
	let elemValue = "";
	let elemForId = "";
	let elemName = "";
	const logoPath = "../../src/";
	const elemImgSrc = "../../src/green check.png";	
	let stepSetPerFieldGroup_Culture = false;

	let questionScoreRadioBtn = "";
	for(let index=0; index < questionDetails_Array.length; index++){
		const questionResponseRate_Obj = {};
		questionResponseRate_Obj.questionId = questionDetails_Array[index].question_id;
		questionResponseRate_Obj.questionGroupId = questionDetails_Array[index].questionsgroup_id;

		elemName = btoa(unescape(encodeURIComponent(JSON.stringify(questionDetails_Array[index]))));

		if(questionDetails_Array[index].questionsgroup_id == 3 && stepSetPerFieldGroup_Culture == false){
			stepSetPerFieldGroup_Culture = true;

			questionScoreRadioBtn += `<div class="stepSetPerFieldGroup-Class">`+questionDetails_Array[index].questionsgroup_desc+`</div>`;			
		}

		questionScoreRadioBtn += `<div class="stepSetPerFieldWrap">`;
			if(questionDetails_Array[index].questionsgroup_value != ""){
				questionScoreRadioBtn += `<div class="stepSetPerFieldTitle-Class">`+questionDetails_Array[index].question_value+` (`+questionDetails_Array[index].questionsgroup_value+`)</div>`;
			}else if(questionDetails_Array[index].questionsgroup_value == ""){
				questionScoreRadioBtn += `<div class="stepSetPerFieldTitle-Class">`+questionDetails_Array[index].question_value+`</div>`;
			}
			questionScoreRadioBtn += `<div class="stepSetPerFieldFlex">`;
		
		for(let scoresIndex=0; scoresIndex < scoreDetails_Array.length; scoresIndex++){
			questionResponseRate_Obj.scoreId = "";
			questionResponseRate_Obj.scoreId = scoreDetails_Array[scoresIndex].score_id;

			elemForId = elemName + btoa(unescape(encodeURIComponent(JSON.stringify(scoreDetails_Array[scoresIndex]))));

			elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(questionResponseRate_Obj))));

			questionScoreRadioBtn += `<div class="radioCheckFlex_RoClass">`+
				`<label for="`+elemForId+`" class="customRadioCheck_RoClass"><img src="`+elemImgSrc+`"></label>`+
				`<input type="radio" id="`+elemForId+`" name="`+elemName+`" value="`+elemValue+`" onchange="radioCheckSelected(this), valueRespondentRatings(this.value, this)" autocomplete="off">`+
				`<label class="radioCheckIconLabel_RoClass" for="`+elemForId+`" style="cursor: pointer;"><img src="`+logoPath+scoreDetails_Array[scoresIndex].score_logo+`"></label>`+
			`</div>`;
		}

		questionScoreRadioBtn += `</div></div>`;
	}

	if(questionScoreRadioBtn == ""){
		if(respondentId == "" && officeId == ""){
			questionScoreRadioBtn = "Select Respondent and Point of Entry.";	
		}else if(respondentId == ""){
			questionScoreRadioBtn = "Select Respondent.";	
		}else if(officeId == ""){
			questionScoreRadioBtn = "Select Point of Entry.";
		}else if(respondentId != "" && officeId != ""){
			questionScoreRadioBtn = "No set if questions found to select!";
		}		
	}

	return questionScoreRadioBtn;
}
/*Components*/


/*Export*/
export default QuestionScoreRadioBtn;
/*Export*/