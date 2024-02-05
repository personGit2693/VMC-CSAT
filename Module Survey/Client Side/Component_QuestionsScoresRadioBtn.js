/*Import*/
import {questionDetails_Array} from "./Request_Questions.js";
import {scoreDetails_Array} from "./Request_Scores.js";
/*Import*/


/*Component*/
function QuestionsScoresRadioBtn(){

	const logoPath = "../../src/";

	const elemImgSrc = "../../src/green check.png";

	let questionsScoresRadioBtn = "";


	for(let indexOne=0; questionDetails_Array.length > indexOne; indexOne++){

		/*Dont the question if the question's hide_question_id is not equal to 0*/
		if(questionDetails_Array[indexOne].hide_question_id != 0){
			
			continue;
		}
		/*Dont the question if the question's hide_question_id is not equal to 0*/


		/*Input radio name attribute value*/
		const radioBtnName = btoa(unescape(encodeURIComponent(JSON.stringify(questionDetails_Array[indexOne]))));
		/*Input radio name attribute value*/


		/*Draw HTML*/
		questionsScoresRadioBtn += `<div class="stepSetPerFieldWrap">`;
		if(questionDetails_Array[indexOne].questionsgroup_value != ""){
			
			questionsScoresRadioBtn += `<div class="stepSetPerFieldTitle-Class">`+questionDetails_Array[indexOne].question_value+` (`+questionDetails_Array[indexOne].questionsgroup_value+`)</div>`;

		}else if(questionDetails_Array[indexOne].questionsgroup_value == ""){
				
			questionsScoresRadioBtn += `<div class="stepSetPerFieldTitle-Class">`+questionDetails_Array[indexOne].question_value+`</div>`;
		}
			questionsScoresRadioBtn += `<div class="stepSetPerFieldFlex">`;
		/*Draw HTML*/


		for(let indexTwo=0; scoreDetails_Array.length > indexTwo; indexTwo++){

			/*Input radio id and value attribute values*/
			const radioBtnId = radioBtnName + btoa(unescape(encodeURIComponent(JSON.stringify(scoreDetails_Array[indexTwo]))));

			const radioBtnValue_Obj = {
				questionDetails_Obj: questionDetails_Array[indexOne], 
				score_id: scoreDetails_Array[indexTwo].score_id
			}			

			const radioBtnValue = btoa(unescape(encodeURIComponent(JSON.stringify(radioBtnValue_Obj))));
			/*Input radio id and value attribute values*/
			

			/*Draw HTML*/
			questionsScoresRadioBtn += `<div class="radioCheckFlex_RoClass">`+
				`<label for="`+radioBtnId+`" class="customRadioCheck_RoClass"><img src="`+elemImgSrc+`"></label>`+
				`<input type="radio" id="`+radioBtnId+`" name="`+radioBtnName+`" value="`+radioBtnValue+`" data-rogridradio-check="false" onclick="radioCheckSelected(this), controller_RadioBtn_AssignRespondentRatingsValue(this.value, this), controller_RadioBtn_AssignSelectedQuestionsGroupsValue(this.value, this)" autocomplete="off">`+
				`<label class="radioCheckIconLabel_RoClass" for="`+radioBtnId+`" style="cursor: pointer;"><img src="`+logoPath+scoreDetails_Array[indexTwo].score_logo+`"></label>`+
			`</div>`;
			/*Draw HTML*/
		}


		questionsScoresRadioBtn += `</div></div>`;		
	}

	return questionsScoresRadioBtn;
}
/*Component*/


/*Export*/
export default QuestionsScoresRadioBtn;
/*Export*/