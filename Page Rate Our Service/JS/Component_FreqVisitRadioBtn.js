/*Import*/
import {freqVisitDetails_Array} from "./Request_FreqVisits.js";
/*Import*/


/*Component*/
function FreqVisitRadioBtn(){
	let elemValue = "";
	const elemImgSrc = "../../src/green check.png";

	let freqVisitRadioBtn = "";
	for(let index=0; index < freqVisitDetails_Array.length; index++){
		elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(freqVisitDetails_Array[index]))));

		freqVisitRadioBtn += `<div class="radioCheckFlex_RoClass">`+
			`<label for="`+elemValue+`" class="customRadioCheck_RoClass"><img src="`+elemImgSrc+`"></label>`+
			`<input type="radio" id="`+elemValue+`" name="freqVisit-Name" value="`+elemValue+`" onchange="radioCheckSelected(this), valueFreqVisit(this.value)" autocomplete="off"/>`+
			`<div class="radioCheckTxtLabel_RoClass">`+freqVisitDetails_Array[index].visityear_value+`</div>`+
		`</div>`;
	}

	if(freqVisitRadioBtn == ""){
		freqVisitRadioBtn = "No Year-Range to select!";
	}

	return freqVisitRadioBtn;
}
/*Component*/


/*Export*/
export default FreqVisitRadioBtn;
/*Export*/