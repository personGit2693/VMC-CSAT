/*Import*/
import {religionDetails_Array} from "./Request_Religions.js";
/*Import*/


/*Component*/
function ReligionDropdownMenu(){
	let elemValue = "";

	let religionDropdownMenu = "";

	for(let index=0; index < religionDetails_Array.length; index++){
		elemValue = btoa(unescape(encodeURIComponent(JSON.stringify(religionDetails_Array[index]))));

		religionDropdownMenu += `<div class="scdropOption_RoClass">`+
			`<input type="radio" name="religion-Name" value="`+elemValue+`" id="`+elemValue+`" />`+
			`<label for="`+elemValue+`">`+religionDetails_Array[index].religion_name+`</label>`+			
		`</div>`;
	}

	return religionDropdownMenu;
}
/*Component*/


/*Export*/
export default ReligionDropdownMenu;
/*Export*/