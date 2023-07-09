/*Import*/
import {religionDetails_Array} from "./Request_Religions.js";
/*Import*/


/*Component*/
function ReligionDropdownMenu(){
	let elemValue = "";

	let religionDropdownMenu = "";

	for(let index=0; index < religionDetails_Array.length; index++){
		elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(religionDetails_Array[index]))));

		religionDropdownMenu += `<label class="scdropOption_RoClass" for="`+elemValue+`">`+
			`<input type="radio" class="scdropOptionRadio_RoClass" name="religion-Name" value="`+elemValue+`" id="`+elemValue+`" onchange="valueReligion(this.value)" />`+
			`<label for="`+elemValue+`">`+religionDetails_Array[index].religion_name+`</label>`+			
		`</label>`;
	}

	return religionDropdownMenu;
}	
/*Component*/


/*Export*/
export default ReligionDropdownMenu;
/*Export*/