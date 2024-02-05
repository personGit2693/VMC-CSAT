/*Import*/
import {freqVisitDetails_Array} from "./Request_FreqVisits.js";
/*Import*/


/*Component*/
function FreqVisitsRadioBtn(){

	let elemValue = "";

	const elemImgSrc = "../../src/green check.png";

	let freqVisitsRadioBtn = "";

	for(let index=0; index < freqVisitDetails_Array.length; index++){
		elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(freqVisitDetails_Array[index]))));

		freqVisitsRadioBtn += `<div class="radioCheckFlex_RoClass">`+
			`<label for="`+elemValue+`" class="customRadioCheck_RoClass"><img src="`+elemImgSrc+`"></label>`+
			`<input type="radio" id="`+elemValue+`" name="freqVisit-Name" value="`+elemValue+`" data-rogridradio-check="false" onclick="radioCheckSelected(this), controller_RadioBtn_AssignFreqVisitValue(this.value, this)" autocomplete="off"/>`+
			`<div class="radioCheckTxtLabel_RoClass"><label for="`+elemValue+`" style="cursor:pointer">`+freqVisitDetails_Array[index].visityear_value+`</label></div>`+
		`</div>`;
	}

	return freqVisitsRadioBtn;
}
/*Component*/


/*Export*/
export default FreqVisitsRadioBtn;
/*Export*/